"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "./icons";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { ctaData } from "../../data/FlippaPageData";
import Button from "../../components/Button";
import Container from "../../components/Container";

const benefits = [
  "Free 30-minute strategy call",
  "Business value assessment worth $2,500",
  "Custom 90-day growth roadmap",
  "Zero risk — 100% free, no obligations",
];

export default function CTASection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-3xl" />

      <Container maxWidth="xl" className="relative z-10">
        <MotionDiv variant="scale" className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border-t-2 border-l-2 border-[var(--color-primary)]/30 rounded-tl-2xl sm:rounded-tl-3xl hidden sm:block" />
            <div className="absolute bottom-0 right-0 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 border-b-2 border-r-2 border-[var(--color-primary)]/30 rounded-br-2xl sm:rounded-br-3xl hidden sm:block" />

            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 border border-red-300 rounded-full text-red-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              Only 2 Spots Left This Quarter
            </div>

            <div className="sectionHeading">
              <h2>
                {ctaData.title}{" "}
                <span className="text-[var(--color-purple)]">High-Value Asset?</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {ctaData.description}
            </p>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto text-left">
              {benefits.map((benefit, index) => {
                return (
                  <StaggerItem key={benefit} delay={index * 0.1} className="flex items-center gap-2 text-xs sm:text-sm text-white justify-start text-left">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-[var(--color-purple)]" />
                    {benefit}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="green" size="lg" className="w-full flex items-center justify-center">
                <Link href={ctaData.cta.primary.link} className="group flex items-center gap-2">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="green" size="lg" className="w-full flex items-center justify-center">
                <Link href={ctaData.cta.secondary.link} className="group flex items-center gap-2">
                  View Our Services
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </MotionDiv>
      </Container>
    </section>
  );
}

