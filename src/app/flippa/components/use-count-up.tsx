"use client";

import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const useCountUp = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    // Check if element is already in view on mount
    const checkInitialView = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          // Small delay to ensure smooth animation
          setTimeout(() => {
            setIsInView(true);
            setHasAnimated(true);
          }, 300);
          return true;
        }
      }
      return false;
    };

    // If already visible, trigger animation
    if (checkInitialView()) {
      return;
    }

    // Otherwise, set up IntersectionObserver for scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endValue = end;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = start + (endValue - start) * easeOutQuart;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, end, duration, start]);

  const formattedValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, formattedValue, count };
};








