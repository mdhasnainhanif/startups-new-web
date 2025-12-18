import React from 'react';
import Container from '../Container';
import styles from './ServiceFeatures.module.css';
import Image from 'next/image';
import { ServiceFeaturesData } from '../../data/ServiceFeaturesData';

interface ServiceFeaturesProps {
  data?: ServiceFeaturesData;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className={`${styles.section} sectionPadding`}>
      <Container maxWidth="xl">
        {/* Header */}
        <div className="sectionHeading forH2 text-center text-[#ffffff] gap-3 flex flex-col mb-12 md:mb-8 max-w-3xl mx-auto">
          <h2>
            <span>Real Minds, Smart </span>
            <span className='text-[#0fdac2]'>Tools, Exceptional </span>
            <span>Design</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className={`${styles.grid} grid grid-cols-1 md:grid-cols-12 gap-6`}>
          {/* Large Left Card - spans 2 rows */}
          <div className={`${styles.largeCard} md:col-span-5`}>
            <div className={styles.imageContainer}>
              {data.featuredCard.backgroundShape && (
                <div 
                  className={styles.backgroundShape}
                  style={{ backgroundColor: data.featuredCard.backgroundShape }}
                />
              )}
              {data.featuredCard.image && (
                <Image
                  src={data.featuredCard.image}
                  alt={data.featuredCard.name || 'Team member'}
                  width={500}
                  height={600}
                  className={styles.featuredImage}
                />
              )}
            </div>
            <div className={styles.featuredContent}>
              <h3 className={styles.featuredTitle}>{data.featuredCard.title}</h3>
              <p className={styles.featuredDescription}>{data.featuredCard.description}</p>
            </div>
          </div>

          {/* Four Smaller Cards Container */}
          <div className={`${styles.smallCardsContainer} md:col-span-7`}>
            {data.cards.map((card, index) => (
              <div key={index} className={styles.smallCard}>
                {card.icon && (
                  <div className={styles.iconWrapper}>
                    {card.icon}
                  </div>
                )}
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceFeatures;

