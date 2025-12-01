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
        <div className={`flex flex-col items-center text-center gap-6 md:gap-8 md:pt-50 sectionHeading`}>
          <h1>
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
          <p className="lg:max-w-4xl">
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

