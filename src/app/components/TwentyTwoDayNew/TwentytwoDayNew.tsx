"use client";

import React, { useLayoutEffect, useMemo, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TwentytwoDayNew.module.css";

gsap.registerPlugin(ScrollTrigger);

type Phase = {
  id: number;
  title: string;
  days: string;
  iconColor: string;
  iconType: "cube" | "person" | "globe" | "gear";
  borderColor: string;
  image: string;
  deliverables: string[];
};

function PhaseIcon({
  type,
  color,
}: {
  type: Phase["iconType"];
  color: string;
}) {
  const common = {
    stroke: color,
    fill: "none",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "cube") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          {...common}
          d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        />
        <path {...common} d="M3.27 6.96 12 12l8.73-5.04" />
        <path {...common} d="M12 22V12" />
      </svg>
    );
  }

  if (type === "person") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path {...common} d="M20 21a8 8 0 0 0-16 0" />
        <path
          {...common}
          d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        />
      </svg>
    );
  }

  if (type === "globe") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path {...common} d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
        <path {...common} d="M2 12h20" />
        <path {...common} d="M12 2a15 15 0 0 1 0 20" />
        <path {...common} d="M12 2a15 15 0 0 0 0 20" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path {...common} d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" />
      <path
        {...common}
        d="M19.4 15a7.8 7.8 0 0 0 .1-1l2-1.2-2-3.4-2.3.6a7.3 7.3 0 0 0-1.7-1L15 6h-6l-.5 2a7.3 7.3 0 0 0-1.7 1L4.5 8.4l-2 3.4 2 1.2a7.8 7.8 0 0 0 .1 1 7.8 7.8 0 0 0-.1 1l-2 1.2 2 3.4 2.3-.6a7.3 7.3 0 0 0 1.7 1L9 22h6l.5-2a7.3 7.3 0 0 0 1.7-1l2.3.6 2-3.4-2-1.2a7.8 7.8 0 0 0-.1-1Z"
      />
    </svg>
  );
}

export default function TwentytwoDayNew() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftColumnRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const listWrapRef = useRef<HTMLDivElement | null>(null);

  const boxesRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  const setBoxRef = (el: HTMLDivElement | null, idx: number) => {
    if (!el) return;
    boxesRef.current[idx] = el;
  };

  const setImageRef = (el: HTMLDivElement | null, idx: number) => {
    if (!el) return;
    imagesRef.current[idx] = el;
  };

  const phases: Phase[] = useMemo(
    () => [
      {
        id: 1,
        title: "Phase 01 — Foundation",
        days: "Days 1-5",
        iconColor: "#0fdac2",
        iconType: "cube",
        borderColor: "rgba(15, 218, 194, 0.6)",
        image: "/assets/images/aipower1.png",
        deliverables: [
          "Branding & Identity Design",
          "Typography & Lettering Design",
          "Print Media Design",
          "Logo Design",
          "Stationery & Corporate Collateral",
          "Packaging & Label Design",
        ],
      },
      {
        id: 2,
        title: "Phase 02 — Brand Expansion",
        days: "Days 6-11",
        iconColor: "#0fdac2",
        iconType: "person",
        borderColor: "rgba(100, 59, 255, 0.4)",
        image: "/assets/images/aipower2.png",
        deliverables: [
          "Product Mockup & Visualization",
          "App UI/UX Design",
          "Website UI/UX Design",
          "Dashboard & Web Application Design",
          "Social Media Content Design",
          "Social Media Advertising Creatives",
        ],
      },
      {
        id: 3,
        title: "Phase 03 — Digital Presence",
        days: "Days 12-17",
        iconColor: "#0fdac2",
        iconType: "globe",
        borderColor: "rgba(100, 59, 255, 0.4)",
        image: "/assets/images/aipower3.png",
        deliverables: [
          "Digital Marketing Assets",
          "Presentation & Pitch Deck Design",
          "Infographic Design",
          "Illustration & Digital Art",
          "Motion Graphics Design",
          "Video Editing & Graphic Overlays",
        ],
      },
      {
        id: 4,
        title: "Phase 04 — Production & Collateral",
        days: "Days 18-22",
        iconColor: "#0fdac2",
        iconType: "gear",
        borderColor: "rgba(100, 59, 255, 0.4)",
        image: "/assets/images/aipower4.png",
        deliverables: [
          "3D Modeling & Product Rendering",
          "Advertising & Campaign Design",
          "Brochure, Flyer & Catalog Design",
          "Ebook & Publication Layout Design",
          "Email Newsletter & HTML Template Design",
          "Environmental & Signage Design",
        ],
      },
    ],
    []
  );

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const boxes = boxesRef.current;
      const images = imagesRef.current;
      const listWrap = listWrapRef.current;
      const viewport = viewportRef.current;
      const leftCol = leftColumnRef.current;

      if (!boxes.length || !images.length || !listWrap || !viewport || !leftCol) return;

      const COLLAPSED = 118;
      const EXPANDED = 290;
      const GAP = 52; // double gap
      const STEP_Y = COLLAPSED + GAP;

      // Make viewport height safe so last card never cuts:
      // use available column height and add bottom breathing space
      const applyViewportHeight = () => {
        const colH = leftCol.getBoundingClientRect().height;
        // keep viewport at least enough to show one expanded card fully + some padding
        const minH = EXPANDED + 120;
        const target = Math.max(minH, Math.min(colH, 720));
        viewport.style.height = `${target}px`;
      };

      applyViewportHeight();

      // Initial states
      gsap.set(images, { autoAlpha: 0 });
      gsap.set(images[0], { autoAlpha: 1 });

      gsap.set(boxes, { height: COLLAPSED, opacity: 0.55 });
      gsap.set(boxes[0], { height: EXPANDED, opacity: 1 });

      gsap.set(listWrap, { y: 0 });

      // Calculates exact translateY to center active box inside viewport (top/bottom center)
      const calcCenterY = (activeIndex: number) => {
        const vpRect = viewport.getBoundingClientRect();
        const active = boxes[activeIndex];
        const activeRect = active.getBoundingClientRect();

        // current translateY
        const currentY = gsap.getProperty(listWrap, "y") as number;

        // active center relative to viewport (current)
        const activeCenter = activeRect.top + activeRect.height / 2;
        const viewportCenter = vpRect.top + vpRect.height / 2;

        // need to move list by delta to align centers
        const delta = viewportCenter - activeCenter;
        return currentY + delta;
      };

      const applyStep = (activeIndex: number) => {
        // First set heights (previous stay expanded)
        gsap.to(boxes, {
          height: (i: number) => (i <= activeIndex ? EXPANDED : COLLAPSED),
          opacity: (i: number) =>
            i === activeIndex ? 1 : i < activeIndex ? 0.82 : 0.55,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true,
        });

        // Fade images (only active visible)
        gsap.to(images, {
          autoAlpha: (i: number) => (i === activeIndex ? 1 : 0),
          duration: 0.6,
          ease: "power2.out",
          overwrite: true,
        });

        // Base move so next comes in (predictive)
        const baseY = -(activeIndex * STEP_Y);

        gsap.to(listWrap, {
          y: baseY,
          duration: 0.01,
          overwrite: true,
          onComplete: () => {
            // Now compute exact center and animate smoothly to center
            const centerY = calcCenterY(activeIndex);
            gsap.to(listWrap, {
              y: centerY,
              duration: 0.65,
              ease: "power3.out",
              overwrite: true,
            });
          },
        });
      };

      // Snap-based scroll
      const segments = phases.length - 1;

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${phases.length * 1100}`, // more stable scroll distance
        pin: true,
        anticipatePin: 1,
        scrub: false,
        invalidateOnRefresh: true,
        onRefresh: (self) => {
            applyViewportHeight();
            const idx = Math.round(self.progress * segments);
            applyStep(idx);
          },
        snap: {
          snapTo: (value: number) => Math.round(value * segments) / segments,
          duration: { min: 0.18, max: 0.35 },
          delay: 0.02,
          ease: "power2.out",
          onComplete: (self) => {
            const idx = Math.round(self.progress * segments);
            applyStep(idx);
          },
        },
      });

      // Initial center correction
      applyStep(0);

      // Resize handler
      const onResize = () => {
        applyViewportHeight();
        const idx = Math.round(st.progress * segments);
        applyStep(idx);
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        st.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [phases.length]);

  return (
    <section ref={sectionRef} className={`${styles.section} relative overflow-hidden`}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.stars} aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        {/* Heading */}
        {/* <div className="text-center">
          <h2 className="text-white text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <span className={styles.accent}>Everything</span> Your Business Needs —{" "}
            <br className="hidden md:block" />
            Delivered <span className={styles.accent}>in 1 Month</span>
          </h2>
          <div className="h-10 md:h-14" />
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div ref={leftColumnRef} className="relative">
            <div className={styles.rail} aria-hidden="true" />

            <div ref={viewportRef} className={styles.leftViewport}>
              <div ref={listWrapRef} className="will-change-transform">
                <div className="flex flex-col gap-12">
                  {phases.map((p, idx) => (
                    <div
                      key={p.id}
                      ref={(el) => setBoxRef(el, idx)}
                      className={`${styles.phaseCard} rounded-2xl overflow-hidden`}
                      style={{ borderColor: p.borderColor }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-white/95 font-semibold text-lg md:text-xl">
                            <span className={styles.accent}>{p.title}</span>
                          </div>
                          <div className="text-white/65 text-sm md:text-base mt-1">
                            {p.days}
                          </div>
                        </div>

                        <div className={styles.iconBadge} aria-hidden="true">
                          <PhaseIcon type={p.iconType} color={p.iconColor} />
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {p.deliverables.map((d) => (
                          <div
                            key={d}
                            className="flex items-start gap-3 text-white/85 text-sm md:text-base leading-snug"
                          >
                            <span className={styles.check} aria-hidden="true" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* extra spacer so last expanded never cuts */}
                  <div className="h-28" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image centered vertically */}
          <div className="relative flex items-center justify-center">
            <div className={`${styles.imagePanel} rounded-3xl overflow-hidden`}>
              {phases.map((p, idx) => (
                <div
                  key={p.id}
                  ref={(el) => setImageRef(el, idx)}
                  className={`${styles.imageLayer} absolute inset-0`}
                >
                  <Image
                    src={p.image}
                    alt="phase image"
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className={styles.imageOverlay} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
