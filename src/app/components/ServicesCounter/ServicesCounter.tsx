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
    if (!value) return { number: 0, suffix: "", isDecimal: false, hasM: false, hasK: false };
    
    const cleanValue = value.replace(/,/g, "");
    
    // Handle decimal values like "4.8/5"
    if (value.includes("/")) {
      const parts = value.split("/");
      return {
        number: parseFloat(parts[0]),
        suffix: `/${parts[1]}`,
        isDecimal: true,
        hasM: false,
        hasK: false,
      };
    }
    
    // Handle values with M (millions)
    if (value.toUpperCase().includes('M')) {
      const match = value.match(/^([\d.]+)M([+\-%Xx]*)$/i);
      if (match) {
        return {
          number: parseFloat(match[1]) * 1000000,
          suffix: match[2] || "",
          isDecimal: match[1].includes('.'),
          hasM: true,
          hasK: false,
        };
      }
    }
    
    // Handle values with K (thousands)
    if (value.toUpperCase().includes('K')) {
      const match = value.match(/^([\d.]+)K([+\-%Xx]*)$/i);
      if (match) {
        return {
          number: parseFloat(match[1]) * 1000,
          suffix: match[2] || "",
          isDecimal: match[1].includes('.'),
          hasM: false,
          hasK: true,
        };
      }
    }
    
    // Handle values with + or other suffixes
    const match = cleanValue.match(/^([\d.]+)([+\-%Xx]*)$/);
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2] || "",
        isDecimal: match[1].includes('.'),
        hasM: false,
        hasK: false,
      };
    }
    return { number: 0, suffix: "", isDecimal: false, hasM: false, hasK: false };
  };
  
  const formatNumber = (num: number, isDecimal: boolean, hasM: boolean, hasK: boolean, originalValue: string): string => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    
    // If original had M, format as M
    if (hasM) {
      const mValue = num / 1000000;
      const originalMatch = originalValue.match(/^([\d.]+)M/i);
      if (originalMatch) {
        const originalNumStr = originalMatch[1];
        const hasDecimal = originalNumStr.includes('.');
        if (hasDecimal) {
          // Original had decimals, preserve them
          const decimalPlaces = originalNumStr.split('.')[1]?.length || 1;
          return mValue.toFixed(decimalPlaces);
        } else {
          // Original was integer
          if (mValue === 0) {
            // Show "0" instead of "0.0" when value is exactly 0
            return "0";
          }
          if (mValue < 1 && mValue > 0) {
            // Show decimals during animation if between 0 and 1
            return mValue.toFixed(1);
          }
          // If mValue is >= 1, show as integer
          return Math.floor(mValue).toString();
        }
      }
      return mValue.toFixed(mValue % 1 === 0 ? 0 : 1);
    }
    
    // If original had K, format as K
    if (hasK) {
      const kValue = num / 1000;
      const originalMatch = originalValue.match(/^([\d.]+)K/i);
      if (originalMatch) {
        const originalNumStr = originalMatch[1];
        const hasDecimal = originalNumStr.includes('.');
        if (hasDecimal) {
          // Original had decimals, preserve them
          const decimalPlaces = originalNumStr.split('.')[1]?.length || 1;
          return kValue.toFixed(decimalPlaces);
        } else {
          // Original was integer
          if (kValue === 0) {
            // Show "0" instead of "0.0" when value is exactly 0
            return "0";
          }
          if (kValue < 1 && kValue > 0) {
            // Show decimals during animation if between 0 and 1
            return kValue.toFixed(1);
          }
          // If kValue is >= 1, show as integer
          return Math.floor(kValue).toString();
        }
      }
      return kValue.toFixed(kValue % 1 === 0 ? 0 : 1);
    }
    
    return Math.floor(num).toLocaleString();
  };
  useEffect(() => {
    if (hasAnimated) return;
    
    const startAnimation = () => {
      if (hasAnimated) return;
      setHasAnimated(true);
      data.stats.forEach((stat, index) => {
        if (!stat.value) return;
        const { number: targetNumber } = parseValue(stat.value);
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
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );
    
    if (sectionRef.current) {
      // Check if already visible
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible && !hasAnimated) {
        // Start animation immediately if already visible
        startAnimation();
      } else {
        observer.observe(sectionRef.current);
      }
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
        <div className="sectionHeading forH2 text-center text-[#ffffff] gap-3 flex flex-col mb-12 md:mb-8 md:max-w-4xl mx-auto">
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
            const { suffix, isDecimal, hasM, hasK } = parseValue(stat.value);
            const displayValue = stat.value ? formatNumber(counts[index], isDecimal, hasM, hasK, stat.value) : '0';
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
                  {hasM && <span className="text-[#0fdac2]">M</span>}
                  {hasK && <span className="text-[#0fdac2]">K</span>}
                  {suffix.startsWith('/') ? (
                    <>
                      <span className="text-[#643BFF]">/</span>
                      <span className="text-[#0fdac2]">{suffix.substring(1)}</span>
                    </>
                  ) : (
                    suffix && <span className="text-[#643BFF]">{suffix}</span>
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

