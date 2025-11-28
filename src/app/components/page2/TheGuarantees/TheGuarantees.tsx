'use client';

import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { THE_GUARANTEES_DATA } from '../../../data/Page2';
import styles from './TheGuarantees.module.css';

const TheGuarantees = () => {
  return (
    <section className={`sectionPadding ${styles.theGuaranteesSection}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contentWrapper}>
          {/* Heading */}
          <div className={styles.headingWrapper}>
            <h2 className={styles.heading}>
              <span className={styles.headingPart1}>{THE_GUARANTEES_DATA.headline.part1}</span>
              <span className={styles.headingPart2}>{THE_GUARANTEES_DATA.headline.part2}</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {THE_GUARANTEES_DATA.cards.map((card, index) => (
              <div key={index} className={styles.card}>
                {/* Number */}
                <div className={styles.number}>
                  {card.number}
                </div>

                {/* Heading */}
                <h3 className={styles.cardHeading}>
                  {card.heading}
                </h3>

                {/* Description */}
                <p className={styles.description}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className={styles.ctaWrapper}>
            <Button
              href={THE_GUARANTEES_DATA.cta.href}
              variant="primary"
              icon={<ArrowRightIcon style={{ fill: '#fff' }} />}
              iconPosition="right"
            >
              {THE_GUARANTEES_DATA.cta.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TheGuarantees;

