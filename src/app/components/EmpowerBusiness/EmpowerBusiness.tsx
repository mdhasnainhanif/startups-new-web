"use client";

import { useState } from "react";
import Image from "next/image";
import { EmpowerBusinessProps } from "../../types/types";
import Container from "../Container";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";
import OfferPopup from "../OfferPopup/OfferPopup";
import styles from "./EmpowerBusiness.module.css";

export default function EmpowerBusiness({
  heading,
  description,
  ctaButton,
  className = "",
}: EmpowerBusinessProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className={`${styles.section} sectionPadding ${className}`}>
      <Container maxWidth="mxl" className="px-0">
        <div className={styles.contentWrapper}>
          {/* Left Section - Image */}
          <div className={styles.imageSection}>
            <Image
              src="/assets/images/empowerbusiness.webp"
              alt="Empower Business"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>

          {/* Right Section - Content */}
          <div className={`${styles.textSection} sectionHeading forH2`}>
            <h2>{heading}</h2>
            <p className={`${styles.description} mt-0`}>{description}</p>
            <div className={styles.buttonWrapper}>
             

              <Button href="#" variant="green" icon={<ArrowRightIcon style={{ fill: "#000" }} />} iconPosition="right" onClick={() => setIsPopupOpen(true)}>
              {ctaButton.text}
              </Button>
              
            </div>
          </div>
        </div>
      </Container>
      <OfferPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}

