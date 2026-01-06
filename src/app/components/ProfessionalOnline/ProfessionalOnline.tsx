"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../Container";
import VideoPopup from "../VideoPopup/VideoPopup";
import { PROFESSIONAL_ONLINE } from "../../constants";
import styles from "./ProfessionalOnline.module.css";

const ProfessionalOnline = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(new Array(PROFESSIONAL_ONLINE.startupStats?.length || 0).fill(0));
  const sectionRef = useRef<HTMLElement>(null);

  const parseBrackets = (text: string) => {
    if (!text) return null;
    const parts: React.ReactNode[] = [];
    const bracketRegex = /\[([^\]]+)\]/g;
    let lastIndex = 0;
    let match;
    let key = 0;
    while ((match = bracketRegex.exec(text)) !== null) {
      
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${key++}`} className={styles.bottomHeadingPart1}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      
      parts.push(
        <span key={`highlight-${key++}`} className={styles.bottomHeadingPart2}>
          {match[1]}
        </span>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${key++}`} className={styles.bottomHeadingPart1}>
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return parts.length > 0 ? parts : <span className={styles.bottomHeadingPart1}>{text}</span>;
  };

  // Counter animation effect
  useEffect(() => {
    if (hasAnimated || !PROFESSIONAL_ONLINE.startupStats) return;

    const parsePercentage = (percentage: string): number => {
      const match = percentage.match(/^([\d.]+)/);
      return match ? parseFloat(match[1]) : 0;
    };

    const startAnimation = () => {
      if (hasAnimated) return;
      setHasAnimated(true);

      PROFESSIONAL_ONLINE.startupStats.forEach((stat, index) => {
        const targetNumber = parsePercentage(stat.percentage);
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = targetNumber * easeOutQuart;

          setCounts((prev) => {
            const newCounts = [...prev];
            // Use Math.round for smoother animation, only floor at the very end
            newCounts[index] = progress >= 0.99 ? targetNumber : Math.round(currentValue);
            return newCounts;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Ensure final value is exactly the target
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = targetNumber;
              return newCounts;
            });
          }
        };

        requestAnimationFrame(animate);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      <section ref={sectionRef} className={styles.section + " sectionPadding"}>
        <Container maxWidth="xl">
          <div className={styles.contentWrapper}>
            {/* Left Section */}
            <div className={`${styles.leftSection} sectionHeading forH2`}>
             {/* STARTUPS FAIL STATISTICS SECTION */}
              {PROFESSIONAL_ONLINE.startupStats && PROFESSIONAL_ONLINE.startupStats.length > 0 && (
                <div className={styles.statsGrid}>
                  {PROFESSIONAL_ONLINE.startupStats.map((stat, index) => {
                    const displayPercentage = hasAnimated 
                      ? `${counts[index]}%` 
                      : "0%";
                    
                    return (
                      <div key={index} className={styles.statBox}>
                        {/* Desktop: Icon on top, Mobile: Icon on right */}
                        <div className={styles.statIcon}>
                          <Image src={stat.image} alt={stat.headline} width={32} height={32} />
                        </div>
                        <div className={styles.statContent}>
                          <div className={styles.statHeader}>
                            <span className={styles.statPercentage}>{displayPercentage}</span>
                          </div>
                            <div className="">
                            <span className={styles.statHeadline}>{stat.headline} </span>
                            <span className={styles.statDescription}>{stat.description}</span>
                            </div>
                        </div>
                      </div>
                    );
                  })}
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
                    <Image
                      className={styles.videoImage}
                      src="/assets/images/man.webp"
                      alt="Video"
                      width={500}
                      height={500}
                      loading="lazy"
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
