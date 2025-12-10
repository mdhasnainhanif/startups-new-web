import React from 'react';
import Container from '../Container';
import styles from './ServicesGrowthCards.module.css';
import { ServicesGrowthCardsContent, ServicesGrowthCardsSectionData } from '../../data/ServicesGrowthCardsData';
import Image from 'next/image';

interface ServicesGrowthCardsProps {
  content: ServicesGrowthCardsContent[];
  sectionData?: ServicesGrowthCardsSectionData;
}

const ServicesGrowthCards: React.FC<ServicesGrowthCardsProps> = ({ content, sectionData }) => {
  const defaultSectionData: ServicesGrowthCardsSectionData = {
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed."
  };

  const finalSectionData = sectionData || defaultSectionData;

  return (
    <section className={`${styles.section} sectionPadding`}>
      <Container maxWidth="xl">
        <div className={`${styles.header} sectionHeading`}>
          <h2 className={styles.heading}>
            {(() => {
              const words = finalSectionData.heading.split(' ');
              const lastWord = words.pop();
              const restWords = words.join(' ');
              return (
                <>
                  {restWords && <span className="text-white">{restWords} </span>}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                    {lastWord}
                  </span>
                </>
              );
            })()}
          </h2>
          <p className={styles.description}>
            {finalSectionData.description}
          </p>
        </div>
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

