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
        <div className={`flex flex-col items-center text-center gap-6 md:gap-8 md:pt-50 sectionHeading max-w-4xl mx-auto`}>
          <h1>
            <span className="text-white">{heading.part1}</span>
            {heading.highlight && (
              <span className="text-[#0fdac2]">{heading.highlight}</span>
            )}
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
          <p className="lg:max-w-4xl text-white">
            {description}
          </p>
          <div className="mt-4">
           
            <Button href="#" variant="green" icon={<ArrowRightIcon style={{ fill: "#000" }} />} iconPosition="right">
              {ctaButton.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

