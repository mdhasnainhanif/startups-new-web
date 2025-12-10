"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { TrustBadgesData } from "../../data/webDevelopment";

interface TrustBadgesProps {
  data: TrustBadgesData;
}

export function TrustBadges({ data }: TrustBadgesProps) {
  return (
    <Section variant="darker" className="sectionPadding border-y border-[#2f2a63]/50">
      <Container>
        <div className="text-center mb-12">
          <div className="sectionHeading">
            <h2>
              {data.heading.text}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                {data.heading.highlight}
              </span>
            </h2>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16">
          {data.badges.map((badge, i) => (
            <div
              key={i}
              className="bg-[#1c1949] rounded-xl p-8 text-center border border-[#2f2a63] hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-white mb-1">{badge.label}</h3>
              <p className="text-sm text-white/70">{badge.subtext}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

