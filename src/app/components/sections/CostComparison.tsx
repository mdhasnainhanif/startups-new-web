"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { CostComparisonData } from "../../data/webDevelopment";

interface CostComparisonProps {
  data: CostComparisonData;
}

export function CostComparison({ data }: CostComparisonProps) {
  return (
    <Section className="sectionPadding">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="sectionHeading">
              <h2>
                {data.heading.part1}
                <br />
                {data.heading.part2}
                <br />
                {data.heading.part3}
              </h2>
            </div>
            <p className="text-lg text-white/80 mt-6">{data.description}</p>
          </div>

          <div className="bg-[#1c1949] rounded-xl p-8 border border-[#2f2a63]">
            <ul className="space-y-4 mb-8">
              {data.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">•</span>
                  </div>
                  <span className="text-white/90 text-lg">{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#2f2a63]">
              <p className="text-white/80 text-lg text-center">
                {data.conclusion}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

