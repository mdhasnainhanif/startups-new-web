"use client";

import { Check, ArrowRight } from "./icons";
import Link from "next/link";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { solutionData } from "../../data/FlippaPageData";
import Button from "../../components/Button";
import Container from "../../components/Container";

export default function SolutionSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent opacity-50" />

      <Container maxWidth="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <MotionDiv variant="fadeLeft">
            <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-4 block">
              {solutionData.label}
            </span>
            <div className="sectionHeading">
              <h2>
                {solutionData.title.main}{" "}
                <span className="text-[var(--color-primary)]">{solutionData.title.highlight}</span>{" "}
                {solutionData.title.suffix}
              </h2>
            </div>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8">
              {solutionData.description}
            </p>

            {/* Solution List */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {solutionData.solutions.map((solution, index) => {
                return (
                  <StaggerItem key={solution.title} delay={index * 0.1}>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-purple)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[var(--color-purple)]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{solution.title}</h4>
                        <p className="text-sm text-white/70">{solution.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <Button variant="primary" size="lg">
              <Link href={solutionData.cta.link} className="group flex items-center gap-2">
                {solutionData.cta.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </MotionDiv>

          {/* Right Visual */}
          <MotionDiv variant="fadeRight" delay={0.2}>
            <div className="aspect-auto md:aspect-square bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-[var(--color-purple)]/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full blur-xl" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Before/After Comparison */}
                  <div className="bg-white/5 border border-red-300/50 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-white/70 font-medium">BEFORE</div>
                      <div className="text-xs text-red-400 font-medium">The Problem</div>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white mb-2">
                      {solutionData.beforeAfter.before.value}
                    </div>
                    <ul className="text-xs md:text-sm text-white/70 space-y-1 mb-3 md:mb-4">
                      {solutionData.beforeAfter.before.points.map((point, index) => (
                        <li key={index}>• {point}</li>
                      ))}
                    </ul>
                    <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${solutionData.beforeAfter.before.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center py-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white rotate-90" />
                    </div>
                  </div>

                  <div className="bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)]/30 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <div className="text-xs md:text-sm text-[var(--color-primary)] font-medium">
                        {solutionData.beforeAfter.after.title}
                      </div>
                      <div className="text-[10px] md:text-xs text-[var(--color-primary)] font-medium">
                        {solutionData.beforeAfter.after.subtitle}
                      </div>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white mb-2">
                      {solutionData.beforeAfter.after.value}
                    </div>
                    <ul className="text-xs md:text-sm text-white/70 space-y-1 mb-3 md:mb-4">
                      {solutionData.beforeAfter.after.points.map((point, index) => (
                        <li key={index} className="text-white">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-primary)] rounded-full"
                        style={{ width: `${solutionData.beforeAfter.after.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

