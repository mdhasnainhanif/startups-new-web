'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Container from '../Container';
import styles from './RealCost.module.css';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export interface RealCostData {
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

interface RealCostProps {
  data?: RealCostData;
}

const REAL_COST_DATA: RealCostData = {
  heading: {
    part1: 'See the Real Cost of ',
    part2: 'Hiring Design Staff vs.',
    part3: 'Hiring an Entire Design Team for 1 Month',
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
    'Most business owners discover they save thousands of dollars and months of work in just the first 1 month alone',
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

// Designer type to cost mapping
const DESIGNER_COSTS: Record<string, { monthly: number; annual: number }> = {
  'Junior Designer': { monthly: 1499, annual: 1499 * 12 },
  'Mid-Level Designer': { monthly: 2499, annual: 2499 * 12 },
  'Senior Designer': { monthly: 4999, annual: 4999 * 12 },
  'Design Director': { monthly: 7999, annual: 7999 * 12 },
};

// Format number with commas for display
const formatNumber = (value: string): string => {
  // Remove all non-digit characters
  const digitsOnly = value.replace(/\D/g, '');
  
  if (!digitsOnly) return '';
  
  // Convert to number and check max value
  const numValue = parseInt(digitsOnly, 10);
  if (isNaN(numValue)) return '';
  
  // Limit to max value
  const MAX_VALUE = 999999999;
  const limitedValue = Math.min(numValue, MAX_VALUE);
  
  // Format with commas
  return limitedValue.toLocaleString('en-US');
};

const RealCost = ({ data = REAL_COST_DATA }: RealCostProps) => {
  const [selectedDesignerType, setSelectedDesignerType] = useState<string>('Junior Designer');
  const [monthlyCost, setMonthlyCost] = useState<string>('');
  const [annualCost, setAnnualCost] = useState<string>('');
  const [estimatedTotal, setEstimatedTotal] = useState<number>(58000);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Update costs when designer type changes
  useEffect(() => {
    if (selectedDesignerType && DESIGNER_COSTS[selectedDesignerType]) {
      const costs = DESIGNER_COSTS[selectedDesignerType];
      const monthlyFormatted = formatNumber(costs.monthly.toString());
      const annualFormatted = formatNumber(costs.annual.toString());
      
      setMonthlyCost(monthlyFormatted);
      setAnnualCost(annualFormatted);
      setEstimatedTotal(costs.annual);
    }
  }, [selectedDesignerType]);

  // Function to parse text and highlight content inside square brackets with green color
  const parseHeadingWithBrackets = (text: string) => {
    if (!text) return null;
    
    // Check if text contains square brackets
    if (!text.includes('[') || !text.includes(']')) {
      return text;
    }
    
    // Split by brackets and process
    const parts: (string | React.ReactElement)[] = [];
    const segments = text.split(/(\[[^\]]+\])/g);
    
    segments.forEach((segment, index) => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        // This is a bracket segment - extract content and make it green
        const content = segment.slice(1, -1); // Remove [ and ]
        parts.push(
          <span 
            key={`bracket-${index}`} 
            className={styles.bracketText}
            style={{ color: '#0fdac2' }}
          >
            {content}
          </span>
        );
      } else if (segment) {
        // Regular text
        parts.push(segment);
      }
    });

    return <>{parts}</>;
  };

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

  // Get raw number value (without commas)
  const getRawValue = (formattedValue: string): string => {
    return formattedValue.replace(/,/g, '');
  };


  const handleMonthlyCostChange = (value: string) => {
    // Format the input value immediately
    const formatted = formatNumber(value);
    
    // Update monthly cost state - this triggers re-render immediately
    setMonthlyCost(formatted);
    
    // Update annual cost only if monthly is valid
    if (formatted && formatted.length > 0) {
      const monthlyRaw = getRawValue(formatted);
      const monthly = parseInt(monthlyRaw, 10);
      if (!isNaN(monthly) && monthly > 0) {
        const annual = monthly * 12;
        const annualFormatted = formatNumber(annual.toString());
        setAnnualCost(annualFormatted);
        setEstimatedTotal(annual);
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
    // Format the input value immediately
    const formatted = formatNumber(value);
    
    // Update annual cost state - this triggers re-render immediately
    setAnnualCost(formatted);
    
    // Update monthly cost only if annual is valid
    if (formatted && formatted.length > 0) {
      const annualRaw = getRawValue(formatted);
      const annual = parseInt(annualRaw, 10);
      if (!isNaN(annual) && annual > 0) {
        const monthly = Math.round(annual / 12);
        const monthlyFormatted = formatNumber(monthly.toString());
        setMonthlyCost(monthlyFormatted);
        setEstimatedTotal(annual);
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

  // Calculate bar heights based on monthly and annual costs - using real-time input values
  // Calculate directly without useMemo to ensure real-time updates
  const calculateBarHeights = () => {
    // Get real-time values from input fields
    const monthlyRaw = monthlyCost ? getRawValue(monthlyCost) : '';
    const annualRaw = annualCost ? getRawValue(annualCost) : '';
    
    // Parse to numbers - handle partial input gracefully
    const monthlyNum = monthlyRaw && monthlyRaw.length > 0 ? parseInt(monthlyRaw, 10) : 0;
    const annualNum = annualRaw && annualRaw.length > 0 ? parseInt(annualRaw, 10) : 0;
    
    // Check if values are valid numbers (not NaN and greater than 0)
    const hasMonthly = !isNaN(monthlyNum) && monthlyNum > 0;
    const hasAnnual = !isNaN(annualNum) && annualNum > 0;
    
    // If no valid values, return 0 heights
    if (!hasMonthly && !hasAnnual) {
      return { monthlyHeight: 0, annualHeight: 0 };
    }
    
    // Dynamic maximum value for scaling - use the larger of the two values
    // This ensures bars scale relative to each other
    const maxValue = Math.max(
      hasMonthly ? monthlyNum : 0,
      hasAnnual ? annualNum : 0
    );
    
    // Ensure we have a valid max value
    if (maxValue <= 0 || isNaN(maxValue)) {
      return { monthlyHeight: 0, annualHeight: 0 };
    }
    
    // Add 20% padding at top for better visualization
    const MAX_CHART_VALUE = maxValue * 1.2;
    
    // Calculate bar heights directly from input values
    // Convert actual values to percentage (0-100%)
    const monthlyHeight = hasMonthly
      ? Math.max(2, Math.min(100, (monthlyNum / MAX_CHART_VALUE) * 100))
      : 0;
    const annualHeight = hasAnnual
      ? Math.max(2, Math.min(100, (annualNum / MAX_CHART_VALUE) * 100))
      : 0;
    
    return { monthlyHeight, annualHeight };
  };

  // Calculate heights on every render for real-time updates
  const { monthlyHeight, annualHeight } = calculateBarHeights();

  // Calculate chart data dynamically based on input values
  const barChartData = useMemo(() => {
    const monthlyRaw = monthlyCost ? getRawValue(monthlyCost) : '';
    const annualRaw = annualCost ? getRawValue(annualCost) : '';
    
    const monthlyNum = monthlyRaw && monthlyRaw.length > 0 ? parseInt(monthlyRaw, 10) : 0;
    const annualNum = annualRaw && annualRaw.length > 0 ? parseInt(annualRaw, 10) : 0;
    
    // If both inputs are empty, use default values based on Estimated Total Cost
    const hasMonthly = monthlyNum > 0;
    const hasAnnual = annualNum > 0;
    
    let monthlyValue: number;
    let annualValue: number;
    
    if (!hasMonthly && !hasAnnual) {
      // Idle state - use default values from Estimated Total Cost
      annualValue = estimatedTotal;
      monthlyValue = Math.round(estimatedTotal / 12);
    } else {
      // Use input values
      monthlyValue = Math.max(0, Math.min(monthlyNum, MAX_VALUE));
      annualValue = Math.max(0, Math.min(annualNum, MAX_VALUE));
    }
    
    return [
      {
        name: 'Monthly',
        value: !isNaN(monthlyValue) ? monthlyValue : 0,
        color: '#0fdac2',
      },
      {
        name: 'Annual',
        value: !isNaN(annualValue) ? annualValue : 0,
        color: '#643bff',
      },
    ];
  }, [monthlyCost, annualCost, estimatedTotal]);

  // Fixed Y-axis tick values (these won't change based on input)
  const yAxisTicks = [0, 125, 250, 375, 500];

  // Calculate pie chart data dynamically
  const pieChartData = useMemo(() => {
    const monthlyRaw = monthlyCost ? getRawValue(monthlyCost) : '';
    const annualRaw = annualCost ? getRawValue(annualCost) : '';
    
    const monthlyNum = monthlyRaw && monthlyRaw.length > 0 ? parseInt(monthlyRaw, 10) : 0;
    const annualNum = annualRaw && annualRaw.length > 0 ? parseInt(annualRaw, 10) : 0;
    
    // If both inputs are empty, use default values based on Estimated Total Cost
    const hasMonthly = monthlyNum > 0;
    const hasAnnual = annualNum > 0;
    
    let monthlyValue: number;
    let annualValue: number;
    
    if (!hasMonthly && !hasAnnual) {
      // Idle state - use default values from Estimated Total Cost
      annualValue = estimatedTotal;
      monthlyValue = Math.round(estimatedTotal / 12);
    } else {
      monthlyValue = monthlyNum;
      annualValue = annualNum;
    }
    
    const total = monthlyValue + annualValue;
    
    if (total === 0) {
      return [
        { name: 'Monthly', value: 50, color: '#0fdac2', gradient: ['#0fdac2', '#0fdac2'] },
        { name: 'Annual', value: 50, color: '#732BFF', gradient: ['#732BFF', '#732BFF'] },
      ];
    }
    
    const monthlyPercent = (monthlyValue / total) * 100;
    const annualPercent = (annualValue / total) * 100;
    
    return [
      {
        name: 'Monthly',
        value: monthlyPercent,
        color: '#0fdac2',
        gradient: ['#0fdac2', '#0fdac2'],
      },
      {
        name: 'Annual',
        value: annualPercent,
        color: '#732BFF',
        gradient: ['#732BFF', '#732BFF'],
      },
    ];
  }, [monthlyCost, annualCost, estimatedTotal]);

  // Custom tooltip for bar chart
  const CustomBarTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.tooltipLabel}>{payload[0].name}</p>
          <p className={styles.tooltipValue}>{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for pie chart
  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.tooltipLabel}>{payload[0].name}</p>
          <p className={styles.tooltipValue}>{payload[0].value.toFixed(1)}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className={`sectionPadding ${styles.section}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          {/* Left Section */}
          <div className={styles.leftSection + " sectionHeading forH2"}>
            <h2>
              <span className={styles.headingPart1}>{parseHeadingWithBrackets(data.heading.part1)}</span>
              {data.heading.part2 && <span className={styles.headingPart2}>{parseHeadingWithBrackets(data.heading.part2)}</span>}
              {data.heading.part3 && <span className={styles.headingPart3}>{parseHeadingWithBrackets(data.heading.part3)}</span>}
            </h2>

            <p className={styles.callToAction}>{data.callToAction}</p>

            <ul className={styles.bulletList}>
              {data.bulletPoints.map((point, index) => (
                <li key={index} className={styles.bulletItem}>
                  {point}
                </li>
              ))}
            </ul>

            <p className={styles.conclusion}>{data.conclusion}</p>
          </div>

          {/* Right Section - Calculator */}
          <div className={styles.rightSection}>
            <div className={styles.calculatorCard}>
              <h3 className={styles.calculatorTitle}>{data.calculator.title}</h3>

              {/* Input Fields */}
              <div className={styles.fieldsContainer}>
                {/* Writer Type Dropdown */}
                <div className={styles.fieldWrapper}>
                  <div className={styles.fieldIcon}>
                    <Image width={28} height={28} src="/assets/images/icons/icon_designer-type.svg" alt="designer type icon" />
                  </div>
                  <div className={styles.selectWrapper} ref={dropdownRef}>
                    <div
                      className={styles.selectField}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={styles.selectValue}>
                        {selectedDesignerType || data.calculator.fields[0].label}
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
                        <div className={styles.dropdownHeader}>{data.calculator.fields[0].label}</div>
                        {data.calculator.fields[0].options?.map((option) => (
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
                  <Image width={28} height={28} src="/assets/images/icons/icon_monthly-cost.svg" alt="monthly cost icon" />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={styles.inputField}
                    placeholder="Monthly Cost"
                    value={monthlyCost}
                    readOnly
                    maxLength={15}
                  />
                </div>

                {/* Annual Cost */}
                <div className={styles.fieldWrapper}>
                  <div className={styles.fieldIcon}>
                  <Image width={28} height={28} src="/assets/images/icons/icon_annual-cost.svg" alt="annual cost icon" />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={styles.inputField}
                    placeholder="Annual Cost"
                    value={annualCost}
                    readOnly
                    maxLength={15}
                  />
                </div>
              </div>

              {/* Estimated Total Cost */}
              <div className={styles.totalCostSection}>
                <p className={styles.totalCostLabel}>{data.calculator.estimatedTotalLabel}</p>
                <p className={styles.totalCostValue}>{formatCurrency(estimatedTotal)}</p>
              </div>

              {/* Charts */}
              <div className={styles.chartsContainer}>
                {/* Monthly vs Annual Bar Chart */}
                <div className={styles.chartWrapper}>
                  <p className={styles.chartLabel}>
                    {data.calculator.charts.monthlyVsAnnual.label}
                  </p>
                  <div className={styles.barChart}>
                    <ResponsiveContainer width="100%" height={180}>
                      <BarChart
                        data={barChartData}
                        margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                        barCategoryGap="20%"
                        barSize={30}
                      >
                        <XAxis 
                          dataKey="name" 
                          tick={{ fill: '#bdd1f9', fontSize: 12 }}
                          axisLine={{ stroke: '#181847' }}
                          tickLine={{ stroke: '#181847' }}
                          interval={0}
                        />
                        <YAxis 
                          domain={[0, 100000]}
                          tick={false}
                          axisLine={false}
                          tickLine={false}
                          width={0}
                        />
                        <Tooltip content={<CustomBarTooltip />} />
                        <Bar 
                          dataKey="value" 
                          radius={[6, 6, 0, 0]}
                          isAnimationActive={true}
                          animationDuration={500}
                          animationEasing="ease-in-out"
                        >
                          {barChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Cost Breakdown Donut Chart */}
                <div className={styles.chartWrapper}>
                  <p className={styles.chartLabel}>
                    {data.calculator.charts.costBreakdown.label}
                  </p>
                  <div className={styles.donutChart}>
                    <ResponsiveContainer width="100%" height={130}>
                      <PieChart>
                        <defs>
                          {pieChartData.map((segment, index) => (
                            <linearGradient key={index} id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor={segment.gradient[0]} />
                              <stop offset="100%" stopColor={segment.gradient[1]} />
                            </linearGradient>
                          ))}
                        </defs>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={35}
                          outerRadius={55}
                          paddingAngle={2}
                          dataKey="value"
                          startAngle={90}
                          endAngle={-270}
                          stroke="none"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`url(#gradient${index})`} stroke="none" />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomPieTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img src="/assets/images/1.webp" alt="arrow icon" loading="lazy" className={styles.aeroicon} />
    </section>
  );
};

export default RealCost;

