"use client";

import Container from "../Container";
import { REVIEWS_SECTION } from "../../constants";
import styles from "./Reviews.module.css";
import Image from "next/image";

interface ReviewsProps {
  limit?: number;
  columns?: number;
  equalHeight?: boolean;
}

export default function Reviews({ limit, columns = 3, equalHeight = false }: ReviewsProps = {}) {
  // Limit reviews if specified, otherwise show all
  const reviewsToShow = limit ? REVIEWS_SECTION.reviews.slice(0, limit) : REVIEWS_SECTION.reviews;

  return (
    <>
      <section className={`${styles.section} sectionPadding`}>
        <Container maxWidth="xl">
          {/* Header Section */}
          <div className={`${styles.header} sectionHeading forH2 text-[#ffffff] flex flex-col items-center justify-center mb-8 md:mb-10 text-center max-w-[60rem] mx-auto relative z-10`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 md:mb-5">
              <span className="text-white">
                {REVIEWS_SECTION.heading.part1}
              </span>
              <span className="text-[#0fdac2]">
                {REVIEWS_SECTION.heading.part2}
              </span>
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-3">{REVIEWS_SECTION.subtitle}</p>
            <p className="text-[#ffffff] text-sm sm:text-base md:text-lg leading-relaxed">
              See how &nbsp;
              <span className="text-[#0fdac2]">Smart AI Business Teams</span>&nbsp;
              turned invisibility into daily inquiries
            </p>
          </div>

          {/* Rating Badges */}
          <div className={`${styles.badgesContainer} flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 mb-8 md:mb-10 relative z-10 flex-wrap`}>
            {REVIEWS_SECTION.ratingBadges.map((badge, index) => (
              <div
                key={index}
                className={`${styles.badge} flex flex-row items-center justify-start px-3 sm:px-4 md:px-6 py-3 rounded-lg gap-3 sm:w-auto sm:max-w-none`}               
              >
                <div className={styles.badgeLogo}>
                  {badge.platform === "Trustpilot" && (
                    <Image width={100} height={40} src="/assets/images/trust-pilot.webp" alt="Trustpilot Logo" style={{ width: "auto", height: "auto" }} className={styles.trustpilotLogo}/>
                  )}
                  {badge.platform === "Google" && (
                   <Image width={100} height={40} src="/assets/images/google.webp" alt="Google Logo" style={{ width: "auto", height: "auto" }} className={styles.googleLogo}/>
                  )}
                  {badge.platform === "Facebook" && (
                    <Image width={100} height={40} src="/assets/images/facebook.webp" alt="Facebook Logo" style={{ width: "auto", height: "auto" }} className={styles.facebookLogo}/>
                  )}
                </div>
                <span className={`${styles.badgeRating} text-xs sm:text-sm md:text-sm font-semibold whitespace-nowrap`}>
                  Rated {badge.rating}
                </span>
              </div>
            ))}
          </div>

          {/* Reviews Grid/Masonry */}
          <div 
            className={`${styles.reviewsMasonry} ${equalHeight ? `${styles.equalHeight} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5` : ''} relative z-10`}
            style={equalHeight ? { 
              columnCount: 'unset'
            } : {}}
          >
            {reviewsToShow.map((review, index) => {
              return (
              <div
                key={review.id}
                className={`${styles.reviewCard} ${
                  review?.hasBorder ? styles.highlightedCard : ""
                } ${equalHeight ? styles.equalHeightCard : ''}`}
              >
                <div className={`${styles.reviewCardContent} p-3 sm:p-4 md:p-4 lg:p-4`}>
                {/* Avatar, Name, and Stars Row */}
                <div className={`${styles.reviewHeader} block mb-3 w-full relative overflow-hidden`}>
                  <div className={`${styles.avatar} w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#8b5cf6] inline-block text-center leading-10 sm:leading-12 md:leading-10 lg:leading-12 align-top mr-3`}>
                    <span className="text-white text-sm sm:text-base md:text-sm lg:text-base font-bold">{review.initials}</span>
                  </div>
                  <div className={`${styles.reviewerInfo} inline-block align-top mr-3`}>
                    <h3 className="text-white text-sm sm:text-base md:text-sm lg:text-base font-bold m-0">{review.name}</h3>
                    <p className="text-white/60 text-xs sm:text-sm md:text-xs lg:text-sm m-0">
                      {review.source} - {review.date}
                    </p>
                  </div>
                  {/* Star Rating - positioned to the right */}
                  <div className={`${styles.starRating} float-right mt-0 ml-3`}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        className="sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 inline-block mr-1 align-middle last:mr-0"
                        viewBox="0 0 24 24"
                        fill="#0fdac2"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className={`${styles.reviewText} text-white text-xs sm:text-sm md:text-xs lg:text-sm leading-relaxed mt-3 mb-0 block`}>{review.text}</p>

                {/* Video Player (if video review - shown after text) */}
                {review.isVideo && (
                  <div className={styles.videoContainer}>
                    {/* <video
                      src='/assets/images/videoplayback.mp4'
                      controls
                      className={styles.videoElement}
                    >
                      Your browser does not support the video tag.
                    </video> */}
                  </div>
                )}
                </div>
              </div>
            );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

