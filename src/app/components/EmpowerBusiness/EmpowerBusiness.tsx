"use client";

import Image from "next/image";
import { EmpowerBusinessProps } from "../../types/types";
import Container from "../Container";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";
import styles from "./EmpowerBusiness.module.css";

export default function EmpowerBusiness({
  heading,
  description,
  ctaButton,
  className = "",
}: EmpowerBusinessProps) {
  return (
    <section className={`${styles.section} ${className}`}>
      <Container maxWidth="xl" className="px-0">
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
          <div className={styles.textSection}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttonWrapper}>
              <Button
                href={ctaButton.href}
                variant={ctaButton.variant || "secondary"}
                size="lg"
                icon={<ArrowRightIcon />}
                iconPosition="right"
              >
                {ctaButton.text}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

