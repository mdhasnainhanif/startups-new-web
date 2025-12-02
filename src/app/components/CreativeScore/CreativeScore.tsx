'use client';

import { useState } from 'react';
import Container from '../Container';
import styles from './CreativeScore.module.css';
import { BulbIcon } from '@/app/icons';

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
    label: 'EXCELLENT',
  },
  categories: [
    { name: 'Design', active: true, icon: null },
    { name: 'Messaging', active: true, icon: null },
    { name: 'Psychology', active: true, icon: null },
    { name: 'Visuals', active: true, icon: null },
    { name: 'User Flow', active: false, icon: null },
    { name: 'Engagement', active: true, icon: null },
    { name: 'Emotions', active: false, icon: null },
  ],
  recommendations: [
    { text: 'Improve headline clarity for faster comprehension' },
    { text: 'Strengthen emotional cues to boost engagement' },
    { text: 'Increase contrast for higher readability' },
  ],
  radarChart: {
    datasets: [
      {
        name: 'AESTEL',
        color: '#0fdac2',
        metrics: [
          { name: 'Clarity', value: 85 },
          { name: 'Aesthetic', value: 90 },
          { name: 'Trust', value: 88 },
          { name: 'Relevance', value: 82 },
          { name: 'Creativity', value: 95 },
          { name: 'Motivation', value: 87 },
        ],
      },
      {
        name: 'Ctalffocy',
        color: '#643bff',
        metrics: [
          { name: 'Clarity', value: 70 },
          { name: 'Aesthetic', value: 75 },
          { name: 'Trust', value: 72 },
          { name: 'Relevance', value: 68 },
          { name: 'Creativity', value: 78 },
          { name: 'Motivation', value: 73 },
        ],
      },
    ],
    metrics: ['Clarity', 'Aesthetic', 'Trust', 'Relevance', 'Creativity', 'Motivation'],
  },
  assetDetails: {
    type: 'Landing Page / Ad Creative',
    purpose: 'Improve conversions & engagement',
    audience: 'Startups & small businesses',
  },
  uiPreview: {
    title: 'Launch',
    titleBold: 'Your Startup',
    description: 'Get your business off the ground with alir help',
    buttonText: 'Get Started',
  },
};

const CreativeScore = () => {
  const { performanceScore, categories, recommendations, radarChart, assetDetails, uiPreview } =
    CREATIVE_SCORE_DATA;

  // Calculate angle for radar chart
  const getRadarPoint = (index: number, total: number, value: number, radius: number, center: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const distance = (value / 100) * radius;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    return { x: x + center, y: y + center };
  };

  const radius = 100;
  const centerX = 150;
  const centerY = 150;

  return (
    <div className={styles.section}>
      <div>
        <div className={styles.dashboardGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Performance Score */}
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

              {/* Categories */}
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

              {/* Recommendations */}
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

          {/* Middle Column */}
          <div className={styles.middleColumn}>
            {/* Radar Chart */}
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
                  {/* Background grid */}
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
                  {/* Grid lines */}
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
                  {/* Datasets */}
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
                  {/* Labels */}
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

              {/* Recommendations */}
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

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Asset Details */}
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

            {/* UI Preview */}
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
        </div>
      </div>
    </div>
  );
};

export default CreativeScore;

