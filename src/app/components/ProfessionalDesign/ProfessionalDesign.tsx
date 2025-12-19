"use client";

import { useState } from "react";
import Container from "../Container";
import VideoPopup from "../VideoPopup/VideoPopup";
import styles from "./ProfessionalDesign.module.css";
import { PROFESSIONAL_DESIGN_DATA, ProfessionalDesignData } from "../../data/ProfessionalDesignData";

interface ProfessionalDesignProps {
  data?: ProfessionalDesignData;
  className?: string;
}

const ProfessionalDesign = ({ data = PROFESSIONAL_DESIGN_DATA, className }: ProfessionalDesignProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Helper function to get className with fallback
  const getClassName = (classNameKey: string | undefined, defaultClass: string) => {
    if (!classNameKey) return defaultClass;
    // Check if classNameKey exists in styles object
    const styleClass = styles[classNameKey as keyof typeof styles];
    return styleClass || defaultClass;
  };

  return (
    <>
      <section className={`${getClassName(data.className?.section, styles.section)} ${className} sectionPadding`}>
        <Container maxWidth="xl">
          <div className={getClassName(data.className?.contentWrapper, styles.contentWrapper)}>
            {/* Left Section */}
            <div className={getClassName(data.className?.leftSection, styles.leftSection) + " sectionHeading forH2"}>
              <h2 className={getClassName(data.heading.className?.container, styles.heading)}>
                <span className={getClassName(data.heading.className?.part1, styles.headingPart1)}>
                  {data.heading.part1} 
                </span>
                <span className={getClassName(data.heading.className?.part2, styles.headingPart2)}>
                  {data.heading.part2}
                </span>
              </h2>
              <p className={getClassName(data.description.className?.text, styles.description)}>
                {data.description.text2 ? (
                  <>
                    <span className={getClassName(data.description.className?.text1Highlight, "")}>
                      {data.description.text1}
                    </span>
                    {data.description.text2}
                    <span className={getClassName(data.description.className?.highlight, styles.descriptionHighlight)}>
                      {data.description.highlight}
                    </span>
                  </>
                ) : (
                  <>
                    {data.description.text1}
                    <span className={getClassName(data.description.className?.highlight, styles.descriptionHighlight)}>
                      {data.description.highlight}
                    </span>
                  </>
                )}
              </p>

              {/* FACTS SECTION - Left side list matching the image */}
              <h3 className={getClassName(data.factsHeading.className, styles.factsHeading)}>
                {data.factsHeading.text}
              </h3>
              <ul className={styles.factsList}>
                {data.factsList.map((fact, index) => (
                  <li key={index} className={getClassName(fact.className, styles.factsListItem)}>
                    {fact.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Video Player & Callout */}
            <div className={getClassName(data.className?.rightSectionMain, styles.rightSectionMain)}>
              <div className={getClassName(data.className?.videoMain, styles.videoMain)}>
                {/* Video Image Wrapper */}
                <div
                  className={`${getClassName(data.className?.videoImageWrapper, styles.videoImageWrapper)}`}
                  onClick={() => setIsPopupOpen(true)}
                >
                  <img
                    className={getClassName(data.videoImage.className, styles.videoImage)}
                    src={data.videoImage.src}
                    alt={data.videoImage.alt}
                  />
                  {/* Play Button Icon */}
                  <div className={getClassName(data.className?.playButtonContainer, styles.playButtonContainer)}>
                    <div className={getClassName(data.className?.playButton, styles.playButton)}>
                      <svg
                        className={getClassName(data.className?.playIcon, styles.playIcon)}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Heading Wrapper */}
                <div className="bottomHeadingWrapper">
                  <h3 className={getClassName(data.bottomHeading.className?.container, styles.bottomHeading)}>
                    <span className={getClassName(data.bottomHeading.className?.part1, styles.bottomHeadingPart1)}>
                      {data.bottomHeading.part1}
                    </span>
                    <span className={getClassName(data.bottomHeading.className?.part2, styles.bottomHeadingPart2)}>
                      {data.bottomHeading.part2}
                    </span>
                    <span className={getClassName(data.bottomHeading.className?.part3, styles.bottomHeadingPart3)}>
                      {data.bottomHeading.part3}
                    </span>
                  </h3>                  
                </div>
              </div>

              <ul className={styles.rightFactsList}>
                {data.rightSectionFact.map((fact, index) => (
                  <li key={index} className={getClassName(fact.className, styles.rightFactsListItem)}>
                    {fact.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>

        {/* Background Decorative Elements */}
        <div className={getClassName(data.className?.backgroundDecoration, styles.backgroundDecoration)} />
      </section>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        videoUrl={data.video.videoUrl}
        videoTitle={data.video.videoTitle}
        size="lg"
      />
    </>
  );
};

export default ProfessionalDesign;