"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { CROSectionData } from "../../data/webDevelopment";

interface CROSectionProps {
  data: CROSectionData;
}

export function CROSection({ data }: CROSectionProps) {
  return (
    <Section variant="darker" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="sectionHeading">
              <h2>
                {data.heading.text}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                  {data.heading.highlight}
                </span>
              </h2>
            </div>

            <p className="text-lg text-white/80 mb-10">
              {data.description}
            </p>

            <ul className="space-y-4 mb-10">
              {data.conversionLevers.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary">✓</span>
                  </div>
                  <span className="text-white/90 pt-1">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#1c1949] rounded-xl p-6 border-2 border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary text-lg">🛡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{data.guarantee.title}</h4>
                  <p className="text-sm text-white/70">
                    {data.guarantee.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-white">Conversion Blueprint</h4>
                <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/60 border border-white/20">
                  Page Analysis
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-primary/40 bg-primary/5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-primary">High Impact Zone</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/20 rounded w-1/2" />
                    <div className="h-6 bg-white/10 rounded w-3/4" />
                    <div className="h-8 bg-primary/30 rounded w-28" />
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#2f2a63] bg-[#0a0a1a]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <span className="text-xs font-medium text-white/60">Social Proof</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-16 bg-[#0a0a1a] rounded border border-[#2f2a63]" />
                    <div className="h-8 w-16 bg-[#0a0a1a] rounded border border-[#2f2a63]" />
                    <div className="h-8 w-16 bg-[#0a0a1a] rounded border border-[#2f2a63]" />
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-primary/40 bg-primary/5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-primary">Conversion Point</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 flex-1 bg-[#0a0a1a]/50 rounded border border-[#2f2a63]" />
                    <div className="h-10 w-24 bg-primary rounded" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#1c1949] rounded-xl p-4 border border-[#2f2a63]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">↑</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">+47%</p>
                  <p className="text-xs text-white/60">Conversion lift</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

