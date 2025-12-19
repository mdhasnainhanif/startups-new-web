"use client";

import Image from "next/image";
import { OurCoreValueProps } from "../../types/types";
import Container from "../Container";
import styles from "./OurCoreValue.module.css";

export default function OurCoreValue({
  cards,
  className = "",
}: OurCoreValueProps) {
  return (
    <section className={`${styles.section} sectionPadding ${className}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.cardsContainer}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              {/* Number in top right */}
              <div className={styles.cardNumber}>{card.number}</div>
              
              {/* Icon in top left */}
              <div className={styles.cardIcon}>
                <Image
                  src={card.icon as unknown as string}
                  alt={card.heading}
                  width={48}
                  height={48}
                  className={styles.iconImage}
                />
              </div>
              
              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardHeading}>{card.heading}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

