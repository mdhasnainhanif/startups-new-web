"use client";

import Link from "next/link";
import { ArrowRight } from "./icons";
import { MotionDiv } from "./motion";
import { heroData } from "../../data/FlippaPageData";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { useCountUp } from "./use-count-up";
const StatItem = ({ stat, index }: { stat: { value: string; label: string }; index: number }) => {
  const parseValue = (value: string) => {
    if (value.includes("-")) {
      const [start, end] = value.split("-");
      const startNum = parseFloat(start);
      const suffix = end.replace(/[0-9.]/g, "");
      return { start: startNum, end: 2.5, suffix, prefix: "", isRange: false, decimals: 1 };
    }
    if (value.includes("$")) {
      const numStr = value.replace(/[^0-9.]/g, "");
      const num = parseFloat(numStr);
      const prefix = "$";
      const suffix = value.replace(/[$0-9.]/g, "");
      return { start: 0, end: num, suffix, prefix, isRange: false, decimals: 0 };
    }
    const numStr = value.replace(/[^0-9.]/g, "");
    const num = parseFloat(numStr);
    const suffix = value.replace(/[0-9.]/g, "");
    return { start: 0, end: num, suffix, prefix: "", isRange: false, decimals: 0 };
  };
  const parsed = parseValue(stat.value);
  const { ref, formattedValue } = useCountUp({
    end: parsed.end,
    duration: 2000,
    prefix: parsed.prefix,
    suffix: parsed.suffix,
    decimals: parsed.decimals || 0,
  });
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)]">
        {formattedValue}
      </div>
      <div className="text-xs md:text-sm text-white mt-1">
        {stat.label}
      </div>
    </div>
  );
};
const StatsCounter = ({ 
  delay, 
  title, 
  stats 
}: { 
  delay: number; 
  title: string; 
  stats: Array<{ value: string; label: string }> 
}) => {
  return (
    <MotionDiv
      delay={delay}
      className="mt-8 max-w-2xl mx-auto"
    >
      <p className="text-xs md:text-sm text-white mb-3 md:mb-4">
        {title}
      </p>
      <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center">
        {stats.map((stat, index) => (
          <StatItem key={index} stat={stat} index={index} />
        ))}
      </div>
    </MotionDiv>
  );
};
export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center heroBannerPaddingTop heroStarsBackground
     overflow-hidden py-24 md:py-16 lg:py-28 pt-28 lg:pt-48">
      <Container maxWidth="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv
            delay={0}
            className="text-white md:text-lg text-[var(--text-muted)] mb-3 md:mb-4 px-2"
          >
            {heroData.painHook}
          </MotionDiv>
          <MotionDiv
            delay={0.1}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-purple)]/10 border border-[var(--color-primary)]/20 rounded-lg text-xs md:text-sm text-[var(--color-primary)] mb-6 md:mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-lg  bg-[var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-lg h-2 w-2 bg-[var(--color-primary)]"></span>
            </span>
            <span className="hidden sm:inline">{heroData.badge.text} </span>
            {heroData.badge.subtext}
          </MotionDiv>
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
          <MotionDiv
            delay={0.3}
            className="text-white md:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-4 md:mb-6 px-4"
          >
            {heroData.subheadline}
          </MotionDiv>
          <MotionDiv
            delay={0.35}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm text-white mb-6 md:mb-10"
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
          <MotionDiv
            delay={0.4}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <Button
              variant="green"
              size="lg"
              className="w-fit sm:w-auto mx-auto group flex items-center justify-center"
            >
              <Link href={heroData.cta.primary.link} className="flex items-center gap-2">
                {heroData.cta.primary.text}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </MotionDiv>
          <StatsCounter
            delay={0.5}
            title={heroData.socialProof.title}
            stats={heroData.socialProof.stats}
          />
        </div>
      </Container>
    </section>
  );
}