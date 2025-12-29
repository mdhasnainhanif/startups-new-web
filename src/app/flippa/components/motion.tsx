"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "fadeIn" | "scale";
}

export const MotionDiv = ({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
}: MotionDivProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const variantClasses = {
    fadeUp: "opacity-0 translate-y-5",
    fadeDown: "opacity-0 -translate-y-5",
    fadeLeft: "opacity-0 -translate-x-5",
    fadeRight: "opacity-0 translate-x-5",
    fadeIn: "opacity-0",
    scale: "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : variantClasses[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.08,
}: StaggerContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} data-visible={isVisible}>
      {children}
    </div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const StaggerItem = ({
  children,
  className = "",
  delay = 0,
}: StaggerItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
    >
      {children}
    </div>
  );
};

