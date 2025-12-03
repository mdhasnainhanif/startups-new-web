"use client";

import Image from "next/image";
import Container from "../../Container";
import styles from "./SupportAndTraining.module.css";

const SupportAndTraining = () => {
  return (
    <section className={`sectionPadding ${styles.supportSection}`}>
      <Container maxWidth="sxl">
        <div className={styles.cardsGrid}>
          {/* First Card */}
          <div className={styles.cardWrapper1}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/images/image1.png"
                  alt="Weekly Support And Ongoing Training"
                  width={700}
                  height={500}
                  className={styles.cardImage}
                />
              </div>
            </div>
              <div className={`${styles.label} ${styles.label2}`}>Support</div>
              <h3 className={`${styles.heading}`}>
                Weekly Support And Ongoing Training
              </h3>
              <p className={styles.description}>
                You and your Growth Manager receive weekly guidance so your
                online presence keeps improving. You get clear updates and
                simple reports without having to manage the process yourself
              </p>
          </div>

          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/images/image2.png"
                alt="Ongoing Training & Community"
                width={700}
                height={500}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.label}>Education</div>
            <h3 className={styles.heading}>Ongoing Training & Community</h3>
            <p className={styles.description}>
              Growth Managers are part of an internal training community where
              they learn new tools, workflows, and best practices. This keeps
              your digital systems current and effective
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SupportAndTraining;
