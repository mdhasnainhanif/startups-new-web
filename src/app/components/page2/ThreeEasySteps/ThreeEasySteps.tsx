'use client';

import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { THREE_EASY_STEPS_DATA } from '../../../data/Page2';
import styles from './ThreeEasySteps.module.css';

const ThreeEasySteps = () => {
  return (
    <section className={`sectionPadding ${styles.threeEasyStepsSection}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contentWrapper}>
          {/* Heading */}
          <div className={styles.headingWrapper}>
            <h2 className={styles.heading}>
              <span className={styles.headingPart1}>{THREE_EASY_STEPS_DATA.headline.part1}</span>
              <span className={styles.headingPart2}>{THREE_EASY_STEPS_DATA.headline.part2}</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {THREE_EASY_STEPS_DATA.cards.map((card, index) => (
              <div key={index} className={styles.card}>
                {/* Number */}
                <div className={styles.number}>
                  {card.number}
                </div>

                {/* Heading */}
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
              href={THREE_EASY_STEPS_DATA.cta.href}
              variant="primary"
              icon={<ArrowRightIcon style={{ fill: '#fff' }} />}
              iconPosition="right"
            >
              {THREE_EASY_STEPS_DATA.cta.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ThreeEasySteps;

