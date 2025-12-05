"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../../Container";
import VideoPopup from "../../VideoPopup/VideoPopup";
import styles from "./SupportAndTraining.module.css";

const SupportAndTraining = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className={`sectionPadding ${styles.supportSection}`}>
        <Container maxWidth="mxl">
          <div className={styles.cardsGrid}>
            {/* First Card */}
            <div className={styles.cardWrapper1}>
              <div className={styles.card}>
                <div
                  className={styles.imageWrapper}
                  onClick={() => setIsPopupOpen(true)}
                >
                  <Image
                    src="/assets/images/image1.png"
                    alt="Weekly Support And Ongoing Training"
                    width={700}
                    height={500}
                    className={styles.cardImage}
                  />
                  {/* Play Button Icon */}
                  <div className={styles.playButtonContainer}>
                    <div className={styles.playButton}>
                      <svg
                        className={styles.playIcon}
                        height="1.825rem"
                        width="1.825rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 402.3 435.5"
                      >
                        <path
                          d="M9.6 53.5V382c0 36.7 39.6 59.6 71.4 41.5l287.6-164.2c32.1-18.3 32.1-64.6 0-82.9L81 12.1C49.2-6.1 9.6 16.9 9.6 53.5"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.label} ${styles.label2}`}>Support</div>
              <h3 className={`${styles.heading} ${styles.heading1}`}>
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
              <div className={`${styles.label} ${styles.label1}`}>Education</div>
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

      {/* Video Popup */}
      <VideoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        videoUrl="/assets/images/videoplayback.mp4"
        videoTitle="Weekly Support And Ongoing Training"
        size="lg"
      />
    </>
  );
};

export default SupportAndTraining;
