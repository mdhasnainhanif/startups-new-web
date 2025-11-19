'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Container from '../Container';
import styles from './CompleteBusinessSetup.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

interface BrandingKitItem {
  id: string;
  number: string;
  label: string;
}

interface BenefitItem {
  id: string;
  text: string;
}

interface CompleteBusinessSetupData {
  heading: {
    part1: string;
    price: string;
    part2: string;
  };
  brandingKits: {
    title: {
      highlight: string;
      suffix: string;
    };
    items: BrandingKitItem[];
  };
  benefits: {
    title: string;
    items: BenefitItem[];
    footer: string;
  };
}

const COMPLETE_BUSINESS_SETUP_DATA: CompleteBusinessSetupData = {
  heading: {
    part1: 'Your Complete Business Design Setup — ',
    price: '$1,499',
    part2: ' One-Time',
  },
  brandingKits: {
    title: {
      highlight: 'Branding',
      suffix: ' KITs',
    },
    items: [
      { id: '1', number: '01', label: 'Social Covers' },
      { id: '2', number: '02', label: 'Business Card' },
      { id: '3', number: '03', label: 'Letterhead' },
      { id: '4', number: '04', label: 'Invoice Design' },
      { id: '5', number: '05', label: 'Flyer Design' },
      { id: '6', number: '06', label: 'Bag Design' },
      { id: '7', number: '07', label: 'Social Covers' },
      { id: '8', number: '08', label: 'Business Card' },
      { id: '9', number: '09', label: 'Letterhead' },
      { id: '10', number: '10', label: 'Invoice Design' },
      { id: '11', number: '11', label: 'Flyer Design' },
      { id: '12', number: '12', label: 'Bag Design' },
    ],
  },
  benefits: {
    title: 'You get:',
    items: [
      { id: '1', text: 'A full design team' },
      { id: '2', text: '22 essential business design assets' },
      { id: '3', text: 'AI-powered efficiency' },
      { id: '4', text: 'Unlimited revisions during the 22 days' },
      { id: '5', text: 'All files delivered print-ready and web-ready' },
    ],
    footer:
      'No hidden fees. No retainer. No extra charges. Just everything your business needs to look established from day one.',
  },
};

const CompleteBusinessSetup = () => {
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

  const { heading, brandingKits, benefits } = COMPLETE_BUSINESS_SETUP_DATA;

  return (
    <section className="sectionPadding bg-gradient-to-br from-[#1a0b3f] via-[#05001a] to-[#020014] relative overflow-hidden">
      <Container maxWidth="xl">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            {heading.part1}
            <span className="text-[#0fdac2]">{heading.price}</span>
            {heading.part2}
          </h2>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#21164c] rounded-2xl p-6 md:p-8 lg:p-10 border border-[rgba(100,59,255,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Branding KITs Slider */}
            <div className={`flex flex-col ${styles.sliderwrapper}`}>
              <div className="relative px-10 py-4">
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  disabled={isBeginning}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all ${
                    isBeginning ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
                  } ${styles.navButton}`}
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
                  className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all ${
                    isEnd ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'
                  } ${styles.navButton}`}
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
                  className={styles.brandingKitsSwiper}
                >
                  {Array.from({
                    length: Math.ceil(brandingKits.items.length / 6),
                  }).map((_, groupIndex) => (
                    <SwiperSlide key={groupIndex}>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {brandingKits.items
                          .slice(groupIndex * 6, (groupIndex + 1) * 6)
                          .map((item) => (
                            <div
                              key={item.id}
                              className="border-b border-[rgba(255,255,255,0.1)] pb-3"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-white text-sm font-medium">
                                  {item.number}.
                                </span>
                                <span className="text-white text-sm">
                                  {item.label}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Branding KITs Title */}
              <h3
                className={`text-3xl md:text-4xl font-semibold inline-block px-4 py-2 rounded-lg ${styles.brandingKitsTitle}`}
              >
                <span className={styles.highlighted}>
                  {brandingKits.title.highlight}
                </span>
                {brandingKits.title.suffix}
              </h3>
            </div>

            {/* Right Column - Benefits */}
            <div className="flex flex-col">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {benefits.title}
              </h3>

              <ul className="space-y-4 mb-6 flex-1">
                {benefits.items.map((benefit) => (
                  <li key={benefit.id} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-5 h-5">
                      <img
                        src="/assets/images/tick2.png"
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

              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {benefits.footer}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompleteBusinessSetup;
