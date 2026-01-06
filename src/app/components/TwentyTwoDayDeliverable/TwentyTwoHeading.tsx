import React from "react";
import Container from "../Container";
import styles from "./TwentyTwoDayDeliverable.module.css";

const TwentyTwoHeading = () => {
  return (
    <section className={`${styles.sectionheading}  pb-0`}>
        <div className={styles.starsBackgroundheading}></div>
      <Container maxWidth="xl" className={styles.container}>
        <div className={`${styles.titleSectionheading} sectionHeading forH2 max-w-5xl md:mx-auto`}>
          <h2>
            <span className="text-[#0fdac2]">Everything</span> Your Business Needs — Delivered 
            <span className="text-[#0fdac2]">in 1 Month</span>
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default TwentyTwoHeading;

