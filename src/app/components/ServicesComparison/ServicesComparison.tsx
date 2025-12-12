"use client";

import React from "react";
import Container from "../Container";
import Link from "next/link";
import { ServicesComparisonData } from "../../data/ServicesComparisonData";
import styles from "./ServicesComparison.module.css";

interface ServicesComparisonProps {
  data: ServicesComparisonData;
}

const ServicesComparison: React.FC<ServicesComparisonProps> = ({ data }) => {
  return (
    <section className={`${styles.section} sectionPadding`}>
      <Container maxWidth="xl">
        <div className="sectionHeading forH2 text-center max-w-4xl mx-auto">
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            {/* Table Header */}
            <thead>
              <tr>
                <th className={styles.logoCell}>
                  <div className={styles.logoContainer}>
                    {data.logo && (
                      <img src={data.logo} alt={data.serviceName} />
                    )}
                  </div>
                </th>
                {data.criteria.map((criterion, index) => (
                  <th key={index} className={styles.criterionCell}>
                    {criterion}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Our Service Row */}
              <tr className={styles.ourServiceRow}>
                <td className={styles.serviceNameCell}>
                  <div className={styles.serviceName}>{data.serviceName}</div>
                </td>
                {data.criteria.map((_, index) => (
                  <td key={index} className={styles.checkCell}>
                    <div className={styles.checkIcon}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#09B47A" />
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Competitor Rows */}
              {data.competitors.map((competitor, rowIndex) => (
                <tr key={rowIndex} className={styles.competitorRow}>
                  <td className={styles.competitorCell}>
                    <div className={styles.competitorContent}>
                      <div className={styles.competitorName}>{competitor.name}</div>
                      <div className={styles.competitorDescription}>
                        {competitor.description}
                      </div>
                    </div>
                  </td>
                  {data.criteria.map((_, index) => (
                    <td key={index} className={styles.xCell}>
                      <div className={styles.xIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="10" fill="#DC143C" />
                          <path
                            d="M6 6L14 14M14 6L6 14"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.comparisonPoints && data.comparisonPoints.length > 0 && (
          <div className={styles.comparisonPoints}>
            <h3 className={styles.comparisonPointsHeading}>What the Comparison Shows</h3>
            <div className={styles.comparisonPointsGrid}>
              {data.comparisonPoints.map((point, index) => (
                <div key={index} className={styles.comparisonPoint}>
                  <div className={styles.comparisonPointLabel}>• {point.label}:</div>
                  <div className={styles.comparisonPointDescription}>{point.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ServicesComparison;

