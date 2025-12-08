'use client';

import { useState, useEffect, useRef } from 'react';
import Container from '../Container';
import styles from './RealCost.module.css';
import Image from 'next/image';

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
          gradient: string[];
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
          { label: 'Segment 1', value: 50, color: '#0fdac2', gradient: ['#0fdac2', '#0fdac2'] },
          { label: 'Segment 2', value: 105, color: '#732BFF', gradient: ['#732BFF', '#732BFF'] },
        ],
      },
    },
  },
};

const RealCost = () => {
  const [selectedDesignerType, setSelectedDesignerType] = useState<string>('Junior Designer');
  const [monthlyCost, setMonthlyCost] = useState<string>('');
  const [annualCost, setAnnualCost] = useState<string>('');
  const [estimatedTotal, setEstimatedTotal] = useState<number>(58000);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Maximum allowed value (999,999,999)
  const MAX_VALUE = 999999999;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Format number with commas for display
  const formatNumber = (value: string): string => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    if (!digitsOnly) return '';
    
    // Convert to number and check max value
    const numValue = parseInt(digitsOnly, 10);
    if (isNaN(numValue)) return '';
    
    // Limit to max value
    const limitedValue = Math.min(numValue, MAX_VALUE);
    
    // Format with commas
    return limitedValue.toLocaleString('en-US');
  };

  // Get raw number value (without commas)
  const getRawValue = (formattedValue: string): string => {
    return formattedValue.replace(/,/g, '');
  };


  const handleMonthlyCostChange = (value: string) => {
    // Format the input value
    const formatted = formatNumber(value);
    setMonthlyCost(formatted);
    
    if (formatted) {
      const monthlyRaw = getRawValue(formatted);
      const monthly = parseInt(monthlyRaw, 10);
      if (!isNaN(monthly) && monthly > 0) {
        const annual = monthly * 12;
        const annualFormatted = formatNumber(annual.toString());
        setAnnualCost(annualFormatted);
        // Calculate total with new values
        const total = monthly * 12 + parseInt(getRawValue(annualFormatted), 10);
        setEstimatedTotal(total || 58000);
      } else {
        setAnnualCost('');
        setEstimatedTotal(58000);
      }
    } else {
      setAnnualCost('');
      setEstimatedTotal(58000);
    }
  };

  const handleAnnualCostChange = (value: string) => {
    // Format the input value
    const formatted = formatNumber(value);
    setAnnualCost(formatted);
    
    if (formatted) {
      const annualRaw = getRawValue(formatted);
      const annual = parseInt(annualRaw, 10);
      if (!isNaN(annual) && annual > 0) {
        const monthly = Math.round(annual / 12);
        const monthlyFormatted = formatNumber(monthly.toString());
        setMonthlyCost(monthlyFormatted);
        // Calculate total with new values
        const total = parseInt(getRawValue(monthlyFormatted), 10) * 12 + annual;
        setEstimatedTotal(total || 58000);
      } else {
        setMonthlyCost('');
        setEstimatedTotal(58000);
      }
    } else {
      setMonthlyCost('');
      setEstimatedTotal(58000);
    }
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
                    <Image width={28} height={28} src="/assets/images/icons/icon_designer-type.svg" alt="" />
                  </div>
                  <div className={styles.selectWrapper} ref={dropdownRef}>
                    <div
                      className={styles.selectField}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={styles.selectValue}>
                        {selectedDesignerType || 'Designer Type'}
                      </span>
                      <div className={`${styles.chevronIcon} ${isDropdownOpen ? styles.chevronOpen : ''}`}>
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
                    {isDropdownOpen && (
                      <div className={styles.dropdownMenu}>
                        <div className={styles.dropdownHeader}>Designer Type</div>
                        {REAL_COST_DATA.calculator.fields[0].options?.map((option) => (
                          <div
                            key={option}
                            className={`${styles.dropdownOption} ${selectedDesignerType === option ? styles.dropdownOptionActive : ''}`}
                            onClick={() => {
                              setSelectedDesignerType(option);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Monthly Cost */}
                <div className={styles.fieldWrapper}>
                  <div className={styles.fieldIcon}>
                  <Image width={28} height={28} src="/assets/images/icons/icon_monthly-cost.svg" alt="" />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={styles.inputField}
                    placeholder="Monthly Cost"
                    value={monthlyCost}
                    onChange={(e) => handleMonthlyCostChange(e.target.value)}
                    maxLength={15}
                  />
                </div>

                {/* Annual Cost */}
                <div className={styles.fieldWrapper}>
                  <div className={styles.fieldIcon}>
                  <Image width={28} height={28} src="/assets/images/icons/icon_annual-cost.svg" alt="" />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={styles.inputField}
                    placeholder="Annual Cost"
                    value={annualCost}
                    onChange={(e) => handleAnnualCostChange(e.target.value)}
                    maxLength={15}
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
                    <svg width="120" height="130" viewBox="0 0 120 120">
                      <defs>
                        {REAL_COST_DATA.calculator.charts.costBreakdown.segments.map((segment, index) => (
                          <linearGradient key={index} id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={segment.gradient[0]} />
                            <stop offset="100%" stopColor={segment.gradient[1]} />
                          </linearGradient>
                        ))}
                      </defs>
                      {REAL_COST_DATA.calculator.charts.costBreakdown.segments.map(
                        (segment, index, array) => {
                          const previousValue = array
                            .slice(0, index)
                            .reduce((sum, s) => sum + s.value, 0);
                          const offset = (previousValue / 100) * 360;
                          const circumference = 2 * Math.PI * 45;
                          const dashArray = (segment.value / 100) * circumference;
                          const dashOffset = circumference - (previousValue / 100) * circumference;

                          return (
                            <circle
                              key={index}
                              cx="60"
                              cy="60"
                              r="45"
                              fill="none"
                              stroke={`url(#gradient${index})`}
                              strokeWidth="20"
                              strokeDasharray={`${dashArray} ${circumference}`}
                              strokeDashoffset={dashOffset}
                              strokeLinecap="butt"
                              transform="rotate(-90 60 60)"
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

