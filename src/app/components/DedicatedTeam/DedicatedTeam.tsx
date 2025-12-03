"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { DedicatedTeamProps } from "../../types/types";
import Container from "../Container";
import styles from "./DedicatedTeam.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function DedicatedTeam({
  heading,
  members,
  className = "",
}: DedicatedTeamProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    if (swiperRef.current) {
      setIsSwiperReady(true);
    }
  }, []);

  return (
    <section className={`${styles.section} sectionPadding ${className}`}>
      <Container maxWidth="xl">
        <div className="sectionHeading forH2 text-center md:max-w-xl mx-auto">
          <h2>
            <span className="text-white">{heading.part1} </span>
            <span className="text-[#0fdac2]">{heading.highlight}</span>
            {heading.part2 && (
              <>
                <span className="text-white"> {heading.part2}</span>
              </>
            )}
          </h2>
        </div>

        <div className={styles.swiperWrapper}>
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className={`${styles.navButton} ${styles.navButtonLeft}`}
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            loopAdditionalSlides={2}
            allowSlidePrev={true}
            allowSlideNext={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setIsSwiperReady(true);
            }}
            onSlideChange={handleSlideChange}
            onResize={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className={`${styles.swiperContainer} ${
              isSwiperReady ? styles.swiperReady : ""
            }`}
          >
            {[...members, ...members].map((member, index) => (
              <SwiperSlide key={`${member.id}-${index}`}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className={styles.image}
                    />
                  </div>
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberTitle}>{member.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={handleNext}
            aria-label="Next"
            className={`${styles.navButton} ${styles.navButtonRight}`}
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </Container>
    </section>
  );
}
