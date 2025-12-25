"use client";

import { MessageCircle, Clock, Banknote, Building } from "./icons";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { objectionsData } from "../../data/FlippaPageData";
import Container from "../../components/Container";

const iconMap: Record<string, typeof Clock> = {
  MessageCircle,
  Clock,
  Banknote,
  Building,
};

export default function ObjectionsSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 hidden sm:block"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 218, 194, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(15, 218, 194, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <Container maxWidth="xl" className="relative z-10">
        <MotionDiv className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[var(--color-primary)] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Common Questions
          </span>
          <div className="sectionHeading">
            <h2>
              Still on the Fence?{" "}
              <span className="text-[var(--color-primary)]">Let's Address That.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-white/80">
            These are the concerns every business owner has. Here's why they shouldn't stop you.
          </p>
        </MotionDiv>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {objectionsData.objections.map((objection, index) => {
            const IconComponent = iconMap[objection.question.split(" ")[0] === "90" ? "Clock" : "MessageCircle"] || MessageCircle;
            return (
              <StaggerItem key={objection.question} delay={index * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[var(--color-purple)]/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--color-purple)]/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-purple)]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3 italic">
                        {objection.question}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
                        {objection.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}

