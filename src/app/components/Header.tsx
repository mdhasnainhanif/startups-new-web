"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { COMPANY_INFO, NAVIGATION_LINKS } from "../constants";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllServices } from "../data/ServicesPageData";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const services = getAllServices();

   // Check if a link is active
   const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  // Check if current path is a service page
  const isServicePage = () => {
    if (!pathname) return false;
    return services.some(service => pathname.startsWith(`/${service.slug}`));
  };

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      // Close dropdown on significant scroll (desktop only, and only if dropdown is open)
      // Only close if scroll is more than 5px to avoid closing on tiny movements
      if (!isMobile && isServicesDropdownOpen && scrollDelta > 5) {
        setIsServicesDropdownOpen(false);
      }

      // Apply fixed when scrolled
      setIsScrolled(currentScrollY > 50);

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
      window.removeEventListener("resize", checkMobile);
    };
  }, [lastScrollY, isMobile, isServicesDropdownOpen]);

  // Update dropdown position
  useEffect(() => {
    const updatePosition = () => {
      if (dropdownButtonRef.current && isServicesDropdownOpen) {
        const rect = dropdownButtonRef.current.getBoundingClientRect();
        // When header is fixed, getBoundingClientRect() returns viewport coordinates
        // When header is relative, we need to add scrollY
        const topPosition = isScrolled 
          ? rect.bottom + 12  // Fixed header - use viewport coordinates
          : rect.bottom + window.scrollY + 12;  // Relative header - add scroll
        
        setDropdownPosition({
          top: topPosition,
          left: rect.left + rect.width / 2,
        });
      }
    };

    if (isServicesDropdownOpen) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        updatePosition();
        // Also update after a small delay to ensure layout is complete
        setTimeout(updatePosition, 0);
      });
      // Only listen to resize, not scroll (we close on scroll anyway)
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [isServicesDropdownOpen, isScrolled]);

  // Close dropdown when clicking outside (only for mobile/click interactions)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only handle click outside on mobile or if dropdown was opened by click
      if (
        isMobile &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen && isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen, isMobile]);

  // Service icons mapping
  const getServiceIcon = (slug: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "brand-identity": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      "marketing-advertising": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 11c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V11z" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      "digital-web": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      "motion-video": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      "print": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
      ),
      "illustration-artwork": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      "ebooks-digital-report": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      "presentations": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="14" rx="2" ry="2" />
          <line x1="9" y1="21" x2="15" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      "product-packaging": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      "apparel-merchandise": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
      ),
      "environmental-event": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
      "corporate-internal": (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
        </svg>
      ),
    };
    return iconMap[slug] || (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  };

  return (
    <>
      {/* Header - Fixed when scrolled */}
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
                    priority
                    style={{ objectFit: "contain" }}
                    className="headerLogo"
                  />
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 flex-1 justify-center relative z-50">
              {NAVIGATION_LINKS.map((link, index) => {
                // Add Services Dropdown after Home (first item)
                if (index === 0 && link.label === "Home") {
                  return (
                    <>
                      <a
                        key={link.href}
                        href={link.href}
                        className={`text-white font-medium hover:text-[#0fdac2] transition-colors ${
                          isActive(link.href) ? "text-[#0fdac2]" : ""
                        }`}
                        style={
                          isActive(link.href)
                            ? {
                                textShadow:
                                  "-9px 0 17px #00dbc1e6, 0px 6px 8px #0fdac287, 0 0 56px #0fdac2cc",
                              }
                            : {}
                        }
                      >
                        {link.label}
                      </a>
                      {/* Services Dropdown */}
                      <div 
                        key="services-dropdown"
                        className="relative" 
                        onMouseEnter={() => {
                          setIsServicesDropdownOpen(true);
                          // Immediately calculate position when opening
                          if (dropdownButtonRef.current) {
                            const rect = dropdownButtonRef.current.getBoundingClientRect();
                            const topPosition = isScrolled 
                              ? rect.bottom + 12
                              : rect.bottom + window.scrollY + 12;
                            setDropdownPosition({
                              top: topPosition,
                              left: rect.left + rect.width / 2,
                            });
                          }
                        }}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        <button
                          ref={dropdownButtonRef}
                          className={`text-white font-medium hover:text-[#0fdac2] transition-colors flex items-center justify-center gap-1 ${
                            isServicePage() ? "text-[#0fdac2]" : ""
                          }`}
                          style={
                            isServicePage()
                              ? {
                                  textShadow:
                                    "-9px 0 17px #00dbc1e6, 0px 6px 8px #0fdac287, 0 0 56px #0fdac2cc",
                                }
                              : {}
                          }
                        >
                          Design
                          <svg
                            className={`w-[0.85rem] h-[0.85rem] mt-[0.3rem] transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {typeof window !== 'undefined' && isServicesDropdownOpen && createPortal(
                          <div 
                            ref={servicesDropdownRef}
                            className="fixed w-[1000px] bg-[#050321] border border-[#26234fa8] rounded-xl shadow-2xl transition-all duration-200 opacity-100 visible pointer-events-auto"
                            style={{ 
                              zIndex: 99999,
                              top: `${dropdownPosition.top}px`,
                              left: `${dropdownPosition.left}px`,
                              transform: 'translateX(-30%)',
                              maxHeight: 'calc(100vh - 100px)',
                              overflowY: 'auto',
                            }}
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                          >
                            <div className="p-6">
                              <h3 className="text-white text-lg font-semibold mb-6">Solutions & Services</h3>
                              <div className="grid grid-cols-4 gap-0">
                                {services && services.length > 0 ? (
                                  services.map((service, index) => {
                                    const isLastRow = index >= services.length - 2;
                                    const isLeftColumn = index % 2 === 0;
                                    const isActive = pathname?.startsWith(`/${service.slug}`);
                                    return (
                                      <Link
                                        key={service.slug}
                                        href={`/${service.slug}`}
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                        className={`flex items-start gap-3 py-2 px-4 hover:bg-[#2f2a63]/30 transition-all rounded-lg ${
                                          isActive ? 'bg-[#2f2a63]/40' : ''
                                        } ${
                                          !isLastRow ? "" : ""
                                        } ${isLeftColumn ? "pr-3" : "pl-3"}`}
                                      >
                                        <div className={`flex-shrink-0 mt-0.5 ${
                                          isActive ? 'text-[#0fdac2]' : 'text-[#643bff] opacity-70'
                                        }`}>
                                          {getServiceIcon(service.slug)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className={`font-semibold text-sm mb-1 ${
                                            isActive ? 'text-[#0fdac2]' : 'text-white'
                                          }`}>
                                            {service.title || 'Service Name'}
                                          </div>
                                          <div className="text-gray-400 text-xs leading-relaxed">
                                            {service.tagline || 'Service description'}
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })
                                ) : (
                                  <div className="col-span-2 text-white text-center py-4">
                                    No services available
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>,
                          document.body
                        )}
                      </div>
                    </>
                  );
                }
                // Render other links normally
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-white font-medium hover:text-[#0fdac2] transition-colors ${
                      isActive(link.href) ? "text-[#0fdac2]" : ""
                    }`}
                    style={
                      isActive(link.href)
                        ? {
                            textShadow:
                              "-9px 0 17px #00dbc1e6, 0px 6px 8px #0fdac287, 0 0 56px #0fdac2cc",
                          }
                        : {}
                    }
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="hidden md:flex items-center gap-5">
              <Link href="/roi-calculator" className="text-white text-sm border border-[#2f2a63] bg-[#05032173] rounded-lg px-3 py-2 me-2 text-[#969696] font-medium hover:text-[#0fdac2] transition-colors">
                {/* <span className="bg-[#2f2a63] font-light text-xs border border-[#525252] rounded-lg px-2 py-1 me-2 text-[#969696]">
                  New
                </span> */}
                ROI Calculator
              </Link>
              <Button
                href="/contact-us"
                variant="green"
                iconPosition="right"
              >
                Hire Your Team
              </Button>
            </div>

            {/* Mobile Menu Button */}
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

      {/* Mobile Sidebar Menu - Slides from left */}
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-99 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[#0a0a1a] border-r border-[#1a1a2e]/50 md:hidden z-1000 transform transition-transform duration-300 ease-in-out ${ 
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
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
                  priority
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

          {/* Sidebar Content */}
          <div className="flex flex-col flex-1 px-4 py-6 gap-4 overflow-y-auto">
            {/* Mobile Services Dropdown */}
            <div className="mb-2">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="text-white text-base font-medium hover:text-[#0fdac2] transition-colors py-2 w-full text-left flex items-center justify-between"
              >
                Solutions & Services
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l border-[#2f2a63]">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                      className="block text-gray-400 text-sm hover:text-[#0fdac2] transition-colors py-1"
                    >
                      <div className="font-medium text-white">{service.title}</div>
                      <div className="text-xs">{service.tagline}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-white text-base font-medium hover:text-[#0fdac2] transition-colors py-2 ${
                  isActive(link.href) ? "text-[#0fdac2]" : ""
                }`}
                style={
                  isActive(link.href)
                    ? {
                        textShadow:
                          "-9px 0 17px #00dbc1e6, 0px 6px 8px #0fdac287, 0 0 56px #0fdac2cc",
                      }
                    : {}
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className=" pt-4">
              <Button
                href="/demo"
                variant="green"
                size="md"
                icon="→"
                iconPosition="right"
                className="w-full text-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book A Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
