"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { WhyContentData } from "../../data/contentWriting";

interface CWWhyContentProps {
  data: WhyContentData;
}

export function CWWhyContent({ data }: CWWhyContentProps) {
  return (
    <Section variant="dark" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl">📄</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Content Strategy</p>
                  <p className="text-sm text-white/60">Mapped to search demand</p>
                </div>
              </div>

              <div className="space-y-3">
                {["Pillar Page: Complete Guide", "Cluster: Best Practices", "Cluster: Common Mistakes", "Cluster: Tools & Resources"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-[#0fdac2]'}`} />
                    <span className="text-sm text-white">{item}</span>
                    <span className="ml-auto text-xs text-white/60">{i === 0 ? '3.2K' : `${(i + 1) * 400}`} vol</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#1c1949] rounded-xl p-4 border border-[#2f2a63]">
              <p className="text-sm text-white/60">Avg. ranking improvement</p>
              <p className="text-2xl font-bold text-primary">+23 positions</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="sectionHeading">
              <h2>
                {data.heading.text}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                  {data.heading.highlight}
                </span>{" "}
                with strategic content.
              </h2>
            </div>

            <p className="text-lg text-white/80">
              {data.description}
            </p>

            <ul className="space-y-4">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-white/90 pt-1">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-white/60 italic border-l-2 border-primary/50 pl-4">
              Everything done by one expert team, so you never chase writers, editors, or strategists again.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

