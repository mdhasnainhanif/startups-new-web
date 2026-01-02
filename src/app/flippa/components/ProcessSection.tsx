"use client";

import { TrendingUp, ArrowUpRight } from "./icons";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { processData } from "../../data/FlippaPageData";
import Container from "../../components/Container";

export default function ProcessSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)]">
      <Container maxWidth="xl">
        {/* Header */}
        <MotionDiv className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-4 block">
            {processData.label}
          </span>
          <div className="sectionHeading">
            <h2>
              {processData.title.main}{" "}
              <span className="text-[var(--color-primary)]">{processData.title.highlight}</span>
            </h2>
          </div>
          <p className="text-lg text-white/80">{processData.description}</p>
        </MotionDiv>

        {/* Value Growth Chart */}
        <MotionDiv delay={0.2} className="max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/5 via-transparent to-[var(--color-primary)]/10" />

            <div className="relative z-10">
              {/* Chart Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[50%] bg-[#2e2277] flex items-center justify-center">
                    <img src="/assets/images/flippa/process/1.svg" alt="Value Growth Timeline" className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-white">
                      Value Growth Timeline
                    </h3>
                    <p className="text-sm text-white/70">90-day transformation journey</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-[var(--color-purple)]">
                    <ArrowUpRight className="w-5 h-5" />
                    <span className="text-2xl lg:text-3xl font-bold">2-5x</span>
                  </div>
                  <p className="text-xs text-white/70">Value Increase</p>
                </div>
              </div>

              {/* Visual Chart */}
              <div className="relative h-32 sm:h-48 lg:h-64 mb-6">
                <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-white/70">
                  <span>5x</span>
                  <span>3x</span>
                  <span>1x</span>
                </div>

                <div className="ml-8 h-full relative">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="border-t border-dashed border-white/20" />
                    ))}
                  </div>

                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-purple)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--color-purple)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 85 Q 10 80, 20 75 T 40 55 T 60 30 T 80 15 L 100 5 L 100 100 L 0 100 Z"
                      fill="url(#growthGradient)"
                    />
                    <path
                      d="M 0 85 Q 10 80, 20 75 T 40 55 T 60 30 T 80 15 L 100 5"
                      fill="none"
                      stroke="var(--color-purple)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                    {processData.phases.map((phase, index) => (
                      <div key={phase.number} className="lg:flex flex-col items-center" style={{ width: "25%" }}>
                        <div
                          className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full border-2 border-white shadow-lg animate-pulse ${index % 2 === 0 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-purple)]'}`}
                          style={{
                            marginBottom: "8px",
                            transform: `translateY(-${phase.valueIncrease * 1.5}px)`,
                          }}
                        />
                        <span className="text-xs lg:text-sm font-semibold text-white">
                          {phase.number}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ml-8 grid grid-cols-4 gap-1 md:gap-2 text-center">
                {processData.phases.map((phase) => (
                  <div key={phase.number}>
                    <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-white truncate">
                      {phase.title}
                    </p>
                    <p className="text-[8px] sm:text-xs text-white/70 hidden sm:block">
                      {phase.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Process Steps */}
        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-[9rem] bottom-0 w-px bg-white/20 hidden md:block h-full max-h-[62rem]" />

          <StaggerContainer className="space-y-8 md:space-y-12">
            {processData.phases.map((phase, index) => (
              <StaggerItem
                key={phase.number}
                delay={index * 0.15}
                className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:shadow-lg">
                    <div className="lg:flex block gap-3 md:gap-4 mb-3 md:mb-4">
                      <span className={`text-2xl md:text-4xl font-bold ${index % 2 === 0 ? 'text-[var(--color-primary)]' : 'text-[var(--color-purple)]'}`}>
                        {phase.number}
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {phase.title}
                        </h3>
                        <span className="text-xs md:text-sm text-white/70">
                          {phase.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
                      {phase.description}
                    </p>
                    <div className="space-y-1.5 md:space-y-2">
                      {phase.deliverables.map((item) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 ${
                            index % 2 === 1 ? "lg:justify-end" : ""
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-purple)]'}`} />
                          <span className="text-sm text-white">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ring-4 ${index % 2 === 0 ? 'bg-[var(--color-primary)] ring-[var(--color-primary)]/20' : 'bg-[var(--color-purple)] ring-[var(--color-purple)]/20'}`} />
                </div>

                <div className="flex-1 hidden lg:block" />
              </StaggerItem>
            ))} 
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}

