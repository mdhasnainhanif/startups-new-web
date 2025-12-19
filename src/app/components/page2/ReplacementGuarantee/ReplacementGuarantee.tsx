'use client';

import Image from 'next/image';
import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { REPLACEMENT_GUARANTEE_DATA } from '../../../data/Page2';
import styles from './ReplacementGuarantee.module.css';

const ReplacementGuarantee = () => {
  return (
    <section className={` ${styles.replacementSection} py-4`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contentWrapper}>
          {/* Left Section - Content */}
          <div className={styles.leftSection}>
            <h2 className={styles.heading}>
              <span className={styles.headingPart1}>
                {REPLACEMENT_GUARANTEE_DATA.headline.part1}
              </span>
              <span className={styles.headingPart2}>
                {REPLACEMENT_GUARANTEE_DATA.headline.part2}
              </span>
              <span className={styles.headingPart1}>
                {REPLACEMENT_GUARANTEE_DATA.headline.part3}
              </span>
            </h2>
            <p className={styles.description}>
              {REPLACEMENT_GUARANTEE_DATA.description}
            </p>
            <div className={styles.ctaWrapper}>
              <Button
                href={REPLACEMENT_GUARANTEE_DATA.cta.href}
                variant="green"
                icon={<ArrowRightIcon style={{ fill: '#000' }} />}
                iconPosition="right"
              >
                {REPLACEMENT_GUARANTEE_DATA.cta.text}
              </Button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className={styles.rightSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={REPLACEMENT_GUARANTEE_DATA.image}
                alt="Replacement Guarantee"
                width={600}
                height={600}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReplacementGuarantee;

