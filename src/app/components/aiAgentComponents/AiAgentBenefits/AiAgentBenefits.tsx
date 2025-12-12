import React from "react";
import styles from "./AiAgentBenefits.module.css";
import Container from "../../Container";

const AiAgentBenefits = () => {
  const benefits = [
    {
      title: "1. Customer Support AI Agent",
      description:
        "Highlight efficiency, cost savings, and service quality improvements.",
      stats: [
        { number: "35%", label: "Reduces Support Costs" },
        { number: "60%", label: "Resolve Issues Faster" },
      ],
    },
    {
      title: "2. Lead Capture AI Agent",
      description:
        "Emphasize conversion, qualification speed, and lead pipeline growth.",
      stats: [
        { number: "52%", label: "Increase Lead Conversions" },
        { number: "3x", label: "Faster Quality Leads" },
      ],
    },
    {
      title: "3. Sales AI Agent",
      description:
        "Focus on revenue acceleration, efficiency, and buyer experience.",
      stats: [
        { number: "40%", label: "Increase Sales Productivity" },
        { number: "3.5x", label: "ROI Deliver Within a Year" },
      ],
    },
  ];

  return (
    <section id="ai-benefits" className={styles.aiBenefitsSection}>
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-4xl">
            <div className="sectionHeading forH2 text-center flex flex-col mb-12 md:mb-8 max-w-4xl mx-auto">
              <h2 plerdy-tracking-id="10073136301">
                Our AI Services Come With{" "}
                <span style={{ color: "var(--color-primary)" }}>
                  Tremendous Benefits
                </span>
              </h2>
              <p>
                Deploy AI services to streamline operations and amplify your
                business's efficiency. These services optimize processes,
                reduce delays, and enhance output, ensuring you gain a
                competitive edge with speed and precision.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h4 className={styles.benefitTitle}>{benefit.title}</h4>
              <p className={styles.benefitDescription}>
                {benefit.description}
              </p>
              <div className={styles.benefitStats}>
                {benefit.stats.map((stat, statIndex) => (
                  <div key={statIndex} className={styles.statBox}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AiAgentBenefits;

