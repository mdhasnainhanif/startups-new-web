'use client';

import { useState } from 'react';
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
      image: '/assets/images/aipower1.png',
      deliverables: [
        { id: '1', label: 'Homepage Design', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'About Page', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'Services Page', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Contact Page', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Product Pages', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'Blog Layout', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Portfolio', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Landing Pages', image: '/assets/images/aipower3.png' },
        { id: '9', label: '404 Page', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Thank You Page', image: '/assets/images/aipower5.png' },
        { id: '11', label: 'Mobile Design', image: '/assets/images/aipower1.png' },
        { id: '12', label: 'Tablet Design', image: '/assets/images/aipower2.png' },
        { id: '13', label: 'UI Components', image: '/assets/images/aipower3.png' },
        { id: '14', label: 'Navigation Menu', image: '/assets/images/aipower4.png' },
        { id: '15', label: 'Footer Design', image: '/assets/images/aipower5.png' },
        { id: '16', label: 'Forms Design', image: '/assets/images/aipower1.png' },
        { id: '17', label: 'CTA Buttons', image: '/assets/images/aipower2.png' },
        { id: '18', label: 'Icons Set', image: '/assets/images/aipower3.png' },
        { id: '19', label: 'Animations', image: '/assets/images/aipower4.png' },
        { id: '20', label: 'Loading States', image: '/assets/images/aipower5.png' },
        { id: '21', label: 'Error States', image: '/assets/images/aipower1.png' },
        { id: '22', label: 'Email Templates', image: '/assets/images/aipower2.png' },
        { id: '23', label: 'Dashboard UI', image: '/assets/images/aipower3.png' },
        { id: '24', label: 'Admin Panel', image: '/assets/images/aipower4.png' },
      ],
      gridItems: 24,
    },
    {
      id: 'branding',
      label: 'Branding',
      image: '/assets/images/aipower1.png',
      deliverables: [
        { id: '1', label: 'Logo Design', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'Brand Identity', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'Color Palette', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Typography', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Business Cards', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'Letterhead', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Envelope Design', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Email Signature', image: '/assets/images/aipower3.png' },
        { id: '9', label: 'Social Media Kit', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Brand Guidelines', image: '/assets/images/aipower5.png' },
        { id: '11', label: 'Icon Set', image: '/assets/images/aipower1.png' },
        { id: '12', label: 'Pattern Design', image: '/assets/images/aipower2.png' },
        { id: '13', label: 'Stationery Set', image: '/assets/images/aipower3.png' },
        { id: '14', label: 'Packaging Design', image: '/assets/images/aipower4.png' },
        { id: '15', label: 'Merchandise', image: '/assets/images/aipower5.png' },
        { id: '16', label: 'Brand Book', image: '/assets/images/aipower1.png' },
        { id: '17', label: 'Logo Variations', image: '/assets/images/aipower2.png' },
        { id: '18', label: 'Favicon Set', image: '/assets/images/aipower3.png' },
        { id: '19', label: 'Watermark', image: '/assets/images/aipower4.png' },
        { id: '20', label: 'Brand Assets', image: '/assets/images/aipower5.png' },
        { id: '21', label: 'Templates', image: '/assets/images/aipower1.png' },
        { id: '22', label: 'Mockups', image: '/assets/images/aipower2.png' },
        { id: '23', label: 'Presentation', image: '/assets/images/aipower3.png' },
        { id: '24', label: 'Documentation', image: '/assets/images/aipower4.png' },
      ],
      gridItems: 24,
    },
    {
      id: 'social-media',
      label: 'Social Media',
      image: '/assets/images/aipower1.png',
      deliverables: [
        { id: '1', label: 'Facebook Posts', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'Instagram Posts', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'LinkedIn Posts', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Twitter Posts', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Stories Design', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'Reels Graphics', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Cover Photos', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Profile Pictures', image: '/assets/images/aipower3.png' },
        { id: '9', label: 'Banner Ads', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Carousel Posts', image: '/assets/images/aipower5.png' },
        { id: '11', label: 'Quote Graphics', image: '/assets/images/aipower1.png' },
        { id: '12', label: 'Infographics', image: '/assets/images/aipower2.png' },
        { id: '13', label: 'Event Posters', image: '/assets/images/aipower3.png' },
        { id: '14', label: 'Promotional', image: '/assets/images/aipower4.png' },
        { id: '15', label: 'Announcements', image: '/assets/images/aipower5.png' },
        { id: '16', label: 'Testimonials', image: '/assets/images/aipower1.png' },
        { id: '17', label: 'Case Studies', image: '/assets/images/aipower2.png' },
        { id: '18', label: 'Tutorial Graphics', image: '/assets/images/aipower3.png' },
        { id: '19', label: 'Holiday Posts', image: '/assets/images/aipower4.png' },
        { id: '20', label: 'Trending Topics', image: '/assets/images/aipower5.png' },
        { id: '21', label: 'Video Thumbnails', image: '/assets/images/aipower1.png' },
        { id: '22', label: 'Pinterest Pins', image: '/assets/images/aipower2.png' },
        { id: '23', label: 'YouTube Graphics', image: '/assets/images/aipower3.png' },
        { id: '24', label: 'Content Calendar', image: '/assets/images/aipower4.png' },
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

  const currentTab = data.tabs.find((tab) => tab.id === activeTab) || data.tabs[0];
  
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
    <section className={`sectionPadding ${styles.section} sectionPadding`}>
     <Container maxWidth="xl" className="px-0">
        {/* Header Section */}
        <div className={`sectionHeading forH2 text-center max-w-5xl md:mx-auto`}>
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
                    <span className={styles.highlighted}>22-Day</span> Content Package Includes:
                  </>
                ) : (
                  <>Your <span className={styles.highlighted}>22-Day</span> Deliverable <br/> Package Includes:</>
                )}
              </h3>
              
              {/* Grid */}
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

              {/* Lifetime Value */}
              <div className={styles.lifetimeValue}>
                <h4 className={styles.lifetimeValueHeading}>{data.lifetimeValue.heading}</h4>
                <p className={styles.lifetimeValueText}>{data.lifetimeValue.text}</p>
              </div>

              <img src="/assets/images/1.webp" alt="" className={styles.aeroicon} />
            </div>
          </div>

          {/* Right Section - Image */}
          <div className={styles.rightSection}>
            <div className={styles.imageWrapper}>
              <img
                key={`${activeTab}-${hoveredItemIndex}`}
                src={getCurrentImage()}
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

