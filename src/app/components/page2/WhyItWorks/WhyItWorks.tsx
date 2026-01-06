'use client';

import Image from 'next/image';
import Container from '../../Container';
import { WHY_IT_WORKS_DATA } from '../../../data/Page2';
import styles from './WhyItWorks.module.css';

const WhyItWorks = () => {
  return (
    <section className={`sectionPadding ${styles.whyItWorksSection}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          <div className={`${styles.leftSection} sectionHeading`}>
            <h2>
              <span className="text-white">{WHY_IT_WORKS_DATA.leftSection.headline.part1}</span>
              <span className="text-[#0fdac2]">{WHY_IT_WORKS_DATA.leftSection.headline.part2}</span>
            </h2>
            <div className={styles.paragraphsWrapper}>
              {WHY_IT_WORKS_DATA.leftSection.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.rightSection}>
            <h3 className={styles.rightHeading}>
              {WHY_IT_WORKS_DATA.rightSection.headline}
            </h3>
            <div className={styles.itemsWrapper}>
              {WHY_IT_WORKS_DATA.rightSection.items.map((item, index) => (
                <div key={index} className={`${styles.itemBox} md:max-w-104`}>
                  <div className={styles.iconWrapper}>
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={48}
                      height={48}
                      className={styles.icon}
                    />
                  </div>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyItWorks;

