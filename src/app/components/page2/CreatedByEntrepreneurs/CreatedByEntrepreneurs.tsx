'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '../../Container';
import { CREATED_BY_ENTREPRENEURS_DATA } from '../../../data/Page2';
import styles from './CreatedByEntrepreneurs.module.css';
import Button from '../../Button';
import CalendlyPopup from '../../CalendlyPopup/CalendlyPopup';
import { ArrowRightIcon } from '../../icons';

const CreatedByEntrepreneurs = () => {
  const [isCalendlyPopupOpen, setIsCalendlyPopupOpen] = useState(false);

  return (
    <section className={`sectionPadding ${styles.createdBySection}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          {/* Left Section - Image */}
          <div className={styles.leftSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={CREATED_BY_ENTREPRENEURS_DATA.image}
                alt="Entrepreneurs"
                width={600}
                height={600}
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className={`${styles.rightSection} sectionHeading forH2`}>
            <h2>
              <span className={styles.headingPart1}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part1}
              </span>
              <span className={styles.headingPart2}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part2}
              </span>
              <span className={styles.headingPart3}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part3}
              </span>
              <span className={styles.headingPart4}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part4}
              </span>
              <span className={styles.headingHighlight1}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.highlight1}
              </span>
              <span className={styles.headingPart5}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part5}
              </span>
              <span className={styles.headingHighlight2}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.highlight2}
              </span>
            </h2>
            <div className={styles.descriptionWrapper}>
              {CREATED_BY_ENTREPRENEURS_DATA.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.description}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* CTA Button */}
            {CREATED_BY_ENTREPRENEURS_DATA?.cta && (
              <div className={styles.buttonWrapper}>
                <Button 
                  variant="green" 
                  size="lg"
                  href={CREATED_BY_ENTREPRENEURS_DATA.cta.href || '#'}
                  onClick={() => setIsCalendlyPopupOpen(true)}
                  icon={<ArrowRightIcon style={{ fill: '#000' }} />}
                  iconPosition="right"
                >
                  {CREATED_BY_ENTREPRENEURS_DATA.cta.text}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Calendly Popup */}
      <CalendlyPopup
        isOpen={isCalendlyPopupOpen}
        onClose={() => setIsCalendlyPopupOpen(false)}
        calLink="inhouse-team-loexw9/30min"
        layout="month_view"
      />
    </section>
  );
};

export default CreatedByEntrepreneurs;

