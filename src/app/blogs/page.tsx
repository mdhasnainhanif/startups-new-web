import { Metadata } from "next";
import { getAllBlogPosts } from "../data/blogData";
import Container from "../components/Container";
import PageBanner from "../components/PageBanner/PageBanner";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { ArrowRightIcon } from "../components/icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blogs | Startups Advisory",
  description: "Explore our latest articles on web development, content marketing, and business growth strategies.",
  robots: "nofollow",
};

export default function BlogsPage() {
  const blogs = getAllBlogPosts();

  return (
    <>
      <PageBanner title={
        <>
          Our <span className="text-[#0fdac2]">Creative</span> Blogs
        </>
      } />
      <section className={`sectionPadding ${styles.blogsSection}`}>
        <Container maxWidth="xl">
          <div className={styles.blogsGrid}>
            {blogs.map((blog) => (
              <article key={blog.slug} className={styles.blogCard}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className={styles.blogImage}
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
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <p className={styles.blogExcerpt}>{blog.excerpt}</p>

                <div className={styles.readButtonWrapper}>
                  <Button
                    href={`/blog-detail/${blog.slug}`}
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
    </>
  );
}

