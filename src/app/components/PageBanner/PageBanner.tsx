import Container from "../Container";
import styles from "./PageBanner.module.css";
import { ReactNode } from "react";

interface PageBannerProps { 
  title: string | ReactNode;
  className?: string;
}

export default function PageBanner({ title, className = "" }: PageBannerProps) {
  return (
    <section className={`${styles.banner} relative lg:pb-26 pb-15 lg:pt-10 overflow-hidden heroBannerPaddingTop ${className}`}>
      <Container maxWidth="xl">
        <div className={`flex flex-col items-center text-center gap-6 md:gap-8 md:pt-50 sectionHeading ${styles.content}`}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </Container>
    </section>
  );
}
