"use client";

import Container from "../Container";
import styles from "./PageBanner.module.css";

interface PageBannerProps {
  title: string;
  className?: string;
}

export default function PageBanner({ title, className = "" }: PageBannerProps) {
  return (
    <section className={`${styles.banner} relative sectionPadding overflow-hidden ${className}`}>
      <Container maxWidth="xl">
        <div className={`flex flex-col items-center text-center gap-6 md:gap-8 md:pt-50 sectionHeading ${styles.content}`}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </Container>
    </section>
  );
}
