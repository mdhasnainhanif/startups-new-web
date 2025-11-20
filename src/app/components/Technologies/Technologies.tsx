"use client";

import { useState } from "react";
import Container from "../Container";
import { TECHNOLOGIES_SECTION } from "../../constants";
import styles from "./Technologies.module.css";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("creative");

  const currentTools =
    TECHNOLOGIES_SECTION.tools[
      activeTab as keyof typeof TECHNOLOGIES_SECTION.tools
    ];
  const currentTab = TECHNOLOGIES_SECTION.tabs.find(
    (tab) => tab.id === activeTab
  );

  // Duplicate tools for seamless infinite scroll
  const toolsRow1 = [...currentTools, ...currentTools, ...currentTools];
  const toolsRow2 = [...currentTools, ...currentTools, ...currentTools];
  const toolsRow3 = [...currentTools, ...currentTools, ...currentTools];

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
          <span key={`text-${key++}`} className="text-white">
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // Add highlighted text inside brackets
      parts.push(
        <span key={`highlight-${key++}`} className="text-[#0fdac2]">
          {match[1]}
        </span>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text after last bracket
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${key++}`} className="text-white">
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return parts.length > 0 ? parts : <span className="text-white">{text}</span>;
  };

  return (
    <section className={styles.section + " sectionPadding"}>
      <div>
        {/* Header Section */}
        <Container maxWidth="2xl" className="px-0">
          <div className={`sectionHeading forH2 gap-3 flex flex-col items-center justify-center ${styles.header}`}>
            <h2 className="max-w-7xl mx-auto">
              {parseBrackets(TECHNOLOGIES_SECTION.heading.part1)}
            </h2>
            <p className={styles.description}>
              {TECHNOLOGIES_SECTION.description}
            </p>
          </div>

          {/* Tabs */}
          <div className={styles.tabsContainer}>
            {TECHNOLOGIES_SECTION.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tab} ${
                  activeTab === tab.id ? styles.activeTab : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tools Category Header */}
          <div className={styles.categoryHeader}>
            <h3 className={styles.categoryTitle}>
              {currentTab?.label} Tools (
              <span className="text-[#0fdac2]">{currentTab?.value}</span> )
            </h3>
          </div>
        </Container>

        {/* Three Animated Sliders */}
        <div className={styles.slidersContainer}>
          {/* First Slider - Right to Left */}
          <div className={`${styles.slider} ${styles.sliderRightToLeft}`}>
            <div className={styles.sliderTrack}>
              {toolsRow1.map((tool, index) => (
                <div key={`${tool.id}-${index}`} className={styles.toolCard}>
                  <div
                    className={styles.toolIcon}
                    style={{ color: tool.iconColor }}
                  >
                    {tool.icon}
                  </div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Slider - Left to Right */}
          <div className={`${styles.slider} ${styles.sliderLeftToRight}`}>
            <div className={styles.sliderTrack}>
              {toolsRow2.map((tool, index) => (
                <div key={`${tool.id}-${index}`} className={styles.toolCard}>
                  <div
                    className={styles.toolIcon}
                    style={{ color: tool.iconColor }}
                  >
                    {tool.icon}
                  </div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Third Slider - Right to Left */}
          <div className={`${styles.slider} ${styles.sliderRightToLeft}`}>
            <div className={styles.sliderTrack}>
              {toolsRow3.map((tool, index) => (
                <div key={`${tool.id}-${index}`} className={styles.toolCard}>
                  <div
                    className={styles.toolIcon}
                    style={{ color: tool.iconColor }}
                  >
                    {tool.icon}
                  </div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
