'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from '../Container';
import styles from './ProvenSuccess.module.css';

interface TabData {
  id: string;
  label: string;
  images: string[];
  gridItems: Array<{
    id: string;
    label: string;
    icon?: string;
  }>;
}

interface ProvenSuccessData {
  headline: {
    text: string;
    highlighted: string;
  };
  description: string;
  tabs: TabData[];
  categories: Array<{
    id: string;
    label: string;
  }>;
}

const PROVEN_SUCCESS_DATA: ProvenSuccessData = {
  headline: {
    text: 'Proven Success in Every Project',
    highlighted: 'Success',
  },
  description:
    'Your Smart AI Business Team brings a fully loaded AI ecosystem for creative design and analytics automation — premium tools, no extra cost, no hassle.',
  tabs: [
    {
      id: 'branding-kit',
      label: 'Branding Kit',
      images: [
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
        '/assets/images/aipower4.png',
        '/assets/images/aipower5.png',
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
      ],
      gridItems: [
        { id: '1', label: 'Logo Design' },
        { id: '2', label: 'Brand Identity' },
        { id: '3', label: 'Business Cards' },
        { id: '4', label: 'Letterhead' },
        { id: '5', label: 'Envelope' },
        { id: '6', label: 'Email Signature' },
        { id: '7', label: 'Social Media Kit' },
        { id: '8', label: 'Brand Guidelines' },
        { id: '9', label: 'Color Palette' },
        { id: '10', label: 'Typography' },
        { id: '11', label: 'Icon Set' },
        { id: '12', label: 'Pattern Design' },
        { id: '13', label: 'Stationery Set' },
        { id: '14', label: 'Packaging Design' },
        { id: '15', label: 'Merchandise' },
        { id: '16', label: 'Brand Book' },
        { id: '17', label: 'Logo Variations' },
        { id: '18', label: 'Favicon Set' },
        { id: '19', label: 'Watermark' },
        { id: '20', label: 'Brand Assets' },
        { id: '21', label: 'Templates' },
        { id: '22', label: 'Mockups' },
        { id: '23', label: 'Presentation' },
        { id: '24', label: 'Documentation' },
      ],
    },
    {
      id: 'logo-design',
      label: 'Logo Design',
      images: [
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
        '/assets/images/aipower4.png',
        '/assets/images/aipower5.png',
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
      ],
      gridItems: [
        { id: '1', label: 'Primary Logo' },
        { id: '2', label: 'Secondary Logo' },
        { id: '3', label: 'Icon Logo' },
        { id: '4', label: 'Wordmark' },
        { id: '5', label: 'Symbol' },
        { id: '6', label: 'Monogram' },
        { id: '7', label: 'Logo Variations' },
        { id: '8', label: 'Color Versions' },
        { id: '9', label: 'Black & White' },
        { id: '10', label: 'Horizontal' },
        { id: '11', label: 'Vertical' },
        { id: '12', label: 'Square' },
        { id: '13', label: 'Favicon' },
        { id: '14', label: 'App Icon' },
        { id: '15', label: 'Social Media' },
        { id: '16', label: 'Print Ready' },
        { id: '17', label: 'Web Ready' },
        { id: '18', label: 'Vector Files' },
        { id: '19', label: 'Raster Files' },
        { id: '20', label: 'Logo Guidelines' },
        { id: '21', label: 'Usage Rules' },
        { id: '22', label: 'Spacing Guide' },
        { id: '23', label: 'Size Variations' },
        { id: '24', label: 'File Formats' },
      ],
    },
    {
      id: 'social-media-post',
      label: 'Social Media Post',
      images: [
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
        '/assets/images/aipower4.png',
        '/assets/images/aipower5.png',
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
      ],
      gridItems: [
        { id: '1', label: 'Facebook Post' },
        { id: '2', label: 'Instagram Post' },
        { id: '3', label: 'Twitter Post' },
        { id: '4', label: 'LinkedIn Post' },
        { id: '5', label: 'Story Design' },
        { id: '6', label: 'Reel Cover' },
        { id: '7', label: 'Carousel' },
        { id: '8', label: 'Banner' },
        { id: '9', label: 'Cover Photo' },
        { id: '10', label: 'Profile Picture' },
        { id: '11', label: 'Highlight Cover' },
        { id: '12', label: 'Pinterest Pin' },
        { id: '13', label: 'YouTube Thumbnail' },
        { id: '14', label: 'TikTok Cover' },
        { id: '15', label: 'Snapchat Filter' },
        { id: '16', label: 'WhatsApp Status' },
        { id: '17', label: 'Template Set' },
        { id: '18', label: 'Quote Card' },
        { id: '19', label: 'Infographic' },
        { id: '20', label: 'Announcement' },
        { id: '21', label: 'Event Poster' },
        { id: '22', label: 'Promotion' },
        { id: '23', label: 'Testimonial' },
        { id: '24', label: 'Case Study' },
      ],
    },
    {
      id: 'stationary',
      label: 'Stationary',
      images: [
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
        '/assets/images/aipower4.png',
        '/assets/images/aipower5.png',
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
      ],
      gridItems: [
        { id: '1', label: 'Business Card' },
        { id: '2', label: 'Letterhead' },
        { id: '3', label: 'Envelope' },
        { id: '4', label: 'Invoice' },
        { id: '5', label: 'Receipt' },
        { id: '6', label: 'Quote Template' },
        { id: '7', label: 'Proposal' },
        { id: '8', label: 'Report Cover' },
        { id: '9', label: 'Folder Design' },
        { id: '10', label: 'Presentation' },
        { id: '11', label: 'Notepad' },
        { id: '12', label: 'Sticky Notes' },
        { id: '13', label: 'Labels' },
        { id: '14', label: 'Tags' },
        { id: '15', label: 'Certificates' },
        { id: '16', label: 'Awards' },
        { id: '17', label: 'Diplomas' },
        { id: '18', label: 'Menus' },
        { id: '19', label: 'Programs' },
        { id: '20', label: 'Tickets' },
        { id: '21', label: 'Vouchers' },
        { id: '22', label: 'Gift Cards' },
        { id: '23', label: 'Brochures' },
        { id: '24', label: 'Flyers' },
      ],
    },
    {
      id: 'branding-kit1',
      label: 'Branding Kit',
      images: [
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
        '/assets/images/aipower4.png',
        '/assets/images/aipower5.png',
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
      ],
      gridItems: [
        { id: '1', label: 'Logo Design' },
        { id: '2', label: 'Brand Identity' },
        { id: '3', label: 'Business Cards' },
        { id: '4', label: 'Letterhead' },
        { id: '5', label: 'Envelope' },
        { id: '6', label: 'Email Signature' },
        { id: '7', label: 'Social Media Kit' },
        { id: '8', label: 'Brand Guidelines' },
        { id: '9', label: 'Color Palette' },
        { id: '10', label: 'Typography' },
        { id: '11', label: 'Icon Set' },
        { id: '12', label: 'Pattern Design' },
        { id: '13', label: 'Stationery Set' },
        { id: '14', label: 'Packaging Design' },
        { id: '15', label: 'Merchandise' },
        { id: '16', label: 'Brand Book' },
        { id: '17', label: 'Logo Variations' },
        { id: '18', label: 'Favicon Set' },
        { id: '19', label: 'Watermark' },
        { id: '20', label: 'Brand Assets' },
        { id: '21', label: 'Templates' },
        { id: '22', label: 'Mockups' },
        { id: '23', label: 'Presentation' },
        { id: '24', label: 'Documentation' },
      ],
    },
    {
      id: 'logo-design1',
      label: 'Logo Design',
      images: [
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
        '/assets/images/aipower4.png',
        '/assets/images/aipower5.png',
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
      ],
      gridItems: [
        { id: '1', label: 'Primary Logo' },
        { id: '2', label: 'Secondary Logo' },
        { id: '3', label: 'Icon Logo' },
        { id: '4', label: 'Wordmark' },
        { id: '5', label: 'Symbol' },
        { id: '6', label: 'Monogram' },
        { id: '7', label: 'Logo Variations' },
        { id: '8', label: 'Color Versions' },
        { id: '9', label: 'Black & White' },
        { id: '10', label: 'Horizontal' },
        { id: '11', label: 'Vertical' },
        { id: '12', label: 'Square' },
        { id: '13', label: 'Favicon' },
        { id: '14', label: 'App Icon' },
        { id: '15', label: 'Social Media' },
        { id: '16', label: 'Print Ready' },
        { id: '17', label: 'Web Ready' },
        { id: '18', label: 'Vector Files' },
        { id: '19', label: 'Raster Files' },
        { id: '20', label: 'Logo Guidelines' },
        { id: '21', label: 'Usage Rules' },
        { id: '22', label: 'Spacing Guide' },
        { id: '23', label: 'Size Variations' },
        { id: '24', label: 'File Formats' },
      ],
    },
    {
      id: 'social-media-post1',
      label: 'Social Media Post',
      images: [
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
        '/assets/images/aipower4.png',
        '/assets/images/aipower5.png',
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
      ],
      gridItems: [
        { id: '1', label: 'Facebook Post' },
        { id: '2', label: 'Instagram Post' },
        { id: '3', label: 'Twitter Post' },
        { id: '4', label: 'LinkedIn Post' },
        { id: '5', label: 'Story Design' },
        { id: '6', label: 'Reel Cover' },
        { id: '7', label: 'Carousel' },
        { id: '8', label: 'Banner' },
        { id: '9', label: 'Cover Photo' },
        { id: '10', label: 'Profile Picture' },
        { id: '11', label: 'Highlight Cover' },
        { id: '12', label: 'Pinterest Pin' },
        { id: '13', label: 'YouTube Thumbnail' },
        { id: '14', label: 'TikTok Cover' },
        { id: '15', label: 'Snapchat Filter' },
        { id: '16', label: 'WhatsApp Status' },
        { id: '17', label: 'Template Set' },
        { id: '18', label: 'Quote Card' },
        { id: '19', label: 'Infographic' },
        { id: '20', label: 'Announcement' },
        { id: '21', label: 'Event Poster' },
        { id: '22', label: 'Promotion' },
        { id: '23', label: 'Testimonial' },
        { id: '24', label: 'Case Study' },
      ],
    },
    {
      id: 'stationary1',
      label: 'Stationary',
      images: [
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
        '/assets/images/aipower4.png',
        '/assets/images/aipower5.png',
        '/assets/images/aipower1.png',
        '/assets/images/aipower2.png',
        '/assets/images/aipower3.png',
      ],
      gridItems: [
        { id: '1', label: 'Business Card' },
        { id: '2', label: 'Letterhead' },
        { id: '3', label: 'Envelope' },
        { id: '4', label: 'Invoice' },
        { id: '5', label: 'Receipt' },
        { id: '6', label: 'Quote Template' },
        { id: '7', label: 'Proposal' },
        { id: '8', label: 'Report Cover' },
        { id: '9', label: 'Folder Design' },
        { id: '10', label: 'Presentation' },
        { id: '11', label: 'Notepad' },
        { id: '12', label: 'Sticky Notes' },
        { id: '13', label: 'Labels' },
        { id: '14', label: 'Tags' },
        { id: '15', label: 'Certificates' },
        { id: '16', label: 'Awards' },
        { id: '17', label: 'Diplomas' },
        { id: '18', label: 'Menus' },
        { id: '19', label: 'Programs' },
        { id: '20', label: 'Tickets' },
        { id: '21', label: 'Vouchers' },
        { id: '22', label: 'Gift Cards' },
        { id: '23', label: 'Brochures' },
        { id: '24', label: 'Flyers' },
      ],
    },
  ],
  categories: [
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'food-beverage', label: 'Food + Beverage' },
    { id: 'health-lifestyle', label: 'Health + Lifestyle' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'technology', label: 'Technology' },
    { id: 'retail', label: 'Retail' },
    { id: 'education', label: 'Education' },
    { id: 'finance', label: 'Finance' },
  ],
};

const ProvenSuccess = () => {
  const [activeTab, setActiveTab] = useState<string>(PROVEN_SUCCESS_DATA.tabs[0].id);
  const [activeCategory, setActiveCategory] = useState<string>(PROVEN_SUCCESS_DATA.categories[0].id);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const tabsSwiperRef = useRef<SwiperType | null>(null);
  const [isTabsSwiperBeginning, setIsTabsSwiperBeginning] = useState(true);
  const [isTabsSwiperEnd, setIsTabsSwiperEnd] = useState(false);
  const categoriesScrollRef = useRef<HTMLDivElement>(null);

  const currentTab = PROVEN_SUCCESS_DATA.tabs.find((tab) => tab.id === activeTab) || PROVEN_SUCCESS_DATA.tabs[0];

  // Handle fade effect when tab or category changes
  useEffect(() => {
    setIsFading(true);
    const fadeOutTimer = setTimeout(() => {
      setIsFading(false);
    }, 150);

    return () => clearTimeout(fadeOutTimer);
  }, [activeTab, activeCategory]);

  // Sync Swiper to active tab when changed programmatically (for mobile)
  useEffect(() => {
    if (tabsSwiperRef.current) {
      const activeIndex = PROVEN_SUCCESS_DATA.tabs.findIndex((tab) => tab.id === activeTab);
      if (activeIndex !== -1) {
        tabsSwiperRef.current.slideTo(activeIndex);
      }
    }
  }, [activeTab]);

  const scrollCategories = (direction: 'left' | 'right'): void => {
    if (categoriesScrollRef.current) {
      const scrollAmount = 150;
      categoriesScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={`sectionPadding provenSuccess ${styles.section} ${styles.ProvenSuccess}`}>
      <Container maxWidth="2xl" className="px-0">
        {/* Header Section */}
        <div className={styles.header + " sectionHeading forH2"}>
          <h2>
            <span className="text-white">Proven </span>
            <span className="text-[#0fdac2]">{PROVEN_SUCCESS_DATA.headline.highlighted}</span>
            <span className="text-white"> in Every Project</span>
          </h2>
          <p className={styles.description}>{PROVEN_SUCCESS_DATA.description}</p>
        </div>

        {/* Tabs - Desktop View */}
        <div className={`${styles.tabsContainer} hidden md:flex`}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`${styles.navArrow} ${styles.navArrowLeft} ${
              isBeginning ? styles.navArrowDisabled : ''
            }`}
            aria-label="Previous tabs"
            type="button"
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
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Navigation]}
            slidesPerView="auto"
            slidesPerGroup={1}
            spaceBetween={10}
            speed={500}
            className={styles.swiperContainer}
          >
            {PROVEN_SUCCESS_DATA.tabs.map((tab) => (
              <SwiperSlide key={tab.id} className={styles.swiperSlide}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                >
                  {tab.label}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`${styles.navArrow} ${styles.navArrowRight} ${
              isEnd ? styles.navArrowDisabled : ''
            }`}
            aria-label="Next tabs"
            type="button"
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

        {/* Tabs - Mobile View with Swiper */}
        <div className={`${styles.tabsContainerMobile} relative md:hidden`}>
          {/* Left Arrow */}
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

          {/* Swiper for Tabs */}
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
              if (PROVEN_SUCCESS_DATA.tabs[activeIndex]) {
                setActiveTab(PROVEN_SUCCESS_DATA.tabs[activeIndex].id);
              }
            }}
            className={styles.tabsSwiper}
            style={{ paddingLeft: "3rem", paddingRight: "3rem", overflow: "hidden" }}
          >
            {PROVEN_SUCCESS_DATA.tabs.map((tab) => (
              <SwiperSlide key={tab.id} style={{ width: "100%" }}>
                <div className="flex justify-center w-full">
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                      // Sync swiper to active tab
                      const tabIndex = PROVEN_SUCCESS_DATA.tabs.findIndex((t) => t.id === tab.id);
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

          {/* Right Arrow */}
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

        {/* Categories Tabs */}
        <div ref={categoriesScrollRef} className={styles.categoriesContainer}>
          {PROVEN_SUCCESS_DATA.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${styles.categoryTab} ${activeCategory === category.id ? styles.activeCategoryTab : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{
              width: `${((PROVEN_SUCCESS_DATA.categories.findIndex((cat) => cat.id === activeCategory) + 1) / PROVEN_SUCCESS_DATA.categories.length) * 100}%`,
            }}
          />
        </div>

        {/* Images Grid */}
        <div 
          key={`${activeTab}-${activeCategory}`} 
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 transition-opacity duration-300 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentTab.images.map((image, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="aspect-square bg-[rgba(29,14,87,0.3)] rounded-lg overflow-hidden border border-[rgba(101,59,255,0.2)]"
            >
              <img
                src={image}
                alt={`${currentTab.label} ${index + 1}`}
                className="w-full h-full object-cover"
                key={`${activeTab}-img-${index}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProvenSuccess;

