"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useModalStore } from "@/stores/useModalStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../../../public/assets/css/casestudy.css";
import Container from "./Container";
import Button from "./Button";
import { ArrowRightIcon } from "./icons";
import CalendlyPopup from "./CalendlyPopup/CalendlyPopup";
import { CaseStudySectionData, DEFAULT_CASE_STUDY_DATA, CardData, TabData } from "../data/CaseStudySectionData";

interface CaseStudySectionProps {
  data?: CaseStudySectionData;
  isShowTabs?: boolean;
  className?: string;
}

const CaseStudySection = ({ data = DEFAULT_CASE_STUDY_DATA, isShowTabs = true, className }: CaseStudySectionProps) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isCalendlyPopupOpen, setIsCalendlyPopupOpen] = useState(false);
  
  
  const shouldOpenCalendly = (buttonText: string) => {
    return buttonText === "Hire Brand Designer" || 
           buttonText === "Hire UI/UX Designer" || 
           buttonText === "Hire UI UX Designer" ||
           buttonText === "Hire Graphic Designer" ||
           buttonText === "Hire Content Strategist" ||
           buttonText === "Hire Social Media Manager" ||
           buttonText === "Hire SEO Specialist" ||
           buttonText === "Hire Front End Developer" ||
           buttonText === "Hire Backend Developer" ||
           buttonText === "Hire Full Stack Developer" ||
           buttonText === "Hire Growth Hacker" ||
           buttonText === "Hire Marketing Automation Specialist" ||
           buttonText === "Hire Data Analyst" ||
           buttonText === "Hire Web Developer" ||
           buttonText === "Hire Web Designer" ||
           buttonText === "Hire Copywriter" ||
           buttonText === "Hire UI/UX Writer" ||
           buttonText === "Hire Content Curator" ||
           buttonText === "Hire Reels Creator" ||
           buttonText === "Hire Growth Hacker" ||
           buttonText === "Hire Marketing Automation Specialist" ||
           buttonText === "Hire Data Analyst" ||
           buttonText === "Hire Web Content Writer" ||
           buttonText === "Hire Ads Writer" ||
           buttonText === "Hire Social Media Designer" ||
           buttonText === "Hire Content Curator" ||
           buttonText === "Hire Reels Creator" ||
           buttonText === "Hire Campaign Writer" ||
           buttonText === "Hire Your Design Team" ||
           buttonText === "Hire My Design Team";
 };

  
  const getInitialActiveTab = () => {
    const firstCard = data.cards.find((card) => card.category === data.tabs[0]?.id);
    return firstCard?.id || "tabScroll1";
  };
  const [activeTab, setActiveTab] = useState<string>(getInitialActiveTab());
  
  const [activeCategory, setActiveCategory] = useState<string>(isShowTabs ? "creative" : "creative");
  const [isFading, setIsFading] = useState<boolean>(false);
  const [shouldStick, setShouldStick] = useState<boolean>(true);
  const tabsSwiperRef = useRef<SwiperType | null>(null);
  const [isTabsSwiperBeginning, setIsTabsSwiperBeginning] = useState(true);
  const [isTabsSwiperEnd, setIsTabsSwiperEnd] = useState(false);

  
  const tabs: TabData[] = data.tabs;
  const cardsData: CardData[] = data.cards;

  
  const filteredCards = cardsData.filter(
    (card) => card.category === activeCategory
  );

  
  useEffect(() => {
    if (filteredCards.length > 0) {
      const firstCardId = filteredCards[0].id;
      
      if (!filteredCards.find(card => card.id === activeTab)) {
        setActiveTab(firstCardId);
      }
    }
  }, [data.cards, activeCategory]); 

  
  const stackCardsRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const scrollingFnRef = useRef<(() => void) | null>(null);
  const scrollingRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null); 
  const openModal = useModalStore(
    (state: { openModal: any }) => state.openModal
  );

  
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

  
 // In CaseStudySection.tsx - Update setStackCards function
const setStackCards = (): void => {
  const element = stackCardsRef.current;
  if (!element) return;

  const items = itemsRef.current;
  if (!items || items.length === 0) return;

  // Batch all DOM reads first
  requestAnimationFrame(() => {
    // Read all layout properties in one batch
    const marginYValue = getComputedStyle(element).getPropertyValue("--stack-cards-gap");
    const marginY = getIntegerFromProperty(marginYValue, element);
    const elementHeight = element.offsetHeight;
    const cardStyle = getComputedStyle(items[0]);
    const cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue("top")));
    const cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue("height")));

    // Then batch all DOM writes
    requestAnimationFrame(() => {
      if (!isDesktop) {
        element.style.paddingBottom = "0px";
        for (let i = 0; i < items.length; i++) {
          if (items[i]) {
            items[i].style.transform = "translate3d(0, 0, 0)";
            items[i].classList.remove(
              "service-scrollerItemContainer",
              "stack-cards__item",
              "js-stack-cards__item"
            );
            items[i].style.display = "block";
          }
        }
        return;
      }

      // Desktop version
      for (let i = 0; i < items.length; i++) {
        if (items[i]) {
          items[i].style.display = "block";
          items[i].style.transition = "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
          
          if (!items[i].classList.contains("service-scrollerItemContainer")) {
            items[i].classList.add(
              "service-scrollerItemContainer",
              "stack-cards__item",
              "js-stack-cards__item"
            );
          }
        }
      }

      if (isNaN(marginY)) {
        element.style.paddingBottom = "0px";
      } else {
        element.style.paddingBottom = marginY * (items.length - 1) + "px";
      }

      for (let i = 0; i < items.length; i++) {
        if (items[i]) {
          if (isNaN(marginY)) {
            items[i].style.transform = "translate3d(0, 0, 0)";
          } else {
            const translateY = Math.round(marginY * i);
            items[i].style.transform = `translate3d(0, ${translateY}px, 0)`;
          }
        }
      }
    });
  });
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

  // In CaseStudySection.tsx - Update syncActiveByVisibility
const syncActiveByVisibility = () => {
  const list = stackCardsRef.current;
  if (!list) return;
  
  const cards = Array.from(
    list.querySelectorAll<HTMLElement>("li[id^='tabScroll']")
  );
  if (!cards.length) return;

  // Batch all getBoundingClientRect() calls
  const rootEl = scrollContainerRef.current;
  const rootRect = rootEl && rootEl.scrollHeight > rootEl.clientHeight
    ? rootEl.getBoundingClientRect()
    : new DOMRect(0, 0, window.innerWidth, window.innerHeight);

  // Read all card positions in one batch
  const cardRects = cards.map(el => ({
    id: el.id,
    rect: el.getBoundingClientRect(),
    height: el.offsetHeight
  }));

  // Process after all reads are done
  let bestId = activeTab;
  let best = 0;
  
  for (const { id, rect, height } of cardRects) {
    const top = Math.max(rect.top, rootRect.top);
    const bottom = Math.min(rect.bottom, rootRect.bottom);
    const visible = Math.max(0, bottom - top);
    const ratio = height ? visible / height : 0;
    if (ratio > best) {
      best = ratio;
      bestId = id;
    }
  }
  
  if (bestId !== activeTab) setActiveTab(bestId);
};

  useEffect(() => {
    if (isDesktop) return; 
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
        const translateY = Math.round(marginY * i);
        const scaleValue = Math.round(boundedScaling * 100) / 100; 
        items[i].style.transform = `translate3d(0, ${translateY}px, 0) scale3d(${scaleValue}, ${scaleValue}, 1)`;
      } else {
        const translateY = Math.round(marginY * i);
        items[i].style.transform = `translate3d(0, ${translateY}px, 0)`;
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
      
      for (let i = 0; i < items.length; i++) {
        if (items[i]) {
          items[i].style.transition = "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
        }
      }
      return;
    }

    
    for (let i = 0; i < items.length; i++) {
      if (items[i]) {
        items[i].style.transition = "none";
      }
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
        const boundedScaling = Math.max(0.7, Math.min(1, scaling));
        const translateY = Math.round(marginY * i);
        const scaleValue = Math.round(boundedScaling * 100) / 100; 
        items[i].style.transform = `translate3d(0, ${translateY}px, 0) scale3d(${scaleValue}, ${scaleValue}, 1)`;
      } else {
        const translateY = Math.round(marginY * i);
        items[i].style.transform = `translate3d(0, ${translateY}px, 0)`;
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
    
    
    setTimeout(() => {
      if (!scrollingRef.current) {
        for (let i = 0; i < items.length; i++) {
          if (items[i]) {
            items[i].style.transition = "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
          }
        }
      }
    }, 50);
  };

  const stackCardsScrolling = (): void => {
    if (!isDesktop || scrollingRef.current) return;
    scrollingRef.current = true;
    animationFrameRef.current = requestAnimationFrame(animateStackCards);
  };

  const initStackCardsEffect = (): void => {
    
    if (
      stackCardsRef.current &&
      itemsRef.current &&
      itemsRef.current.length > 0
    ) {
      setStackCards();
      if (!isDesktop) return;

      window.addEventListener("scroll", stackCardsScrolling, { passive: true });
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

    
    if (scroller && scroller.scrollHeight > scroller.clientHeight) {
      const targetRect = target.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const current = scroller.scrollTop;
      const delta = targetRect.top - scrollerRect.top; 
      scroller.scrollTo({ top: current + delta, behavior: "smooth" });
      return;
    }

    
    const y = window.scrollY + target.getBoundingClientRect().top - 80; 
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  
  const getCardEls = () =>
    filteredCards
      .map((card) => document.getElementById(card.id))
      .filter(Boolean) as HTMLElement[];

  
  const ratioInRoot = (rect: DOMRect, rootRect: DOMRect) => {
    const top = Math.max(rect.top, rootRect.top);
    const bottom = Math.min(rect.bottom, rootRect.bottom);
    const visible = Math.max(0, bottom - top);
    return rect.height > 0 ? visible / rect.height : 0;
  };

  
  useEffect(() => {
    const rootEl = scrollContainerRef.current ?? null;

    
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

      
      if (bestId !== activeTab && best >= 0.35) setActiveTab(bestId);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(selectMostVisible);
    };

    
    (rootEl ?? window).addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    
    selectMostVisible();

    return () => {
      (rootEl ?? window).removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrollContainerRef.current, filteredCards, data.cards]); 

  
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      
      cleanupStackCards();
      
      setTimeout(() => {
        initStackCardsEffect();
      }, 100);
    };

    
    const desktop = window.innerWidth >= 1024;
    setIsDesktop(desktop);

    
    if (!osHasReducedMotion()) {
      setTimeout(() => {
        initStackCardsEffect();
      }, 200);
    }

    
    let resizeTimeout: NodeJS.Timeout;
    const resizeListener = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 500);
    };

    window.addEventListener("resize", resizeListener);

    
    return () => {
      cleanupStackCards();
      window.removeEventListener("resize", resizeListener);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [isDesktop, activeTab, data.cards]);

  
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

  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (stackCardsRef.current) {
        itemsRef.current = Array.from(
          stackCardsRef.current.getElementsByClassName("js-stack-cards__item")
        ) as HTMLLIElement[];

        
        if (!isDesktop && itemsRef.current.length > 0) {
          setStackCards();
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isDesktop, activeCategory, data.cards]);

  
  useEffect(() => {
    if (tabsSwiperRef.current) {
      const activeIndex = tabs.findIndex((tab) => tab.id === activeCategory);
      if (activeIndex !== -1) {
        tabsSwiperRef.current.slideTo(activeIndex);
      }
    }
  }, [activeCategory]);

  
  useEffect(() => {
    cleanupStackCards();

    
    setShouldStick(true);

    
    if (filteredCards.length > 0) {
      setActiveTab(filteredCards[0].id);
    } else {
      
      const firstCard = data.cards.find((card) => card.category === data.tabs[0]?.id);
      if (firstCard) setActiveTab(firstCard.id);
    }

    
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
  }, [activeCategory, filteredCards, data.cards]);

  
  useEffect(() => {
    setIsFading(true);
    const fadeOutTimer = setTimeout(() => {
      setIsFading(false);
    }, 150);

    return () => clearTimeout(fadeOutTimer);
  }, [activeCategory]);

  
  useEffect(() => {
    if (!isDesktop) return;

    const intervalId = setInterval(() => {
      if (!scrollingRef.current) {
        maintainStackCardsScale();
      }
    }, 16); 

    return () => clearInterval(intervalId);
  }, [isDesktop]);

  
  useEffect(() => {
    const checkScrollPosition = () => {
      const cardsList = stackCardsRef.current;
      if (!cardsList) return;

      const cards = Array.from(
        cardsList.querySelectorAll<HTMLElement>("li[id^='tabScroll']")
      );
      if (cards.length === 0) return;

      
      const lastCard = cards[cards.length - 1];
      if (!lastCard) return;

      
      const lastCardRect = lastCard.getBoundingClientRect();

      const viewportHeight = window.innerHeight;
      
      
      
      const shouldUnstick = lastCardRect.bottom < viewportHeight;

      
      
      
      setShouldStick(isDesktop && !shouldUnstick);
    };

    
    const handleScroll = () => {
      requestAnimationFrame(checkScrollPosition);
    };

    const rootEl = scrollContainerRef.current;

    
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (rootEl) {
      rootEl.addEventListener("scroll", handleScroll, { passive: true });
    }

    checkScrollPosition(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rootEl) {
        rootEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, [filteredCards, activeCategory, data.cards, isDesktop]);

  return (
    <div className={`casestudysec sectionPadding bg-cover mobile-padding-bottom-0 bg-[#03001D] ${className}`}>
      {/* <div className="starsLayer3"></div> */}
      <section className="sectionPaddingCase pt-0 mobile-padding-bottom-0" style={{ position: 'relative', zIndex: 1 }}>
        <Container maxWidth="xl">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center mb-10 sectionHeading forH2 flex flex-col items-center justify-center">
              <h2 className="mb-5 text-white text-center max-w-5xl mx-auto">
                {data.heading.text.split(data.heading.highlighted).map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="primaryColor">{data.heading.highlighted}</span>
                    )}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-white max-w-5xl mx-auto">
                {data.description}
              </p>
            </div>
          </div>
          <div className="mx-auto xl:w-[78%]">
            {/* Tabs Navigation - Desktop View */}
            {isShowTabs && (
              <div
                className={`${shouldStick ? "sticky" : ""} top-10 z-50 py-4 md:px-4 p-0 rounded-lg gap-11 mx-auto md:bg-[#0b0038] md:mb-8 mb-16 hidden md:flex items-end w-fit flex-wrap transition-all duration-300 ease-in-out`}
              >
              <button
                onClick={() => {
                  setActiveCategory("creative");
                  const firstCreativeCard = data.cards.find(
                    (card) => card.category === "creative"
                  );
                  if (firstCreativeCard) setActiveTab(firstCreativeCard.id);
                }}
                className={`px-10 rounded-lg cursor-pointer caseBtn text-xl font-semibold transition-all relative ${
                  activeCategory === "creative"
                    ? "bg-[#643bff] text-white"
                    : "text-[#403867] hover:text-[#9ca3af]"
                }`}
              >
                Creative & Design
              </button>

              <button
                onClick={() => {
                  setActiveCategory("marketing");
                  const firstMarketingCard = data.cards.find(
                    (card) => card.category === "marketing"
                  );
                  if (firstMarketingCard) setActiveTab(firstMarketingCard.id);
                }}
                className={`px-10 rounded-lg cursor-pointer caseBtn text-xl font-semibold transition-all ${
                  activeCategory === "marketing"
                    ? "bg-[#643bff] text-white"
                    : "text-[#403867] hover:text-[#9ca3af]"
                }`}
              >
                Marketing & Growth
              </button>

              <button
                onClick={() => {
                  setActiveCategory("development");
                  const firstDevCard = data.cards.find(
                    (card) => card.category === "development"
                  );
                  if (firstDevCard) setActiveTab(firstDevCard.id);
                }}
                className={`px-10 rounded-lg cursor-pointer caseBtn text-xl font-semibold transition-all ${
                  activeCategory === "development"
                    ? "bg-[#643bff] text-white"
                    : "text-[#403867] hover:text-[#9ca3af]"
                }`}
              >
                Development
              </button>

              <button
                onClick={() => {
                  setActiveCategory("keygrowth");
                  const firstGrowthCard = data.cards.find(
                    (card) => card.category === "keygrowth"
                  );
                  if (firstGrowthCard) setActiveTab(firstGrowthCard.id);
                }}
                className={`px-10 rounded-lg cursor-pointer caseBtn text-xl font-semibold transition-all ${
                  activeCategory === "keygrowth"
                    ? "bg-[#643bff] text-white"
                    : "text-[#403867] hover:text-[#9ca3af]"
                }`}
              >
                Key Growth
              </button>
            </div>
            )}

            {/* Tabs Navigation - Mobile View with Swiper */}
            {isShowTabs && (
              <div
                className={`${shouldStick ? "sticky" : ""} md:top-10 sm:top-0 z-50 py-4 rounded-lg w-full mx-auto md:bg-[#0b0038] md:mb-8 mb-10 relative md:hidden transition-all duration-300 ease-in-out`}
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
                  if (data.tabs[activeIndex]) {
                    const selectedTab = data.tabs[activeIndex];
                    setActiveCategory(selectedTab.id);
                    const firstCard = data.cards.find(
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
                          const firstCard = data.cards.find(
                            (card) => card.category === tab.id
                          );
                          if (firstCard) setActiveTab(firstCard.id);
                          
                          const tabIndex = data.tabs.findIndex((t) => t.id === tab.id);
                          if (tabsSwiperRef.current && tabIndex !== -1) {
                            tabsSwiperRef.current.slideTo(tabIndex);
                          }
                        }}
                        className={`px-10 rounded-lg cursor-pointer caseBtn text-xl font-semibold transition-all relative ${
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
            )}
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
                          className={`service-scrollerItemContainer stack-cards__item js-stack-cards__item ${card.className}`}
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
                                href={shouldOpenCalendly(card.buttonText) ? undefined : "#"}
                                onClick={shouldOpenCalendly(card.buttonText) ? () => setIsCalendlyPopupOpen(true) : undefined}
                                icon={
                                  <ArrowRightIcon style={{ fill: "#000" }} />
                                }
                                iconPosition="right"
                                className={shouldOpenCalendly(card.buttonText) ? "hire-brand-designer-btn" : ""}
                                style={shouldOpenCalendly(card.buttonText) ? { backgroundColor: "#0fdac2" } : undefined}
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
                                loading="lazy"
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
      
      {/* Calendly Popup */}
      <CalendlyPopup
        isOpen={isCalendlyPopupOpen}
        onClose={() => setIsCalendlyPopupOpen(false)}
      />
    </div>
  );
};

export default CaseStudySection;
