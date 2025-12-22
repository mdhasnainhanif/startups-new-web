"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "../Container";
import styles from "./TwentyTwoDayDeliverable.module.css";

const phases = [
  {
    id: 1,
    title: "Phase 01 — Foundation",
    days: "Days 1-5",
    iconColor: "#0fdac2",
    iconType: "cube",
    borderColor: "rgba(15, 218, 194, 0.6)",
    deliverables: [
      "Branding & Identity Design",
      "Typography & Lettering Design",
      "Print Media Design",
      "Logo Design",
      "Stationery & Corporate Collateral",
      "Packaging & Label Design",
    ],
  },
  {
    id: 2,
    title: "Phase 02 — Brand Expansion",
    days: "Days 6-11",
    iconColor: "#0fdac2",
    iconType: "person",
    borderColor: "rgba(100, 59, 255, 0.4)",
    deliverables: [
      "Product Mockup & Visualization",
      "App UI/UX Design",
      "Website UI/UX Design",
      "Dashboard & Web Application Design",
      "Social Media Content Design",
      "Social Media Advertising Creatives",
    ],
  },
  {
    id: 3,
    title: "Phase 03 — Digital Presence",
    days: "Days 12-17",
    iconColor: "#0fdac2",
    iconType: "globe",
    borderColor: "rgba(100, 59, 255, 0.4)",
    deliverables: [
      "Digital Marketing Assets",
      "Presentation & Pitch Deck Design",
      "Infographic Design",
      "Illustration & Digital Art",
      "Motion Graphics Design",
      "Video Editing & Graphic Overlays",
    ],
  },
  {
    id: 4,
    title: "Phase 04 — Production & Collateral",
    days: "Days 18-22",
    iconColor: "#0fdac2",
    iconType: "gear",
    borderColor: "rgba(100, 59, 255, 0.4)",
    deliverables: [
      "3D Modeling & Product Rendering",
      "Advertising & Campaign Design",
      "Brochure, Flyer & Catalog Design",
      "Ebook & Publication Layout Design",
      "Email Newsletter & HTML Template Design",
      "Environmental & Signage Design",
    ],
  },
];

const TwentyTwoDayDeliverable = () => {
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set([1])); // First phase open by default
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    phaseRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const phaseId = index + 1;
      
      // Skip observing the first phase as it's already expanded
      if (phaseId === 1) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setExpandedPhases((prev) => {
                const newSet = new Set(prev);
                newSet.add(phaseId);
                return newSet;
              });
              // Disconnect after expanding to prevent re-triggering
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.3, // Trigger when 30% of the phase is visible
          rootMargin: "0px 0px -100px 0px", // Trigger slightly before it's fully visible
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className={`${styles.section} sectionPadding`}>
      {/* Starry Background */}
      <div className={styles.starsBackground}></div>
      
      <Container maxWidth="xl" className={styles.container}>
        {/* Top Title Section */}
        <div className={`${styles.titleSection} sectionHeading forH2 max-w-5xl md:mx-auto`}>
          <h2>
          <span className="text-[#0fdac2]">Everything</span> Your Business Needs — Delivered <span className="text-[#0fdac2]">in 22 Days</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left Side - Phases */}
          <div className={styles.phasesSection}>
            <div className={styles.phasesContainer}>
              {phases.map((phase, index) => {
                const isExpanded = expandedPhases.has(phase.id);
                return (
                  <div
                    key={phase.id}
                    ref={(el) => {
                      phaseRefs.current[index] = el;
                    }}
                    className={`${styles.phaseBox} ${isExpanded ? styles.phaseBoxExpanded : styles.phaseBoxCollapsed}`}
                    style={{
                      borderColor: phase.borderColor,
                    }}
                  >
                    {/* Connecting Line */}
                    {index > 0 && (
                      <div className={styles.connectingLine}>
                        <div className={styles.lineDot}></div>
                      </div>
                    )}
                    
                    {/* Phase Icon */}
                    <div 
                      className={`${styles.phaseIcon} ${isExpanded ? styles.phaseIconVisible : ''}`}
                      style={{ backgroundColor: phase.iconColor }}
                    >
                      {phase.iconType === "cube" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                      )}
                      {phase.iconType === "person" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" />
                          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="white" strokeWidth="2" />
                          <path d="M12 14v4M10 16h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                      {phase.iconType === "globe" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="2" />
                        </svg>
                      )}
                      {phase.iconType === "gear" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="white" strokeWidth="2" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>

                    {/* Phase Content */}
                    <div className={`${styles.phaseContent} ${isExpanded ? styles.phaseContentExpanded : styles.phaseContentCollapsed}`}>
                      <h3 className={styles.phaseTitle}>{phase.title}</h3>
                      <p className={styles.phaseDays}>{phase.days}</p>
                      {isExpanded && (
                        <ul className={styles.deliverablesList}>
                          {phase.deliverables.map((item, itemIndex) => (
                            <li key={itemIndex} className={styles.deliverableItem}>
                              <img
                                src="/assets/images/tick.png"
                                alt="check"
                                className={styles.checkIcon}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img
                src="/assets/images/aipower2.png"
                alt="22-Day Brand System"
                className={styles.brandSystemImage}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TwentyTwoDayDeliverable;
