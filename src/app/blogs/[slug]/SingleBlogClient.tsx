"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Container from "../../components/Container";
import Image from "next/image";
import styles from "./page.module.css";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
  link: string;
  categories: number[];
  meta?: {
    _reading_time?: string;
    footnotes?: string;
  };
}

interface TableOfContentItem {
  id: string;
  text: string;
  level: number;
}

const API_URL = "https://startupsadvisory.ai/wordpress-blog/wp-json/wp/v2/posts";

// Helper function to strip HTML tags
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ");
};

// Helper function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Helper function to format reading time from API
const formatReadingTime = (readingTime: string | undefined): string => {
  if (!readingTime || readingTime.trim() === "") return "";
  return readingTime;
};

// Extract headings from HTML content for TOC
const extractHeadings = (html: string): TableOfContentItem[] => {
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
  const headings: TableOfContentItem[] = [];
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = stripHtml(match[2]).trim();
    if (text) {
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      headings.push({ id, text, level });
    }
  }

  return headings;
};

// Add IDs to all headings in HTML content
const addHeadingIds = (html: string, headings: TableOfContentItem[]): string => {
  let modifiedHtml = html;
  const headingMap = new Map<string, string>();
  
  // Create a map of text to ID for quick lookup
  headings.forEach((heading) => {
    headingMap.set(heading.text.toLowerCase().trim(), heading.id);
  });

  // Replace all headings with IDs - improved regex
  const headingRegex = /<h([1-6])([^>]*?)>([\s\S]*?)<\/h[1-6]>/gi;
  
  modifiedHtml = modifiedHtml.replace(headingRegex, (match, level, attributes, content) => {
    const text = stripHtml(content).trim();
    const id = headingMap.get(text.toLowerCase());
    
    if (id) {
      // Remove existing id if present
      const cleanAttributes = attributes.replace(/id="[^"]*"/gi, '').trim();
      // Add space before attributes if needed
      const attrString = cleanAttributes ? ` ${cleanAttributes}` : '';
      return `<h${level}${attrString} id="${id}" class="blog-heading">${content}</h${level}>`;
    }
    
    return match;
  });

  return modifiedHtml;
};

export default function SingleBlogClient() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState<TableOfContentItem[]>([]);
  const [processedContent, setProcessedContent] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(
          `${API_URL}?slug=${slug}&_embed=wp:featuredmedia&_=${timestamp}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }

        const data: WordPressPost[] = await response.json();

        if (!data || data.length === 0) {
          setPost(null);
          return;
        }

        const postData = data[0];
        setPost(postData);

        // Extract headings and process content
        const extractedHeadings = extractHeadings(postData.content.rendered);
        setHeadings(extractedHeadings);

        const contentWithIds = addHeadingIds(
          postData.content.rendered,
          extractedHeadings
        );
        setProcessedContent(contentWithIds);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Handle hash navigation on mount and content load
  useEffect(() => {
    if (processedContent && typeof window !== 'undefined') {
      // Check if there's a hash in URL
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 150;
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementTop - offset,
              behavior: 'smooth',
            });
          }
        }, 300);
      }
    }
  }, [processedContent]);

  // Scroll to heading when TOC item is clicked
  const scrollToHeading = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    // Update URL hash
    window.history.pushState(null, '', `#${id}`);
    
    // Wait for DOM update
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 150;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementTop - offset;

        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  if (loading) {
    return (
      <section className={`sectionPadding ${styles.blogSection}`}>
        <Container maxWidth="xl">
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
          </div>
        </Container>
      </section>
    );
  }

  if (!post) {
    notFound();
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  return (
    <section className={`sectionPadding ${styles.blogSection}`}>
      <Container maxWidth="xl">
        <div className={styles.blogContainer}>
          {/* Left Sidebar - Table of Contents */}
          <aside className={styles.sidebar}>
            <div className={styles.tocContainer}>
              <h3 className={styles.tocTitle}>Table of Contents</h3>
              {headings.length > 0 ? (
                <nav className={styles.tocNav}>
                  <ul className={styles.tocList}>
                    {headings.map((heading, index) => (
                      <li
                        key={index}
                        className={`${styles.tocItem} ${styles[`level${heading.level}`]}`}
                      >
                        <button
                          onClick={() => scrollToHeading(heading.id)}
                          className={styles.tocLink}
                        >
                          {heading.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : (
                <p className={styles.noToc}>No headings available</p>
              )}
            </div>
          </aside>

          {/* Right Content Area */}
          <article className={styles.contentArea}>
            {/* Title */}
            <h1 className={styles.blogTitle}>
              {stripHtml(post.title.rendered)}
            </h1>

            {/* Date and Meta */}
            <div className={styles.blogMeta}>
              <span className={styles.metadataItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.metaIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{formatDate(post.date)}</span>
              </span>
              {(() => {
                const readingTime = post.meta?._reading_time || (post as any)._reading_time;
                const formatted = formatReadingTime(readingTime);
                return formatted ? (
                  <>
                    <span>•</span>
                    <span className={styles.metadataItem}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.metaIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{formatted}</span>
                    </span>
                  </>
                ) : null;
              })()}
            </div>

            {/* Featured Image */}
            {featuredImage && (
              <div className={styles.featuredImageContainer}>
                <Image
                  src={featuredImage}
                  alt={stripHtml(post.title.rendered)}
                  width={1200}
                  height={600}
                  className={styles.featuredImage}
                  priority
                />
              </div>
            )}

            {/* Blog Content */}
            <div
              className={styles.blogContent}
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </article>
        </div>
      </Container>
    </section>
  );
}
