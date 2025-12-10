"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { ProcessCardsData } from "../../data/webDevelopment";

interface ProcessCardsProps {
  data: ProcessCardsData;
}

export function ProcessCards({ data }: ProcessCardsProps) {
  return (
    <Section variant="dark" className="sectionPadding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 py-16">
          <div className="sectionHeading">
            <h2>
              {data.heading.text}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                {data.heading.highlight}
              </span>
            </h2>
          </div>
          <p className="text-lg text-white/80">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
          {data.steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63] group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/25 transition-colors flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <span className="text-4xl font-bold text-primary/30 font-display">
                  {step.number}
                </span>
              </div>

                <h3 className="font-semibold text-lg text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {step.outcome}
                </p>
              </div>
            ))}
        </div>
      </Container>
    </Section>
  );
}

