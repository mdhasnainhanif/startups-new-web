"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../Container";
import VideoPopup from "../VideoPopup/VideoPopup";
import styles from "./ProfessionalDesign.module.css";

// 💡 تصویر سے مماثل مکمل مواد (Content)
const PROFESSIONAL_ONLINE = {
  heading: {
    part1: "Good Design Is Not",
    part2: " Decoration. It Is A",
    part3: " Financial Driver.",
  },
  description:
    "Customers judge your business in the first 3 seconds. They judge your professionalism, pricing, and reliability by how your brand looks. Strong design creates instant trust, higher perceived value, and more people choosing you over a competitor",
  factsHeading: "Facts About U.S. Local Businesses Benefiting From Design:",
  factsList: [
    "Local service businesses with updated branding see an average revenue increase of 15-25 percent within the first 12 months",
    "Contractors who refreshed their brand identity reported paying 20–40 percent less in ad spend for the same number of leads.",
    "Local businesses with consistent visual design closed up to 30 percent more jobs.",
    "Companies that invested in brand design increased their lifetime customer value by 28 percent.",
  ],
  bottomHeading: {
    part1: "Your ",
    part2: "Design Team",
    part3: " Builds a Brand That Signals Credibility, & Business",
  },
  rightSectionFact:
    "Home-service businesses using professional design saw a 2-3x improvement in lead conversion after updating visuals.",
  video: {
    videoUrl: "YOUR_VIDEO_URL_HERE", // Replace with actual video URL
    videoTitle: "Smart Marketing AI Team Demo",
  },
};

const ProfessionalDesign = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className={styles.section + " sectionPadding"}>
        <Container maxWidth="xl">
          <div className={styles.contentWrapper}>
            {/* Left Section */}
            <div className={styles.leftSection}>
              <h2 className={styles.heading}>
                <span className={styles.headingPart1}>
                  {PROFESSIONAL_ONLINE.heading.part1}
                </span>
                <span className={styles.headingPart2}>
                  {PROFESSIONAL_ONLINE.heading.part2}
                </span>
                <span className={styles.headingPart3}>
                  {PROFESSIONAL_ONLINE.heading.part3}
                </span>
              </h2>
              <p className={styles.description}>
                {PROFESSIONAL_ONLINE.description}
              </p>

              {/* FACTS SECTION - Left side list matching the image */}
              <h3 className={styles.factsHeading}>
                {PROFESSIONAL_ONLINE.factsHeading}
              </h3>
              <ul className={styles.factsList}>
                {PROFESSIONAL_ONLINE.factsList.map((fact, index) => (
                  <li key={index} className={styles.factsListItem}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Video Player & Callout */}
            <div className={styles.rightSectionMain}>
              
              {/* This div applies the background/card styling */}
              <div className={styles.videoMain}> 
                
                {/* Video Image Wrapper */}
                <div
                  className={styles.videoImageWrapper}
                  onClick={() => setIsPopupOpen(true)}
                >
                    <img
                      className={styles.videoImage}
                      src="/assets/images/man.png"
                      alt="Video Thumbnail"
                    />
                    {/* Play Button Icon */}
                    <div className={styles.playButtonContainer}>
                      <div className={styles.playButton}>
                        <svg
                          className={styles.playIcon}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                </div>

                {/* Bottom Heading Wrapper */}
                <div>
                  <h3 className={styles.bottomHeading}>
                    <span className={styles.bottomHeadingPart1}>
                      {PROFESSIONAL_ONLINE.bottomHeading.part1}
                    </span>
                    <span className={styles.bottomHeadingPart2}>
                      {PROFESSIONAL_ONLINE.bottomHeading.part2}
                    </span>
                    <span className={styles.bottomHeadingPart3}>
                      {PROFESSIONAL_ONLINE.bottomHeading.part3}
                    </span>
                  </h3>
                </div>
              </div>
              
              
              
            </div>
           
              <ul className={styles.rightFactsList}>
                <li className={styles.rightFactsListItem}>
                  {PROFESSIONAL_ONLINE.rightSectionFact}
                </li>
              </ul>
          </div>
        </Container>

        {/* Background Decorative Elements */}
        <div className={styles.backgroundDecoration} />
      </section>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        videoUrl={PROFESSIONAL_ONLINE.video.videoUrl}
        videoTitle={PROFESSIONAL_ONLINE.video.videoTitle}
        size="lg"
      />
    </>
  );
};

export default ProfessionalDesign;