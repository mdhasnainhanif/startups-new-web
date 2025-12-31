"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Container from "../../components/Container";
import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface FAQItem {
  question: string;
  answer: string;
}

interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: { "wp:featuredmedia"?: { source_url: string }[] };
  meta?: { _reading_time?: string; _faqs_data?: FAQItem[] };
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const API_URL = "https://startupsadvisory.ai/wordpress-blog/wp-json/wp/v2/posts";

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ");

const formatReadingTime = (readingTime?: string) =>
  readingTime?.trim() ? readingTime : "";

const extractHeadings = (html: string): TOCItem[] => {
  const regex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
  const headings: TOCItem[] = [];
  let match;
  while ((match = regex.exec(html))) {
    const level = parseInt(match[1]);
    const text = stripHtml(match[2]).trim();
    if (text) headings.push({ id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-"), text, level });
  }
  return headings;
};

const addHeadingIds = (html: string, headings: TOCItem[]) => {
  let modified = html;
  headings.forEach((h) => {
    const regex = new RegExp(`<h${h.level}([^>]*)>${h.text}</h${h.level}>`, "i");
    modified = modified.replace(
      regex,
      `<h${h.level}$1 id="${h.id}" class="blog-heading">${h.text}</h${h.level}>`
    );
  });
  return modified;
};

export default function SingleBlogClient() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [content, setContent] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_URL}?slug=${slug}&_embed=wp:featuredmedia`, { cache: "no-store" });
        const data: WordPressPost[] = await res.json();
        if (!data?.length) return setPost(null);
        const p = data[0];
        let h = extractHeadings(p.content.rendered);
        if (p.meta?._faqs_data?.length) h.push({ id: "faqs", text: "FAQs", level: 2 });
        setHeadings(h);
        setContent(addHeadingIds(p.content.rendered, h));
        setPost(p);
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return null;
  if (!post) notFound();

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  // Helper function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};


  return (
    <section className={`sectionPadding ${styles.blogSection}`}>
      <Container maxWidth="xl">
        <div className={styles.blogContainer}>
          {/* TOC */}
          <aside className={styles.sidebar}>
            <div className={styles.tocContainer}>
              <h3 className={styles.tocTitle}>Table of Contents</h3>
              <ul className={styles.tocList}>
                {headings.map((h) => (
                  <li key={h.id} className={`${styles.tocItem} ${styles[`level${h.level}`]}`}>
                    <a href={`#${h.id}`} className={styles.tocLink}>
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* CONTENT */}
          <article className={styles.contentArea}>
            <h1 className={styles.blogTitle}>{stripHtml(post.title.rendered)}</h1>

            {/* ===== BLOG META ===== */}
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


            {featuredImage && (
              <Image
                src={featuredImage}
                width={1200}
                height={600}
                alt=""
                className={styles.featuredImage}
                priority
              />
            )}

            <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: content }} />

            {/* ===== FAQs ===== */}
            {post.meta?._faqs_data?.length && (
              <section id="faqs" className="mt-20">
                <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.meta._faqs_data.map((faq, i) => (
                    <div key={i} className="border border-white/20 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-semibold bg-white/5 hover:bg-white/10 transition"
                      >
                        <span>{faq.question}</span>
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openFaq === i && (
                        <div
                          className="px-6 py-4 text-white/90 bg-white/5"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </Container>
    </section>
  );
}
