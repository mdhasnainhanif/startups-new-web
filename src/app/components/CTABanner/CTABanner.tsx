"use client";

import Image from "next/image";
import Container from "../Container";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";
import styles from "./CTABanner.module.css";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";
import { useState } from "react";

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
  questionHighlight = "Challenge?",
  buttonText = "Let’s Solve It on a Call",
  buttonHref = "#",
  backgroundImage = "/assets/images/cta-banner.webp",
  className = "",
}: CTABannerProps) => {
  const [isCalendlyPopupOpen, setIsCalendlyPopupOpen] = useState(false);
  return (
    <>
    <section className={`${styles.ctaBanner} ${className} relative overflow-hidden`}>
      <Container maxWidth="xl" className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
          <div className="sectionHeading forH2 mb-0">
            <h2 className="w-fit">
              <span className="text-white">{question} </span>
              <span className="text-[#0fdac2]">{questionHighlight}</span>
            </h2>
          </div>
          <div className="shrink-0">
            <Button
              href={buttonText === "Let's Solve It on a call" ? undefined : buttonHref}
              variant="green"
              size="xl"
              icon={<ArrowRightIcon style={{ fill: "#000" }} />}
              onClick={buttonText ? () => setIsCalendlyPopupOpen(true) : undefined}
              className="whitespace-nowrap"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
    <CalendlyPopup
        isOpen={isCalendlyPopupOpen}
        onClose={() => setIsCalendlyPopupOpen(false)}
      />
    </>
  );
};

export default CTABanner;

