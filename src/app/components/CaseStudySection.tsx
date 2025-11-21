"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useModalStore } from "@/stores/useModalStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../../../public/assets/css/casestudy.css";
import "../../../public/assets/css/casestudythree.css";
import "../../../public/assets/css/casestudytwo.css";
import Container from "./Container";
import Button from "./Button";
import { ArrowRightIcon } from "./icons";

// Card data structure
interface CardData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  buttonText: string;
  image: string;
}

const cardsData: CardData[] = [
  // Creative & Design
  {
    id: "tabScroll1",
    category: "creative",
    title: "Brand Designer",
    subtitle: "Creates a memorable visual identity that makes your business look professional and trusted.",
    tags: [
      "Select color palettes",
      "Choose typography",
      "Create simple icon sets",
      "Design basic logo variations",
      "Create moodboards and brand direction",
      "Build brand collateral (cards, stationery)",
      "Develop full logo systems",
      "Build complete brand identity systems",
      "Create brand guidelines",
      "Design full visual branding for multi product companies",
    ],
    buttonText: "Hire Brand Designer",
    image: "/assets/images/2.png",
  },
  {
    id: "tabScroll2",
    category: "creative",
    title: "UI UX Designer",
    subtitle: "Designs intuitive, smooth experiences that increase user satisfaction and conversions.",
    tags: [
      "Create simple wireframes",
      "Map basic user flows",
      "Build low fidelity prototypes",
      "Design simple UI screens",
      "Create responsive layouts",
      "Conduct usability checks",
      "Design high fidelity interfaces",
      "Build design systems",
      "Perform full UX audits",
      "Design end to end complex product experiences",
    ],
    buttonText: "Hire UI/UX Designer",
    image: "/assets/images/2.png",
  },
  {
    id: "tabScroll3",
    category: "creative",
    title: "Graphic Designer",
    subtitle: "Creates visuals that grab attention and communicate messages clearly.",
    tags: [
      "Social posts",
      "Basic banners",
      "Simple flyers and posters",
      "Photo editing",
      "Infographics",
      "Presentation designs",
      "Multi page brochures",
      "Ad campaign graphics",
      "Visual storytelling",
      "Full creative direction",
    ],
    buttonText: "Hire Graphic Designer",
    image: "/assets/images/2.png",
  },
  // Marketing & Growth
  {
    id: "tabScroll4",
    category: "marketing",
    title: "Content Strategist",
    subtitle: "Builds content plans that bring traffic, trust, and conversions.",
    tags: [
      "Basic topic research",
      "Create one page outlines",
      "Plan social themes",
      "Build content calendars",
      "Research keywords + user intent",
      "Develop messaging frameworks",
      "Build content funnels",
      "Create brand wide content strategy",
      "Map tone and narrative",
      "Design multi channel content ecosystems",
    ],
    buttonText: "Hire Content Strategist",
    image: "/assets/images/2.png",
  },
  {
    id: "tabScroll5",
    category: "marketing",
    title: "Social Media Manager",
    subtitle: "Grows brand visibility and engagement across all social platforms.",
    tags: [
      "Schedule posts",
      "Find trends",
      "Write captions",
      "Reply to comments",
      "Maintain posting consistency",
      "Plan monthly calendars",
      "Coordinate with designers",
      "Build campaigns",
      "Analyze social analytics",
      "Grow multi platform presence",
    ],
    buttonText: "Hire Social Media Manager",
    image: "/assets/images/2.png",
  },
  {
    id: "tabScroll6",
    category: "marketing",
    title: "SEO Specialist",
    subtitle: "Improves search rankings so your business gets steady organic traffic.",
    tags: [
      "Basic keyword research",
      "Write meta titles and descriptions",
      "Add headers + on page fixes",
      "Internal linking",
      "Site speed improvement",
      "Competitor analysis",
      "Technical SEO fixes",
      "Backlink strategy",
      "Content optimization",
      "Full SEO growth strategy",
    ],
    buttonText: "Hire SEO Specialist",
    image: "/assets/images/2.png",
  },
  // Development
  {
    id: "tabScroll7",
    category: "development",
    title: "Front End Developer",
    subtitle: "Builds fast, visually clean, user friendly interfaces for web and mobile.",
    tags: [
      "Basic HTML edits",
      "Style updates with CSS",
      "Simple JS interactions",
      "Build responsive layouts",
      "Create modular components",
      "Integrate APIs",
      "Build full UI pages",
      "Performance optimization",
      "Create component libraries",
      "Architect front end for large apps",
    ],
    buttonText: "Hire Front End Developer",
    image: "/assets/images/2.png",
  },
  {
    id: "tabScroll8",
    category: "development",
    title: "Backend Developer",
    subtitle: "Builds the logic and systems that make your product reliable and scalable.",
    tags: [
      "Write basic server scripts",
      "Handle CRUD operations",
      "Set up databases",
      "Create authentication systems",
      "Build APIs",
      "Manage user roles and permissions",
      "Design data models",
      "Security + encryption",
      "Build scalable server systems",
      "Architect full backend infrastructure",
    ],
    buttonText: "Hire Backend Developer",
    image: "/assets/images/2.png",
  },
  {
    id: "tabScroll9",
    category: "development",
    title: "Full Stack Developer",
    subtitle: "Builds complete end to end products quickly — both frontend and backend.",
    tags: [
      "Simple styling",
      "Make API calls",
      "Connect frontend to backend",
      "Build small features",
      "Manage user sessions",
      "Build dashboards",
      "Set up databases and models",
      "Deploy applications",
      "Full stack optimization",
      "Build + maintain production level systems",
    ],
    buttonText: "Hire Full Stack Developer",
    image: "/assets/images/2.png",
  },
  // Key Growth
  {
    id: "tabScroll10",
    category: "keygrowth",
    title: "Growth Hacker",
    subtitle: "Drives rapid business growth using creative experiments and data.",
    tags: [
      "Identify small quick wins",
      "Run basic A/B tests",
      "Improve landing pages",
      "Optimize social hooks",
      "Build funnels",
      "Create viral loops",
      "Paid ads experiments",
      "Analyze user behavior",
      "Design growth experiments",
      "Build full growth engine",
    ],
    buttonText: "Hire Growth Hacker",
    image: "/assets/images/2.png",
  },
  {
    id: "tabScroll11",
    category: "keygrowth",
    title: "Marketing Automation Specialist",
    subtitle: "Automates your marketing to generate more leads without more work.",
    tags: [
      "Set up basic email flows",
      "Tag leads",
      "Create simple workflows",
      "Clean the CRM",
      "Create nurture sequences",
      "Integrate tools",
      "Lead scoring",
      "Behavioral automation",
      "Multi channel automation",
      "Full automation architecture",
    ],
    buttonText: "Hire Marketing Automation Specialist",
    image: "/assets/images/2.png",
  },
  {
    id: "tabScroll12",
    category: "keygrowth",
    title: "Data Analyst",
    subtitle: "Turns business data into insights that guide better decisions.",
    tags: [
      "Clean raw data",
      "Organize spreadsheets",
      "Make basic charts",
      "Build dashboards",
      "Track KPIs",
      "Analyze campaign results",
      "Identify trends",
      "Build forecasting models",
      "Discover growth opportunities",
      "Create data driven decision systems",
    ],
    buttonText: "Hire Data Analyst",
    image: "/assets/images/2.png",
  },
];

const CaseStudySection = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("tabScroll1");
  const [activeCategory, setActiveCategory] = useState<string>("creative");
  const [isFading, setIsFading] = useState<boolean>(false);
  const [shouldStick, setShouldStick] = useState<boolean>(true);
  const tabsSwiperRef = useRef<SwiperType | null>(null);
  const [isTabsSwiperBeginning, setIsTabsSwiperBeginning] = useState(true);
  const [isTabsSwiperEnd, setIsTabsSwiperEnd] = useState(false);

  // Tabs data
  const tabs = [
    { id: "creative", label: "Creative & Design" },
    { id: "marketing", label: "Marketing & Growth" },
    { id: "development", label: "Development" },
    { id: "keygrowth", label: "Key Growth" },
  ];

  // Filter cards based on active category
  const filteredCards = cardsData.filter(
    (card) => card.category === activeCategory
  );
  // refs (TOP)
  const stackCardsRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const scrollingFnRef = useRef<(() => void) | null>(null);
  const scrollingRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // ✅ moved up
  const openModal = useModalStore(
    (state: { openModal: any }) => state.openModal
  );

  // Helper functions
  const hasClass = (el: HTMLElement, className: string): boolean => {
    if (el.classList) return el.classList.contains(className);
    else
      return !!el.className.match(
        new RegExp("(\\s|^)" + className + "(\\s|$)")
      );
  };

  const addClass = (el: HTMLElement, className: string): void => {
    const classList = className.split(" ");
    if (el.classList) el.classList.add(classList[0]);
    else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) addClass(el, classList.slice(1).join(" "));
  };

  const removeClass = (el: HTMLElement, className: string): void => {
    const classList = className.split(" ");
    if (el.classList) el.classList.remove(classList[0]);
    else if (hasClass(el, classList[0])) {
      const reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
    if (classList.length > 1) removeClass(el, classList.slice(1).join(" "));
  };

  const osHasReducedMotion = (): boolean => {
    if (!window.matchMedia) return false;
    const matchMediaObj = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (matchMediaObj) return matchMediaObj.matches;
    return false;
  };

  // Stack Cards functions
  const setStackCards = (): void => {
    const element = stackCardsRef.current;
    if (!element) return;

    const items = itemsRef.current;
    if (!items || items.length === 0) return;

    // Reset all transformations if not desktop
    if (!isDesktop) {
      element.style.paddingBottom = "0px";
      for (let i = 0; i < items.length; i++) {
        if (items[i]) {
          items[i].style.transform = "none";
          // Remove stack card classes on mobile
          items[i].classList.remove(
            "service-scrollerItemContainer",
            "stack-cards__item",
            "js-stack-cards__item"
          );
          // Show all items on mobile
          items[i].style.display = "block";
        }
      }
      return;
    }

    // Desktop setup - show all items with stack effect
    for (let i = 0; i < items.length; i++) {
      if (items[i]) {
        items[i].style.display = "block";
        items[i].style.transition = "transform 0.1s ease-out"; // ✅ Add smooth transition
        // Ensure classes are present on desktop (don't add if already there)
        if (!items[i].classList.contains("service-scrollerItemContainer")) {
          items[i].classList.add(
            "service-scrollerItemContainer",
            "stack-cards__item",
            "js-stack-cards__item"
          );
        }
      }
    }

    // Check if we have at least one item before calling getComputedStyle
    if (!items[0]) return;

    const marginYValue =
      getComputedStyle(element).getPropertyValue("--stack-cards-gap");
    const marginY = getIntegerFromProperty(marginYValue, element);
    const elementHeight = element.offsetHeight;

    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue("top")));
    const cardHeight = Math.floor(
      parseFloat(cardStyle.getPropertyValue("height"))
    );

    if (isNaN(marginY)) {
      element.style.paddingBottom = "0px";
    } else {
      element.style.paddingBottom = marginY * (items.length - 1) + "px";
    }

    for (let i = 0; i < items.length; i++) {
      if (items[i]) {
        if (isNaN(marginY)) {
          items[i].style.transform = "none";
        } else {
          items[i].style.transform = `translateY(${marginY * i}px)`;
        }
      }
    }
  };

  const getIntegerFromProperty = (
    value: string,
    element: HTMLElement
  ): number => {
    const node = document.createElement("div");
    node.setAttribute(
      "style",
      "opacity:0; visbility: hidden;position: absolute; height:" + value
    );
    element.appendChild(node);
    const intValue = parseInt(
      getComputedStyle(node).getPropertyValue("height")
    );
    element.removeChild(node);
    return intValue;
  };

  const syncActiveByVisibility = () => {
    const list = stackCardsRef.current;
    if (!list) return;
    const cards = Array.from(
      list.querySelectorAll<HTMLElement>("li[id^='tabScroll']")
    );
    if (!cards.length) return;

    const rootEl = scrollContainerRef.current;
    const rootRect =
      rootEl && rootEl.scrollHeight > rootEl.clientHeight
        ? rootEl.getBoundingClientRect()
        : new DOMRect(0, 0, window.innerWidth, window.innerHeight);

    let bestId = activeTab,
      best = 0;
    for (const el of cards) {
      const r = el.getBoundingClientRect();
      const top = Math.max(r.top, rootRect.top);
      const bottom = Math.min(r.bottom, rootRect.bottom);
      const visible = Math.max(0, bottom - top);
      const ratio = r.height ? visible / r.height : 0;
      if (ratio > best) {
        best = ratio;
        bestId = el.id;
      }
    }
    if (bestId !== activeTab) setActiveTab(bestId);
  };

  useEffect(() => {
    if (isDesktop) return; // desktop pe stack math hi chalegi
    const root: any = scrollContainerRef.current ?? window;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(syncActiveByVisibility);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    syncActiveByVisibility();
    return () => {
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  // ✅ New function to maintain scale based on current position
  const maintainStackCardsScale = (): void => {
    if (!isDesktop) return;

    const element = stackCardsRef.current;
    if (!element) return;

    const items = itemsRef.current;
    if (!items || items.length === 0 || !items[0]) return;

    const marginYValue =
      getComputedStyle(element).getPropertyValue("--stack-cards-gap");
    const marginY = getIntegerFromProperty(marginYValue, element);
    if (isNaN(marginY)) return;

    const top = element.getBoundingClientRect().top;
    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue("top")));
    const cardHeight = Math.floor(
      parseFloat(cardStyle.getPropertyValue("height"))
    );

    for (let i = 0; i < items.length; i++) {
      if (!items[i]) continue;

      const scrolling = cardTop - top - i * (cardHeight + marginY);

      if (scrolling > 0) {
        const scaling =
          i === items.length - 1
            ? 1
            : (cardHeight - scrolling * 0.05) / cardHeight;
        const boundedScaling = Math.max(0.7, Math.min(1, scaling));
        items[i].style.transform = `translateY(${
          marginY * i
        }px) scale(${boundedScaling})`;
      } else {
        items[i].style.transform = `translateY(${marginY * i}px)`;
      }
    }
  };

  const animateStackCards = (): void => {
    if (!isDesktop) {
      scrollingRef.current = false;
      syncActiveByVisibility();
      return;
    }

    const element = stackCardsRef.current;
    if (!element) return;

    const items = itemsRef.current;
    if (!items || items.length === 0 || !items[0]) {
      scrollingRef.current = false;
      return;
    }

    const marginYValue =
      getComputedStyle(element).getPropertyValue("--stack-cards-gap");
    const marginY = getIntegerFromProperty(marginYValue, element);
    if (isNaN(marginY)) {
      scrollingRef.current = false;
      return;
    }

    const top = element.getBoundingClientRect().top;
    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue("top")));
    const cardHeight = Math.floor(
      parseFloat(cardStyle.getPropertyValue("height"))
    );
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;

    if (
      cardTop -
        top +
        windowHeight -
        elementHeight -
        cardHeight +
        marginY +
        marginY * items.length >
      0
    ) {
      scrollingRef.current = false;
      return;
    }

    let bestIndex = 0;
    let bestDist = Infinity;

    for (let i = 0; i < items.length; i++) {
      if (!items[i]) continue;

      const scrolling = cardTop - top - i * (cardHeight + marginY);

      if (scrolling > 0) {
        const scaling =
          i === items.length - 1
            ? 1
            : (cardHeight - scrolling * 0.05) / cardHeight;
        items[i].style.transform = `translateY(${
          marginY * i
        }px) scale(${scaling})`;
      } else {
        items[i].style.transform = `translateY(${marginY * i}px)`;
      }

      const dist = Math.abs(scrolling);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }

    const id = `tabScroll${bestIndex + 1}`;
    if (id !== activeTab) setActiveTab(id);

    scrollingRef.current = false;
  };

  const stackCardsScrolling = (): void => {
    if (!isDesktop || scrollingRef.current) return;
    scrollingRef.current = true;
    animationFrameRef.current = requestAnimationFrame(animateStackCards);
  };

  const initStackCardsEffect = (): void => {
    // Only initialize if we have the required elements
    if (
      stackCardsRef.current &&
      itemsRef.current &&
      itemsRef.current.length > 0
    ) {
      setStackCards();
      if (!isDesktop) return;

      window.addEventListener("scroll", stackCardsScrolling);
    }
  };

  const cleanupStackCards = (): void => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    window.removeEventListener("scroll", stackCardsScrolling);
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const target = document.getElementById(tabId);
    if (!target) return;

    const scroller = scrollContainerRef.current;

    // Prefer container scroll if it's actually scrollable
    if (scroller && scroller.scrollHeight > scroller.clientHeight) {
      const targetRect = target.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const current = scroller.scrollTop;
      const delta = targetRect.top - scrollerRect.top; // distance inside the box
      scroller.scrollTo({ top: current + delta, behavior: "smooth" });
      return;
    }

    // Fallback: page scroll
    const y = window.scrollY + target.getBoundingClientRect().top - 80; // adjust if you have a sticky header
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // helper: fetch all card <li> by filtered cards ids (order preserved)
  const getCardEls = () =>
    filteredCards
      .map((card) => document.getElementById(card.id))
      .filter(Boolean) as HTMLElement[];

  // compute visible ratio of an element inside a root rect
  const ratioInRoot = (rect: DOMRect, rootRect: DOMRect) => {
    const top = Math.max(rect.top, rootRect.top);
    const bottom = Math.min(rect.bottom, rootRect.bottom);
    const visible = Math.max(0, bottom - top);
    return rect.height > 0 ? visible / rect.height : 0;
  };

  // 🔁 robust scroll-based sync (no IO)
  useEffect(() => {
    const rootEl = scrollContainerRef.current ?? null;

    // if right panel actually scrolls, use it as root; else viewport
    const getRootRect = () =>
      rootEl && rootEl.scrollHeight > rootEl.clientHeight
        ? rootEl.getBoundingClientRect()
        : new DOMRect(0, 0, window.innerWidth, window.innerHeight);

    let raf = 0;

    const selectMostVisible = () => {
      const cards = getCardEls();
      if (!cards.length) return;

      const rootRect = getRootRect();
      let bestId = activeTab;
      let best = 0;

      for (const el of cards) {
        const r = el.getBoundingClientRect();
        const ratio = ratioInRoot(r, rootRect);
        if (ratio > best) {
          best = ratio;
          bestId = el.id;
        }
      }

      // little hysteresis to avoid flicker
      if (bestId !== activeTab && best >= 0.35) setActiveTab(bestId);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(selectMostVisible);
    };

    // attach to both roots so desktop/mobile both covered
    (rootEl ?? window).addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // initial sync
    selectMostVisible();

    return () => {
      (rootEl ?? window).removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrollContainerRef.current, filteredCards]); // rewire if the scrolling root or cards change

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      // Clean up and reinitialize
      cleanupStackCards();
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        initStackCardsEffect();
      }, 100);
    };

    // Initial setup
    const desktop = window.innerWidth >= 1024;
    setIsDesktop(desktop);

    // Initialize only if not reduced motion and after a delay to ensure DOM is ready
    if (!osHasReducedMotion()) {
      setTimeout(() => {
        initStackCardsEffect();
      }, 200);
    }

    // Set up resize listener
    let resizeTimeout: NodeJS.Timeout;
    const resizeListener = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 500);
    };

    window.addEventListener("resize", resizeListener);

    // Clean up
    return () => {
      cleanupStackCards();
      window.removeEventListener("resize", resizeListener);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [isDesktop, activeTab]);

  // Update service scroller class
  useEffect(() => {
    const updateServiceScrollerClass = () => {
      const el = document.getElementById("serviceScrollerArea");
      if (!el) return;

      if (window.innerWidth > 1024) {
        removeClass(el as HTMLElement, "service-scrollerArea");
      } else {
        addClass(el as HTMLElement, "service-scrollerArea");
      }
    };

    updateServiceScrollerClass();
    window.addEventListener("resize", updateServiceScrollerClass);
    return () => {
      window.removeEventListener("resize", updateServiceScrollerClass);
    };
  }, []);

  // Initialize items ref
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (stackCardsRef.current) {
        itemsRef.current = Array.from(
          stackCardsRef.current.getElementsByClassName("js-stack-cards__item")
        ) as HTMLLIElement[];

        // Only call setStackCards on mobile to remove classes
        if (!isDesktop && itemsRef.current.length > 0) {
          setStackCards();
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isDesktop, activeCategory]);

  // Sync Swiper to active category
  useEffect(() => {
    if (tabsSwiperRef.current) {
      const activeIndex = tabs.findIndex((tab) => tab.id === activeCategory);
      if (activeIndex !== -1) {
        tabsSwiperRef.current.slideTo(activeIndex);
      }
    }
  }, [activeCategory]);

  // Reinitialize stack cards when category changes
  useEffect(() => {
    cleanupStackCards();

    // Reset sticky state when category changes
    setShouldStick(true);

    // Set active tab to first card of the category
    if (filteredCards.length > 0) {
      setActiveTab(filteredCards[0].id);
    }

    // Scroll to top of cards section when category changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    const timer = setTimeout(() => {
      if (!osHasReducedMotion()) {
        initStackCardsEffect();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      cleanupStackCards();
    };
  }, [activeCategory, filteredCards]);

  // Handle fade effect when category changes
  useEffect(() => {
    setIsFading(true);
    const fadeOutTimer = setTimeout(() => {
      setIsFading(false);
    }, 150);

    return () => clearTimeout(fadeOutTimer);
  }, [activeCategory]);

  // ✅ Add intersection observer or interval to maintain scale when not scrolling
  useEffect(() => {
    if (!isDesktop) return;

    const intervalId = setInterval(() => {
      if (!scrollingRef.current) {
        maintainStackCardsScale();
      }
    }, 16); // Check every 16ms (60fps) when not actively scrolling

    return () => clearInterval(intervalId);
  }, [isDesktop]);

  // ✅ Check if all cards are scrolled past to unstick tabs navigation
  useEffect(() => {
    const checkScrollPosition = () => {
      const cardsList = stackCardsRef.current;
      if (!cardsList) return;

      const cards = Array.from(
        cardsList.querySelectorAll<HTMLElement>("li[id^='tabScroll']")
      );
      if (cards.length === 0) return;

      // Get the last card
      const lastCard = cards[cards.length - 1];
      if (!lastCard) return;

      // Get the bounding rect of the last card
      const lastCardRect = lastCard.getBoundingClientRect();

      // Get the entire cards container
      const cardsListRect = cardsList.getBoundingClientRect();

      // Check when cards section is finishing - when last card's bottom is passing viewport
      // At this point, unstick tabs so they scroll up naturally with the page
      // This ensures tabs scroll up smoothly, not hide
      const viewportHeight = window.innerHeight;

      // When last card's bottom is above viewport bottom (cards finishing), tabs scroll up
      // This makes tabs naturally scroll up as cards finish, not hide
      const shouldUnstick = lastCardRect.bottom < viewportHeight;

      // On mobile, tabs should never be sticky - always scroll naturally
      // On desktop, apply sticky behavior based on scroll position
      setShouldStick(isDesktop && !shouldUnstick);
    };

    // Check on scroll - handle both window and container scroll
    const handleScroll = () => {
      requestAnimationFrame(checkScrollPosition);
    };

    const rootEl = scrollContainerRef.current;

    // Listen to both window and container scroll if container is scrollable
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (rootEl) {
      rootEl.addEventListener("scroll", handleScroll, { passive: true });
    }

    checkScrollPosition(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rootEl) {
        rootEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, [filteredCards, activeCategory]);

  return (
    <div className="pb_8 sectionPadding bg-cover mobile-padding-bottom-0 bg-[#03001D]">
      <section className="sectionPaddingCase pt-0 mobile-padding-bottom-0">
        <Container maxWidth="2xl">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center mb-10 sectionHeading forH2 gap-3 flex flex-col items-center justify-center">
              <h2 className="mb-5 text-white text-center max-w-5xl mx-auto">
              Meet the <span className="primaryColor">AI Empowered</span> Team Built for Your Growth

              </h2>
              <p className="text-white max-w-5xl mx-auto">
              Your Smart Marketing AI Team is more than extra help. It acts as your complete digital department handling the work that keeps your business growing. With human creativity and AI precision working together every task becomes faster clearer and more valuable for your long term success.
              </p>
            </div>
          </div>
          <div className="mx-auto xl:w-[78%]">
            {/* Tabs Navigation with Swiper */}
            <div
              className={`${
                shouldStick ? "sticky" : ""
              } top-10 z-50 py-4 rounded-lg w-full mx-auto md:bg-[#0b0038] md:mb-8 mb-16 relative`}
            >
              {/* Left Arrow */}
              <button
                onClick={() => tabsSwiperRef.current?.slidePrev()}
                disabled={isTabsSwiperBeginning}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all ${
                  isTabsSwiperBeginning
                    ? "opacity-30 cursor-not-allowed bg-[#1b1849]"
                    : "opacity-100 hover:bg-[#0fdac2]/80 bg-[#0fdac2]"
                }`}
                aria-label="Previous tab"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Swiper for Tabs */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={false}
                allowTouchMove={true}
                speed={300}
                watchOverflow={true}
                onSwiper={(swiper) => {
                  tabsSwiperRef.current = swiper;
                  setIsTabsSwiperBeginning(swiper.isBeginning);
                  setIsTabsSwiperEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsTabsSwiperBeginning(swiper.isBeginning);
                  setIsTabsSwiperEnd(swiper.isEnd);
                  const activeIndex = swiper.activeIndex;
                  if (tabs[activeIndex]) {
                    const selectedTab = tabs[activeIndex];
                    setActiveCategory(selectedTab.id);
                    const firstCard = cardsData.find(
                      (card) => card.category === selectedTab.id
                    );
                    if (firstCard) setActiveTab(firstCard.id);
                  }
                }}
                className="tabs-swiper"
                style={{ paddingLeft: "3rem", paddingRight: "3rem", overflow: "hidden" }}
              >
                {tabs.map((tab) => (
                  <SwiperSlide key={tab.id} style={{ width: "100%" }}>
                    <div className="flex justify-center w-full">
                      <button
                        onClick={() => {
                          setActiveCategory(tab.id);
                          const firstCard = cardsData.find(
                            (card) => card.category === tab.id
                          );
                          if (firstCard) setActiveTab(firstCard.id);
                          // Sync swiper to active tab
                          const tabIndex = tabs.findIndex((t) => t.id === tab.id);
                          if (tabsSwiperRef.current && tabIndex !== -1) {
                            tabsSwiperRef.current.slideTo(tabIndex);
                          }
                        }}
                        className={`px-10 pt-3 pb-4 rounded-lg cursor-pointer caseBtn text-xl font-graphik-bold transition-all relative ${
                          activeCategory === tab.id
                            ? "bg-[#643bff] text-white"
                            : "text-[#403867] hover:text-[#9ca3af]"
                        }`}
                      >
                        {tab.label}
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Right Arrow */}
              <button
                onClick={() => tabsSwiperRef.current?.slideNext()}
                disabled={isTabsSwiperEnd}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-none text-white cursor-pointer flex items-center justify-center transition-all ${
                  isTabsSwiperEnd
                    ? "opacity-30 cursor-not-allowed bg-[#1b1849]"
                    : "opacity-100 hover:bg-[#0fdac2]/80 bg-[#0fdac2]"
                }`}
                aria-label="Next tab"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            <div className="tabSection">
              <div className="">
                <div ref={scrollContainerRef}>
                  <ul
                    className={`service-scrollerArea stack-cards js-stack-cards transition-opacity duration-300 ease-in-out ${
                      isFading ? "opacity-0" : "opacity-100"
                    }`}
                    id="serviceScrollerArea"
                    ref={stackCardsRef}
                  >
                    {filteredCards.map((card, index) => {
                      const colors = ["#110e21", "#16112d", "#21164c"];
                      const cardColor = colors[index % 3];
                      return (
                        <li
                          key={card.id}
                          className="service-scrollerItemContainer stack-cards__item js-stack-cards__item"
                          id={card.id}
                        >
                          <div
                            className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 scrollerItem"
                            style={{ backgroundColor: cardColor }}
                          >
                            <div className="inner-div my-auto md:px-5 md:ps-9 ps-3 md:pe-0 pe-3">
                              <h3>{card.title}</h3>
                              <p className="text-[#0fdac2]">{card.subtitle}</p>
                              <div className="inner-tags flex flex-wrap gap-2">
                                {card.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex}>{tag}</span>
                                ))}
                              </div>
                              <Button
                                variant="green"
                                href="#"
                                icon={
                                  <ArrowRightIcon style={{ fill: "#000" }} />
                                }
                                iconPosition="right"
                              >
                                {card.buttonText}
                              </Button>
                            </div>
                            <div className="text-center">
                              <Image
                                src={card.image}
                                className="caseImg"
                                alt={card.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}
                                width={300}
                                height={200}
                              />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CaseStudySection;
