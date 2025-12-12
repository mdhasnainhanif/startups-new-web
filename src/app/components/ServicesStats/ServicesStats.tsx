"use client";

import React from "react";
import Container from "../Container";
import { ServicesStatsData } from "../../data/ServicesStatsData";
import styles from "./ServicesStats.module.css";

interface ServicesStatsProps {
  data: ServicesStatsData;
}

const ServicesStats: React.FC<ServicesStatsProps> = ({ data }) => {
  return (
    <section className={`${styles.section} sectionPadding`}>
      <Container maxWidth="xl">
        <div className={styles.cardsGrid}>
          {data.stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={styles.card}
              style={{
                backgroundImage: stat.image ? `url(${stat.image})` : 'none',
                backgroundPosition: 'top',
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
              }}
            >
              {/* Overlays for team members */}
              {/* {stat.overlays && stat.overlays.length > 0 && (
                <div className={styles.overlays}>
                  {stat.overlays.map((overlay, overlayIndex) => (
                    <div
                      key={overlayIndex}
                      className={styles.overlay}
                      style={{
                        top: overlay.top,
                        left: overlay.left,
                        backgroundColor: overlay.color,
                      }}
                    >
                      {overlay.label}
                    </div>
                  ))}
                </div>
              )} */}

              {/* Content at bottom with dark overlay */}
              <div className={styles.contentContainer}>
                  {/* Value */}
                  <h2 className={styles.value}>
                    <span className={styles.valueText}>{stat.value.replace(/[+★]/g, '')}</span>
                    {stat.value.includes('+') && (
                      <span className={styles.plusIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                    )}
                    {stat.value.includes('★') && (
                      <span className={styles.starIcon}>★</span>
                    )}
                  </h2>
                <div className={styles.contentOverlay}>
                  {/* Label */}
                  <p className={styles.label}>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesStats;

