"use client";

import { Shield, CheckCircle, Clock, Award } from "./icons";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { guaranteeData } from "../../data/FlippaPageData";
import Container from "../../components/Container";

const iconMap: Record<string, typeof Shield> = {
  Shield,
  Clock,
  Award,
};

export default function GuaranteeSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 218, 194, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(15, 218, 194, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent opacity-50" />

      <Container maxWidth="xl" className="relative z-10">
        <MotionDiv className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-4 block">
            {guaranteeData.label}
          </span>
          <div className="sectionHeading">
            <h2>
              Our <span className="text-[var(--color-primary)]">{guaranteeData.title.highlight}</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-white/80">
            {guaranteeData.description}
          </p>
        </MotionDiv>

        <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {guaranteeData.guarantees.map((guarantee, index) => {
            const IconComponent = iconMap[guarantee.icon] || Shield;
            return (
              <StaggerItem key={guarantee.title} delay={index * 0.1}>
                <div className="bg-white/5 border-2 border-[var(--color-purple)]/30 hover:border-[var(--color-purple)] rounded-xl md:rounded-2xl p-5 md:p-8 text-center transition-all duration-300 h-full shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[var(--color-purple)]/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-purple)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80">
                    {guarantee.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <MotionDiv delay={0.4} className="mt-8 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-primary)]" />
            <span className="text-sm md:text-base text-white font-medium">
              {guaranteeData.trustBadge}
            </span>
          </div>
        </MotionDiv>
      </Container>
    </section>
  );
}

