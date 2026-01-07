"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Container from "../Container";
import { TECHNOLOGIES_SECTION } from "../../constants";
import styles from "./Technologies.module.css";

interface TechnologiesProps {
  heading?: string;
  description?: string | string[];
  subDescription?: string;
  hideTabs?: boolean;
  defaultTab?: string;
  className?: string;
  customTools?: Array<{ id: number; name: string; icon: string; iconColor: string }>;
}

export default function Technologies({ heading, description, subDescription, hideTabs = false, defaultTab = "creative", className = "", customTools }: TechnologiesProps = {}) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabsSwiperRef = useRef<SwiperType | null>(null);
  const [isTabsSwiperBeginning, setIsTabsSwiperBeginning] = useState(true);
  const [isTabsSwiperEnd, setIsTabsSwiperEnd] = useState(false);

  // Use customTools if provided, otherwise use default tools from TECHNOLOGIES_SECTION
  const currentTools = customTools || 
    TECHNOLOGIES_SECTION.tools[
      activeTab as keyof typeof TECHNOLOGIES_SECTION.tools
    ];
  const currentTab = TECHNOLOGIES_SECTION.tabs.find(
    (tab) => tab.id === activeTab
  );

  const totalTools = currentTools.length;
  const toolsPerRow = Math.ceil(totalTools / 3);  
  const toolsRow1Group = currentTools.slice(0, toolsPerRow);
  const toolsRow2Group = currentTools.slice(toolsPerRow, toolsPerRow * 2);
  const toolsRow3Group = currentTools.slice(toolsPerRow * 2);
  const toolsRow1 = [...toolsRow1Group, ...toolsRow1Group, ...toolsRow1Group];
  const toolsRow2 = [...toolsRow2Group, ...toolsRow2Group, ...toolsRow2Group];
  const toolsRow3 = [...toolsRow3Group, ...toolsRow3Group, ...toolsRow3Group];
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
          <span key={`text-${key++}`} className="text-white">
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      parts.push(
        <span key={`highlight-${key++}`} className="text-[#0fdac2]">
          {match[1]}
        </span>
      );
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${key++}`} className="text-white">
          {text.substring(lastIndex)}
        </span>
      );
    }
    return parts.length > 0 ? parts : <span className="text-white">{text}</span>;
  };

  const parseSubDescription = (text: string) => {
    if (!text) return null;    
    const parts: React.ReactNode[] = [];
    const parenRegex = /\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;
    let key = 0;
    while ((match = parenRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${key++}`} className="text-white">
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      parts.push(
        <span key={`highlight-${key++}`} className="text-[#0fdac2]">
          ({match[1]})
        </span>
      );
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${key++}`} className="text-white">
          {text.substring(lastIndex)}
        </span>
      );
    }
    return parts.length > 0 ? parts : <span className="text-white">{text}</span>;
  };
  useEffect(() => {
    if (tabsSwiperRef.current) {
      const activeIndex = TECHNOLOGIES_SECTION.tabs.findIndex((tab) => tab.id === activeTab);
      if (activeIndex !== -1) {
        tabsSwiperRef.current.slideTo(activeIndex);
      }
    }
  }, [activeTab]);
  return (
    <section className={`${styles.section} ${className} sectionPadding`}>
      <div>
        <Container maxWidth="2xl" className="px-0">
          <div className={`sectionHeading forH2 flex flex-col items-center justify-center text-center max-w-5xl md:mx-auto`}>
            <h2 className="max-w-7xl mx-auto">
              {parseBrackets(heading || TECHNOLOGIES_SECTION.heading.part1)}
            </h2>
            {Array.isArray(description) ? (
              <div className={styles.descriptionWrapper}>
                {description.map((para, index) => (
                  <p key={index} className={styles.description}>
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className={styles.description}>
                {description || TECHNOLOGIES_SECTION.description}
              </p>
            )}
            {subDescription && (
              <h3 className={styles.categoryTitle}>
                {parseSubDescription(subDescription)}
              </h3>
            )}
          </div>
          {!hideTabs && (
            <div className={`${styles.tabsContainer} hidden md:flex`}>
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
          )}
          {!hideTabs && (
          <div className={`${styles.tabsContainerMobile} relative md:hidden`}>
            <button
              onClick={() => tabsSwiperRef.current?.slidePrev()}
              disabled={isTabsSwiperBeginning}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all ${
                isTabsSwiperBeginning
                  ? "opacity-30 cursor-not-allowed bg-[#1b1849]"
                  : "opacity-100 hover:bg-[#0fdac2]/80 bg-[#0fdac2]"
              }`}
              aria-label="Previous tab"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={false}
              allowTouchMove={true}
              speed={300}
              watchOverflow={true}
              onSwiper={(swiper) => {
                tabsSwiperRef.current = swiper;
                setIsTabsSwiperBeginning(swiper.isBeginning);
                setIsTabsSwiperEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsTabsSwiperBeginning(swiper.isBeginning);
                setIsTabsSwiperEnd(swiper.isEnd);
                const activeIndex = swiper.activeIndex;
                if (TECHNOLOGIES_SECTION.tabs[activeIndex]) {
                  setActiveTab(TECHNOLOGIES_SECTION.tabs[activeIndex].id);
                }
              }}
              className={styles.tabsSwiper}
              style={{ paddingLeft: "3rem", paddingRight: "3rem", overflow: "hidden" }}
            >
              {TECHNOLOGIES_SECTION.tabs.map((tab) => (
                <SwiperSlide key={tab.id} style={{ width: "100%" }}>
                  <div className="flex justify-center w-full">
                    <button
                      onClick={() => {
                        setActiveTab(tab.id);   
                        const tabIndex = TECHNOLOGIES_SECTION.tabs.findIndex((t) => t.id === tab.id);
                        if (tabsSwiperRef.current && tabIndex !== -1) {
                          tabsSwiperRef.current.slideTo(tabIndex);
                        }
                      }}
                      className={`${styles.tab} ${
                        activeTab === tab.id ? styles.activeTab : ""
                      }`}
                    >
                      {tab.label}
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={() => tabsSwiperRef.current?.slideNext()}
              disabled={isTabsSwiperEnd}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all ${
                isTabsSwiperEnd
                  ? "opacity-30 cursor-not-allowed bg-[#1b1849]"
                  : "opacity-100 hover:bg-[#0fdac2]/80 bg-[#0fdac2]"
              }`}
              aria-label="Next tab"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          )}
          {/* {!heading && (
            <div className={styles.categoryHeader}>
              <h3 className={styles.categoryTitle}>
                {currentTab?.label} Tools (
                <span className="text-[#0fdac2]">{currentTab?.value}</span> )
              </h3>
            </div>
          )} */}
        </Container>
        <div className={styles.slidersContainer}>
          <div className={`${styles.slider} ${styles.sliderRightToLeft}`}>
            <div className={styles.sliderTrack}>
              {toolsRow1.map((tool, index) => (
                <div key={`${tool.id}-${index}`} className={styles.toolCard}>
                  <div
                    className={styles.toolIcon}
                    style={{ color: tool.iconColor }}
                  >
                    {tool.icon.startsWith("/") ? (
                      <img src={tool.icon} alt={tool.name} className={styles.iconImage} loading="lazy" />
                    ) : (
                      tool.icon
                    )}
                  </div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.slider} ${styles.sliderLeftToRight}`}>
            <div className={styles.sliderTrack}>
              {toolsRow2.map((tool, index) => (
                <div key={`${tool.id}-${index}`} className={styles.toolCard}>
                  <div
                    className={styles.toolIcon}
                    style={{ color: tool.iconColor }}
                  >
                    {tool.icon.startsWith("/") ? (
                      <img src={tool.icon} alt={tool.name} className={styles.iconImage} />
                    ) : (
                      tool.icon
                    )}
                  </div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.slider} ${styles.sliderRightToLeft}`}>
            <div className={styles.sliderTrack}>
              {toolsRow3.map((tool, index) => (
                <div key={`${tool.id}-${index}`} className={styles.toolCard}>
                  <div
                    className={styles.toolIcon}
                    style={{ color: tool.iconColor }}
                  >
                    {tool.icon.startsWith("/") ? (
                      <img src={tool.icon} alt={tool.name} className={styles.iconImage} loading="lazy" />
                    ) : (
                      tool.icon
                    )}
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
