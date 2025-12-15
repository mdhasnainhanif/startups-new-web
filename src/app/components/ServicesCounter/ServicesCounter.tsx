"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Container";
import { ServicesCounterData } from "../../data/ServicesCounterData";
interface ServicesCounterProps {
  data: ServicesCounterData;
}
const ServicesCounter: React.FC<ServicesCounterProps> = ({ data }) => {
  const [counts, setCounts] = useState<number[]>(new Array(data.stats.length).fill(0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const parseValue = (value: string) => {
    const cleanValue = value.replace(/,/g, "");
    if (value.includes("/")) {
      const parts = value.split("/");
      return {
        number: parseFloat(parts[0]),
        suffix: `/${parts[1]}`,
        isDecimal: true,
      };
    }
    const match = cleanValue.match(/^([\d.]+)([+\-%Xx]*)$/);
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2] || "",
        isDecimal: match[2].includes("."),
      };
    }
    return { number: 0, suffix: "", isDecimal: false };
  };
  const formatNumber = (num: number, isDecimal: boolean): string => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    return Math.floor(num).toLocaleString();
  };
  useEffect(() => {
    if (hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            data.stats.forEach((stat, index) => {
              const { number: targetNumber, isDecimal } = parseValue(stat.value);
              const duration = 2000;
              const startTime = Date.now();
              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = targetNumber * easeOutQuart;
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = currentValue;
                  return newCounts;
                });
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = targetNumber;
                    return newCounts;
                  });
                }
              };
              requestAnimationFrame(animate);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, data.stats]);
  return (
    <section ref={sectionRef} className="bg-black relative overflow-hidden sectionPadding">
      <Container maxWidth="xl">
        <div className="sectionHeading forH2 text-center text-[#ffffff] gap-3 flex flex-col mb-12 md:mb-8 max-w-5xl mx-auto">
          <h2>
            {(() => {
              if (data.heading.includes('[') && data.heading.includes(']')) {
                return data.heading.split(/(\[.*?\])/).map((part, index) => {
                  if (part.startsWith('[') && part.endsWith(']')) {
                    return (
                      <span 
                        key={index} 
                        className="bracket-text-green text-[#0fdac2]"
                        style={{ color: "#0fdac2" }}
                      >
                        {part.replace(/[\[\]]/g, '')}
                      </span>
                    );
                  }
                  return <span key={index}>{part}</span>;
                });
              }
              if (data.heading.includes("Advanced AI")) {
                return (
                  <>
                    {data.heading.split("Advanced AI")[0]}
                    <span className="text-[#0fdac2]">Advanced AI</span>
                    {data.heading.split("Advanced AI")[1]}
                  </>
                );
              }
              return data.heading;
            })()}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6 relative">
          {data.stats.map((stat, index) => {
            const { suffix, isDecimal } = parseValue(stat.value);
            const displayValue = formatNumber(counts[index], isDecimal);
            const isTopRow = index < 2;
            const isLeftColumn = index % 2 === 0;
            const isBottomRow = index > 1;
            const isLastItem = index === data.stats.length - 1;
            return (
              <div
                key={stat.id}
                className={`
                  text-left
                  py-8 md:py-6 sm:py-6
                  ${!isLastItem ? 'border-b border-dashed border-white/20 pb-8 sm:pb-6 md:pb-6' : ''}
                  ${isTopRow && !isLastItem ? 'sm:border-b sm:border-dashed sm:border-white/20' : ''}
                  ${isBottomRow ? 'pr-8 md:pr-6 sm:pr-0' : ''}
                  ${isLeftColumn ? '' : 'md:pl-8 md:pl-6 sm:pl-0'}
                `}
              >
                <div className="text-6xl md:text-7xl sm:text-6xl font-bold text-[#0fdac2] leading-none mb-4 md:mb-3">
                  {displayValue}
                  {suffix.startsWith('/') ? (
                    <>
                      <span className="text-[#643BFF]">/</span>
                      <span className="text-[#0fdac2]">{suffix.substring(1)}</span>
                    </>
                  ) : (
                    <span className="text-[#643BFF]">{suffix}</span>
                  )}
                </div>
                <p className="text-base md:text-lg sm:text-xs font-normal text-white leading-6 md:leading-5">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default ServicesCounter;

