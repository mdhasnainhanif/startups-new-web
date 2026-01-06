"use client";

import { useState } from "react";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { solutionData } from "../../data/FlippaPageData";
import Container from "../../components/Container";
import Image from "next/image";
import styles from "./SolutionSection.module.css";

export default function SolutionSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleSolution = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className={`sectionPadding ${styles.section} blogStarsBackground`}>
      <Container maxWidth="xl" className="relative z-10">
        <div className={styles.contentGrid}>
          <MotionDiv variant="fadeLeft">
            <div className="sectionHeading">
              <h2>
                {solutionData.title.main}{" "}
                <span className={styles.headingHighlight}>{solutionData.title.highlight}</span>{" "}
                {solutionData.title.suffix}
              </h2>
            </div>
            <p className={styles.description}>
              {solutionData.description}
            </p>

            {/* Solution List - Expandable Boxes */}
            <div className={styles.solutionsList}>
              {solutionData.solutions.map((solution, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <div
                    key={solution.title}
                    className={`${styles.solutionBox} ${isExpanded ? styles.solutionBoxExpanded : ''}`}
                    onClick={() => toggleSolution(index)}
                  >
                    <div className={styles.solutionBoxHeader}>
                      <div className={styles.solutionBoxLeft}>
                        <div className={styles.checkIcon}>
                          <Image src="/assets/images/tick.webp" alt="Check" width={20} height={20} />
                        </div>
                        <h4 className={styles.solutionTitle}>{solution.title}</h4>
                      </div>
                      <div className={styles.toggleIcon}>
                        {isExpanded ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {isExpanded && (
                      <div className={styles.solutionBoxContent}>
                        <p className={styles.solutionDescription}>{solution.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </MotionDiv>

          {/* Right Visual */}
          <MotionDiv variant="fadeRight" delay={0.2}>
            <div className={styles.visualContainer}>
              {/* Decorative Elements */}
              <div className={styles.decorativeElement1} />
              <div className={styles.decorativeElement2} />

              {/* Content */}
              <div className={styles.visualContent}>
                <div className={styles.comparisonContainer}>
                  {/* Before/After Comparison */}
                  <div className={styles.beforeCard}>
                    <div className={styles.beforeHeader}>
                      <div className={styles.beforeLabel}>BEFORE</div>
                      <div className={styles.beforeSubtitle}>The Problem</div>
                    </div>
                    <div className={styles.beforeValue}>
                      {solutionData.beforeAfter.before.value}
                    </div>
                    <ul className={styles.beforePoints}>
                      {solutionData.beforeAfter.before.points.map((point, index) => (
                        <li key={index}>• {point}</li>
                      ))}
                    </ul>
                    <div className={styles.beforeProgressBar}>
                      <div
                        className={styles.beforeProgressFill}
                        style={{ width: `${solutionData.beforeAfter.before.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className={styles.afterCard}>
                    {/* Decorative Abstract Shape */}
                    <div className={styles.decorativeShape}>
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" opacity="0.2">
                        <path d="M50 20 C70 20, 80 40, 80 50 C80 60, 70 80, 50 80 C30 80, 20 60, 20 50 C20 40, 30 20, 50 20 Z" fill="rgba(15, 218, 194, 0.3)" />
                        <path d="M50 30 C65 30, 70 45, 70 50 C70 55, 65 70, 50 70 C35 70, 30 55, 30 50 C30 45, 35 30, 50 30 Z" fill="rgba(15, 218, 194, 0.2)" />
                      </svg>
                    </div>
                    <div className={styles.afterHeader}>
                      <div className={styles.afterLabel}>
                        {solutionData.beforeAfter.after.title}
                      </div>
                      <div className={styles.afterSubtitle}>
                        {solutionData.beforeAfter.after.subtitle}
                      </div>
                    </div>
                    <div className={styles.afterValue}>
                      {solutionData.beforeAfter.after.value}
                    </div>
                    <ul className={styles.afterPoints}>
                      {solutionData.beforeAfter.after.points.map((point, index) => (
                        <li key={index}>
                          {point.replace('✓', '').trim()}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.afterProgressBar}>
                      <div
                        className={styles.afterProgressFill}
                        style={{ width: `${solutionData.beforeAfter.after.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

