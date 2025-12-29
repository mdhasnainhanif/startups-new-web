"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Container from "../Container";
import { PricingData } from "../../data/webDevelopment";
import styles from "./WebPricing.module.css";
import "swiper/css";
import "swiper/css/navigation";

interface WebPricingProps {
  data: PricingData;
}

export function WebPricing({ data }: WebPricingProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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

  return (
    <section className="sectionPadding bg-gradient-to-br from-[#1a0b3f] via-[#05001a] to-[#020014] relative overflow-hidden">
      <Container maxWidth="xl">
        {/* Main Heading */}
        <div className="text-center mb-12 sectionHeading forH2 md:max-w-3xl mx-auto">
          <h2 className="">
            {data.heading.part1}
            <span className="text-[#0fdac2]">{data.heading.price}</span>
            {data.heading.part2}
          </h2>
        </div>

        {/* Main Content Box */}
        <div className="realCostCard md:max-w-[80%] mx-auto bg-[#21164c] rounded-2xl p-6 md:p-8 lg:p-10 border border-[#6147c14d]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Website KITs Slider */}
            <div className="flex flex-col">
              <div className="relative px-6 md:px-10 py-4">
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  disabled={isBeginning}
                  className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all ${
                    isBeginning
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:opacity-80"
                  } w-10 h-10 rounded-full bg-[#1c1949] border border-[#2f2a63] text-white`}
                  aria-label="Previous"
                >
                  <svg
                    width="24"
                    height="24"
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

                <button
                  onClick={handleNext}
                  disabled={isEnd}
                  className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all ${
                    isEnd ? "opacity-30 cursor-not-allowed" : "hover:opacity-80"
                  } w-10 h-10 rounded-full bg-[#1c1949] border border-[#2f2a63] text-white`}
                  aria-label="Next"
                >
                  <svg
                    width="24"
                    height="24"
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

                {/* Swiper Slider */}
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                  onSlideChange={handleSlideChange}
                  className="w-full"
                >
                  {Array.from({
                    length: Math.ceil(data.websiteKits.items.length / 6),
                  }).map((_, groupIndex) => (
                    <SwiperSlide key={groupIndex}>
                      <div className="grid grid-cols-2 md:gap-x-6 gap-y-3 gap-x-2">
                        {data.websiteKits.items
                          .slice(groupIndex * 6, (groupIndex + 1) * 6)
                          .map((item, idx) => (
                            <div
                              key={idx}
                              className="pb-1 md:text-lg text-xs border-b border-[#2f2a63]"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-white font-medium">
                                  {item.number}.
                                </span>
                                <span className="text-white">{item.label}</span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Website KITs Title */}
              <h3 className="text-3xl md:text-4xl font-bold inline-block px-4 py-2 rounded-lg text-center w-full">
                <span className="text-[#0fdac2]">
                  {data.websiteKits.title.highlight}
                </span>
                {data.websiteKits.title.suffix}
              </h3>
            </div>

            {/* Right Column - Benefits */}
            <div className="flex flex-col">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {data.benefits.title}
              </h3>

              <ul className="space-y-4 mb-6 flex-1">
                {data.benefits.items.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-5 h-5">
                      <img
                        src="/assets/images/tick.webp"
                        alt="checkmark"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white text-base md:text-lg">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                {data.benefits.footer}
              </p>

              <div className="mt-4 p-4 bg-[#1c1949] rounded-lg border border-[#2f2a63]">
                <p className="text-white/90 text-sm">{data.longTermAdvantage}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/80 text-lg">{data.valueProposition}</p>
        </div>
      </Container>
    </section>
  );
}

