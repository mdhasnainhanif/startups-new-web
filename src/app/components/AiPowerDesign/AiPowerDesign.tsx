'use client';

import { useState } from 'react';
import Container from '../Container';
import styles from './AiPowerDesign.module.css';

interface TabData {
  id: string;
  label: string;
  image: string;
  deliverables: string[];
  gridItems: number;
}

interface AiPowerDesignData {
  headline: {
    text: string;
    highlighted: string[];
  };
  description: string;
  tabs: TabData[];
  lifetimeValue: {
    heading: string;
    text: string;
  };
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
      deliverables: ['Website Design'],
      gridItems: 24,
    },
    {
      id: 'branding',
      label: 'Branding',
      image: '/assets/images/aipower1.png',
      deliverables: ['Logo Design', 'Brand Identity'],
      gridItems: 24,
    },
    {
      id: 'social-media',
      label: 'Social Media',
      image: '/assets/images/aipower1.png',
      deliverables: ['Social Media Posts'],
      gridItems: 24,
    },
  ],
  lifetimeValue: {
    heading: 'Lifetime Value:',
    text: "You're not just receiving \"designs.\" You're receiving the full brand system your business will use for years — online and offline",
  },
};

const AiPowerDesign = () => {
  const [activeTab, setActiveTab] = useState<string>(AI_POWER_DESIGN_DATA.tabs[0].id);

  const currentTab = AI_POWER_DESIGN_DATA.tabs.find((tab) => tab.id === activeTab) || AI_POWER_DESIGN_DATA.tabs[0];

  const renderHeadline = () => {
    let text = AI_POWER_DESIGN_DATA.headline.text;
    AI_POWER_DESIGN_DATA.headline.highlighted.forEach((highlight) => {
      text = text.replace(highlight, `<span class="${styles.highlighted}">${highlight}</span>`);
    });
    return { __html: text };
  };

  return (
    <section className={`sectionPadding ${styles.section} sectionPadding`}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.headline} dangerouslySetInnerHTML={renderHeadline()} />
          <p className={styles.description}>{AI_POWER_DESIGN_DATA.description}</p>
        </div>

        {/* Main Content Box */}
        <div className={styles.mainContentBox}>
          {/* Left Section - Deliverables */}
          <div className={styles.leftSection}>
            {/* Deliverables Section */}
            <div className={styles.deliverablesSection}>
              <h3 className={styles.deliverablesTitle}>Your <span className={styles.highlighted}>22-Day</span> Deliverable <br/> Package Includes:</h3>
              
              {/* Grid */}
              <div className={styles.gridContainer}>
                {Array.from({ length: currentTab.gridItems }).map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(currentTab.id)}
                    className={`${styles.gridItem} ${index === 0 ? styles.gridItemActive : ''}`}
                  >
                    {currentTab.deliverables[0] || 'Website Design'}
                  </div>
                ))}
              </div>

              {/* Lifetime Value */}
              <div className={styles.lifetimeValue}>
                <h4 className={styles.lifetimeValueHeading}>{AI_POWER_DESIGN_DATA.lifetimeValue.heading}</h4>
                <p className={styles.lifetimeValueText}>{AI_POWER_DESIGN_DATA.lifetimeValue.text}</p>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className={styles.rightSection}>
            <div className={styles.imageWrapper}>
              <img
                key={activeTab}
                src={currentTab.image}
                alt={currentTab.label}
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

