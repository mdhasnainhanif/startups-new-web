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
      className="topHeader relative md:absolute md:top-0 left-0 right-0 z-50 flex items-center 
      justify-center w-full pt-2 bg-transparent transition-transform duration-300 ease-in-out" 
      style={{ 
        willChange: "transform",
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)"
      }}
    >
      <Container maxWidth="2xl" className="px-0">
        <div className="flex items-center justify-between w-full rounded-full lg:px-4 pb-0">
          <div className="flex items-center md:gap-3 gap-1 flex-1 md:justify-center justify-between">
            <p className="text-white topPara">
            <span className="text-xl">{TOP_BANNER.emoji}</span>&nbsp;
              <span className="hidden md:inline">Big News: </span>
              We Launched Key Growth Manager Services
            </p>
            <Button
              href={TOP_BANNER.buttonLink}
              variant="green"
              size="sm"
              iconPosition="right"
              // icon={<ArrowRightIcon style={{ fill: "#fff" }} />}
              className="mt-2"
            >
              {TOP_BANNER.buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
