'use client';

import Image from 'next/image';
import Container from '../../Container';
import { CREATED_BY_ENTREPRENEURS_DATA } from '../../../data/Page2';
import styles from './CreatedByEntrepreneurs.module.css';

const CreatedByEntrepreneurs = () => {
  return (
    <section className={`sectionPadding ${styles.createdBySection}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          {/* Left Section - Image */}
          <div className={styles.leftSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={CREATED_BY_ENTREPRENEURS_DATA.image}
                alt="Entrepreneurs"
                width={600}
                height={600}
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className={styles.rightSection}>
            <h2 className={styles.heading}>
              <span className={styles.headingPart1}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part1}
              </span>
              <span className={styles.headingPart2}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part2}
              </span>
              <span className={styles.headingPart3}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part3}
              </span>
              <span className={styles.headingPart4}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part4}
              </span>
              <span className={styles.headingHighlight1}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.highlight1}
              </span>
              <span className={styles.headingPart5}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.part5}
              </span>
              <span className={styles.headingHighlight2}>
                {CREATED_BY_ENTREPRENEURS_DATA.headline.highlight2}
              </span>
            </h2>
            <p className={styles.description}>
              {CREATED_BY_ENTREPRENEURS_DATA.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CreatedByEntrepreneurs;

