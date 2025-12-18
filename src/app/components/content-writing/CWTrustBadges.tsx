"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { TrustBadgesData } from "../../data/contentWriting";

interface CWTrustBadgesProps {
  data: TrustBadgesData;
}

export function CWTrustBadges({ data }: CWTrustBadgesProps) {
  return (
    <Section variant="dark" className="sectionPadding border-y border-[#2f2a63]/50">
      <Container maxWidth="xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="sectionHeading">
            <h2>
              {data.heading}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {data.badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 px-6 py-4 rounded-lg bg-[#1c1949] border border-[#2f2a63]">
              <span className="text-primary text-xl">🏆</span>
              <span className="text-sm font-medium text-white">{badge.label}</span>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-[#1c1949] rounded-xl p-8 border border-[#2f2a63]">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-lg">★</span>
              ))}
            </div>
            <p className="text-lg text-white italic mb-4">
              "{data.testimonial.quote}"
            </p>
            <p className="text-sm text-white/60">— {data.testimonial.author}, {data.testimonial.role}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

