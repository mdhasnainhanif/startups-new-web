"use client";

import { AlertCircle, TrendingDown, Clock, Users } from "./icons";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { problemData } from "../../data/FlippaPageData";
import Container from "../../components/Container";

const iconMap: Record<string, typeof TrendingDown> = {
  TrendingDown,
  AlertCircle,
  Clock,
  Users,
};

export default function ProblemSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)] problemBeforeBackground">
      <Container maxWidth="xl">
        <MotionDiv className="max-w-3xl mx-auto text-center mb-16">
          <div className="sectionHeading">
            <h2>
              {problemData.title.main}{" "}
              <span className="text-[var(--color-primary)]">{problemData.title.highlight}</span>{" "}
              {problemData.title.suffix}
            </h2>
          </div>
          <p className="text-base md:text-lg text-white/80">
            {problemData.description}
          </p>
        </MotionDiv>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {problemData.problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon] || TrendingDown;
            return (
              <StaggerItem key={problem.title} delay={index * 0.1}>
                <div className="group p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-[var(--color-purple)]/50 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-[50%] bg-[#2e2277] flex items-center justify-center mb-3 md:mb-4 transition-colors">
                    <img src={problem.icon} alt={problem.title} className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm">
                    {problem.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        
        <MotionDiv delay={0.3} className="max-w-2xl mx-auto text-center mt-10 md:mt-16">
          <p className="text-base md:text-lg text-white/80">
            {problemData.bottomText.split("undervalued and unsellable")[0]}
            <span className="text-white font-semibold">undervalued and unsellable</span>
            {problemData.bottomText.split("undervalued and unsellable")[1]}
          </p>
        </MotionDiv>
      </Container>
    </section>
  );
}

