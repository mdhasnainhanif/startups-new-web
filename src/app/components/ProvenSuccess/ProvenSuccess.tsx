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
  // categories: Array<{
  //   id: string;
  //   label: string;
  // }>;
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
        '/assets/images/portfolio/branding-kit/1-min.jpg',
        '/assets/images/portfolio/branding-kit/2-min.jpg',
        '/assets/images/portfolio/branding-kit/3-min.jpg',
        '/assets/images/portfolio/branding-kit/4-min.jpg',
        '/assets/images/portfolio/branding-kit/5-min.jpg',
        '/assets/images/portfolio/branding-kit/6-min.jpg',
        '/assets/images/portfolio/branding-kit/7-min.jpg',
        '/assets/images/portfolio/branding-kit/8-min.jpg',
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
        '/assets/images/portfolio/logo-design/1-min.jpg',
        '/assets/images/portfolio/logo-design/2-min.jpg',
        '/assets/images/portfolio/logo-design/3-min.jpg',
        '/assets/images/portfolio/logo-design/4-min.jpg',
        '/assets/images/portfolio/logo-design/5-min.jpg',
        '/assets/images/portfolio/logo-design/6-min.jpg',
        '/assets/images/portfolio/logo-design/7-min.jpg',
        '/assets/images/portfolio/logo-design/8-min.jpg',
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
        '/assets/images/portfolio/social-media-post/1-min.jpg',
        '/assets/images/portfolio/social-media-post/2-min.jpg',
        '/assets/images/portfolio/social-media-post/3-min.jpg',
        '/assets/images/portfolio/social-media-post/4-min.jpg',
        '/assets/images/portfolio/social-media-post/5-min.jpg',
        '/assets/images/portfolio/social-media-post/6-min.jpg',
        '/assets/images/portfolio/social-media-post/7-min.jpg',
        '/assets/images/portfolio/social-media-post/8-min.jpg',
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
        '/assets/images/portfolio/stationary/1-min.jpg',
        '/assets/images/portfolio/stationary/2-min.jpg',
        '/assets/images/portfolio/stationary/3-min.jpg',
        '/assets/images/portfolio/stationary/4-min.jpg',
        '/assets/images/portfolio/stationary/5-min.jpg',
        '/assets/images/portfolio/stationary/6-min.jpg',
        '/assets/images/portfolio/stationary/7-min.jpg',
        '/assets/images/portfolio/stationary/8-min.jpg',
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
  // categories: [
  //   { id: 'agriculture', label: 'Agriculture' },
  //   { id: 'food-beverage', label: 'Food + Beverage' },
  //   { id: 'health-lifestyle', label: 'Health + Lifestyle' },
  //   { id: 'transportation', label: 'Transportation' },
  //   { id: 'technology', label: 'Technology' },
  //   { id: 'retail', label: 'Retail' },
  //   { id: 'education', label: 'Education' },
  //   { id: 'finance', label: 'Finance' },
  // ],
};

const ProvenSuccess = () => {
  // Filter to only show Social Media Post tab
  const socialMediaTab = PROVEN_SUCCESS_DATA.tabs.find((tab) => tab.id === 'social-media-post') || PROVEN_SUCCESS_DATA.tabs[0];
  const filteredTabs = [socialMediaTab];
  
  const [activeTab, setActiveTab] = useState<string>('social-media-post');
  // const [activeCategory, setActiveCategory] = useState<string>(PROVEN_SUCCESS_DATA.categories[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [displayedTabId, setDisplayedTabId] = useState<string>('social-media-post');
  // const [displayedCategoryId, setDisplayedCategoryId] = useState<string>(PROVEN_SUCCESS_DATA.categories[0].id);
  const [displayedCategoryId, setDisplayedCategoryId] = useState<string>('');
  const swiperRef = useRef<SwiperType | null>(null);
  const tabsSwiperRef = useRef<SwiperType | null>(null);
  const [isTabsSwiperBeginning, setIsTabsSwiperBeginning] = useState(true);
  const [isTabsSwiperEnd, setIsTabsSwiperEnd] = useState(false);
  const categoriesScrollRef = useRef<HTMLDivElement>(null);

  const currentTab = filteredTabs.find((tab) => tab.id === activeTab) || filteredTabs[0];
  const displayedTab = filteredTabs.find((tab) => tab.id === displayedTabId) || filteredTabs[0];

  // Handle fade effect when tab or category changes (Bootstrap-like smooth fade)
  useEffect(() => {
    // Start fade out
    setIsFading(true);
    
    // After fade out completes (300ms), change content and fade in
    const fadeTimer = setTimeout(() => {
      setDisplayedTabId(activeTab);
      // setDisplayedCategoryId(activeCategory);
      // Small delay to ensure DOM update, then fade in
      setTimeout(() => {
        setIsFading(false);
      }, 50);
    }, 300);

    return () => clearTimeout(fadeTimer);
  }, [activeTab]); // Removed activeCategory from dependencies

  // Sync Swiper to active tab when changed programmatically (for mobile)
  useEffect(() => {
    if (tabsSwiperRef.current) {
      const activeIndex = filteredTabs.findIndex((tab) => tab.id === activeTab);
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
      <Container maxWidth="xl" className="px-0">
        {/* Header Section */}
        <div className={styles.header + " sectionHeading forH2"}>
          <h2>
            <span className="text-white">Proven </span>
            <span className="text-[#0fdac2]">{PROVEN_SUCCESS_DATA.headline.highlighted}</span>
            <span className="text-white"> in Every Project</span>
          </h2>
          <p className={styles.description}>{PROVEN_SUCCESS_DATA.description}</p>
        </div>

        {/* Tabs - Hidden (only showing Social Media Post content) */}
        {/* Tabs removed - only Social Media Post content is displayed */}

        {/* Categories Tabs */}
        {/* <div ref={categoriesScrollRef} className={styles.categoriesContainer}>
          {PROVEN_SUCCESS_DATA.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${styles.categoryTab} ${activeCategory === category.id ? styles.activeCategoryTab : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div> */}

        {/* Progress Bar */}
        {/* <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{
              width: `${((PROVEN_SUCCESS_DATA.categories.findIndex((cat) => cat.id === activeCategory) + 1) / PROVEN_SUCCESS_DATA.categories.length) * 100}%`,
            }}
          />
        </div> */}

        {/* Images Grid */}
        <div 
          key={displayedTabId} 
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 transition-opacity duration-300 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
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
      </Container>
    </section>
  );
};

export default ProvenSuccess;

