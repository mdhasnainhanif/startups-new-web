"use client";

import { useState, useEffect } from "react";
import { COMPANY_INFO, NAVIGATION_LINKS } from "../constants";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

   // Check if a link is active
   const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
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
  }, [lastScrollY]);

  return (
    <>
      {/* Header - Fixed when scrolled */}
      <header
        className={`${
          isScrolled ? "fixed top-4" : "relative md:absolute md:top-17"
        } left-0 right-0 z-100 flex items-center justify-center w-full pb-4 bg-transparent md:bg-transparent transition-transform duration-300 ease-in-out`}
        style={{
          willChange: "transform",
          transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Container maxWidth="xl" className="px-0">
          <nav
            className="headerNav flex items-center justify-between w-full rounded-xl md:rounded-2xl px-4 md:px-6 
            md:py-3  bg-[#1c1949] border border-[#2f2a63] relative"
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

            <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
              {NAVIGATION_LINKS.map((link) => (
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
              ))}
            </div>
            <div className="hidden md:flex items-center gap-5">
              <Link href="/roi-calculator" className="text-white text-sm border border-[#2f2a63] rounded-lg px-3 py-2 me-2 text-[#969696] font-medium hover:text-[#0fdac2] transition-colors">
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
