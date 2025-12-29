"use client";

import Link from "next/link";
import { ArrowRight, Play } from "./icons";
import { MotionDiv } from "./motion";
import { heroData } from "../../data/FlippaPageData";
import Button from "../../components/Button";
import Container from "../../components/Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center heroBannerPaddingTop bg-[var(--color-dark)] overflow-hidden py-24 md:py-16 lg:py-28 pt-28 lg:pt-48">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[var(--color-primary)]/30 via-[var(--color-dark)] to-[var(--color-purple)]/30 animate-pulse" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 218, 194, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(15, 218, 194, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[var(--color-primary)]/20 via-transparent to-transparent" />

      {/* Floating Shapes */}
      <div className="hidden md:block absolute top-20 left-[10%] w-24 h-24 border border-[var(--color-primary)]/20 rounded-2xl animate-bounce opacity-40 rotate-12" />
      <div
        className="hidden md:block absolute top-40 right-[15%] w-16 h-16 border border-[var(--color-primary)]/30 rounded-full animate-bounce opacity-50"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="hidden md:block absolute bottom-32 left-[20%] w-20 h-20 border border-[var(--color-primary)]/15 rounded-xl animate-bounce opacity-30 -rotate-6"
        style={{ animationDelay: "2s" }}
      />

      {/* Large Rotating Ring */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[var(--color-primary)]/5 rounded-full animate-spin-slow pointer-events-none" />
      <div
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[var(--color-primary)]/5 rounded-full animate-spin-slow pointer-events-none"
        style={{ animationDirection: "reverse", animationDuration: "30s" }}
      />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-[var(--color-primary)]/15 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <Container maxWidth="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pain Hook */}
          <MotionDiv
            delay={0}
            className="text-base md:text-lg text-[var(--text-muted)] mb-3 md:mb-4 px-2"
          >
            {heroData.painHook}
          </MotionDiv>

          {/* Badge */}
          <MotionDiv
            delay={0.1}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-purple)]/10 border border-[var(--color-primary)]/20 rounded-full text-xs md:text-sm text-[var(--color-primary)] mb-6 md:mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
            </span>
            <span className="hidden sm:inline">{heroData.badge.text} </span>
            {heroData.badge.subtext}
          </MotionDiv>

          {/* Headline */}
          <MotionDiv delay={0.2} className="px-2 mb-4 md:mb-6">
            <div className="sectionHeading">
              <h1>
                {heroData.headline.main}{" "}
                <span className="text-[var(--color-primary)]">
                  {heroData.headline.highlight}
                </span>{" "}
                <span className="hidden sm:inline">{heroData.headline.suffix}</span>
                <span className="sm:hidden">{heroData.headline.mobileSuffix}</span>
              </h1>
            </div>
          </MotionDiv>

          {/* Subheadline */}
          <MotionDiv
            delay={0.3}
            className="text-base md:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-4 md:mb-6 px-4"
          >
            {heroData.subheadline}
          </MotionDiv>

          {/* Micro Guarantee */}
          <MotionDiv
            delay={0.35}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-white mb-6 md:mb-10"
          >
            <span className="text-[var(--color-primary)] font-semibold">
              {heroData.guarantee.text}
            </span>
            <span className="hidden sm:inline">
              {heroData.guarantee.description}
            </span>
            <span className="sm:hidden">
              {heroData.guarantee.mobileDescription}
            </span>
          </MotionDiv>

          {/* CTAs */}
          <MotionDiv
            delay={0.4}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto group flex items-center justify-center"
            >
              <Link href={heroData.cta.primary.link} className="flex items-center gap-2">
                {heroData.cta.primary.text}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto group flex items-center justify-center"
            >
              <Link href={heroData.cta.secondary.link} className="flex items-center gap-2">
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                {heroData.cta.secondary.text}
              </Link>
            </Button>
          </MotionDiv>

          {/* Social Proof */}
          <MotionDiv
            delay={0.5}
            className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 max-w-2xl mx-auto px-4"
          >
            <p className="text-xs md:text-sm text-[var(--text-muted)] mb-3 md:mb-4">
              {heroData.socialProof.title}
            </p>
            <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center">
              {heroData.socialProof.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[var(--text-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
