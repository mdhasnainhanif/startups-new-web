'use client';
import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { THE_GUARANTEES_DATA } from '../../../data/Page2';
import styles from './TheGuarantees.module.css';
import { useState } from 'react';
import CalendlyPopup from '../../CalendlyPopup/CalendlyPopup';
const TheGuarantees = () => {
  const [isCalendlyPopupOpen, setIsCalendlyPopupOpen] = useState(false);
  return (
    <>
    <section className={`sectionPadding ${styles.theGuaranteesSection}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contentWrapper}>
          <div className={`${styles.headingWrapper} sectionHeading forH2`}>
            <h2>
              <span className={styles.headingPart1}>{THE_GUARANTEES_DATA.headline.part1}</span>
              <span className={styles.headingPart2}>{THE_GUARANTEES_DATA.headline.part2}</span>
            </h2>
          </div>
          <div className={styles.cardsGrid}>
            {THE_GUARANTEES_DATA.cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.number}>
                  {card.number}
                </div>
                <h3 className={styles.cardHeading}>
                  {card.heading}
                </h3>
                <p className={styles.description}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.ctaWrapper}>
            <Button
              href={THE_GUARANTEES_DATA.cta.href}
              variant="green"
              icon={<ArrowRightIcon style={{ fill: '#000' }} />}
              iconPosition="right"
              onClick={() => setIsCalendlyPopupOpen(true)}
            >
              {THE_GUARANTEES_DATA.cta.text}
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
export default TheGuarantees;