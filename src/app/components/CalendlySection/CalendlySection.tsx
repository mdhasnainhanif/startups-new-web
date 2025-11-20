"use client";

import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Container from "../Container";
import styles from "./CalendlySection.module.css";
import Button from "../Button";
import { VideoIcon } from "../../Icons";

interface CalendlySectionProps {
  heading?:
    | string
    | {
        part1: string;
        part2: string;
        part3: string;
      };
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  calendlyUrl: string;
  calendlyText?: string;
  className?: string;
}

const CalendlySection = ({
  heading = "Let's Get Your Business Talking",
  description = "Book a quick video call to see how your Smart Marketing AI Team can free you to run jobs while your digital presence runs itself",
  buttonText = "Free Up Your Time",
  buttonHref = "#",
  calendlyUrl = "https://calendly.com/md-hasnain-developer/30min?month=2025-11",
  calendlyText = "In minutes, you'll see examples of what your team can handle — ads, social, website, graphics — and how it all works together seamlessly",
  className = "",
}: CalendlySectionProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState<string>(buttonText);

  useEffect(() => {
    setIsMounted(true);
    // Log URL for debugging
    if (calendlyUrl) {
      console.log("Calendly URL:", calendlyUrl);
    }
  }, [calendlyUrl]);

  const handleDropdownSelect = (item: { label: string; href?: string; onClick?: () => void }) => {
    setSelectedDropdownItem(item.label);
  };

  // Parse heading to handle [Highlighted Word] format
  const renderHeading = () => {
    // If heading is object (old format), use it
    if (typeof heading === "object" && heading !== null && "part1" in heading) {
      return (
        <>
          <span className={styles.headingPart1}>{heading.part1}</span>
          <span className={styles.headingPart2}>{heading.part2}</span>
          <span className={styles.headingPart3}>{heading.part3}</span>
        </>
      );
    }

    // If heading is string, parse [Highlighted Word] format
    if (typeof heading === "string") {
      const parts: React.ReactElement[] = [];
      const regex = /\[([^\]]+)\]/g;
      let lastIndex = 0;
      let match;
      let key = 0;

      while ((match = regex.exec(heading)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          parts.push(
            <span key={key++} className={styles.headingPart1}>
              {heading.substring(lastIndex, match.index)}
            </span>
          );
        }
        // Add highlighted text
        parts.push(
          <span
            key={key++}
            className={styles.headingPart2}
            style={{ color: "#0FDAC2" }}
          >
            {match[1]}
          </span>
        );
        lastIndex = regex.lastIndex;
      }
      // Add remaining text
      if (lastIndex < heading.length) {
        parts.push(
          <span key={key++} className={styles.headingPart1}>
            {heading.substring(lastIndex)}
          </span>
        );
      }
      return parts;
    }

    return null;
  };

  return (
    <section
      className={`${styles.calendlySection} ${className} sectionPadding`}
    >
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          {/* Left Section */}
          <div className={`${styles.leftSection} sectionHeading forH2`}>
            <h2>{renderHeading()}</h2>
            <p>{description}</p>
            <div>
              <Button
                variant="purple"
                size="lg"
                icon={<VideoIcon style={{ fill: "#643BFF" }} />}
                className={styles.videoButton}
                iconSpanClassName={styles.videoButtonText}
                isDropdown={true}
                selectedDropdownItem={selectedDropdownItem}
                onDropdownSelect={handleDropdownSelect}
                dropdownItems={[
                  {
                    label: "Google Meet",
                    href: "#",
                  },
                  {
                    label: "Zoom Meet",
                    href: "#",
                  },
                ]}
              >
                <span>{buttonText}</span>
              </Button>
            </div>
          </div>

          {/* Right Section - Calendly Widget */}
          <div className={styles.rightSection}>
            <div className={styles.calendlyContainer}>
              <div className={styles.calendlyWrapper}>
                {calendlyUrl && isMounted ? (
                  <InlineWidget
                    url={calendlyUrl}
                    styles={{
                      height: "650px",
                      minHeight: "650px",
                    }}
                    pageSettings={{
                      backgroundColor: "ffffff",
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: "643bff",
                      textColor: "4d5055",
                      hideGdprBanner: true,
                    }}
                  />
                ) : (
                  <div className={styles.placeholderMessage}>
                    <div className={styles.placeholderIcon}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <h3 className={styles.placeholderTitle}>
                      Loading Calendar...
                    </h3>
                  </div>
                )}
              </div>
            </div>

            <p className={styles.calendlyText}>{calendlyText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CalendlySection;
