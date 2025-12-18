"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { WhoItsForData } from "../../data/contentWriting";

interface CWWhoItsForProps {
  data: WhoItsForData;
}

export function CWWhoItsFor({ data }: CWWhoItsForProps) {
  return (
    <Section variant="darker" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
                <span className="text-sm text-primary">{data.badge}</span>
              </div>
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1c1949] rounded-xl p-6 border-2 border-primary/30">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-primary text-lg">✓</span>
                  Who this is for
                </h4>
                <ul className="space-y-3">
                  {data.forList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white">
                      <span className="text-primary text-sm mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63] opacity-80">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-destructive text-lg">✗</span>
                  Who this is NOT for
                </h4>
                <ul className="space-y-3">
                  {data.notForList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-destructive text-sm mt-0.5">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#1c1949] rounded-xl p-6 border-2 border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-primary text-xl">🛡️</span>
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

          <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-white">Content Performance Growth</span>
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30">
                12 months
              </span>
            </div>

            <div className="relative h-64 mb-6">
              <div className="absolute inset-0 flex items-end justify-between gap-2 pb-8">
                {[25, 30, 35, 45, 50, 60, 70, 85, 95, 110, 125, 140].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-primary/60 rounded-t transition-all"
                      style={{ height: `${height}px` }}
                    />
                    <span className="text-xs text-white/60">{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2 text-primary">
                <span className="text-lg">📈</span>
                <span className="text-sm font-medium">+460%</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Organic Traffic", value: "+127%" },
                { label: "Keywords Ranking", value: "+48" },
                { label: "Lead Quality", value: "+35%" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

