"use client";

import Image from "next/image";
import Container from "../Container";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";
import styles from "./CTABanner.module.css";

interface CTABannerProps {
  question?: string;
  questionHighlight?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  className?: string;
}

const CTABanner = ({
  question = "What's Your",
  questionHighlight = "Challenge",
  buttonText = "Let's Get Your Marketing Handled",
  buttonHref = "#",
  backgroundImage = "/assets/images/cta-banner.webp",
  className = "",
}: CTABannerProps) => {
  return (
    <section className={`${styles.ctaBanner} ${className} relative overflow-hidden`}>
      {/* Content */}
      <Container maxWidth="xl" className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left Side - Question */}
          <div className="flex-1 sectionHeading text-center">
            <h2>
              <span className="text-white">{question} </span>
              <span className="text-[#0fdac2]">{questionHighlight}</span>
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;

