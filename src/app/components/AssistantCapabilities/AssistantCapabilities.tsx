"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Container from "../Container";
import styles from "./AssistantCapabilities.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { ASSISTANT_CAPABILITIES_DATA } from "@/app/data/AssistantCapabilities";

// Icon component that handles image paths
const IconComponent = ({ icon }: { icon: string }) => {
  // Check if icon is a path (starts with /) or a key
  if (icon.startsWith('/')) {
    return (
      <div className={styles.iconWrapper}>
        <img
          src={icon}
          alt="Icon"
          width={48}
          height={48}
          className={styles.iconImage}
          onError={(e) => {
            // Fallback if image fails to load
            console.error('Failed to load icon:', icon);
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    );
  }

  // Fallback SVG icons for backward compatibility
  const iconStyles: { [key: string]: React.ReactElement } = {
    inbox: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return <div className={styles.iconWrapper}>{iconStyles[icon] || iconStyles.inbox}</div>;
};

// Helper function to highlight text inside brackets with green color (without showing brackets)
const highlightBrackets = (text: string) => {
  const parts = text.split(/(\[.*?\])/g);
  return parts.map((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      // Remove brackets and only show the text inside in green
      const textInside = part.slice(1, -1); // Remove [ and ]
      return (
        <span key={index} className={styles.bracketText}>
          {textInside}
        </span>
      );
    }
    return part;
  });
};

export default function AssistantCapabilities() {
  const swiperRef1 = useRef<SwiperType | null>(null);
  const swiperRef2 = useRef<SwiperType | null>(null);

  const handlePrev1 = () => {
    swiperRef1.current?.slidePrev();
  };

  const handleNext1 = () => {
    swiperRef1.current?.slideNext();
  };

  const handlePrev2 = () => {
    swiperRef2.current?.slidePrev();
  };

  const handleNext2 = () => {
    swiperRef2.current?.slideNext();
  };

  return (
    <section className={`${styles.section} sectionPadding`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          {/* Heading */}
          <div className={`${styles.headingWrapper} sectionHeading forH2`}>
            <h2 className={styles.heading}>{highlightBrackets(ASSISTANT_CAPABILITIES_DATA.heading)}</h2>
            <p className={styles.description}>{ASSISTANT_CAPABILITIES_DATA.description}</p>
          </div>
        </div>
      </Container>

      {/* First Slider Row - LTR (Left to Right) */}
      <div className={styles.fullWidthSlider}>
        {/* Mobile Marquee */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {[...ASSISTANT_CAPABILITIES_DATA.capabilities, ...ASSISTANT_CAPABILITIES_DATA.capabilities].map((capability, index) => (
              <div key={`marquee-ltr-${capability.id}-${index}`} className={styles.marqueeCard}>
                <div className={styles.card}>
                  <IconComponent icon={capability.icon} />
                  <h3 className={styles.cardTitle}>{capability.title}</h3>
                  <p className={styles.cardDescription}>{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Swiper */}
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ 
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            centeredSlides={true}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                centeredSlides: true,
                width: null,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef1.current = swiper;
            }}
            className={styles.swiper}
          >
            {ASSISTANT_CAPABILITIES_DATA.capabilities.map((capability, index) => (
              <SwiperSlide key={`ltr-${capability.id}-${index}`}>
                <div className={styles.card}>
                  <IconComponent icon={capability.icon} />
                  <h3 className={styles.cardTitle}>{capability.title}</h3>
                  <p className={styles.cardDescription}>{capability.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className={styles.navButtonWrapper}>
            <button
              onClick={handlePrev1}
              aria-label="Previous"
              className={`${styles.navButton} ${styles.navButtonLeft}`}
            >
              <span className={styles.arrowIcon}>‹</span>
            </button>
            <button
              onClick={handleNext1}
              aria-label="Next"
              className={`${styles.navButton} ${styles.navButtonRight}`}
            >
              <span className={styles.arrowIcon}>›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Second Slider Row - RTL (Right to Left) */}
      <div className={styles.fullWidthSlider}>
        {/* Mobile Marquee - Reverse Direction */}
        <div className={styles.marqueeWrapper}>
          <div className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}>
            {[...ASSISTANT_CAPABILITIES_DATA.capabilities, ...ASSISTANT_CAPABILITIES_DATA.capabilities].map((capability, index) => (
              <div key={`marquee-rtl-${capability.id}-${index}`} className={styles.marqueeCard}>
                <div className={styles.card}>
                  <IconComponent icon={capability.icon} />
                  <h3 className={styles.cardTitle}>{capability.title}</h3>
                  <p className={styles.cardDescription}>{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Swiper */}
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesOffsetBefore={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            loop={true}
            centeredSlides={true}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                centeredSlides: true,
                slidesOffsetBefore: 370,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef2.current = swiper;
            }}
            className={styles.swiper}
          >
            {ASSISTANT_CAPABILITIES_DATA.capabilities.map((capability, index) => (
              <SwiperSlide key={`rtl-${capability.id}-${index}`}>
                <div className={styles.card}>
                  <IconComponent icon={capability.icon} />
                  <h3 className={styles.cardTitle}>{capability.title}</h3>
                  <p className={styles.cardDescription}>{capability.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className={styles.navButtonWrapper}>
            <button
              onClick={handlePrev2}
              aria-label="Previous"
              className={`${styles.navButton} ${styles.navButtonLeft}`}
            >
              <span className={styles.arrowIcon}>‹</span>
            </button>
            <button
              onClick={handleNext2}
              aria-label="Next"
              className={`${styles.navButton} ${styles.navButtonRight}`}
            >
              <span className={styles.arrowIcon}>›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}