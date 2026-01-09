"use client";

import React from "react";
import styles from "./TextSlider.module.css";

type SliderItem = 
  | { sliderDataPara: string }
  | { text: string; highlight: string; price: string };

interface TextSlider1Props {
  data?: SliderItem[];
}

const TextSlider1: React.FC<TextSlider1Props> = ({ data = [] }) => {

  // Helper function to parse text and extract highlighted parts from [brackets]
  const parseTextWithHighlights = (text: string) => {
    const parts: Array<{ text: string; isHighlight: boolean }> = [];
    const regex = /\[([^\]]+)\]/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the bracket
      if (match.index > lastIndex) {
        parts.push({
          text: text.substring(lastIndex, match.index),
          isHighlight: false,
        });
      }
      // Add highlighted text with a space after it
      parts.push({
        text: match[1] + " ", // Content inside brackets + space
        isHighlight: true,
      });
      lastIndex = regex.lastIndex;
    }

    // Add remaining text after last bracket
    if (lastIndex < text.length) {
      parts.push({
        text: text.substring(lastIndex),
        isHighlight: false,
      });
    }

    // If no brackets found, return the whole text as non-highlighted
    if (parts.length === 0) {
      parts.push({ text, isHighlight: false });
    }

    return parts;
  };

  // SVG Star Icon Component
  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.8em"
      height="0.8em"
      viewBox="0 0 283.5 283.5"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        marginLeft: "0.75em",
        marginRight: "0.75em",
        marginBottom: "0.2em",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <path
        d="M264.9 148.1c-76.5 19.6-103.5 55-118.1 117.3-1.4 6.1-10.2 6.2-11.7.1-15.5-62.7-49-102.4-116.4-118.5-6.1-1.5-6.2-10.1-.1-11.7 76.5-19.7 103.4-55 118-117.4 1.4-6.1 10.1-6.2 11.7-.1 15.7 62.8 49.9 102.5 116.6 118.6 6 1.5 6.1 10.2 0 11.7"
        fill="#0fdac2"
      />
    </svg>
  );

  // Render a single item
  const renderItem = (item: SliderItem, idx: number | string) => {
    // Handle both data formats
    let textParts: Array<{ text: string; isHighlight: boolean }>;
    
    if ('sliderDataPara' in item) {
      // Old format: sliderDataPara with brackets
      textParts = parseTextWithHighlights(item.sliderDataPara);
    } else {
      // New format: text, highlight, price
      const combinedText = `${item.text}[${item.highlight}]${item.price}`;
      textParts = parseTextWithHighlights(combinedText);
    }
    
    return (
      <h4 key={idx}>
        {textParts.map((part, partIdx) => (
          <span
            key={partIdx}
            className={part.isHighlight ? "text-[#0fdac2]" : ""}
          >
            {part.text}
          </span>
        ))}
        <StarIcon />
      </h4>
    );
  };

  return (
    <section className={styles.ctaBanner}>
      <div className={styles.scrollingText}>
        <div className={styles.rail}>
          {/* Original items */}
          {data.map((item, idx) => renderItem(item, idx))}
          {/* Duplicated items for seamless infinite loop */}
          {data.map((item, idx) => renderItem(item, `dup-${idx}` as string))}
        </div>
      </div>
    </section>
  );
};

export default TextSlider1;
