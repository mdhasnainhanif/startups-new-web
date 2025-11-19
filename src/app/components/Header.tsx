"use client";

import { useState, useEffect } from "react";
import { COMPANY_INFO, NAVIGATION_LINKS } from "../constants";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import { ArrowRightIcon } from "./icons";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      // Only apply fixed on mobile
      if (window.innerWidth < 768) {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50); // Fixed after 50px scroll
      } else {
        setIsScrolled(false); // Desktop always false
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      {/* Mobile Header - Fixed when scrolled on mobile only */}
      <header
        className={`${
          isScrolled && isMobile
            ? "fixed top-0"
            : "relative md:absolute md:top-12"
        } left-0 right-0 z-100 flex items-center justify-center w-full py-4 bg-transparent md:bg-transparent transition-all duration-300`}
        style={{ willChange: "transform" }}
      >
        <Container maxWidth="xl" className="px-0">
          <nav
            className="flex items-center justify-between w-full rounded-2xl px-4 md:px-6 py-4 bg-[#02001c] backdrop-blur-md shadow-xl border border-[#4e4989] relative"
            style={{ minHeight: "64px" }}
          >
            <div className="flex items-center gap-2">
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
            </div>

            <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-[#0fdac2] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="hidden md:flex">
              <Button
                href="#"
                variant="green"
                icon={<ArrowRightIcon style={{ fill: "#000" }} />}
                iconPosition="right"
              >
                Book A Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 z-[101] relative"
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
          className="fixed inset-0 bg-black/50 z-[99] md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[#0a0a1a] border-r border-[#1a1a2e]/50 md:hidden z-[100] transform transition-transform duration-300 ease-in-out ${
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
                className="text-white text-base font-medium hover:text-[#0fdac2] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-auto pt-4">
              <Button
                href="/demo"
                variant="green"
                size="md"
                icon="→"
                iconPosition="right"
                className="w-full"
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
