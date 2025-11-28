'use client';

import { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { GROWTH_MANAGER_DATA } from '../../../data/Page2';
import styles from './GrowthManager.module.css';

const GrowthManager = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={`sectionPadding ${styles.growthManagerSection}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contentWrapper}>
          {/* Left Section - Calendar */}
          <div className={styles.leftSection}>
            <div className={styles.calendlyContainer}>
              <div className={styles.calendlyWrapper}>
                {GROWTH_MANAGER_DATA.calendly.url && isMounted ? (
                  <InlineWidget
                    url={GROWTH_MANAGER_DATA.calendly.url}
                    styles={{
                      height: '650px',
                      minHeight: '650px',
                    }}
                    pageSettings={{
                      backgroundColor: 'ffffff',
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: '643bff',
                      textColor: '4d5055',
                      hideGdprBanner: true,
                    }}
                  />
                ) : (
                  <div className={styles.placeholderMessage}>
                    <div className={styles.placeholderIcon}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <h3 className={styles.placeholderTitle}>
                      Loading Calendar...
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className={`sectionHeading ${styles.rightSection}`}>
            <h2>
              <span className="text-white">{GROWTH_MANAGER_DATA.headline.part1}</span>
              <span className="text-[#0fdac2]">{GROWTH_MANAGER_DATA.headline.part2}</span>
              <span className="text-white">{GROWTH_MANAGER_DATA.headline.part3}</span>
            </h2>
            <p className="text-white text-lg leading-relaxed opacity-90">
              {GROWTH_MANAGER_DATA.description}
            </p>

            <h3 className={`text-[#0fdac2] text-xl font-semibold mt-6 mb-4`}>
              {GROWTH_MANAGER_DATA.subHeading}
            </h3>

            {/* Features List */}
            <ul className="mt-4 space-y-3">
              {GROWTH_MANAGER_DATA.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-white">
                  <img
                    src="/assets/images/tick2.png"
                    alt="check"
                    className={styles.checkIcon}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-white text-lg leading-relaxed opacity-90 mt-6">
              {GROWTH_MANAGER_DATA.conclusion}
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                href={GROWTH_MANAGER_DATA.cta.href}
                variant="primary"
                icon={<ArrowRightIcon style={{ fill: '#fff' }} />}
                iconPosition="right"
              >
                {GROWTH_MANAGER_DATA.cta.text}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GrowthManager;

