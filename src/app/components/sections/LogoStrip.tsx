"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { LogoStripData } from "../../data/webDevelopment";

interface LogoStripProps {
  data: LogoStripData;
}

export function LogoStrip({ data }: LogoStripProps) {
  return (
    <Section variant="darker" className="sectionPadding border-y border-[#2f2a63]/50">
      <Container>
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
            {data.title}
          </p>
          <div className="sectionHeading">
            <h2>
              {data.subtitle}
            </h2>
          </div>
          <p className="text-white/70">
            {data.description}
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {data.logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-10 px-4 opacity-50 hover:opacity-80 transition-opacity"
            >
              <span className="font-bold text-lg text-white/70 tracking-wide">{logo}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

