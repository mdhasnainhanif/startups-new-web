"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { ExperienceBoxData } from "../../data/webDevelopment";

interface ExperienceBoxProps {
  data: ExperienceBoxData;
}

export function ExperienceBox({ data }: ExperienceBoxProps) {
  return (
    <Section variant="darker" className="sectionPadding">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {data.heading}
            </h2>
          </div>

          <div className="bg-[#1c1949] rounded-xl p-8 border border-[#2f2a63]">
            <ul className="space-y-4">
              {data.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-white/90 text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

