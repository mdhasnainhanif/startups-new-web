'use client';

import { useState } from 'react';
import Container from '../Container';
import styles from './RealCost.module.css';

interface RealCostData {
  heading: {
    part1: string;
    part2: string;
    part3: string;
  };
  callToAction: string;
  bulletPoints: string[];
  conclusion: string;
  calculator: {
    title: string;
    fields: Array<{
      id: string;
      label: string;
      icon: string;
      placeholder: string;
      type: 'select' | 'input';
      options?: string[];
    }>;
    estimatedTotalLabel: string;
    charts: {
      monthlyVsAnnual: {
        label: string;
        monthlyValue: number;
        annualValue: number;
      };
      costBreakdown: {
        label: string;
        segments: Array<{
          label: string;
          value: number;
          color: string;
        }>;
      };
    };
  };
}

const REAL_COST_DATA: RealCostData = {
  heading: {
    part1: 'See the Real Cost of',
    part2: 'Hiring Design Staff vs.',
    part3: 'Hiring an Entire Design Team for 22 Days',
  },
  callToAction: 'Use the calculator to instantly compare:',
  bulletPoints: [
    'Annual salary of one U.S. designer',
    'Cost of hiring multiple specialists',
    'Cost of design tools, software, and revisions',
    'What you save by using one AI-powered design team',
    'The long-term ROI of getting your full brand built correctly',
  ],
  conclusion:
    'Most business owners discover they save thousands of dollars and months of work in just the first 22 days alone',
  calculator: {
    title: 'Cost Calculator',
    fields: [
      {
        id: 'designerType',
        label: 'Designer Type',
        icon: 'designer',
        placeholder: 'Designer Type',
        type: 'select',
        options: ['Junior Designer', 'Mid-Level Designer', 'Senior Designer', 'Design Director'],
      },
      {
        id: 'monthlyCost',
        label: 'Monthly Cost',
        icon: 'coins',
        placeholder: 'Monthly Cost',
        type: 'input',
      },
      {
        id: 'annualCost',
        label: 'Annual Cost',
        icon: 'calendar',
        placeholder: 'Annual Cost',
        type: 'input',
      },
    ],
    estimatedTotalLabel: 'Estimated Total Cost',
    charts: {
      monthlyVsAnnual: {
        label: 'Monthly vs Annual',
        monthlyValue: 30,
        annualValue: 70,
      },
      costBreakdown: {
        label: 'Cost Breakdown',
        segments: [
          { label: 'Salary', value: 50, color: '#0fdac2' },
          { label: 'Tools', value: 25, color: '#643bff' },
          { label: 'Overhead', value: 25, color: '#1a0b3f' },
        ],
      },
    },
  },
};

const RealCost = () => {
  const [selectedDesignerType, setSelectedDesignerType] = useState<string>('');
  const [monthlyCost, setMonthlyCost] = useState<string>('');
  const [annualCost, setAnnualCost] = useState<string>('');
  const [estimatedTotal, setEstimatedTotal] = useState<number>(58000);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const calculateTotal = () => {
    const monthly = parseFloat(monthlyCost) || 0;
    const annual = parseFloat(annualCost) || 0;
    const total = monthly * 12 + annual;
    setEstimatedTotal(total || 58000);
  };

  const handleMonthlyCostChange = (value: string) => {
    setMonthlyCost(value);
    if (value) {
      const monthly = parseFloat(value);
      setAnnualCost((monthly * 12).toString());
    }
    calculateTotal();
  };

  const handleAnnualCostChange = (value: string) => {
    setAnnualCost(value);
    if (value) {
      const annual = parseFloat(value);
      setMonthlyCost((annual / 12).toFixed(2));
    }
    calculateTotal();
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className={`sectionPadding ${styles.section}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          {/* Left Section */}
          <div className={styles.leftSection + " sectionHeading forH2"}>
            <h2>
              <span className={styles.headingPart1}>{REAL_COST_DATA.heading.part1}</span>
              <br />
              <span className={styles.headingPart2}>{REAL_COST_DATA.heading.part2}</span>
              <br />
              <span className={styles.headingPart3}>{REAL_COST_DATA.heading.part3}</span>
            </h2>

            <p className={styles.callToAction}>{REAL_COST_DATA.callToAction}</p>

            <ul className={styles.bulletList}>
              {REAL_COST_DATA.bulletPoints.map((point, index) => (
                <li key={index} className={styles.bulletItem}>
                  {point}
                </li>
              ))}
            </ul>

            <p className={styles.conclusion}>{REAL_COST_DATA.conclusion}</p>
          </div>

          {/* Right Section - Calculator */}
          <div className={styles.rightSection}>
            <div className={styles.calculatorCard}>
              <h3 className={styles.calculatorTitle}>{REAL_COST_DATA.calculator.title}</h3>

              {/* Input Fields */}
              <div className={styles.fieldsContainer}>
                {/* Designer Type Dropdown */}
                <div className={styles.fieldWrapper}>
                  <div className={styles.fieldIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className={styles.selectWrapper}>
                    <select
                      className={styles.selectField}
                      value={selectedDesignerType}
                      onChange={(e) => {
                        setSelectedDesignerType(e.target.value);
                        setIsDropdownOpen(false);
                      }}
                      onFocus={() => setIsDropdownOpen(true)}
                      onBlur={() => setIsDropdownOpen(false)}
                    >
                      <option value="">Designer Type</option>
                      {REAL_COST_DATA.calculator.fields[0].options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className={styles.chevronIcon}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Monthly Cost */}
                <div className={styles.fieldWrapper}>
                  <div className={styles.fieldIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M6 10h12M6 14h8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <input
                    type="number"
                    className={styles.inputField}
                    placeholder="Monthly Cost"
                    value={monthlyCost}
                    onChange={(e) => handleMonthlyCostChange(e.target.value)}
                  />
                </div>

                {/* Annual Cost */}
                <div className={styles.fieldWrapper}>
                  <div className={styles.fieldIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <input
                    type="number"
                    className={styles.inputField}
                    placeholder="Annual Cost"
                    value={annualCost}
                    onChange={(e) => handleAnnualCostChange(e.target.value)}
                  />
                </div>
              </div>

              {/* Estimated Total Cost */}
              <div className={styles.totalCostSection}>
                <p className={styles.totalCostLabel}>{REAL_COST_DATA.calculator.estimatedTotalLabel}</p>
                <p className={styles.totalCostValue}>{formatCurrency(estimatedTotal)}</p>
              </div>

              {/* Charts */}
              <div className={styles.chartsContainer}>
                {/* Monthly vs Annual Bar Chart */}
                <div className={styles.chartWrapper}>
                  <p className={styles.chartLabel}>
                    {REAL_COST_DATA.calculator.charts.monthlyVsAnnual.label}
                  </p>
                  <div className={styles.barChart}>
                    <div className={styles.barChartContainer}>
                      <div
                        className={styles.bar}
                        style={{
                          height: `${REAL_COST_DATA.calculator.charts.monthlyVsAnnual.monthlyValue}%`,
                          backgroundColor: '#0fdac2',
                        }}
                      />
                      <div
                        className={styles.bar}
                        style={{
                          height: `${REAL_COST_DATA.calculator.charts.monthlyVsAnnual.annualValue}%`,
                          backgroundColor: '#643bff',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown Donut Chart */}
                <div className={styles.chartWrapper}>
                  <p className={styles.chartLabel}>
                    {REAL_COST_DATA.calculator.charts.costBreakdown.label}
                  </p>
                  <div className={styles.donutChart}>
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r="30"
                        fill="none"
                        stroke="#1a0b3f"
                        strokeWidth="20"
                      />
                      {REAL_COST_DATA.calculator.charts.costBreakdown.segments.map(
                        (segment, index, array) => {
                          const previousValue = array
                            .slice(0, index)
                            .reduce((sum, s) => sum + s.value, 0);
                          const offset = (previousValue / 100) * 360;
                          const dashArray = (segment.value / 100) * 188.5;
                          const dashOffset = 188.5 - (previousValue / 100) * 188.5;

                          return (
                            <circle
                              key={index}
                              cx="40"
                              cy="40"
                              r="30"
                              fill="none"
                              stroke={segment.color}
                              strokeWidth="20"
                              strokeDasharray={`${dashArray} 188.5`}
                              strokeDashoffset={dashOffset}
                              transform="rotate(-90 40 40)"
                            />
                          );
                        }
                      )}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img src="/assets/images/1.webp" alt="" className={styles.aeroicon} />
    </section>
  );
};

export default RealCost;

