"use client";
import { useState, useEffect, useRef } from "react";
import { CounterProps } from "../../types/types";
import Container from "../Container";
import styles from "./Counter.module.css";
export default function Counter({
  items,
  className = "",
  gridClassName = "",
}: CounterProps) {
  const [counts, setCounts] = useState<number[]>(items.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const parseValue = (value: string): { number: number; suffix: string } => {
    const match = value.match(/^([\d.]+)([+\-%Xx]*)$/);
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2] || "",
      };
    }
    return { number: 0, suffix: "" };
  }; 
  useEffect(() => {
    if (hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            items.forEach((item, index) => {
              const { number: targetNumber } = parseValue(item.value);
              const duration = 2000;
              const startTime = Date.now();
              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = targetNumber * easeOutQuart;
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(currentValue);
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
  }, [hasAnimated, items]);
  return (
    <section ref={sectionRef} className={`${styles.section} ${className}`}>
      <Container maxWidth="xl" className="px-0">
        <div className={`${styles.counterGrid} ${gridClassName}`}>
          {items.map((item, index) => {
            const { suffix } = parseValue(item.value);
            const displayValue = hasAnimated
              ? `${counts[index]}${suffix}`
              : "0";
            return (
              <div key={item.id} className={styles.counterItem}>
                <div className={styles.counterValue}>{displayValue}</div>
                <div className={styles.counterLabel}>{item.label}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

