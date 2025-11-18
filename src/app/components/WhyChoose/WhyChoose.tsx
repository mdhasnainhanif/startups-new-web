"use client";

import { useState } from "react";
import Image from "next/image";
import { WhyChooseProps } from "../../types/types";
import Container from "../Container";
import styles from "./WhyChoose.module.css";

export default function WhyChoose({
  heading,
  description,
  items,
  className = "",
}: WhyChooseProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    items.findIndex((item) => item.isOpen) !== -1
      ? items.findIndex((item) => item.isOpen)
      : null
  );

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${styles.section} ${className}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contentWrapper}>
          {/* Left Section - Image */}
          <div className={styles.imageSection}>
            <Image
              src="/assets/images/whychooseus.webp"
              alt="Why Choose Us"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>

          {/* Right Section - Content */}
          <div className={styles.textSection}>
            <h2 className={styles.heading}>
              <span className="text-white">{heading.part1} </span>
              <span className="text-[#0fdac2]">{heading.highlight}</span>
            </h2>

            <p className={styles.description}>{description}</p>

            {/* Accordion Items */}
            <div className={styles.accordionContainer}>
              {items.map((item, index) => (
                <div key={item.id} className={styles.accordionItem}>
                  <button
                    onClick={() => toggleItem(index)}
                    className={styles.accordionButton}
                  >
                    <span className={styles.accordionTitle}>{item.title}</span>
                    <span className={styles.accordionIcon}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`${styles.accordionContent} ${
                      openIndex === index ? styles.accordionOpen : ""
                    }`}
                  >
                    <p className={styles.accordionDescription}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

