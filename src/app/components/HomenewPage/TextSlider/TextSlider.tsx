"use client";

import React, { useEffect, useRef } from "react";
import styles from "./TextSlider.module.css";
import gsap from "gsap";

type SliderItem = {
  text: string;
  highlight: string;
  price: string;
};

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

  return (
    <section className={styles.ctaBanner}>
      <div className={styles.scrollingText}>
        <div className={styles.rail} ref={railRef}>
          {data.map((item, idx) => (
            <h4 key={idx}>
              <span>{item.text}</span>
              <span className="text-[#0fdac2]">{item.highlight}</span>
              <span>{item.price}</span>
            </h4>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextSlider1;
