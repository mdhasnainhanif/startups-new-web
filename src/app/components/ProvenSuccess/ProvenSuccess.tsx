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
}

interface PortfolioImage {
  normal: string;
  zoom: string;
}

// Web Development Portfolio Images
const WEB_DEV_PORTFOLIO: PortfolioImage[] = [
  {
    normal: '/assets/images/portfolio/web-dev/1/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/1/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/2/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/2/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/3/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/3/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/4/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/4/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/5/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/5/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/6/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/6/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/7/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/7/website.jpg',
  },
  {
    normal: '/assets/images/portfolio/web-dev/8/mockup.jpg',
    zoom: '/assets/images/portfolio/web-dev/8/website.jpg',
  },
];

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
      label: 'CMS',
      images: [
        '/assets/images/portfolio/cms/1.webp',
        '/assets/images/portfolio/cms/2.webp',
        '/assets/images/portfolio/cms/3.webp',
        '/assets/images/portfolio/cms/4.webp',
        '/assets/images/portfolio/cms/5.webp',
        '/assets/images/portfolio/cms/6.webp',
        '/assets/images/portfolio/cms/7.webp',
        '/assets/images/portfolio/cms/8.webp',
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
      label: 'Ecommerce',
      images: [
        '/assets/images/portfolio/ecommerce/1.webp',
        '/assets/images/portfolio/ecommerce/2.webp',
        '/assets/images/portfolio/ecommerce/3.webp',
        '/assets/images/portfolio/ecommerce/4.webp',
        '/assets/images/portfolio/ecommerce/5.webp',
        '/assets/images/portfolio/ecommerce/6.webp',
        '/assets/images/portfolio/ecommerce/7.webp',
        '/assets/images/portfolio/ecommerce/8.webp',
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
      label: 'Portal',
      images: [
        '/assets/images/portfolio/portal/1.webp',
        '/assets/images/portfolio/portal/2.webp',
        '/assets/images/portfolio/portal/3.webp',
        '/assets/images/portfolio/portal/4.webp',
        '/assets/images/portfolio/portal/5.webp',
        '/assets/images/portfolio/portal/6.webp',
        '/assets/images/portfolio/portal/7.webp',
        '/assets/images/portfolio/portal/8.webp',
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
  ],
};

interface ProvenSuccessProps {
  data?: ProvenSuccessData;
  variant?: string;
}

// Custom Image Lightbox Component
const ImageLightbox = ({ 
  isOpen, 
  onClose, 
  imageUrl 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imageUrl: string | null;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      className={styles.lightboxOverlay}
      onClick={onClose}
    >
      <div
        className={styles.lightboxContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={styles.lightboxCloseButton}
          aria-label="Close image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={imageUrl}
          alt="Portfolio zoom"
          className={styles.lightboxImage}
        />
      </div>
    </div>
  );
};

const ProvenSuccess = ({ data, variant }: ProvenSuccessProps) => {
  const provenSuccessData = data || PROVEN_SUCCESS_DATA;
  const isWebDevelopment = variant === 'web-development';
  
  // For web development variant, we don't need tabs
  const filteredTabs = isWebDevelopment ? [] : provenSuccessData.tabs;

  const [activeTab, setActiveTab] = useState<string>(
    filteredTabs.length > 0 ? filteredTabs[0].id : ''
  );
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [displayedTabId, setDisplayedTabId] = useState<string>(
    filteredTabs.length > 0 ? filteredTabs[0].id : ''
  );
  const [displayedCategoryId, setDisplayedCategoryId] = useState<string>('');
  const swiperRef = useRef<SwiperType | null>(null);
  const tabsSwiperRef = useRef<SwiperType | null>(null);
  const [isTabsSwiperBeginning, setIsTabsSwiperBeginning] = useState(true);
  const [isTabsSwiperEnd, setIsTabsSwiperEnd] = useState(false);
  const categoriesScrollRef = useRef<HTMLDivElement>(null);
  
  // Image lightbox state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentTab = filteredTabs.find((tab) => tab.id === activeTab) || filteredTabs[0];
  const displayedTab = filteredTabs.find((tab) => tab.id === displayedTabId) || filteredTabs[0];

  // Handle fade effect when tab or category changes (Bootstrap-like smooth fade)
  useEffect(() => {
    if (!isWebDevelopment && activeTab) {
      // Start fade out
      setIsFading(true);

      // After fade out completes (300ms), change content and fade in
      const fadeTimer = setTimeout(() => {
        setDisplayedTabId(activeTab);
        // Small delay to ensure DOM update, then fade in
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 300);

      return () => clearTimeout(fadeTimer);
    }
  }, [activeTab, isWebDevelopment]);

  // Sync Swiper to active tab when changed programmatically (for mobile)
  useEffect(() => {
    if (tabsSwiperRef.current && !isWebDevelopment) {
      const activeIndex = filteredTabs.findIndex((tab) => tab.id === activeTab);
      if (activeIndex !== -1) {
        tabsSwiperRef.current.slideTo(activeIndex);
      }
    }
  }, [activeTab, isWebDevelopment, filteredTabs]);

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
      <Container maxWidth="xl" className="px-0">
        {/* Header Section */}
        <div className={styles.header + " sectionHeading forH2"}>
          <h2>
            <span className="text-white">Proven </span>
            <span className="text-[#0fdac2]">{provenSuccessData.headline.highlighted}</span>
            <span className="text-white"> in Every Project</span>
          </h2>
          <p className={styles.description}>{provenSuccessData.description}</p>
        </div>

        {/* Tabs Swiper - Only show if not web-development variant */}
        {!isWebDevelopment && (
          <>
            {/* Tabs - Desktop/Tablet */}
            <div className={styles.tabsContainer}>
              <div className={`swiper-button-prev ${styles.navArrow} ${styles.navArrowLeft} ${isTabsSwiperBeginning ? styles.navArrowDisabled : ''}`} />

              <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  tabsSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setIsTabsSwiperBeginning(swiper.isBeginning);
                  setIsTabsSwiperEnd(swiper.isEnd);
                }}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                spaceBetween={0}
                slidesPerView="auto"
                className={styles.tabsSwiper}
              >
                {provenSuccessData.tabs.map((tab) => (
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

              <div className={`swiper-button-next ${styles.navArrow} ${styles.navArrowRight} ${isTabsSwiperEnd ? styles.navArrowDisabled : ''}`} />
            </div>

            {/* Tabs - Mobile */}
            <div className={styles.tabsContainerMobile}>
              {/* Left Arrow */}
              <button
                onClick={() => tabsSwiperRef.current?.slidePrev()}
                disabled={isTabsSwiperBeginning}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all ${isTabsSwiperBeginning
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
                onBeforeInit={(swiper) => {
                  tabsSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setIsTabsSwiperBeginning(swiper.isBeginning);
                  setIsTabsSwiperEnd(swiper.isEnd);
                  const activeIndex = swiper.activeIndex;
                  if (provenSuccessData.tabs[activeIndex]) {
                    const selectedTab = provenSuccessData.tabs[activeIndex];
                    setActiveTab(selectedTab.id);
                  }
                }}
                className={styles.tabsSwiper}
                style={{ paddingLeft: "3rem", paddingRight: "3rem", overflow: "hidden" }}
              >
                {provenSuccessData.tabs.map((tab) => (
                  <SwiperSlide key={tab.id} style={{ width: "100%" }}>
                    <div className="flex justify-center w-full">
                      <button
                        onClick={() => {
                          setActiveTab(tab.id);
                          // Sync swiper to active tab
                          const tabIndex = provenSuccessData.tabs.findIndex((t) => t.id === tab.id);
                          if (tabsSwiperRef.current && tabIndex !== -1) {
                            tabsSwiperRef.current.slideTo(tabIndex);
                          }
                        }}
                        className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                        style={{ margin: 0 }}
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
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all ${isTabsSwiperEnd
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
          </>
        )}

        {/* Images Grid */}
        {isWebDevelopment ? (
          // Web Development Portfolio Grid
          <div className={styles.portfolioGrid}>
            {WEB_DEV_PORTFOLIO.map((item, index) => (
              <div
                key={index}
                className={styles.portfolioItem}
                onClick={() => setSelectedImage(item.zoom)}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={item.normal}
                    alt={`Web Development Portfolio ${index + 1}`}
                    className={styles.portfolioImage}
                  />
                  <div className={styles.overlay}>
                    <svg
                      className={styles.zoomIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Original Tabs-based Grid
          <div
            key={displayedTabId}
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 transition-opacity duration-300 ease-in-out ${isFading ? "opacity-0" : "opacity-100"
              }`}
          >
            {displayedTab.images.map((image, index) => (
              <div
                key={`${displayedTabId}-${index}`}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${displayedTab.label} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Image Lightbox */}
        <ImageLightbox
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage}
        />
      </Container>
    </section>
  );
};

export default ProvenSuccess;

