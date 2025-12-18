"use client";

import React, { useEffect, useRef } from "react";
import styles from "./TextSlider.module.css";
import gsap from "gsap";

type SliderItem = 
  | { sliderDataPara: string }
  | { text: string; highlight: string; price: string };

interface TextSlider1Props {
  data?: SliderItem[];
}

const TextSlider1: React.FC<TextSlider1Props> = ({ data = [] }) => {
  const railRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!railRef.current || data.length === 0) return;

    let timeoutId: NodeJS.Timeout | null = null;

    // Clean up previous animation
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    // Wait for DOM to be ready using requestAnimationFrame for better timing
    const initAnimation = () => {
      if (!railRef.current) return;

      const items = gsap.utils.toArray<HTMLElement>(railRef.current.querySelectorAll("h4"));

      if (items.length === 0) return;

      // Remove any existing duplicates (items beyond the original data.length)
      const allCurrentItems = railRef.current.querySelectorAll("h4");
      if (allCurrentItems.length > data.length) {
        // Remove duplicates
        for (let i = data.length; i < allCurrentItems.length; i++) {
          allCurrentItems[i].remove();
        }
      }

      // Only duplicate if we don't have duplicates already
      const currentItems = railRef.current.querySelectorAll("h4");
      if (currentItems.length === data.length) {
        // Duplicate items for seamless infinite loop
        items.forEach((item) => {
          const clone = item.cloneNode(true) as HTMLElement;
          railRef.current?.appendChild(clone);
        });
      }

      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        if (!railRef.current) return;

        // Get all items including duplicates
        const allItems = gsap.utils.toArray<HTMLElement>(railRef.current.querySelectorAll("h4"));

        if (allItems.length === 0) return;

        // Reset transforms for all items before starting new animation
        gsap.set(allItems, { clearProps: "all" });

        horizontalLoop(allItems, {
          repeat: -1,
          speed: 0.5,
          paddingRight: 30,
        });
      });
    };

    // Small delay to ensure DOM is ready
    timeoutId = setTimeout(initAnimation, 10);

    function horizontalLoop(items: HTMLElement[], config: any) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: false,
        defaults: { ease: "none" },
      }),
        length = items.length,
        startX = items[0].offsetLeft,
        widths: number[] = [],
        xPercents: number[] = [],
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false
            ? (v: number) => v
            : gsap.utils.snap(config.snap || 1),
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;

      // Set initial xPercent and get widths
      gsap.set(items, {
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(
            gsap.getProperty(el, "width", "px") as string
          ));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
            (gsap.getProperty(el, "xPercent") as number || 0)
          );
          return xPercents[i];
        },
      });

      // Reset x to 0
      gsap.set(items, { x: 0, y: 0 });

      // Calculate total width
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        (gsap.getProperty(items[length - 1], "scaleX") as number || 1) +
        (parseFloat(config.paddingRight) || 0);

      // Create animation for each item
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart +
          widths[i] * (gsap.getProperty(item, "scaleX") as number || 1);

        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        ).fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        );
      }

      timelineRef.current = tl;
      return tl;
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      // Clean up duplicates on unmount
      if (railRef.current) {
        const allItems = railRef.current.querySelectorAll("h4");
        if (allItems.length > data.length) {
          for (let i = data.length; i < allItems.length; i++) {
            allItems[i].remove();
          }
        }
      }
    };
  }, [data]);

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
        marginLeft: "0.2em",
        marginRight: "0.2em",
        flexShrink: 0,
      }}
    >
      <path
        d="M264.9 148.1c-76.5 19.6-103.5 55-118.1 117.3-1.4 6.1-10.2 6.2-11.7.1-15.5-62.7-49-102.4-116.4-118.5-6.1-1.5-6.2-10.1-.1-11.7 76.5-19.7 103.4-55 118-117.4 1.4-6.1 10.1-6.2 11.7-.1 15.7 62.8 49.9 102.5 116.6 118.6 6 1.5 6.1 10.2 0 11.7"
        fill="#0fdac2"
      />
    </svg>
  );

  return (
    <section className={styles.ctaBanner}>
      <div className={styles.scrollingText}>
        <div className={styles.rail} ref={railRef}>
          {data.map((item, idx) => {
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
          })}
        </div>
      </div>
    </section>
  );
};

export default TextSlider1;
