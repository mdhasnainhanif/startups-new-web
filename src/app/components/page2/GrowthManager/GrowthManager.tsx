'use client';

import { useState, useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { GROWTH_MANAGER_DATA } from '../../../data/Page2';
import styles from './GrowthManager.module.css';
import CalendlyPopup from '../../CalendlyPopup/CalendlyPopup';
const GrowthManager = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isCalendlyPopupOpen, setIsCalendlyPopupOpen] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    (async function () {
      const cal = await getCalApi({ namespace: GROWTH_MANAGER_DATA.calendly.namespace || "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <>
    <section className={`sectionPadding ${styles.growthManagerSection}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <div className={styles.calendlyContainer}>
              <div className={styles.calendlyWrapper}>
                {isMounted ? (
                  <Cal
                    namespace={GROWTH_MANAGER_DATA.calendly.namespace || "30min"}
                    calLink={GROWTH_MANAGER_DATA.calendly.calLink || "inhouse-team-loexw9/30min"}
                    style={{
                      width: "100%",
                      height: "650px",
                      minHeight: "650px",
                      overflow: "scroll",
                    }}
                    config={{
                      layout: "month_view",
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
          <div className={`sectionHeading ${styles.rightSection}`}>
            <h2>
              <span className="text-white">{GROWTH_MANAGER_DATA.headline.part1}</span>
              <span className="text-[#0fdac2]">{GROWTH_MANAGER_DATA.headline.part2}</span>
              <span className="text-white">{GROWTH_MANAGER_DATA.headline.part3}</span>
            </h2>
            <p className="text-white text-lg leading-relaxed opacity-90">
              {GROWTH_MANAGER_DATA.description}
            </p>

            <h3 className={`text-[#0fdac2] text-xl font-semibold`}>
              {GROWTH_MANAGER_DATA.subHeading}
            </h3>
            <ul className="mt-0 space-y-3">
              {GROWTH_MANAGER_DATA.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-white">
                  <img
                    src="/assets/images/tick.webp"
                    alt="check"
                    className={styles.checkIcon}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-white text-lg leading-relaxed opacity-90">
              {GROWTH_MANAGER_DATA.conclusion}
            </p>
            <div className="mt-2">
              <Button
                href={GROWTH_MANAGER_DATA.cta.href}
                onClick={() => setIsCalendlyPopupOpen(true)}
                variant="green"
                icon={<ArrowRightIcon style={{ fill: '#000' }} />}
                iconPosition="right"
              >
                {GROWTH_MANAGER_DATA.cta.text}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
    <CalendlyPopup
        isOpen={isCalendlyPopupOpen}
        onClose={() => setIsCalendlyPopupOpen(false)}
      />
    </>
  );
};

export default GrowthManager;

