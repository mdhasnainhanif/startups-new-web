"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./BuisnessSlider.module.css";
import Button from "../../Button";
import { ArrowRightIcon } from "../../icons";

const videos = [
  { img: "/assets/images/man.jpg" },
  { img: "/assets/images/man.jpg" },
  { img: "/assets/images/man.jpg" },
  { img: "/assets/images/man.jpg" },
  { img: "/assets/images/man.jpg" },
  { img: "/assets/images/man.jpg" },
];

const BusinessSlider: React.FC = () => {
  return (
    <section className={`${styles.section} sectionPadding`}>
      {/* Background Image */}
      <div className={styles.rocketWrapper}>
        {/* <Image
    src="/assets/images/rocket1.webp"
    alt="Rocket"
    fill
    className={styles.rocketImage}
  /> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-2xl lg:text-5xl font-semibold text-white">
          Growing <span className="text-teal-400">Businesses</span> Need Real Support
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          You put in the work but the momentum slips. Your outreach slows down. Your efforts get scattered. Nothing stays consistent.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#181339] rounded-xl p-4 flex flex-col items-center relative group">
                <div
                  className={`relative w-full h-64 md:h-72 rounded-lg overflow-hidden ${styles.videoCard}`}
                >
                  <Image
                    src={video.img}
                    alt="Video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Button
            href="#"
            variant="primary"
            icon={<ArrowRightIcon style={{ fill: "#fff" }} />}
            iconPosition="right"
          >
            Book A Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSlider;
