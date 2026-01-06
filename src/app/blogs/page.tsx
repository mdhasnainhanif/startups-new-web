"use client";

import { useEffect, useState } from "react";
import Container from "../components/Container";
import PageBanner from "../components/PageBanner/PageBanner";
import Image from "next/image";
import Button from "../components/Button";
import { ArrowRightIcon } from "../components/icons";
import styles from "./page.module.css";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
  link: string;
  categories: number[];
  meta?: {
    _reading_time?: string;
    footnotes?: string;
  };
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  link: string;
  category: string;
  _reading_time?: string;
}

const API_URL = "https://startupsadvisory.ai/wordpress-blog/wp-json/wp/v2/posts";
const POSTS_PER_PAGE = 6;
const DUMMY_IMAGE = "/assets/images/previewimg.png";

// Helper function to strip HTML tags
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ");
};

// Helper function to trim text
const trimText = (text: string, maxLength: number): string => {
  const cleaned = stripHtml(text);
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength).trim() + "...";
};

// Helper function to format reading time from API
const formatReadingTime = (readingTime: string | undefined): string => {
  if (!readingTime || readingTime.trim() === "") return "";
  return readingTime;
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

// Skeleton Loader Component
const BlogSkeleton = () => (
  <article className={styles.blogCard}>
    <div className={styles.imageContainer}>
      <div className={`${styles.imageWrapper} ${styles.skeletonImage}`} />
    </div>
    <div className={styles.category}>
      <span className={`${styles.categoryTag} ${styles.skeletonTag}`} />
    </div>
    <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
    <div className={styles.blogMeta}>
      <div className={`${styles.skeleton} ${styles.skeletonMeta}`} />
    </div>
    <div className={`${styles.skeleton} ${styles.skeletonExcerpt}`} />
    <div className={`${styles.skeleton} ${styles.skeletonButton}`} />
  </article>
);

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    
    const loadBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}?page=${currentPage}&per_page=${POSTS_PER_PAGE}&_embed=wp:featuredmedia,wp:term`,
          {
            cache: 'no-store', // Always get latest data from API
            signal: abortController.signal,
          }
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data: WordPressPost[] = await response.json();
        const totalPosts = parseInt(response.headers.get("x-wp-total") || "0");
        const totalPagesCount = Math.ceil(totalPosts / POSTS_PER_PAGE);
        setTotalPages(totalPagesCount);

        const formattedBlogs: BlogPost[] = data.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || DUMMY_IMAGE;
          
          const categoryTerms = post._embedded?.["wp:term"]?.[0] || [];
          const category = categoryTerms.find(term => term.taxonomy === 'category')?.name || "Startup";
          
          return {
            id: post.id,
            title: trimText(post.title.rendered, 60),
            excerpt: trimText(post.excerpt.rendered, 120),
            date: formatDate(post.date),
            slug: post.slug,
            image: featuredImage,
            link: post.link,
            category: category,
            _reading_time: post.meta?._reading_time,
          };
        });

        setBlogs(formattedBlogs);
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error("Error fetching blogs:", error);
          setBlogs([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();

    return () => {
      abortController.abort();
    };
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage && !loading) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || loading}
        className={`${styles.paginationButton} ${currentPage === 1 || loading ? styles.disabled : ""}`}
      >
        Previous
      </button>
    );

    // First page
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          disabled={loading}
          className={`${styles.paginationButton} ${currentPage === 1 ? styles.active : ""}`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className={styles.paginationEllipsis}>
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={loading}
          className={`${styles.paginationButton} ${currentPage === i ? styles.active : ""}`}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className={styles.paginationEllipsis}>
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          disabled={loading}
          className={`${styles.paginationButton} ${currentPage === totalPages ? styles.active : ""}`}
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
        className={`${styles.paginationButton} ${currentPage === totalPages || loading ? styles.disabled : ""}`}
      >
        Next
      </button>
    );

    return pages;
  };

  return (
    <>
      <PageBanner
        title={
          <>
            Our <span className="text-[#0fdac2]">Creative</span> Blogs
          </>
        }
      />
      <section className={`sectionPadding ${styles.blogsSection}`}>
        <Container maxWidth="xl">
          {loading ? (
            <div className={styles.blogsGrid}>
              {Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
                <BlogSkeleton key={`skeleton-${index}`} />
              ))}
            </div>
          ) : (
            <>
              <div className={styles.blogsGrid}>
                {blogs.map((blog) => (
                  <article key={blog.id} className={styles.blogCard}>
                    <div className={styles.imageContainer}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={400}
                          height={250}
                          className={styles.blogImage}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={styles.category}>
                      <span className={styles.categoryTag}>{blog.category}</span>
                    </div>
                    <h3 className={styles.blogTitle}>{blog.title}</h3>
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
                        <span>{blog.date}</span>
                      </span>
                      {formatReadingTime(blog._reading_time) && (
                        <>
                          <span>•</span>
                          <span>{formatReadingTime(blog._reading_time)}</span>
                        </>
                      )}
                    </div>
                    <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                    <div className={styles.readButtonWrapper}>
                      <Button
                        href={`/blogs/${blog.slug}`}
                        variant="green"
                        icon={<ArrowRightIcon style={{ fill: "#000" }} />}
                        iconPosition="right"
                        size="sm"
                      >
                        Read More
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
              {totalPages > 1 && (
                <div className={styles.pagination}>
                  {renderPagination()}
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
}