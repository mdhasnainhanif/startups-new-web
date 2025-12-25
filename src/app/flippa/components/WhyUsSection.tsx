'use client';

import Container from '../../components/Container';
import styles from './WhyUsSection.module.css';

const comparisonData = [
  {
    solution: 'ValueAccel',
    isHighlighted: true,
    platform: true,
    speed: true,
    quality: true,
    support: true,
  },
  {
    solution: 'In-house team',
    isHighlighted: false,
    platform: false,
    speed: false,
    quality: true,
    support: true,
  },
  {
    solution: 'Freelancers',
    isHighlighted: false,
    platform: false,
    speed: false,
    quality: true,
    support: false,
  },
  {
    solution: 'Agencies',
    isHighlighted: false,
    platform: false,
    speed: false,
    quality: true,
    support: true,
  },
  {
    solution: 'DIY Tools',
    isHighlighted: false,
    platform: true,
    speed: true,
    quality: false,
    support: false,
  },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="#0fdac2" strokeWidth="2" fill="none" />
    <path d="M6 10l2 2 4-4" stroke="#0fdac2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="#666666" strokeWidth="2" fill="none" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="#666666" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WhyUsSection = () => {
  return (
    <section className={styles.section}>
      <Container maxWidth="xl">
        <div className={styles.headerSection}>
          <div className={styles.label}>BUILT FOR YOU</div>
          <h2 className={styles.heading}>Why Us?</h2>
          <p className={styles.subtitle}>
            See how we compare to other creative solutions.
          </p>
        </div>
        <div className={styles.tableWrapper}>
          <div className={styles.tableContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}></th>
                  <th className={styles.tableHeader}>Platform</th>
                  <th className={styles.tableHeader}>Speed</th>
                  <th className={styles.tableHeader}>Quality</th>
                  <th className={styles.tableHeader}>Support</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`${styles.tableRow} ${row.isHighlighted ? styles.highlightedRow : ''}`}
                  >
                    <td className={`${styles.solutionCell} ${row.isHighlighted ? styles.highlightedSolution : ''}`}>
                      {row.solution}
                    </td>
                    <td className={styles.iconCell}>
                      {row.platform ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className={styles.iconCell}>
                      {row.speed ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className={styles.iconCell}>
                      {row.quality ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className={styles.iconCell}>
                      {row.support ? <CheckIcon /> : <CrossIcon />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton}>
            Get Started
          </button>
        </div>
      </Container>
    </section>
  );
};
export default WhyUsSection;