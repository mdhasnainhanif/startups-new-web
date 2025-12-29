'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from '../Container';
import styles from './AiPowerDesign.module.css';

interface GridItem {
  id: string;
  label: string;
  image: string;
}

interface TabData {
  id: string;
  label: string;
  image: string;
  deliverables: GridItem[];
  gridItems: number;
}

export interface AiPowerDesignData {
  headline: {
    text: string;
    highlighted: string[];
  };
  description: string;
  tabs: TabData[];
  deliverablesTitle?: string;
  lifetimeValue: {
    heading: string;
    text: string;
  };
}

interface AiPowerDesignProps {
  data?: AiPowerDesignData;
}

const AI_POWER_DESIGN_DATA: AiPowerDesignData = {
  headline: {
    text: 'Your AI-Powered Design Team Handles Every Design Your Business Needs in the First 22 Days.',
    highlighted: ['AI-Powered Design Team', 'First 22 Days'],
  },
  description:
    'Instead of managing freelancers or paying agency premiums, you get a full design team that builds your entire visual identity from scratch — fast, clean, and ready for real business use.',
  tabs: [
    {
      id: 'website-design',
      label: 'Website Design',
      image: '/assets/images/pakage/ui-ux-web-design.webp',
      deliverables: [
        { id: '1', label: 'Branding & Identity Design', image: '/assets/images/designer-page/branding-identity Design.webp' },
        { id: '2', label: 'Logo Design', image: '/assets/images/designer-page/logo-design.webp' },
        { id: '3', label: 'Typography & Lettering Design', image: '/assets/images/designer-page/typography-lettering-design.webp' },
        { id: '4', label: 'Stationery & Corporate Collateral', image: '/assets/images/designer-page/stationery-corporate-collateral.webp' },
        { id: '5', label: 'Print Media Design', image: '/assets/images/designer-page/print-media-design.webp' },
        { id: '6', label: 'Packaging & Label Design', image: '/assets/images/designer-page/packaging-label-design.webp' },
        { id: '7', label: 'Product Mockup & Visualization', image: '/assets/images/designer-page/product-mockup-visualization.webp' },
        { id: '8', label: 'App UI/UX Design', image: '/assets/images/designer-page/app-ui-ux-design.webp' },
        { id: '9', label: 'Website UI/UX Design', image: '/assets/images/designer-page/website-ui-ux-design.webp' },
        { id: '10', label: 'Dashboard & Web Application Design', image: '/assets/images/designer-page/dashboard-web-application-design.webp' },
        { id: '11', label: 'Social Media Content Design', image: '/assets/images/designer-page/social-media-content-design.webp' },
        { id: '12', label: 'Social Media Advertising Creatives', image: '/assets/images/designer-page/social-media-content-design.webp' },
        { id: '13', label: 'Digital Marketing Assets', image: '/assets/images/designer-page/social-media-content-design.webp' },
        { id: '14', label: 'Presentation & Pitch Deck Design', image: '/assets/images/aipower4.webp' },
        { id: '15', label: 'Infographic Design', image: '/assets/images/aipower2.webp' },
        { id: '16', label: 'Illustration & Digital Art', image: '/assets/images/aipower3.webp' },
        { id: '17', label: 'Motion Graphics Design', image: '/assets/images/aipower1.webp' },
        { id: '18', label: 'Video Editing & Graphic Overlays', image: '/assets/images/aipower2.webp' },
        { id: '19', label: '3D Modeling & Product Rendering', image: '/assets/images/aipower3.webp' },
        { id: '20', label: 'Advertising & Campaign Design', image: '/assets/images/aipower4.webp' },
        { id: '21', label: 'Brochure, Flyer & Catalog Design', image: '/assets/images/aipower5.webp' },
        { id: '22', label: 'Ebook & Publication Layout Design', image: '/assets/images/aipower5.webp' },
        { id: '23', label: 'Email Newsletter & HTML Template Design', image: '/assets/images/aipower1.webp' },
        { id: '24', label: 'Environmental & Signage Design', image: '/assets/images/aipower2.webp' },
      ],
      gridItems: 24,
    },
    {
      id: 'branding',
      label: 'Branding',
      image: '/assets/images/aipower1.webp',
      deliverables: [
        { id: '1', label: 'Logo Design', image: '/assets/images/aipower1.webp' },
        { id: '2', label: 'Brand Identity', image: '/assets/images/aipower2.webp' },
        { id: '3', label: 'Color Palette', image: '/assets/images/aipower3.webp' },
        { id: '4', label: 'Typography', image: '/assets/images/aipower4.webp' },
        { id: '5', label: 'Business Cards', image: '/assets/images/aipower5.webp' },
        { id: '6', label: 'Letterhead', image: '/assets/images/aipower1.webp' },
        { id: '7', label: 'Envelope Design', image: '/assets/images/aipower2.webp' },
        { id: '8', label: 'Email Signature', image: '/assets/images/aipower3.webp' },
        { id: '9', label: 'Social Media Kit', image: '/assets/images/aipower4.webp' },
        { id: '10', label: 'Brand Guidelines', image: '/assets/images/aipower5.webp' },
        { id: '11', label: 'Icon Set', image: '/assets/images/aipower1.webp' },
        { id: '12', label: 'Pattern Design', image: '/assets/images/aipower2.webp' },
        { id: '13', label: 'Stationery Set', image: '/assets/images/aipower3.webp' },
        { id: '14', label: 'Packaging Design', image: '/assets/images/aipower4.webp' },
        { id: '15', label: 'Merchandise', image: '/assets/images/aipower5.webp' },
        { id: '16', label: 'Brand Book', image: '/assets/images/aipower1.webp' },
        { id: '17', label: 'Logo Variations', image: '/assets/images/aipower2.webp' },
        { id: '18', label: 'Favicon Set', image: '/assets/images/aipower3.webp' },
        { id: '19', label: 'Watermark', image: '/assets/images/aipower4.webp' },
        { id: '20', label: 'Brand Assets', image: '/assets/images/aipower5.webp' },
        { id: '21', label: 'Templates', image: '/assets/images/aipower1.webp' },
        { id: '22', label: 'Mockups', image: '/assets/images/aipower2.webp' },
        { id: '23', label: 'Presentation', image: '/assets/images/aipower3.webp' },
        { id: '24', label: 'Documentation', image: '/assets/images/aipower4.webp' },
      ],
      gridItems: 24,
    },
    {
      id: 'social-media',
      label: 'Social Media',
      image: '/assets/images/aipower1.webp',
      deliverables: [
        { id: '1', label: 'Facebook Posts', image: '/assets/images/aipower1.webp' },
        { id: '2', label: 'Instagram Posts', image: '/assets/images/aipower2.webp' },
        { id: '3', label: 'LinkedIn Posts', image: '/assets/images/aipower3.webp' },
        { id: '4', label: 'Twitter Posts', image: '/assets/images/aipower4.webp' },
        { id: '5', label: 'Stories Design', image: '/assets/images/aipower5.webp' },
        { id: '6', label: 'Reels Graphics', image: '/assets/images/aipower1.webp' },
        { id: '7', label: 'Cover Photos', image: '/assets/images/aipower2.webp' },
        { id: '8', label: 'Profile Pictures', image: '/assets/images/aipower3.webp' },
        { id: '9', label: 'Banner Ads', image: '/assets/images/aipower4.webp' },
        { id: '10', label: 'Carousel Posts', image: '/assets/images/aipower5.webp' },
        { id: '11', label: 'Quote Graphics', image: '/assets/images/aipower1.webp' },
        { id: '12', label: 'Infographics', image: '/assets/images/aipower2.webp' },
        { id: '13', label: 'Event Posters', image: '/assets/images/aipower3.webp' },
        { id: '14', label: 'Promotional', image: '/assets/images/aipower4.webp' },
        { id: '15', label: 'Announcements', image: '/assets/images/aipower5.webp' },
        { id: '16', label: 'Testimonials', image: '/assets/images/aipower1.webp' },
        { id: '17', label: 'Case Studies', image: '/assets/images/aipower2.webp' },
        { id: '18', label: 'Tutorial Graphics', image: '/assets/images/aipower3.webp' },
        { id: '19', label: 'Holiday Posts', image: '/assets/images/aipower4.webp' },
        { id: '20', label: 'Trending Topics', image: '/assets/images/aipower5.webp' },
        { id: '21', label: 'Video Thumbnails', image: '/assets/images/aipower1.webp' },
        { id: '22', label: 'Pinterest Pins', image: '/assets/images/aipower2.webp' },
        { id: '23', label: 'YouTube Graphics', image: '/assets/images/aipower3.webp' },
        { id: '24', label: 'Content Calendar', image: '/assets/images/aipower4.webp' },
      ],
      gridItems: 24,
    },
  ],
  lifetimeValue: {
    heading: 'Lifetime Value:',
    text: "You're not just receiving \"designs.\" You're receiving the full brand system your business will use for years — online and offline",
  },
};

const AiPowerDesign = ({ data = AI_POWER_DESIGN_DATA }: AiPowerDesignProps) => {
  const [activeTab, setActiveTab] = useState<string>(data.tabs[0].id);
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const currentTab = data.tabs.find((tab) => tab.id === activeTab) || data.tabs[0];

  // Update swiper when tab changes to reset to beginning
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      setIsBeginning(true);
      setIsEnd(false);
    }
  }, [activeTab]);

  // Get the current image based on hover or default
  const getCurrentImage = () => {
    if (hoveredItemIndex !== null && currentTab.deliverables[hoveredItemIndex]) {
      return currentTab.deliverables[hoveredItemIndex].image;
    }
    return currentTab.image;
  };

  // Reset hover when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setHoveredItemIndex(null);
  };

  const renderHeadline = () => {
    let text = data.headline.text;
    data.headline.highlighted.forEach((highlight) => {
      text = text.replace(highlight, `<span class="${styles.highlighted}">${highlight}</span>`);
    });
    return { __html: text };
  };

  return (
    <section className={`sectionPadding ${styles.section} aiPowerDesignSection`}>
      <Container maxWidth="xl" className="px-0">
        {/* Header Section */}
        <div className={`sectionHeading forH2 text-center text-[#ffffff] max-w-5xl md:mx-auto`}>
          <h2 dangerouslySetInnerHTML={renderHeadline()} />
          <p className={styles.description}>{data.description}</p>
        </div>

        {/* Main Content Box */}
        <div className={styles.mainContentBox}>
          {/* Left Section - Deliverables */}
          <div className={styles.leftSection}>
            {/* Deliverables Section */}
            <div className={styles.deliverablesSection}>
              <h3 className={styles.deliverablesTitle}>
                {data.deliverablesTitle ? (
                  <>
                    {data.deliverablesTitle.split('22-Day').map((part, index, array) => (
                      <span key={index}>
                        {part}
                        {index < array.length - 1 && <span className={styles.highlighted}>22-Day</span>}
                      </span>
                    ))}
                  </>
                ) : (
                  <>Your <span className={styles.highlighted}>22-Day</span> Deliverable Package Includes:</>
                )}
              </h3>

              {/* Grid - Desktop Only */}
              <div className="hidden lg:block">
                <div className={styles.gridContainer}>
                  {currentTab.deliverables.map((item, index) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredItemIndex(index)}
                      onMouseLeave={() => setHoveredItemIndex(null)}
                      onClick={() => handleTabChange(currentTab.id)}
                      className={`${styles.gridItem} ${index === 0 ? styles.gridItemActive : ''}`}
                    >
                      <p className="p-0 h-full flex items-center justify-center">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Swiper - Mobile Only */}
              <div className="block lg:hidden relative w-full max-w-full overflow-hidden">
                {/* Left Arrow */}
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={isBeginning}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all ${isBeginning
                    ? "opacity-30 cursor-not-allowed bg-[#1b1849]"
                    : "opacity-100 hover:bg-[#0fdac2]/80 bg-[#0fdac2]"
                    }`}
                  aria-label="Previous deliverable"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoHeight={true}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                    setHoveredItemIndex(swiper.activeIndex);
                  }}
                  onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                    setHoveredItemIndex(swiper.activeIndex);
                  }}
                  className="w-full max-w-full"
                >
                  {currentTab.deliverables.map((item) => (
                    <SwiperSlide key={item.id} className="w-full">
                      <div className={`
                        bg-[#643bff] text-white
                        py-3 px-4 rounded-lg text-center font-semibold 
                        flex items-center justify-center
                        border border-[#643bff] shadow-[0_0.25rem_0.75rem_rgba(101,59,255,0.4)]
                        w-full
                        text-sm
                        sm:text-[0.95rem]
                        whitespace-normal break-words
                      `}>
                        {item.label}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Right Arrow */}
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={isEnd}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all ${isEnd
                    ? "opacity-30 cursor-not-allowed bg-[#1b1849]"
                    : "opacity-100 hover:bg-[#0fdac2]/80 bg-[#0fdac2]"
                    }`}
                  aria-label="Next deliverable"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Lifetime Value */}
              <div className={styles.lifetimeValue}>
                <h4 className={styles.lifetimeValueHeading}>{data.lifetimeValue.heading}</h4>
                <p className={styles.lifetimeValueText}>{data.lifetimeValue.text}</p>
              </div>

              <img src="/assets/images/1.webp" alt="arrow icon" loading="lazy" className={styles.aeroicon} />
            </div>
          </div>

          {/* Right Section - Image */}
          <div className={styles.rightSection}>
            <div className={styles.imageWrapper}>
              <img
                key={`${activeTab}-${hoveredItemIndex}`}
                src={getCurrentImage()}
                loading="lazy"
                alt={hoveredItemIndex !== null ? currentTab.deliverables[hoveredItemIndex]?.label : currentTab.label}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AiPowerDesign;

