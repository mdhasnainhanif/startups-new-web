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

// Icon components - you can replace these with actual SVG icons
const IconComponent = ({ icon }: { icon: string }) => {
  const iconStyles: { [key: string]: React.ReactElement } = {
    inbox: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    social: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
    calendar: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 14h6M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    automation: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19.07 4.93l-4.24 4.24M4.93 19.07l4.24-4.24M19.07 19.07l-4.24-4.24M4.93 4.93l4.24 4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    data: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 7v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    research: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 7v8M7 11h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    finances: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 2v20" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  };

  return <div className={styles.iconWrapper}>{iconStyles[icon] || iconStyles.inbox}</div>;
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
            <h2 className={styles.heading}>{ASSISTANT_CAPABILITIES_DATA.heading}</h2>
            <p className={styles.description}>{ASSISTANT_CAPABILITIES_DATA.description}</p>
          </div>
        </div>
      </Container>

      {/* First Slider Row - LTR (Left to Right) */}
      <div className={styles.fullWidthSlider}>
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
              <SwiperSlide key={capability.id}>
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
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesOffsetBefore={370}
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
                // slidesOffsetBefore: 150,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef2.current = swiper;
            }}
            className={styles.swiper}
          >
            {ASSISTANT_CAPABILITIES_DATA.capabilities.map((capability, index) => (
              <SwiperSlide key={`rtl-${capability.id}`}>
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