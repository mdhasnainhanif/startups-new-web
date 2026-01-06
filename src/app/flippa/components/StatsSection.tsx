"use client";

import { MotionDiv } from "./motion";
import { useCountUp } from "./use-count-up";
import { statsData } from "../../data/FlippaPageData";
import Container from "../../components/Container";
import styles from "./StatsSection.module.css";

const StatSection = ({ stat, index }: { stat: typeof statsData.stats[0]; index: number }) => {
  const { ref, formattedValue } = useCountUp({
    end: stat.value,
    duration: 2000,
    prefix: stat.prefix || "",
    suffix: stat.suffix || "",
    decimals: stat.decimals || 0,
  });
  
  return (
    <div ref={ref} className={styles.statSection}>
      <div className={styles.iconContainer}>
        <img src={stat.icon} alt={stat.label} />
      </div>

      <div className={styles.statValue}>
        {formattedValue}
      </div>

      <h3 className={styles.statLabel}>
        {stat.label}
      </h3>
      <p className={styles.statDescription}>{stat.description}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className={`sectionPadding ${styles.section} blogStarsBackground`}>
      <Container maxWidth="xl">
        <MotionDiv className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="sectionHeading">
            <h2>
              {statsData.title.main}{" "}
              <span className="text-[var(--color-primary)]">{statsData.title.highlight}</span>
            </h2>
          </div>
          <p className="text-lg text-white/80">{statsData.description}</p>
        </MotionDiv>

        <div className={styles.statsBanner}>
          <div className={styles.statsGrid}>
            {statsData.stats.map((stat, index) => (
              <StatSection key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

