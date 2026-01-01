"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";
import Container from "../Container";
import styles from "./BlogCarousel.module.css";
import "swiper/css";
import "swiper/css/navigation";

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
  originalDate?: string; // For sorting purposes
}

const API_URL = "https://startupsadvisory.ai/wordpress-blog/wp-json/wp/v2/posts";
const DUMMY_IMAGE = "/assets/images/previewimg.png";

// Helper function to strip HTML tags
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ");
};

// Helper function to trim text
const trimText = (text: string, maxLength: number): string => {
  const cleaned = stripHtml(text).trim();
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

interface BlogCarouselProps {
  category?: string;
  showAllCategories?: boolean; // If true, show 2 recent blogs from each category
}

export default function BlogCarousel({ category = "Design", showAllCategories = false }: BlogCarouselProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if desktop and has less than 3 items
  const shouldDisableSlider = isDesktop && blogs.length < 3;

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(
          `${API_URL}?per_page=100&_embed=wp:featuredmedia,wp:term&_=${timestamp}`,
          {
            cache: 'no-store',
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data: WordPressPost[] = await response.json();

        let filteredBlogs: BlogPost[];

        if (showAllCategories) {
          // Show 2 recent blogs from each category
          const categoryMap = new Map<string, BlogPost[]>();

          // First, map all blogs to their categories
          data.forEach((post) => {
            const categoryTerms = post._embedded?.["wp:term"]?.[0] || [];
            const postCategory = categoryTerms.find(term => term.taxonomy === 'category');
            
            if (postCategory) {
              const categoryName = postCategory.name.trim();
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || DUMMY_IMAGE;

              const blogPost: BlogPost = {
                id: post.id,
                title: trimText(post.title.rendered, 40),
                excerpt: trimText(post.excerpt.rendered, 100),
                date: formatDate(post.date),
                slug: post.slug,
                image: featuredImage,
                link: post.link,
                category: categoryName,
                _reading_time: post.meta?._reading_time,
                originalDate: post.date, // Keep original ISO date for sorting
              };

              if (!categoryMap.has(categoryName)) {
                categoryMap.set(categoryName, []);
              }
              categoryMap.get(categoryName)!.push(blogPost);
            }
          });

          // Get 2 most recent blogs from each category
          filteredBlogs = [];
          categoryMap.forEach((blogs, categoryName) => {
            // Sort by date (most recent first) and take 2
            const sortedBlogs = blogs.sort((a, b) => {
              const dateA = new Date(a.originalDate || a.date).getTime();
              const dateB = new Date(b.originalDate || b.date).getTime();
              return dateB - dateA; // Descending order (newest first)
            });
            
            // Take first 2 blogs
            filteredBlogs.push(...sortedBlogs.slice(0, 2));
          });

          // Remove originalDate from final blogs
          filteredBlogs = filteredBlogs.map(({ originalDate, ...blog }) => blog);
        } else {
          // Filter blogs by specified category (existing logic)
          // Debug: Log all categories found
          if (category.toLowerCase() === 'web development') {
            console.log('All blogs fetched:', data.length);
            data.forEach((post) => {
              const categoryTerms = post._embedded?.["wp:term"]?.[0] || [];
              const categories = categoryTerms.filter(term => term.taxonomy === 'category');
              console.log(`Post ${post.id} (${post.title.rendered}):`, categories.map(c => c.name));
            });
          }

          filteredBlogs = data
            .filter((post) => {
              const categoryTerms = post._embedded?.["wp:term"]?.[0] || [];
              // Check all category terms, not just the first one
              const matchingCategory = categoryTerms.find(term => 
                term.taxonomy === 'category' && 
                term.name?.toLowerCase().trim() === category.toLowerCase().trim()
              );
              return !!matchingCategory;
            })
            .map((post) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || DUMMY_IMAGE;

              const categoryTerms = post._embedded?.["wp:term"]?.[0] || [];
              const postCategory = categoryTerms.find(term => term.taxonomy === 'category')?.name || category;

              return {
                id: post.id,
                title: trimText(post.title.rendered, 40),
                excerpt: trimText(post.excerpt.rendered, 100),
                date: formatDate(post.date),
                slug: post.slug,
                image: featuredImage,
                link: post.link,
                category: postCategory,
                _reading_time: post.meta?._reading_time,
              };
            });

          // Debug: Log filtered results
          if (category.toLowerCase() === 'web development') {
            console.log(`Filtered blogs for "${category}":`, filteredBlogs.length);
            console.log('Filtered blog titles:', filteredBlogs.map(b => b.title));
          }
        }

        setBlogs(filteredBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [category, showAllCategories]);

  if (loading) {
    return (
      <section className={`${styles.blogCarouselSection} sectionPadding blogStarsBackground`}>
        <div className="starsLayer3"></div>
        <Container maxWidth="xl">
          <div className="sectionHeading forH2 text-center text-[#ffffff] mb-6">
            <h2>
              Recent{" "}
              <span className={`${styles.titleGradient} ${styles.textLight}`}>
                Blogs
              </span>
            </h2>
          </div>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
          </div>
        </Container>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  // If less than 3 items on desktop, show as grid without slider
  if (shouldDisableSlider) {
    return (
      <section className={`${styles.blogCarouselSection} sectionPadding blogStarsBackground`}>
        <div className="starsLayer3"></div>
        <Container maxWidth="xl">
          <div className="sectionHeading forH2 text-center text-[#ffffff] mb-6">
            <h2>
              Recent{" "}
              <span className={`${styles.titleGradient} ${styles.textLight}`}>
                Blogs
              </span>
            </h2>
          </div>
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
        </Container>
      </section>
    );
  }

  // Normal slider for 3+ items on desktop or mobile
  return (
    <section className={`${styles.blogCarouselSection} sectionPadding blogStarsBackground`}>
      <div className="starsLayer3"></div>
      <Container maxWidth="xl">
        <div className="sectionHeading forH2 text-center text-[#ffffff] mb-6">
          <h2>
            Recent{" "}
            <span className={`${styles.titleGradient} ${styles.textLight}`}>
              Blogs
            </span>
          </h2>
        </div>
        <div className={styles.carouselWrapper}>
          {blogs.length >= 3 && (
            <div className={styles.navButtonWrapper}>
              <button
                onClick={handleNext}
                aria-label="Next"
                disabled={isEnd}
                className={`${styles.navButton} ${styles.navButtonRight}`}
              >
                <span className={styles.arrowIcon}>›</span>
              </button>
              <button
                onClick={handlePrev}
                aria-label="Previous"
                disabled={isBeginning}
                className={`${styles.navButton} ${styles.navButtonLeft}`}
              >
                <span className={styles.arrowIcon}>‹</span>
              </button>
            </div>
          )}

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={
              blogs.length >= 3
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
            className={styles.swiperContainer}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <article className={styles.blogCard}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}