"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../Container";
import VideoPopup from "../VideoPopup/VideoPopup";
import { PROFESSIONAL_ONLINE } from "../../constants";
import styles from "./ProfessionalOnline.module.css";

const ProfessionalOnline = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to parse text and highlight text in brackets
  const parseBrackets = (text: string) => {
    if (!text) return null;
    
    const parts: React.ReactNode[] = [];
    const bracketRegex = /\[([^\]]+)\]/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = bracketRegex.exec(text)) !== null) {
      // Add text before the bracket
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${key++}`} className={styles.bottomHeadingPart1}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // Add highlighted text inside brackets
      parts.push(
        <span key={`highlight-${key++}`} className={styles.bottomHeadingPart2}>
          {match[1]}
        </span>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text after last bracket
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${key++}`} className={styles.bottomHeadingPart1}>
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return parts.length > 0 ? parts : <span className={styles.bottomHeadingPart1}>{text}</span>;
  };

  return (
    <>
      <section className={styles.section + " sectionPadding"}>
        <Container maxWidth="xl">
          <div className={styles.contentWrapper}>
            {/* Left Section */}
            <div className={`${styles.leftSection} sectionHeading forH2`}>
              {/* <h2>
                <span className={styles.headingPart1}>
                  {PROFESSIONAL_ONLINE.heading.part1}
                </span>
                <span className={styles.headingPart2}>
                  {PROFESSIONAL_ONLINE.heading.part2}
                </span>
                <span className={styles.headingPart3}>
                  {PROFESSIONAL_ONLINE.heading.part3}
                </span>
              </h2>
              <p className={styles.description}>
                {PROFESSIONAL_ONLINE.description}
              </p> */}

              {/* STARTUPS FAIL STATISTICS SECTION */}
              {PROFESSIONAL_ONLINE.startupStats && PROFESSIONAL_ONLINE.startupStats.length > 0 && (
                <div className={styles.statsGrid}>
                  {PROFESSIONAL_ONLINE.startupStats.map((stat, index) => (
                    <div key={index} className={styles.statBox}>
                      {/* Desktop: Icon on top, Mobile: Icon on right */}
                      <div className={styles.statIcon}>
                        <Image src={stat.image} alt={stat.headline} width={32} height={32} />
                      </div>
                      <div className={styles.statContent}>
                        <div className={styles.statHeader}>
                          <span className={styles.statPercentage}>{stat.percentage}</span>
                          <span className={styles.statHeadline}>{stat.headline}</span>
                        </div>
                        <p className={styles.statDescription}>{stat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Section - Video Player */}
            <div className={styles.rightSectionMain}>
              <div>
                <div className={styles.videoMain}>
                  <div
                    className={styles.videoImageWrapper}
                    onClick={() => setIsPopupOpen(true)}
                  >
                    <img
                      className={styles.videoImage}
                      src="/assets/images/man.jpg"
                      alt="Video"
                    />
                    {/* Play Button Icon */}
                    <div className={styles.playButtonContainer}>
                      <div className={styles.playButton}>
                        <svg
                          className={styles.playIcon}
                          height="1.825rem"
                          width="1.825rem"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 402.3 435.5"
                        >
                          <path
                            d="M9.6 53.5V382c0 36.7 39.6 59.6 71.4 41.5l287.6-164.2c32.1-18.3 32.1-64.6 0-82.9L81 12.1C49.2-6.1 9.6 16.9 9.6 53.5"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.bottomHeading}>
                      {parseBrackets(PROFESSIONAL_ONLINE.bottomHeading.part1)}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Background Decorative Elements */}
        <div className={styles.backgroundDecoration} />
      </section>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        videoUrl={PROFESSIONAL_ONLINE.video.videoUrl}
        videoTitle={PROFESSIONAL_ONLINE.video.videoTitle}
        size="lg"
      />
    </>
  );
};

export default ProfessionalOnline;
