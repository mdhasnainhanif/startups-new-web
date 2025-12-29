"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { COMPANY_INFO, NAVIGATION_LINKS } from "../constants";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllServices } from "../data/ServicesPageData";
import OfferPopup from "./OfferPopup/OfferPopup";
export default function Header() {
  const [isOfferPopupOpen, setIsOfferPopupOpen] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen2, setIsServicesDropdownOpen2] = useState(false);
  
  const [isMobileDesignDropdownOpen, setIsMobileDesignDropdownOpen] =
    useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] =
    useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [dropdownPosition2, setDropdownPosition2] = useState({
    top: 0,
    left: 0,
  });
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef2 = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownButtonRef2 = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef2 = useRef<NodeJS.Timeout | null>(null);
  const services = getAllServices();

  
  const servicesMenuItems = [
    {
      label: "Web Development",
      href: "/web-development",
      slug: "web-development",
    },
    {
      label: "Content Marketing",
      href: "/content-writing",
      slug: "content-writing",
    },
    {
      label: "Social Media Marketing",
      href: "/social-media-marketing",
      slug: "social-media-marketing",
    },
  ];

  
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  
  const isServicePage = () => {
    if (!pathname) return false;
    return services.some((service) => pathname.startsWith(`/${service.slug}`));
  };

  useEffect(() => {
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      
      
      if (!isMobile && isServicesDropdownOpen && scrollDelta > 5) {
        setIsServicesDropdownOpen(false);
      }
      if (!isMobile && isServicesDropdownOpen2 && scrollDelta > 5) {
        setIsServicesDropdownOpen2(false);
      }

      
      setIsScrolled(currentScrollY > 50);

      
      if (currentScrollY < 10) {
        
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [lastScrollY, isMobile, isServicesDropdownOpen, isServicesDropdownOpen2]);

  
  useEffect(() => {
    const updatePosition = () => {
      if (dropdownButtonRef2.current && isServicesDropdownOpen2) {
        const rect = dropdownButtonRef2.current.getBoundingClientRect();
        const topPosition = isScrolled
          ? rect.bottom + 16 
          : rect.bottom + window.scrollY + 16; 

        setDropdownPosition2({
          top: topPosition ,
          left: rect.left + rect.width / 2,
        });
      }
    };

    if (isServicesDropdownOpen2) {
      requestAnimationFrame(() => {
        updatePosition();
        setTimeout(updatePosition, 0);
      });
      window.addEventListener("resize", updatePosition);
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [isServicesDropdownOpen2, isScrolled]);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      
      if (
        isMobile &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
      if (
        isMobile &&
        servicesDropdownRef2.current &&
        !servicesDropdownRef2.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen2(false);
      }
    };

    if (isServicesDropdownOpen && isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    if (isServicesDropdownOpen2 && isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen, isMobile, isServicesDropdownOpen2]);

  
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      if (closeTimeoutRef2.current) {
        clearTimeout(closeTimeoutRef2.current);
      }
    };
  }, []);

  
  const getServiceIcon = (slug: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "brand-identity": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      "marketing-advertising": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 11c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V11z" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      "digital-web": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      "motion-video": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      print: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
      ),
      "illustration-artwork": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      "ebooks-digital-report": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      presentations: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="14" rx="2" ry="2" />
          <line x1="9" y1="21" x2="15" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      "product-packaging": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      "apparel-merchandise": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 7h16M4 7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
      ),
      "environmental-event": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
      "corporate-internal": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
        </svg>
      ),
    };
    return (
      iconMap[slug] || (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
    );
  };

  
  const getServicesMenuIcon = (slug: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "web-development": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      "content-writing": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      "social-media-marketing": (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    };
    return (
      iconMap[slug] || (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
    );
  };

  return (
    <>
      <header
        className={`${
          isScrolled ? "fixed top-4" : "relative md:absolute md:top-17"
        } left-0 right-0 z-100 flex items-center justify-center w-full pb-4 bg-transparent md:bg-transparent transition-transform duration-300 ease-in-out overflow-visible`}
        style={{
          willChange: "transform",
          transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Container maxWidth="xl" className="px-0 overflow-visible">
          <nav
            className="headerNav flex items-center justify-between w-full rounded-xl md:rounded-2xl px-4 md:px-6 
            md:py-3  bg-[#1c1949] border border-[#2f2a63] relative overflow-visible"
            style={{ minHeight: "64px" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex flex-col relative">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src={COMPANY_INFO.logo}
                    alt="Logo"
                    width={140}
                    height={40}
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                    className="headerLogo"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 flex-1 justify-center relative z-50">
              {NAVIGATION_LINKS.map((link, index) => {
                
                if (link.label === "Home") {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`text-white font-medium hover:text-[#0fdac2] transition-colors cursor-pointer ${
                        isActive(link.href) ? "active text-[#0fdac2]" : ""
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                }
                
                if (link.label === "Designer") {
                  return (
                    <React.Fragment key={`designer-with-services-${link.href}`}>
                      <a
                        href={link.href}
                        className={`text-white font-medium hover:text-[#0fdac2] transition-colors cursor-pointer ${
                          isActive(link.href) ? "active text-[#0fdac2]" : ""
                        }`}
                      >
                        {link.label}
                      </a>
                      <div
                        key="services-dropdown"
                        className="relative"
                        onMouseEnter={() => {
                          if (closeTimeoutRef2.current) {
                            clearTimeout(closeTimeoutRef2.current);
                            closeTimeoutRef2.current = null;
                          }
                          setIsServicesDropdownOpen2(true);
                          if (dropdownButtonRef2.current) {
                            const rect =
                              dropdownButtonRef2.current.getBoundingClientRect();
                            const topPosition = isScrolled
                              ? rect.bottom + 16
                              : rect.bottom + window.scrollY + 16;
                            setDropdownPosition2({
                              top: topPosition,
                              left: rect.left + rect.width / 2,
                            });
                          }
                        }}
                        onMouseLeave={() => {
                          closeTimeoutRef2.current = setTimeout(() => {
                            setIsServicesDropdownOpen2(false);
                          }, 150);
                        }}
                      >
                        <button
                          ref={dropdownButtonRef2}
                          className={`text-white font-medium hover:text-[#0FDAC2] transition-colors flex items-center 
                            justify-center gap-1 cursor-pointer ${
                            servicesMenuItems.some((item) =>
                              pathname?.startsWith(item.href)
                            )
                              ? "active text-[#0FDAC2]"
                              : ""
                          }`}
                        >
                          Services
                          <svg
                            className={`w-[0.85rem] h-[0.85rem] mt-[0.3rem] transition-transform ${
                              isServicesDropdownOpen2 ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {typeof window !== "undefined" &&
                          isServicesDropdownOpen2 &&
                          createPortal(
                            <div
                              ref={servicesDropdownRef2}
                              className="fixed w-[280px] bg-[#050321] border border-[#26234fa8] rounded-xl shadow-2xl transition-all duration-200 opacity-100 visible pointer-events-auto"
                              style={{
                                zIndex: 99999,
                                top: `${dropdownPosition2.top}px`,
                                left: `${dropdownPosition2.left}px`,
                                transform: "translateX(-50%)",
                                paddingTop: "12px",
                              }}
                              onMouseEnter={() => {
                                if (closeTimeoutRef2.current) {
                                  clearTimeout(closeTimeoutRef2.current);
                                  closeTimeoutRef2.current = null;
                                }
                                setIsServicesDropdownOpen2(true);
                              }}
                              onMouseLeave={() => {
                                closeTimeoutRef2.current = setTimeout(() => {
                                  setIsServicesDropdownOpen2(false);
                                }, 150);
                              }}
                            >
                              <div
                                className="p-4"
                                style={{ marginTop: "-12px" }}
                              >
                                <div className="space-y-1">
                                  {servicesMenuItems.map((item) => {
                                    const isActive = pathname?.startsWith(
                                      item.href
                                    );
                                    return (
                                      <Link
                                        key={item.slug}
                                        href={item.href}
                                        onClick={() =>
                                          setIsServicesDropdownOpen2(false)
                                        }
                                        className={`group flex items-center gap-3 py-3 px-4 hover:bg-[#2f2a63]/30 transition-all rounded-lg ${
                                          isActive ? "bg-[#2f2a63]/40" : ""
                                        }`}
                                      >
                                        <div
                                          className={`flex-shrink-0 transition-colors group-hover:text-[#0FDAC2] group-hover:opacity-100 ${
                                            isActive
                                              ? "text-[#0FDAC2]"
                                              : "text-[#643bff] opacity-70"
                                          }`}
                                        >
                                          {getServicesMenuIcon(item.slug)}
                                        </div>
                                        <div
                                          className={`font-semibold text-sm ${
                                            isActive
                                              ? "text-[#0fdac2]"
                                              : "text-white"
                                          }`}
                                        >
                                          {item.label}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>,
                            document.body
                          )}
                      </div>
                    </React.Fragment>
                  );
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-white font-medium hover:text-[#0fdac2] transition-colors cursor-pointer ${
                      isActive(link.href) ? "active text-[#0fdac2]" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/roi-calculator"
                className="text-sm border border-[#2f2a63] bg-[#05032173] rounded-lg px-3 py-2 me-2 text-white font-medium hover:text-[#0fdac2] transition-colors"
              >
                ROI Calculator
              </Link>
              <Button href="/contact-us" variant="green" iconPosition="right">
                Hire Your Team
              </Button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 z-101 relative"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </nav>
        </Container>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-99 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[#0a0a1a] border-r border-[#1a1a2e]/50 md:hidden z-1000 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-[#1a1a2e]/50">
            <div
              className="flex flex-col relative"
              style={{ width: 100, height: 40 }}
            >
              <Link href="/" className="cursor-pointer">
                <Image
                  src={COMPANY_INFO.logo}
                  alt="Logo"
                  width={100}
                  height={40}
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white hover:text-[#0fdac2] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col flex-1 px-4 py-6 gap-4 overflow-y-auto">
            
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium hover:text-[#0fdac2] transition-colors py-2 ${
                isActive("/") ? "text-[#0fdac2]" : "text-white"
              }`}
            >
              Home
            </Link>
            <div className="mb-2">
              <Link href="/designer">
              <button
                className={`text-base font-medium hover:text-[#0fdac2] transition-colors py-2 w-full text-left flex items-center justify-between ${
                  isServicePage() ? "text-[#0fdac2]" : "text-white"
                }`}
              >
                Designer
              </button>
              </Link>
            </div>
            <div className="mb-2">
              <button
                onClick={() =>
                  setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)
                }
                className={`text-base font-medium hover:text-[#0fdac2] transition-colors py-2 w-full text-left flex items-center justify-between ${
                  servicesMenuItems.some((item) =>
                    pathname?.startsWith(item.href)
                  )
                    ? "text-[#0fdac2]"
                    : "text-white"
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isMobileServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isMobileServicesDropdownOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {servicesMenuItems.map((item) => {
                    const isActiveService = pathname?.startsWith(item.href);
                    return (
                      <Link
                        key={item.slug}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesDropdownOpen(false);
                        }}
                        className={`group flex items-center gap-3 py-2 hover:text-[#0fdac2] transition-colors ${
                          isActiveService ? "text-[#0fdac2]" : "text-gray-400"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 transition-colors group-hover:text-[#0FDAC2] group-hover:opacity-100 ${
                            isActiveService
                              ? "text-[#0fdac2]"
                              : "text-[#643bff] opacity-70"
                          }`}
                        >
                          {getServicesMenuIcon(item.slug)}
                        </div>
                        <div
                          className={`font-medium text-sm ${
                            isActiveService ? "text-[#0fdac2]" : "text-white"
                          }`}
                        >
                          {item.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            {NAVIGATION_LINKS.filter((link) => link.label !== "Home" && link.label !== "Designer").map(
              (link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium hover:text-[#0fdac2] transition-colors py-2 ${
                    isActive(link.href) ? "text-[#0fdac2]" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              href="/roi-calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-bold border-none bg-transparent py-2 text-[#0fdac2]"
            >
              ROI Calculator
            </Link>
            <div className="pt-4">
              <Button
                href="/contact-us"
                variant="green"
                size="md"
                iconPosition="right"
                className="w-full text-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Your Team
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isOfferPopupOpen && (
        <OfferPopup />
      )}
    </>
  );
}