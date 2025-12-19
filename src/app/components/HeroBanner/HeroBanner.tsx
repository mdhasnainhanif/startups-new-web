"use client";

import { HeroBannerProps } from "../../types/types";
import Button from "../Button";
import Container from "../Container";
import { ArrowRightIcon } from "../icons";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./HeroBanner.module.css";

// Lazy load Plasma component to reduce initial bundle size
const Plasma = dynamic(() => import("../Plasma/Plasma"), {
  ssr: false,
  loading: () => null,
});

export default function HeroBanner({
  headline,
  headlineHighlight,
  subheadline,
  description,
  ctaButton,
  className = "",
  onButtonClick,
}: HeroBannerProps) {
  // Function to parse subheadline and highlight text in brackets
  const parseSubheadline = (text: string) => {
    if (!text) return null;
    
    const parts: React.ReactNode[] = [];
    const bracketRegex = /\[([^\]]+)\]/g;
    let lastIndex = 0;
    let match;

    while ((match = bracketRegex.exec(text)) !== null) {
      // Add text before the bracket
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${lastIndex}`} className="text-white">
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // Add highlighted text inside brackets
      parts.push(
        <span key={`highlight-${match.index}`} className="text-[#0fdac2]">
          {match[1]}
        </span>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text after last bracket
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${lastIndex}`} className="text-white">
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return parts.length > 0 ? parts : <span className="text-white">{text}</span>;
  };

  return (
    <section className={`relative sectionPadding overflow-hidden heroStarsBackground ${className}`}>
      <div className="starsLayer3"></div>
      {/* LCP Image - Optimized with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero.webp"
          alt="Hero Background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/30" style={{ zIndex: 1 }}></div>
      </div>
      
      {/* Plasma Background Animation */}
      <div className={`absolute inset-0 ${styles.plasmaContainer}`} style={{ zIndex: 2 }}>
        <Plasma 
          color="#8b5cf6"
          speed={0.8}
          direction="forward"
          scale={1.5}
          opacity={0.4}
          mouseInteractive={true}
        />
      </div>
      <Container maxWidth="2xl" className={`${styles.content} relative z-10`}>
        <div className="flex flex-col items-center text-center gap-6 md:gap-5 lg:pt-40 md:pt-10 sectionHeading">
          {/* 300+ Companies Badge */}
          <div>
            <p className={`${styles.companiesBadge}`}>
              <span className={styles.companiesNumber}>300+</span>{" "}
              <span className={styles.companiesText}>Companies</span>
            </p>
          </div>
          <h1 className="max-w-5xl">
            <span className="text-white">{headline}</span>
            {headlineHighlight && (
              <>
                <span className="text-[#0fdac2]">{headlineHighlight}</span>
              </>
            )}
            {subheadline && (
              <>
                {parseSubheadline(subheadline)}
              </>
            )}
          </h1>
          <p className="text-white/80 max-w-4xl whitespace-pre-line">
            {description}
          </p>
          <div className="mt-4">
            {onButtonClick ? (
              <Button
                onClick={onButtonClick}
                variant={"green"}
                size="lg"
                icon={<ArrowRightIcon style={{ fill: "#000" }} />}
                iconPosition="right"
              >
                {ctaButton.text}
              </Button>
            ) : (
              <Button
                href={ctaButton.href}
                variant={"green"}
                size="lg"
                icon={<ArrowRightIcon style={{ fill: "#000" }} />}
                iconPosition="right"
              >
                {ctaButton.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

