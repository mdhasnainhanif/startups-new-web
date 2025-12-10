import React from 'react';
import Container from '../Container';
import styles from './ServicesGrowthCards.module.css';
import { ServicesGrowthCardsContent } from '../../data/ServicesGrowthCardsData';
import Image from 'next/image';

interface ServicesGrowthCardsProps {
  content: ServicesGrowthCardsContent[];
}

const ServicesGrowthCards: React.FC<ServicesGrowthCardsProps> = ({ content }) => {
  return (
    <section className={`${styles.section} sectionPadding`}>
      <Container maxWidth="xl">
        <div className={styles.cardsGrid}>
          {content.map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.heading}
                  className={styles.image}
                  width={500}
                  height={500}
                />
              </div>
              <h3 className={styles.cardTitle}>{item.heading}</h3>
              <p className={styles.excerpt}>{item.bodyText}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrowthCards;

