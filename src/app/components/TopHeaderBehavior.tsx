"use client";

import { useEffect } from "react";

export default function TopHeaderBehavior() {
  useEffect(() => {
    const el = document.getElementById("topHeader");
    if (!el) return;

    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (y < 10) {
        el.style.transform = "translateY(0)";
      } else if (y > lastY) {
        el.style.transform = "translateY(-100%)";
      } else {
        el.style.transform = "translateY(0)";
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
