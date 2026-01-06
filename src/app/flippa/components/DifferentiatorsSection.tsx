"use client";

import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { differentiatorsData } from "../../data/FlippaPageData";
import Container from "../../components/Container";

export default function DifferentiatorsSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)] relative overflow-hidden blogStarsBackground">
      <div
        className="absolute inset-0 opacity-30 hidden sm:block"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 218, 194, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(11, 49, 45, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <Container maxWidth="xl" className="relative z-10">
        <MotionDiv className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="sectionHeading">
            <h2>
              {differentiatorsData.title.main}{" "}
              <span className="text-[var(--color-primary)]">
                {differentiatorsData.title.highlight}
              </span>
            </h2>
            <p className="mt-3">{differentiatorsData.description}</p>
          </div>
        </MotionDiv>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {differentiatorsData.items.map((item, index) => {
            return (
              <StaggerItem key={item.title} delay={index * 0.1}>
                <div className="group relative bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[var(--color-purple)]/50 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[50%] bg-[#2e2277] flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                    <img src={item.icon} alt={item.title} className="max-w-6" />
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base">{item.description}</p>

                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-[var(--color-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
