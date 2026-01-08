'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface DeferredOnVisibleProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

export default function DeferredOnVisible({
  children,
  fallback = null,
  rootMargin = '200px',
  threshold = 0.01,
}: DeferredOnVisibleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasIntersected) return;

    // Adjust rootMargin for mobile
    const isMobile = window.innerWidth < 768;
    const margin = isMobile ? '200px' : rootMargin;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasIntersected(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: margin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, hasIntersected]);

  return (
    <div ref={ref} style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' }}>
      {isVisible ? children : fallback}
    </div>
  );
}

