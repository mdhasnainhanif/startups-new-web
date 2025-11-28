'use client';

import Image from 'next/image';
import Container from '../../Container';
import { SUPPORT_AND_TRAINING_DATA } from '../../../data/Page2';
import styles from './SupportAndTraining.module.css';

const SupportAndTraining = () => {
  return (
    <section className={`sectionPadding ${styles.supportSection}`}>
      <Container maxWidth="xl">
        <div className={styles.cardsGrid}>
          {SUPPORT_AND_TRAINING_DATA.cards.map((card, index) => (
            <div key={index} className={styles.card}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.heading}
                  width={600}
                  height={400}
                  className={styles.cardImage}
                />
              </div>

              {/* Label */}
              <div className={styles.label}>
                {card.label}
              </div>

              {/* Heading */}
              <h3 className={styles.heading}>
                {card.heading}
              </h3>

              {/* Description */}
              <p className={styles.description}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SupportAndTraining;

