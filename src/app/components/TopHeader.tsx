"use client";

import { useState, useEffect } from "react";
import { TOP_BANNER } from "../constants";
import Container from "./Container";
import Button from "./Button";
import { ArrowRightIcon } from "./icons";

export default function TopHeader() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll direction detection for header show/hide
      if (currentScrollY < 10) {
        // At top, always show
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!TOP_BANNER.show) return null;

  return (
    <div 
      className="relative md:absolute md:top-0 left-0 right-0 z-50 flex items-center justify-center w-full py-2 bg-transparent backdrop-blur-sm transition-transform duration-300 ease-in-out" 
      style={{ 
        willChange: "transform",
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)"
      }}
    >
      <Container maxWidth="2xl" className="px-0">
        <div className="flex items-center justify-between w-full rounded-full lg:px-4 py-2">
          <div className="flex items-center gap-2 flex-1 justify-center">
            <span className="text-xl">{TOP_BANNER.emoji}</span>
            <p className="text-white lg:text-sm md:text-base font-medium topPara">
              {TOP_BANNER.text}
            </p>
            <Button
              href="#"
              variant="secondary"
              size="sm"
              icon={<ArrowRightIcon />}
              iconPosition="right"
            >
              {TOP_BANNER.buttonText.replace(" →", "")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
