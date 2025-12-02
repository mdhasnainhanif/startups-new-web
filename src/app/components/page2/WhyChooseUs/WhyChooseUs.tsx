import Image from 'next/image';
import Container from '../../Container';
import { WHY_CHOOSE_US_DATA } from '../../../data/Page2';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={`sectionPadding ${styles.whyChooseUsSection}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          {/* Heading */}
          <div className={`${styles.headingWrapper} sectionHeading forH2 md:max-w-200`}>
            <h2>
              <span className={styles.headingPart1}>{WHY_CHOOSE_US_DATA.headline.part1}</span>
              <span className={styles.headingPart2}>{WHY_CHOOSE_US_DATA.headline.part2}</span>
            </h2>
            <p className={styles.subtitle}>{WHY_CHOOSE_US_DATA.subtitle}</p>
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {WHY_CHOOSE_US_DATA.cards.map((card, index) => (
              <div key={index} className={styles.card}>
                {/* Background Image */}
                {card.backgroundImage && (
                  <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${card.backgroundImage})` }}
                  />
                )}

                {/* Image */}
                {card.image && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={400}
                      height={300}
                      className={styles.cardImage}
                    />
                  </div>
                )}

                {/* Content */}
                {index === 0 ? (
                  <>
                    <div className={styles.label}>{card.label}</div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                    </div>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </>
                ) : (
                  <>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <div className={styles.label}>{card.label}</div>
                    </div>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

