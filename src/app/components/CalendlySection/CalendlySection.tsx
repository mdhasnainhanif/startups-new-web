"use client";

import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Container from "../Container";
import styles from "./CalendlySection.module.css";
import Button from "../Button";
import { PlayIcon } from "@/app/icons";
import { VideoIcon } from "../../icons";
import { GoogleMeetIcon, ZoomIcon } from "@/app/icons";

interface CalendlySectionProps {
  heading?: string | { part1: string; part2: string; part3: string };
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  calendlyUrl?: string; // Keep for backward compatibility
  calendlyText?: string;
  className?: string;
  // New Cal.com props
  calNamespace?: string;
  calLink?: string;
}

const CalendlySection = ({
  heading = "Let's Get Your Business Talking",
  description = "Book a quick video call to see how your Smart AI Business Team can free you to run jobs while your digital presence runs itself",
  buttonText = "Free Up Your Time",
  buttonHref = "#",
  calendlyUrl,
  calendlyText = "In minutes, you'll see examples of what your team can handle, ads, social, website, graphics, and how it all works together seamlessly",
  className = "",
  calNamespace = "30min",
  calLink = "inhouse-team-loexw9/30min",
}: CalendlySectionProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState<string>(buttonText);

  useEffect(() => {
    setIsMounted(true);
    
    // Initialize Cal.com
    (async function () {
      const cal = await getCalApi({ namespace: calNamespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [calNamespace]);

  const handleDropdownSelect = (item: { label: string; href?: string; onClick?: () => void }) => {
    setSelectedDropdownItem(item.label);
  };

  // Parse heading to handle [Highlighted Word] format
  const renderHeading = () => {
    if (typeof heading === "object" && heading !== null && "part1" in heading) {
      return (
        <>
          <span className={styles.headingPart1}>{heading.part1}</span>
          <span className={styles.headingPart2}>{heading.part2}</span>
          <span className={styles.headingPart3}>{heading.part3}</span>
        </>
      );
    }

    if (typeof heading === "string") {
      const parts: React.ReactElement[] = [];
      const regex = /\[([^\]]+)\]/g;
      let lastIndex = 0;
      let match;
      let key = 0;

      while ((match = regex.exec(heading)) !== null) {
        if (match.index > lastIndex) {
          parts.push(
            <span key={key++} className={styles.headingPart1}>
              {heading.substring(lastIndex, match.index)}
            </span>
          );
        }
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
                variant="green"
                size="lg"
                icon={<VideoIcon style={{ fill: "#fff" }} />}
                className={styles.videoButton}
                iconSpanClassName={styles.videoButtonText} 
                isDropdown={true}
                selectedDropdownItem={selectedDropdownItem}
                onDropdownSelect={handleDropdownSelect}
                dropdownItems={[
                  {
                    label: "Google Meet",
                    href: "#",
                    icon: <GoogleMeetIcon />,
                  },
                  {
                    label: "Zoom Meet",
                    href: "#",
                    icon: <ZoomIcon />,
                  },
                ]}
              >
                <span>{buttonText}</span>
              </Button>
            </div>
          </div>

          {/* Right Section - Cal.com Widget */}
          <div className={styles.rightSection}>
            <div className={styles.calendlyContainer}>
              <div className={styles.calendlyWrapper}>
                {isMounted ? (
                  <Cal
                    namespace={calNamespace}
                    calLink={calLink}
                    style={{
                      width: "100%",
                      height: "650px",
                      minHeight: "650px",
                      overflow: "scroll",
                    }}
                    config={{
                      layout: "month_view",
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
