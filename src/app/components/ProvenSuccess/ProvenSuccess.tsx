'use client';

import { useState, useRef, useEffect } from 'react';
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
    'Your Smart Marketing AI Team brings a fully loaded AI ecosystem for creative design and analytics automation — premium tools, no extra cost, no hassle.',
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
  const [tabsScrollState, setTabsScrollState] = useState<{ isBeginning: boolean; isEnd: boolean }>({
    isBeginning: true,
    isEnd: false,
  });
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const categoriesScrollRef = useRef<HTMLDivElement>(null);

  const currentTab = PROVEN_SUCCESS_DATA.tabs.find((tab) => tab.id === activeTab) || PROVEN_SUCCESS_DATA.tabs[0];

  const checkTabsScrollState = (): void => {
    if (tabsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsScrollRef.current;
      setTabsScrollState({
        isBeginning: scrollLeft <= 0,
        isEnd: scrollLeft + clientWidth >= scrollWidth - 5,
      });
    }
  };

  const scrollTabs = (direction: 'left' | 'right'): void => {
    if (!tabsScrollRef.current) return;
    
    const container = tabsScrollRef.current;
    const scrollAmount = 250;
    const currentScroll = container.scrollLeft;
    
    let newScroll: number;
    if (direction === 'left') {
      // Scroll back (left)
      newScroll = Math.max(0, currentScroll - scrollAmount);
    } else {
      // Scroll forward (right)
      const maxScroll = container.scrollWidth - container.clientWidth;
      newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
    }
    
    container.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });
    
    // Update scroll state after animation
    setTimeout(() => {
      checkTabsScrollState();
    }, 500);
  };

  useEffect(() => {
    checkTabsScrollState();
    const handleResize = (): void => {
      checkTabsScrollState();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <section className={`sectionPadding ${styles.section} ${styles.ProvenSuccess}`}>
      <Container maxWidth="2xl" className="px-0">
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <span className="text-white">Proven </span>
            <span className="text-[#0fdac2]">{PROVEN_SUCCESS_DATA.headline.highlighted}</span>
            <span className="text-white"> in Every Project</span>
          </h2>
          <p className={styles.description}>{PROVEN_SUCCESS_DATA.description}</p>
        </div>

        {/* Tabs */}
        <div
          ref={tabsScrollRef}
          className={styles.tabsContainer}
          onScroll={checkTabsScrollState}
        >
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();
              if (!tabsScrollState.isBeginning) {
                scrollTabs('left');
              }
            }}
            disabled={tabsScrollState.isBeginning}
            className={`${styles.navArrow} ${styles.navArrowLeft} ${
              tabsScrollState.isBeginning ? styles.navArrowDisabled : ''
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
          {PROVEN_SUCCESS_DATA.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();
              if (!tabsScrollState.isEnd) {
                scrollTabs('right');
              }
            }}
            disabled={tabsScrollState.isEnd}
            className={`${styles.navArrow} ${styles.navArrowRight} ${
              tabsScrollState.isEnd ? styles.navArrowDisabled : ''
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {currentTab.images.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-[rgba(29,14,87,0.3)] rounded-lg overflow-hidden border border-[rgba(101,59,255,0.2)]"
            >
              <img
                src={image}
                alt={`${currentTab.label} ${index + 1}`}
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

