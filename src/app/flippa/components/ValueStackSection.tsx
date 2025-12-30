"use client";

import { Check, Sparkles } from "./icons";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { valueStackData } from "../../data/FlippaPageData";
import Container from "../../components/Container";
import Image from "next/image";

export default function ValueStackSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-transparent opacity-40" />

      <Container maxWidth="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <MotionDiv variant="fadeLeft">
            <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-4 block">
              {valueStackData.label}
            </span>
            <div className="sectionHeading">
              <h2>
                {valueStackData.title.main}{" "}
                <span className="text-[var(--color-primary)]">{valueStackData.title.highlight}</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8">
              {valueStackData.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-red-100 border border-red-300 rounded-full text-red-600 text-sm md:text-base font-medium mb-6 md:mb-8">
              <Sparkles className="w-4 h-4" />
              {valueStackData.urgencyBadge}
            </div>
          </MotionDiv>

          
          <MotionDiv variant="fadeRight" delay={0.2}>
            <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-bl-full blur-2xl" />

              <StaggerContainer className="space-y-3 md:space-y-4 relative z-10">
                {valueStackData.valueItems.map((item, index) => {
                  return (
                    <StaggerItem key={item.item} delay={index * 0.1}>
                      <div className="flex items-center justify-between py-2 md:py-3 border-b border-white/10 last:border-0">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="mt-1">
                            <Image src="/assets/images/tick2.webp" alt="Check" width={25} height={20} className="w-[20px] h-[20px]" />
                          </div>
                          <span className="text-sm md:text-base text-white">
                            {item.item}
                          </span>
                        </div>
                        <span className="text-xs md:text-base text-white/70 font-medium shrink-0 ml-2">
                          {item.value}
                        </span>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t-2 border-[var(--color-purple)]/30">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <span className="text-base md:text-lg font-semibold text-white">
                    Total Value
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-white/60 line-through">
                    ${valueStackData.totalValue.toLocaleString()}
                  </span>
                </div>
                <div className="bg-[var(--color-purple)]/10 border border-[var(--color-purple)]/20 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                  <div className="text-xs md:text-sm text-[var(--color-purple)] mb-1">
                    {valueStackData.investment.title}
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-white">
                    {valueStackData.investment.text}
                  </div>
                  <div className="text-xs md:text-sm text-white/70 mt-2">
                    {valueStackData.investment.note}
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

