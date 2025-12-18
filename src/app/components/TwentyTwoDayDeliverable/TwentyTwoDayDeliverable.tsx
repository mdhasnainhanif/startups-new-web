"use client";

import React from "react";
import Container from "../Container";
import styles from "./TwentyTwoDayDeliverable.module.css";

const phases = [
  {
    id: 1,
    title: "Phase 1 — Foundation",
    days: "Days 1–5",
    iconColor: "#39ff14",
    iconType: "arrow",
    deliverables: [
      "Branding & Identity Design",
      "Logo Design",
      "Typography & Lettering Design",
      "Stationery & Corporate Collateral",
      "Print Media Design",
      "Packaging & Label Design",
    ],
  },
  {
    id: 2,
    title: "Phase 2 — Brand Expansion",
    days: "Days 6–11",
    iconColor: "#ff6b9d",
    iconType: "layers",
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
    title: "Phase 3 — Digital Presence",
    days: "Days 12–17",
    iconColor: "#4fc3f7",
    iconType: "monitor",
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
    title: "Phase 4 — Production & Collateral",
    days: "Days 18–22",
    iconColor: "#ffa726",
    iconType: "cube",
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
              {phases.map((phase, index) => (
                <div
                  key={phase.id}
                  className={styles.phaseBox}
                >
                  {/* Connecting Line */}
                  {index > 0 && (
                    <div className={styles.connectingLine}>
                      <div className={styles.lineDot}></div>
                    </div>
                  )}
                  
                  {/* Phase Icon */}
                  <div 
                    className={styles.phaseIcon}
                    style={{ backgroundColor: phase.iconColor }}
                  >
                    {phase.iconType === "arrow" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {phase.iconType === "layers" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="6" rx="1" fill="white" />
                        <rect x="3" y="9" width="18" height="6" rx="1" fill="white" />
                        <rect x="3" y="15" width="18" height="6" rx="1" fill="white" />
                      </svg>
                    )}
                    {phase.iconType === "monitor" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2" />
                        <path d="M8 21h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 17v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {phase.iconType === "cube" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>

                  {/* Phase Content */}
                  <div className={styles.phaseContent}>
                    <h3 className={styles.phaseTitle}>{phase.title}</h3>
                    <p className={styles.phaseDays}>{phase.days}</p>
                    <ul className={styles.deliverablesList}>
                      {phase.deliverables.map((item, itemIndex) => (
                        <li key={itemIndex} className={styles.deliverableItem}>
                          <img
                            src="/assets/images/tick2.png"
                            alt="check"
                            className={styles.checkIcon}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
