"use client";

import { HeroBannerProps } from "../../types/types";
import Button from "../Button";
import Container from "../Container";
import { ArrowRightIcon } from "../icons";
import styles from "./HeroBanner.module.css";

export default function HeroBanner({
  headline,
  headlineHighlight,
  subheadline,
  description,
  ctaButton,
  className = "",
}: HeroBannerProps) {
  return (
    <section className={`${styles.heroBackground} relative sectionPadding overflow-hidden ${className}`}>
      <Container maxWidth="2xl" className={`${styles.content} relative z-10`}>
        <div className="flex flex-col items-center text-center gap-6 md:gap-5 lg:pt-48 pt-10 sectionHeading">
          <h1 className="max-w-4xl">
            <span className="text-white">{headline}</span>
            {headlineHighlight && (
              <>
                <span className="text-[#0fdac2]">{headlineHighlight}</span>
              </>
            )}
            {subheadline && (
              <>
                <span className="text-white">{subheadline}</span>
              </>
            )}
          </h1>
          <p className="text-white/80 max-w-5xl">
            {description}
          </p>
          <div className="mt-4">
            <Button
              href={ctaButton.href}
              variant={ctaButton.variant || "secondary"}
              size="lg"
              icon={<ArrowRightIcon />}
              iconPosition="right"
            >
              {ctaButton.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

