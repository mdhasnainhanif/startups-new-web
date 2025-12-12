"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "../Container";
import { ServicesStatsData } from "../../data/ServicesStatsData";
import styles from "./ServicesStats.module.css";

interface ServicesStatsProps {
  data: ServicesStatsData;
}

const ServicesStats: React.FC<ServicesStatsProps> = ({ data }) => {
  const [counts, setCounts] = useState<number[]>(new Array(data.stats.length).fill(0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const parseValue = (value: string): { number: number; suffix: string; isDecimal: boolean; hasM: boolean; hasK: boolean } => {
    if (!value) return { number: 0, suffix: "", isDecimal: false, hasM: false, hasK: false };
    
    // Handle decimal values like "4.8/5"
    if (value.includes('/')) {
      const parts = value.split('/');
      const numPart = parts[0].replace(/[★*]/g, '');
      const num = parseFloat(numPart);
      return { number: num, suffix: `/5${value.includes('★') ? '★' : ''}`, isDecimal: true, hasM: false, hasK: false };
    }
    
    // Handle values with M (millions)
    if (value.toUpperCase().includes('M')) {
      const match = value.match(/^([\d.]+)M([+\-%Xx★]*)$/i);
      if (match) {
        return {
          number: parseFloat(match[1]) * 1000000,
          suffix: match[2] || "",
          isDecimal: match[1].includes('.'),
          hasM: true,
          hasK: false
        };
      }
    }
    
    // Handle values with K (thousands)
    if (value.toUpperCase().includes('K')) {
      const match = value.match(/^([\d.]+)K([+\-%Xx★]*)$/i);
      if (match) {
        return {
          number: parseFloat(match[1]) * 1000,
          suffix: match[2] || "",
          isDecimal: match[1].includes('.'),
          hasM: false,
          hasK: true
        };
      }
    }
    
    // Handle values with + or other suffixes
    const match = value.match(/^([\d.]+)([+\-%Xx★]*)$/);
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2] || "",
        isDecimal: match[1].includes('.'),
        hasM: false,
        hasK: false
      };
    }
    return { number: 0, suffix: "", isDecimal: false, hasM: false, hasK: false };
  };

  const formatNumber = (num: number, isDecimal: boolean, suffix: string, hasM: boolean, hasK: boolean, originalValue: string): string => {
    if (isDecimal) {
      // For decimal values like 4.8/5, keep the format
      return num.toFixed(1) + suffix;
    }
    
    // If original had M, format as M
    if (hasM) {
      const mValue = num / 1000000;
      const formatted = mValue.toFixed(mValue % 1 === 0 ? 0 : 1);
      return formatted + 'M' + suffix;
    }
    
    // If original had K, format as K
    if (hasK) {
      const kValue = num / 1000;
      const formatted = kValue.toFixed(kValue % 1 === 0 ? 0 : 1);
      return formatted + 'K' + suffix;
    }
    
    // Format large numbers
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M' + suffix;
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K' + suffix;
    }
    return Math.floor(num).toLocaleString() + suffix;
  };

  useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            data.stats.forEach((stat, index) => {
              if (!stat.value) return;
              const { number: targetNumber } = parseValue(stat.value);
              const duration = 2000;
              const startTime = Date.now();
              
              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = targetNumber * easeOutQuart;
                
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = currentValue;
                  return newCounts;
                });
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = targetNumber;
                    return newCounts;
                  });
                }
              };
              requestAnimationFrame(animate);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, data.stats]);

  return (
    <section ref={sectionRef} className={`${styles.section} sectionPadding`}>
      <Container maxWidth="xl">
        <div className={styles.cardsGrid}>
          {data.stats.map((stat, index) => {
            const { suffix, isDecimal, hasM, hasK } = parseValue(stat.value);
            const displayValue = stat.value ? formatNumber(counts[index], isDecimal, suffix, hasM, hasK, stat.value) : '';
            
            return (
              <div 
                key={stat.id} 
                className={styles.card}
                style={{
                  backgroundImage: stat.image ? `url(${stat.image})` : 'none',
                  backgroundPosition: 'top',
                  backgroundSize: 'cover', 
                  backgroundRepeat: 'no-repeat', 
                }}
              >
                {/* Animated counter on top of image */}
                <div className={styles.topCounterContainer}>
                {stat.value && (
                  <div className={styles.topCounter}>
                    <span className={`${styles.topCounterValue}`}>
                      {displayValue.replace('★', '')}
                      {stat.value.includes('★') && (
                        <span className={styles.topCounterStar}>★</span>
                      )}
                    </span>
                  </div>
                )}

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
                    {/* <h2 className={styles.value}>
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
                    </h2> */}
                  <div className={styles.contentOverlay}>
                    {/* Label */}
                    <p className={styles.label}>{stat.label}</p>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesStats;

