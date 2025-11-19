"use client";

import { AboutUsBannerProps } from "../../types/types";
import Button from "../Button";
import Container from "../Container";
import { ArrowRightIcon } from "../icons";
import styles from "./AboutUsBanner.module.css";

export default function AboutUsBanner({
  heading,
  description,
  ctaButton,
  className = "",
}: AboutUsBannerProps) {
  return (
    <section
      className={`${styles.bannerBackground} relative sectionPadding overflow-hidden ${className}`}
    >
      <Container maxWidth="xl" className="px-0">
        <div className={`flex flex-col items-center text-center gap-6 md:gap-8 pt-20 ${styles.pt100}`}>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${styles.heading}`}>
            <span className="text-white">{heading.part1} </span>
            <span className="text-[#0fdac2]">{heading.highlight}</span>
            {heading.part2 && (
              <>
                <span className="text-white"> {heading.part2} </span>
              </>
            )}
            {heading.highlight2 && (
              <>
                <span className="text-[#0fdac2]">{heading.highlight2}</span>
              </>
            )}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-4xl leading-relaxed">
            {description}
          </p>
          <div className="mt-4">
           
            <Button href="#" variant="primary" icon={<ArrowRightIcon style={{ fill: "#fff" }} />} iconPosition="right">
              {ctaButton.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

