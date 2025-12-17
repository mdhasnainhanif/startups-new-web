import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "../../data/blogData";
import Container from "../../components/Container";
import Image from "next/image";
import styles from "./BlogDetail.module.css";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug); 
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }
  return {
    title: `${post.title} | Startups Advisory`,
    description: post.excerpt,
  };
}
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }
  return (
    <div className={`${styles.pageWrapper} sectionPadding`}>
      <Container maxWidth="mxl" className="max-w-4xl mx-auto">
        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.categoryTag}>{post.category}</div>
            <h1 className={styles.title}>{post.title}</h1>
            <h2 className={styles.subtitle}>{post.subtitle}</h2>
            
            <div className={styles.metadata}>
              <span className={styles.metadataItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
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
                <span>{post.date}</span>
              </span>
              <span className={styles.separator}>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className={styles.imageWrapper}>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className={styles.featuredImage}
              priority
            />
          </div>

          <div className={styles.content}>
            <p className={styles.introduction}>{post.content.introduction}</p>

            {post.content.sections.map((section, index) => (
              <section key={index} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.content.map((paragraph, pIndex) => {
                  
                  const isHeading = (paragraph.length < 80 && paragraph.endsWith(':')) || 
                    (paragraph.length < 100 && !paragraph.includes('.') && paragraph.length > 10);
                  
                  if (isHeading) {
                    return (
                      <h3 key={pIndex} className={styles.subsectionTitle}>
                        {paragraph.replace(':', '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={pIndex} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  );
                })}
              </section>
            ))}

            <div className={styles.conclusion}>
              <p className={styles.conclusionText}>{post.content.conclusion}</p>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}

