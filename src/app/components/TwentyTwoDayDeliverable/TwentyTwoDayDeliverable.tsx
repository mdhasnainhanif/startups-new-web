"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Container from "../Container";
import styles from "./TwentyTwoDayDeliverable.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    id: 1,
    title: "Phase 01 — Foundation",
    days: "Days 1-5",
    iconColor: "#0fdac2",
    iconType: "cube",
    borderColor: "rgba(15, 218, 194, 0.6)",
    image: "/assets/images/aipower1.png",
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
    image: "/assets/images/aipower2.png",
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
    image: "/assets/images/aipower3.png",
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
    image: "/assets/images/aipower4.png",
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
  const [activePhase, setActivePhase] = useState<number>(1);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const phasesContainerRef = useRef<HTMLDivElement | null>(null);
  const activePhaseRef = useRef<number>(1);

  // Set initial image state on mount
  useLayoutEffect(() => {
    const images = imageRefs.current.filter(Boolean) as HTMLImageElement[];
    images.forEach((img, index) => {
      const phaseId = index + 1;
      if (phaseId === 1) {
        gsap.set(img, { opacity: 1, scale: 1 });
      } else {
        gsap.set(img, { opacity: 0, scale: 0.95 });
      }
    });
  }, []);

  // Setup GSAP ScrollTrigger pinning for smooth left column scrolling
  useLayoutEffect(() => {
    if (!sectionRef.current || !phasesContainerRef.current) return;

    const section = sectionRef.current;
    const phasesContainer = phasesContainerRef.current;
    const phaseElements = phaseRefs.current.filter(Boolean) as HTMLDivElement[];
    
    if (phaseElements.length === 0) return;

    // Calculate scroll height after phases are rendered
    const calculateScrollHeight = () => {
      const viewportHeight = window.innerHeight;
      const titleSectionHeight = 250;
      const availableHeight = viewportHeight - titleSectionHeight;
      const phasesContainerHeight = phasesContainer.scrollHeight;
      const scrollableHeight = Math.max(0, phasesContainerHeight - availableHeight);
      // Add extra space to ensure last box is fully visible + slow down scroll
      return scrollableHeight + (viewportHeight * 0.8);
    };
    
    // Initial calculation
    let totalScrollHeight = calculateScrollHeight();
    
    // Recalculate after a short delay to ensure phases are fully rendered
    setTimeout(() => {
      totalScrollHeight = calculateScrollHeight();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.vars.end = `+=${totalScrollHeight}`;
        scrollTriggerRef.current.refresh();
      }
    }, 200);

    // Create ScrollTrigger that pins the section
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 1.5, // Slower, smoother scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Calculate current scrollable height
        const viewportHeight = window.innerHeight;
        const titleSectionHeight = 250;
        const availableHeight = viewportHeight - titleSectionHeight;
        const phasesContainerHeight = phasesContainer.scrollHeight;
        const currentScrollableHeight = Math.max(0, phasesContainerHeight - availableHeight);
        
        // Scroll the phases container based on progress
        const scrollAmount = currentScrollableHeight * progress;
        gsap.set(phasesContainer, {
          y: -scrollAmount,
        });
        
        // Determine which phase should be active based on scroll progress
        // Calculate which phase is currently in view
        const segmentSize = 1 / phases.length;
        let targetPhase = 1;
        
        for (let i = 0; i < phases.length; i++) {
          const segmentStart = i * segmentSize;
          const segmentEnd = (i + 1) * segmentSize;
          
          if (progress >= segmentStart && progress < segmentEnd) {
            targetPhase = i + 1;
            break;
          }
        }
        
        // Handle the last phase (when progress = 1)
        if (progress >= 1) {
          targetPhase = phases.length;
        }
        
        // Update active phase
        if (targetPhase !== activePhaseRef.current) {
          activePhaseRef.current = targetPhase;
          setActivePhase(targetPhase);
        }

        // Animate phases based on scroll progress
        phaseElements.forEach((phaseEl, index) => {
          const phaseNum = index + 1;
          const phaseStart = index * segmentSize;
          const phaseEnd = (index + 1) * segmentSize;
          
          if (progress >= phaseStart) {
            if (progress < phaseEnd) {
              // Current phase - smooth opacity transition
              const localProgress = (progress - phaseStart) / segmentSize;
              const opacity = 0.4 + (localProgress * 0.6);
              gsap.to(phaseEl, {
                opacity: opacity,
                duration: 0.1,
                ease: "none",
              });
            } else {
              // Past phase - fully visible
              gsap.set(phaseEl, { opacity: 1 });
            }
          } else {
            // Future phase - dimmed
            gsap.set(phaseEl, { opacity: 0.4 });
          }
        });

        // Animate images based on active phase
        const images = imageRefs.current.filter(Boolean) as HTMLImageElement[];
        images.forEach((img, index) => {
          const phaseId = index + 1;
          
          if (phaseId === targetPhase) {
            gsap.to(img, {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
            });
          } else {
            gsap.to(img, {
              opacity: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power2.in",
            });
          }
        });
      },
      onEnter: () => {
        activePhaseRef.current = 1;
        setActivePhase(1);
      },
      onLeave: () => {
        activePhaseRef.current = phases.length;
        setActivePhase(phases.length);
      },
      onLeaveBack: () => {
        activePhaseRef.current = 1;
        setActivePhase(1);
      },
    });

    // Refresh ScrollTrigger after a short delay
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, []);

  // Animate images when active phase changes
  useEffect(() => {
    if (!imageContainerRef.current) return;

    const images = imageRefs.current.filter(Boolean) as HTMLImageElement[];
    
    images.forEach((img) => {
      gsap.killTweensOf(img);
    });
    
    images.forEach((img, index) => {
      const phaseId = index + 1;
      if (phaseId === activePhase) {
        gsap.to(img, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
        });
      } else {
        gsap.to(img, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: "power2.in",
        });
      }
    });
  }, [activePhase]);

  return (
    <section ref={sectionRef} className={`${styles.section} sectionPadding`}>
      {/* Starry Background */}
      <div className={styles.starsBackground}></div>
      
      <Container maxWidth="xl" className={styles.container}>
        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left Side - Phases */}
          <div className={styles.phasesSection}>
            <div ref={phasesContainerRef} className={styles.phasesContainer}>
              {phases.map((phase, index) => {
                const isExpanded = phase.id <= activePhase; // Show expanded if phase is active or above
                const isActive = activePhase === phase.id;
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
                      <h3 className={styles.phaseTitle}>
                        <span className={styles.phaseNumber}>{phase.title.split('—')[0].trim()}</span>
                        <span className={styles.phaseName}> — {phase.title.split('—')[1]?.trim()}</span>
                      </h3>
                      <p className={styles.phaseDays}>{phase.days}</p>
                      {isExpanded && (
                        <>
                          <div className={styles.separatorLine}></div>
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
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Single Image per Phase */}
          <div className={styles.imageSection}>
            <div ref={imageContainerRef} className={styles.imageContainer}>
              {phases.map((phase, index) => (
                <img
                  key={phase.id}
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  src={phase.image}
                  alt={phase.title}
                  className={`${styles.phaseImage} ${activePhase === phase.id ? styles.phaseImageActive : styles.phaseImageInactive}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TwentyTwoDayDeliverable;
