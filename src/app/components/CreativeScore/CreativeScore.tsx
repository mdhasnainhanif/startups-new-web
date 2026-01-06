"use client";

import {
  FilterIcon,
  GraphIcon,
  HeartIcon,
  SearchIcon,
  WorldIcon,
} from "@/app/icons";
import Container from "../Container";
import styles from "./CreativeScore.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import AnalyticsDashboard from "../AnalyticsDashboard/AnalyticsDashboard";
// import AnalyticsDashboardModule from "../AnalyticsDashboard/AnalyticsDashboard.module.css";

interface Category {
  name: string;
  active: boolean;
  icon: React.ReactNode;
}

interface Recommendation {
  text: string;
}

interface RadarMetric {
  name: string;
  value: number;
}

interface CreativeScoreData {
  performanceScore: {
    value: number;
    label: string;
  };
  categories: Category[];
  recommendations: Recommendation[];
  radarChart: {
    datasets: {
      name: string;
      color: string;
      metrics: RadarMetric[];
    }[];
    metrics: string[];
  };
  assetDetails: {
    type: string;
    purpose: string;
    audience: string;
  };
  uiPreview: {
    title: string;
    titleBold: string;
    description: string;
    buttonText: string;
  };
}

const CREATIVE_SCORE_DATA: CreativeScoreData = {
  performanceScore: {
    value: 92,
    label: "EXCELLENT",
  },
  categories: [
    { name: "Design", active: true, icon: null },
    { name: "Messaging", active: true, icon: null },
    { name: "Psychology", active: true, icon: null },
    { name: "Visuals", active: true, icon: null },
    { name: "User Flow", active: false, icon: null },
    { name: "Engagement", active: true, icon: null },
    { name: "Emotions", active: false, icon: null },
  ],
  recommendations: [
    { text: "Improve headline clarity for faster comprehension" },
    { text: "Strengthen emotional cues to boost engagement" },
    { text: "Increase contrast for higher readability" },
  ],
  radarChart: {
    datasets: [
      {
        name: "AESTEL",
        color: "#0fdac2",
        metrics: [
          { name: "Clarity", value: 85 },
          { name: "Aesthetic", value: 90 },
          { name: "Trust", value: 88 },
          { name: "Relevance", value: 82 },
          { name: "Creativity", value: 95 },
          { name: "Motivation", value: 87 },
        ],
      },
      {
        name: "Ctalffocy",
        color: "#643bff",
        metrics: [
          { name: "Clarity", value: 70 },
          { name: "Aesthetic", value: 75 },
          { name: "Trust", value: 72 },
          { name: "Relevance", value: 68 },
          { name: "Creativity", value: 78 },
          { name: "Motivation", value: 73 },
        ],
      },
    ],
    metrics: [
      "Clarity",
      "Aesthetic",
      "Trust",
      "Relevance",
      "Creativity",
      "Motivation",
    ],
  },
  assetDetails: {
    type: "Landing Page / Ad Creative",
    purpose: "Improve conversions & engagement",
    audience: "Startups & small businesses",
  },
  uiPreview: {
    title: "Launch",
    titleBold: "Your Startup",
    description: "Get your business off the ground with alir help",
    buttonText: "Get Started",
  },
};

const CreativeScore = () => {
  const {
    performanceScore,
    categories,
    recommendations,
    radarChart,
    assetDetails,
    uiPreview,
  } = CREATIVE_SCORE_DATA;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Calculate angle for radar chart
  const getRadarPoint = (
    index: number,
    total: number,
    value: number,
    radius: number,
    center: number
  ) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const distance = (value / 100) * radius;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    return { x: x + center, y: y + center };
  };

  const radius = 100;
  const centerX = 150;
  const centerY = 150;

  // Helper function to convert hex to rgba
  const hexToRgba = (hex: string, alpha: number = 0.4): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Chart 1: Graph Infography Data
  const graphInfographyData = [
    {
      name: "Option A",
      value: 30,
      color: "#FF6B35",
      label: "A",
      description:
        "We develop engaging digital experiences that capture user interest and maximize engagement across platforms.",
    },
    {
      name: "Option B",
      value: 25,
      color: "#4ECDC4",
      label: "B",
      description:
        "Our creative team builds memorable brand identities through strategic design and compelling visual storytelling.",
    },
    {
      name: "Option C",
      value: 20,
      color: "#FFA500",
      label: "C",
      description:
        "We enhance website performance with optimal UX/UI work and fast development practices.",
    },
    {
      name: "Option D",
      value: 25,
      color: "#9B59B6",
      label: "D",
      description:
        "Data-driven marketing strategies that improve visibility, accelerate growth, and increase overall ROI.",
    },
  ];

  // Chart 2: Process Infography Data
  const processInfographyData = [
    { name: "Core Strategy Execution", value: 85, color: "#643bff" },
    { name: "Creative Planning", value: 30, color: "#ff00ff" },
    { name: "UI/UX Development", value: 55, color: "#ffa500" },
    { name: "Marketing Optimization", value: 75, color: "#00ff00" },
  ];
  
  // Additional text-only items (without charts)
  const processTextOnlyItems = [
    { name: "Creative Planning", value: 30, color: "#0fdac2" },
  ];

  // Chart 3: Analytics Overview Data
  const analyticsData = [
    {
      name: "Website Traffic",
      value: 45,
      color: "#AA49F1",
      gradient: "linear-gradient(180deg, #AA49F1 0%, #643BFF 100%)",
      description: "Improved user flow and session monitoring.",
    },
    {
      name: "Lead Conversion",
      value: 60,
      color: "#80E245",
      gradient: "linear-gradient(180deg, #3DFF92 0%, #1ABF6F 100%)",
      description: "Optimizing landing pages for higher conversions",
    },
    {
      name: "Brand Growth",
      value: 65,
      color: "#FF6B35",
      gradient: "linear-gradient(180deg, #FF9A3C 0%, #FFD645 100%)",
      description: "Boosting visibility through strategic SEO.",
    },
    {
      name: "Brand Engagement",
      value: 45,
      color: "#FFD700",
      gradient: "linear-gradient(180deg, #FFD754 0%, #FFB92A 100%)",
      description: "Higher engagement through creative design.",
    },
    {
      name: "ROI",
      value: 55,
      color: "#3498DB",
      gradient: "linear-gradient(180deg, #3A7BFF 0%, #20D5FF 100%)",
      description: "Tracking performance across campaigns.",
    },
  ];

  // Chart 4: Digital Agency Performance Data
  const agencyPerformanceData = [
    {
      name: "Option A",
      value: 20,
      color: "#FF69B4",
      description:
        "We enhance user experience and streamline digital touchpoints to improve overall engagement.",
    },
    {
      name: "Option C",
      value: 35,
      color: "#FF6B35",
      description:
        "We optimize website performance through modern development practices and fast UX.",
    },
    {
      name: "Option D",
      value: 25,
      color: "#4ECDC4",
      description:
        "We drive measurable growth through strategic digital marketing and data-driven decision making.",
    },
    {
      name: "Option D",
      value: 20,
      color: "#FFA500",
      description:
        "We create high impact visual branding that increases recognition and strengthens identity.",
    },
  ];

  const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const label = graphInfographyData[index]?.label || "";

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="16"
        fontWeight="bold"
        style={{ filter: "drop-shadow(0 0 8px rgba(15, 218, 194, 0.8))" }}
      >
        {label}
      </text>
    );
  };

  return (
    <div className={styles.section}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.imagesGrid}>
          {/* Chart 3: Analytics Overview */}
          <div className={styles.imageWrapper}>
            <div className={styles.chartContainer}>
              <h3 className={styles.chartTitle}>ANALYTICS OVERVIEW</h3>
              <div className={styles.analyticsCharts}>
                {analyticsData.map((item, index) => (
                  <div key={index} className={styles.analyticsBarItem}>
                    <div className={styles.analyticsBarContainer}>
                      <div
                        className={styles.analyticsBarFill}
                        style={
                          {
                            background: item.gradient || item.color,
                            boxShadow: `0 0 20px ${hexToRgba(item.color, 0.4)}`,
                            height: `${item.value}%`,
                          } as React.CSSProperties
                        }
                      >
                        <div className={styles.analyticsPercentageInside}>
                          {item.value}%
                        </div>
                        <div className={styles.analyticsIcon}>
                          {index === 0 && <WorldIcon />}
                          {index === 1 && <FilterIcon />}
                          {index === 2 && <SearchIcon />}
                          {index === 3 && <HeartIcon />}
                          {index === 4 && <GraphIcon />}
                        </div>
                      </div>
                    </div>
                    <div className={styles.analyticsInfo}>
                      <h4 className={styles.analyticsName}>
                        DATA {item.name.toUpperCase()}
                      </h4>
                      <p className={styles.analyticsDescription}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Analytics Info Below Bars - Mobile Only */}
              <div className={styles.analyticsInfoSection}>
                {analyticsData.map((item, index) => (
                  <div key={index} className={styles.analyticsInfoItem}>
                    <h4 className={styles.analyticsName}>
                      DATA {item.name.toUpperCase()}
                    </h4>
                    <p className={styles.analyticsDescription}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Chart 1: Graph Infography */}
          <div className={styles.imageWrapper}>
            <div className={styles.chartContainer}>
              <h3 className={`${styles.chartTitle}`}>GRAPH INFOGRAPHY</h3>
              <div className={styles.chartContent}>
                <div className={styles.chartWrapper}>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={graphInfographyData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={CustomLabel}
                        labelLine={false}
                        stroke="none"
                      >
                        {graphInfographyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className={styles.optionsList}>
                  {graphInfographyData.map((option, index) => (
                    <div key={index} className={styles.optionItem}>
                      <div className={styles.optionHeader}>
                        <span
                          className={styles.optionLabel}
                          style={{ color: option.color }}
                        >
                          OPTION {option.label}
                        </span>
                        <div
                          className={styles.optionConnector}
                          style={{ backgroundColor: option.color }}
                        ></div>
                      </div>
                      <p className={styles.optionDescription}>
                        {option.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chart 2: Process Infography */}
          <div className={styles.imageWrapper}>
            <div className={styles.chartContainer}>
              <h3 className={`${styles.chartTitle}`}>PROCESS INFOGRAPHY</h3>
              <div className={styles.processChartsGrid}>
                {processInfographyData.map((process, index) => (
                  <div key={index} className={styles.processChartItem}>
                    {index === 0 ? (
                      <>
                        <div 
                          className={styles.processChartWrapper}
                          style={{ filter: `drop-shadow(0 0 20px ${hexToRgba(process.color, 0.6)})` }}
                        >
                          <ResponsiveContainer width="100%" height={isMobile ? 220 : 300}>
                            <PieChart>
                              <Pie
                                data={[
                                  { name: process.name, value: process.value },
                                  {
                                    name: "Remaining",
                                    value: 100 - process.value,
                                  },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={isMobile ? 65 : 85}
                                outerRadius={isMobile ? 90 : 120}
                                startAngle={90}
                                endAngle={-270}
                                dataKey="value"
                                stroke="none"
                              >
                                <Cell fill={process.color} />
                                <Cell fill="rgba(255,255,255,0.1)" />
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                          <div className={styles.processCenterLabel}>
                            <div className={styles.processCenterPercentage}>
                              {process.value}%
                            </div>
                            <div className={styles.processCenterText}>
                              {process.name}
                            </div>
                          </div>
                        </div>
                        <div className={styles.processMobileText}>
                          {process.name}
                        </div>
                      </>
                    ) : (
                      <>
                        <div 
                          className={styles.processChartWrapper}
                          style={{ filter: `drop-shadow(0 0 15px ${hexToRgba(process.color, 0.4)})` }}
                        >
                          <ResponsiveContainer width="100%" height={isMobile ? 120 : 160}>
                            <PieChart>
                              <Pie
                                data={[
                                  { name: process.name, value: process.value },
                                  {
                                    name: "Remaining",
                                    value: 100 - process.value,
                                  },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={isMobile ? 40 : 50}
                                outerRadius={isMobile ? 60 : 70}
                                startAngle={90}
                                endAngle={-270}
                                dataKey="value"
                                stroke="none"
                              >
                                <Cell fill={process.color} />
                                <Cell fill="rgba(255,255,255,0.1)" />
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                          <div className={styles.processBottomCenterLabel}>
                            <div className={styles.processBottomPercentage}>
                              {process.value}%
                            </div>
                            <div className={styles.processBottomContent}>
                              <p>{process.name}</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.processMobileText}>
                          {process.name}
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {/* Additional text-only items */}
                {processTextOnlyItems.map((item, index) => (
                  <div key={`text-${index}`} className={styles.processChartItem}>
                    <div className={styles.processTextOnly}>
                      <div className={styles.processTextOnlyPercentage}>
                        {item.value}%
                      </div>
                      <div className={styles.processTextOnlyName}>
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          

          {/* Chart 4: Digital Agency Performance Data */}
          <div className={styles.imageWrapper}>
            <div className={styles.chartContainer}>
              <h3 className={styles.chartTitle} style={{ marginBottom: '0px'}}>
                DIGITAL AGENCY PERFORMANCE DATA
              </h3>
              <div className={`${styles.chartContent} ${styles.agencyChartContent}`}>
                <div className={`${styles.chartWrapper} ${styles.agencyChartWrapper}`}>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={agencyPerformanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {agencyPerformanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className={styles.optionsList}>
                  {agencyPerformanceData.map((option, index) => (
                               <div key={index} className={styles.optionItem}>
                      <div className={styles.optionHeader}>
                        <span
                          className={styles.optionLabel}
                          style={{ color: option.color }}
                        >
                          OPTION{" "}
                          {String.fromCharCode(65 + (index === 3 ? 3 : index))}
                        </span>
                        <div
                          className={styles.optionConnector}
                          style={{ backgroundColor: option.color }}
                        ></div>
                      </div>
                      <p className={styles.optionDescription}>
                        {option.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div> 
        {/* <AnalyticsDashboard performanceScore={performanceScore.value} performanceLabel={performanceScore.label} /> */}
        {/* <div className={styles.dashboardGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.scoreCard}>
              <div className={styles.scoreGauge}>
                <svg width="200" height="200" viewBox="0 0 200 200" className={styles.gaugeSvg}>
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#1a0b3f"
                    strokeWidth="12"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#0fdac2"
                    strokeWidth="12"
                    strokeDasharray={`${(performanceScore.value / 100) * 502.4} 502.4`}
                    strokeDashoffset="125.6"
                    strokeLinecap="round"
                    className={styles.gaugeArc}
                  />
                </svg>
                <div className={styles.scoreValue}>{performanceScore.value}</div>
                <div className={styles.scoreLabel}>{performanceScore.label}</div>
              </div>

              <div className={styles.categoriesList}>
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`${styles.categoryItem} ${category.active ? styles.categoryActive : ''}`}
                  >
                    <div className={styles.categoryIcon}>
                      {category.active ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="8" fill="#0fdac2" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                        </svg>
                      )}
                    </div>
                    <span className={styles.categoryName}>{category.name}</span>
                  </div>
                ))}
              </div>

              <div className={styles.recommendationsSection}>
                <h3 className={styles.recommendationsHeading}>Recommendations</h3>
                {recommendations.slice(0, 1).map((rec, index) => (
                  <div key={index} className={styles.recommendationItem}>
                    {rec.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.middleColumn}>
            <div className={styles.radarChartCard}>
              <div className={styles.radarChartHeader}>
                {radarChart.datasets.map((dataset, index) => (
                  <div key={index} className={styles.datasetLabel}>
                    <span
                      className={styles.datasetColor}
                      style={{ backgroundColor: dataset.color }}
                    ></span>
                    <span>{dataset.name}</span>
                  </div>
                ))}
              </div>
              <div className={styles.radarChartContainer}>
                <svg width="300" height="300" viewBox="0 0 300 300" className={styles.radarSvg}>
                  {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                    <circle
                      key={i}
                      cx={centerX}
                      cy={centerY}
                      r={radius * scale}
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  ))}
                  {radarChart.metrics.map((_, index) => {
                    const angle = (Math.PI * 2 * index) / radarChart.metrics.length - Math.PI / 2;
                    const x2 = centerX + Math.cos(angle) * radius;
                    const y2 = centerY + Math.sin(angle) * radius;
                    return (
                      <line
                        key={index}
                        x1={centerX}
                        y1={centerY}
                        x2={x2}
                        y2={y2}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                      />
                    );
                  })}
                  {radarChart.datasets.map((dataset, datasetIndex) => {
                    const points = dataset.metrics.map((metric, index) => {
                      const point = getRadarPoint(
                        index,
                        radarChart.metrics.length,
                        metric.value,
                        radius,
                        centerX
                      );
                      return `${point.x},${point.y}`;
                    });
                    return (
                      <g key={datasetIndex}>
                        <polygon
                          points={points.join(' ')}
                          fill={dataset.color}
                          fillOpacity="0.2"
                          stroke={dataset.color}
                          strokeWidth="2"
                        />
                        {dataset.metrics.map((metric, index) => {
                          const point = getRadarPoint(
                            index,
                            radarChart.metrics.length,
                            metric.value,
                            radius,
                            centerX
                          );
                          return (
                            <circle
                              key={index}
                              cx={point.x}
                              cy={point.y}
                              r="4"
                              fill={dataset.color}
                            />
                          );
                        })}
                      </g>
                    );
                  })}
                  {radarChart.metrics.map((metric, index) => {
                    const angle = (Math.PI * 2 * index) / radarChart.metrics.length - Math.PI / 2;
                    const labelRadius = radius + 30;
                    const x = centerX + Math.cos(angle) * labelRadius;
                    const y = centerY + Math.sin(angle) * labelRadius;
                    return (
                      <text
                        key={index}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={styles.radarLabel}
                      >
                        {metric}
                      </text>
                    );
                  })}
                </svg>
              </div>

              <div className={styles.radarRecommendations}>
                <h3 className={styles.recommendationsHeading}>Recommendations</h3>
                {recommendations.map((rec, index) => (
                  <div key={index} className={styles.recommendationItem}>
                    <BulbIcon />
                    {rec.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.assetDetailsCard}>
              <div className={styles.assetDetailItem}>
                <span className={styles.assetLabel}>Asset Type:</span>
                <span className={styles.assetValue}>{assetDetails.type}</span>
              </div>
              <div className={styles.assetDetailItem}>
                <span className={styles.assetLabel}>Purpose:</span>
                <span className={styles.assetValue}>{assetDetails.purpose}</span>
              </div>
              <div className={styles.assetDetailItem}>
                <span className={styles.assetLabel}>Audience:</span>
                <span className={styles.assetValue}>{assetDetails.audience}</span>
              </div>
            </div>

            <div className={styles.uiPreviewCard}>
              <div className={styles.uiPreviewHeader}>
                <div className={styles.uiPreviewDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.uiPreviewContent}>
                <h3 className={styles.uiPreviewTitle}>
                  {uiPreview.title} <strong>{uiPreview.titleBold}</strong>
                </h3>
                <p className={styles.uiPreviewDescription}>{uiPreview.description}</p>
                <div className={styles.uiPreviewLines}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <button className={styles.uiPreviewButton}>{uiPreview.buttonText}</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CreativeScore;
