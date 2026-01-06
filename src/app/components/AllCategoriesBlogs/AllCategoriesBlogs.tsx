"use client";

import { useEffect, useState } from "react";
import GrowthSlider from "../GrowthSlider/GrowthSlider";

interface WordPressPost {
  id: number;
  title: {
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
  meta?: {
    _reading_time?: string;
    footnotes?: string;
  };
}

type Guide = {
  id: string;
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  href: string;
};

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
  if (!readingTime || readingTime.trim() === "") return "3 min read";
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

export default function AllCategoriesBlogs() {
  const [blogs, setBlogs] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);

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

        // Group blogs by category and take 1 from each
        const categoryMap = new Map<string, WordPressPost>();

        data.forEach((post) => {
          const categoryTerms = post._embedded?.["wp:term"]?.[0] || [];
          const postCategory = categoryTerms.find(term => term.taxonomy === 'category');
          
          if (postCategory) {
            const categoryName = postCategory.name.trim();
            // Only add if we don't have a blog for this category yet
            if (!categoryMap.has(categoryName)) {
              categoryMap.set(categoryName, post);
            }
          }
        });

        // Convert to Guide format
        const guides: Guide[] = Array.from(categoryMap.entries()).map(([categoryName, post]) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || DUMMY_IMAGE;

          return {
            id: post.id.toString(),
            image: featuredImage,
            category: categoryName,
            title: trimText(post.title.rendered, 60),
            date: formatDate(post.date),
            readTime: formatReadingTime(post.meta?._reading_time),
            excerpt: trimText(post.excerpt.rendered, 120),
            href: `/blogs/${post.slug}`,
          };
        });

        setBlogs(guides);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="h-96" />; // Placeholder to prevent layout shift
  }

  if (blogs.length === 0) {
    return null;
  }

  return <GrowthSlider items={blogs} />;
}

