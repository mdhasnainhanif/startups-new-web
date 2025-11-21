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
  buttonText = "Let’s solve it on a call",
  buttonHref = "#",
  backgroundImage = "/assets/images/cta-banner.webp",
  className = "",
}: CTABannerProps) => {
  return (
    <section className={`${styles.ctaBanner} ${className} relative overflow-hidden`}>
      {/* Content */}
      <Container maxWidth="xl" className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-8">
          {/* Left Side - Question */}
          <div className="flex-1 sectionHeading forH2 mb-0 text-center w-fit">
            <h2 className="w-fit">
              <span className="text-white">{question} </span>
              <span className="text-[#0fdac2]">{questionHighlight}</span>
            </h2>
          </div>
 
          {/* Right Side - Button */}
          <div className="shrink-0">
            <Button
              href={buttonHref}
              variant="secondary"
              size="lg"
              icon={<ArrowRightIcon style={{ fill: "#fff" }} />}
              iconPosition="right"
              className="whitespace-nowrap"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;

