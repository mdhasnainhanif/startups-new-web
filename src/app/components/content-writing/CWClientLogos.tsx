"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { ClientLogosData } from "../../data/contentWriting";

interface CWClientLogosProps {
  data: ClientLogosData;
}

export function CWClientLogos({ data }: CWClientLogosProps) {
  return (
    <Section variant="darker" className="sectionPadding border-y border-[#2f2a63]/50">
      <Container>
        <p className="text-center text-white/60 text-sm font-medium mb-10 uppercase tracking-wider">
          {data.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {data.logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-[#2f2a63] flex items-center justify-center">
                <span className="font-bold text-sm text-white/70">{logo.initials}</span>
              </div>
              <span className="font-semibold text-lg text-white/70">{logo.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

