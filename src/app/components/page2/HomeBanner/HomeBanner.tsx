'use client';

import { useState } from 'react';
import Container from '../../Container';
import VideoPopup from '../../VideoPopup/VideoPopup';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { HOME_BANNER_DATA } from '../../../data/Page2';
import styles from './HomeBanner.module.css';

const HomeBanner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className={`sectionPadding ${styles.section} ${styles.herobanner}`}>
      <Container maxWidth="xl" className="px-0">
          <div className={`lg:pt-48 ${styles.contentWrapper}`}>
            {/* Left Section */}
            <div className={`sectionHeading ${styles.leftSection}`}>
              <h2>
                <span className="text-white">{HOME_BANNER_DATA.headline.part1}</span>
                <span className="text-[#0fdac2]">{HOME_BANNER_DATA.headline.part2}</span>
                <span className="text-white">{HOME_BANNER_DATA.headline.part3}</span>
              </h2>
              <p className="text-white text-lg leading-relaxed opacity-90">
                {HOME_BANNER_DATA.description}
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-3">
                {HOME_BANNER_DATA.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <img
                      src="/assets/images/tick2.png"
                      alt="check"
                      className={styles.checkIcon}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-8">
                <Button
                  href={HOME_BANNER_DATA.cta.href}
                  variant="primary"
                  icon={<ArrowRightIcon style={{ fill: '#fff' }} />}
                  iconPosition="right"
                >
                  {HOME_BANNER_DATA.cta.text}
                </Button>
              </div>
            </div>

            {/* Right Section - Video Player */}
            <div className={styles.rightSection}>
              {/* Video Player */}
              <div className={styles.videoMain}>
                <div
                  className={styles.videoImageWrapper}
                  onClick={() => setIsPopupOpen(true)}
                >
                  <img
                    className={styles.videoImage}
                    src={HOME_BANNER_DATA.video.thumbnail}
                    alt={HOME_BANNER_DATA.video.videoTitle}
                  />
                  {/* Google Image - Positioned Absolutely */}
                  <img
                    src={HOME_BANNER_DATA.review.logo}
                    alt="Google"
                    className={styles.googleImage}
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
            </div>
          </div>
        </Container>
      </section>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        videoUrl={HOME_BANNER_DATA.video.videoUrl}
        videoTitle={HOME_BANNER_DATA.video.videoTitle}
        size="lg"
      />
    </>
  );
};

export default HomeBanner;

