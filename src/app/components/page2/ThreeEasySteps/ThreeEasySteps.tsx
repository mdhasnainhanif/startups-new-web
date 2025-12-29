'use client';
import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { THREE_EASY_STEPS_DATA } from '../../../data/Page2';
import styles from './ThreeEasySteps.module.css';
import { useState } from 'react';
import CalendlyPopup from '../../CalendlyPopup/CalendlyPopup';  
const ThreeEasySteps = () => {
  const [isCalendlyPopupOpen, setIsCalendlyPopupOpen] = useState(false);
  return (
    <>
    <section className={`sectionPadding ${styles.threeEasyStepsSection}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          <div className={`${styles.headingWrapper} sectionHeading forH2`}>
            <h2>
              <span className={styles.headingPart1}>{THREE_EASY_STEPS_DATA.headline.part1}</span>
              <span className={styles.headingPart2}>{THREE_EASY_STEPS_DATA.headline.part2}</span>
            </h2>
          </div>
          <div className={styles.cardsGrid}>
            {THREE_EASY_STEPS_DATA.cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.number}>
                  {card.number}
                </div>
                <h3 className={styles.cardHeading}>
                  {card.headingParts ? (
                    <>
                      <span className={styles.headingPart1}>{card.headingParts.part1}</span>
                      <span className={styles.headingPart2}>{card.headingParts.part2}</span>
                      <span className={styles.headingPart1}>{card.headingParts.part3}</span>
                    </>
                  ) : (
                    card.heading
                  )}
                </h3>              
                <p className={styles.description}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.ctaWrapper}>
            <Button
              href={THREE_EASY_STEPS_DATA.cta.href}
              variant="green"
              icon={<ArrowRightIcon style={{ fill: '#000' }} />}
              iconPosition="right"
              onClick={() => setIsCalendlyPopupOpen(true)}
            >
              {THREE_EASY_STEPS_DATA.cta.text}
            </Button>
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
export default ThreeEasySteps;