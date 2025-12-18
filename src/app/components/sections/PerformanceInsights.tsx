"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { PerformanceInsightsData } from "../../data/webDevelopment";

interface PerformanceInsightsProps {
  data: PerformanceInsightsData;
}

export function PerformanceInsights({ data }: PerformanceInsightsProps) {
  return (
    <Section variant="darker" className="sectionPadding">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="sectionHeading">
              <h2>
                {data.heading.text}
                {data.heading.highlight && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                    {data.heading.highlight}
                  </span>
                )}
              </h2>
            </div>
            <p className="text-lg text-white/80 mt-6 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="bg-[#1c1949] rounded-xl p-8 border border-[#2f2a63]">
            <h3 className="text-xl font-semibold text-white mb-6">
              U.S. Business Website Performance Insights:
            </h3>
            <ul className="space-y-4">
              {data.insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">•</span>
                  </div>
                  <span className="text-white/90 text-lg">{insight.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

