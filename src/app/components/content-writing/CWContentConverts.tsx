"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { ContentConvertsData } from "../../data/contentWriting";

interface CWContentConvertsProps {
  data: ContentConvertsData;
}

export function CWContentConverts({ data }: CWContentConvertsProps) {
  return (
    <Section variant="dark" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
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

            <ul className="space-y-4">
              {data.contentTypes.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-white">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#1c1949] rounded-xl p-6 border-2 border-primary/30 mt-8">
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

          <div className="relative">
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-white">Landing Page Performance</span>
                <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30">
                  Live
                </span>
              </div>

              <div className="space-y-4 p-4 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                <div className="h-8 bg-primary/20 rounded w-3/4" />
                <div className="h-4 bg-white/10 rounded w-full" />
                <div className="h-4 bg-white/10 rounded w-5/6" />
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="h-20 bg-primary/10 rounded border border-primary/30" />
                  <div className="h-20 bg-primary/10 rounded border border-primary/30" />
                  <div className="h-20 bg-primary/10 rounded border border-primary/30" />
                </div>
                <div className="h-10 bg-primary/30 rounded w-1/3 mt-4" />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                  <p className="text-2xl font-bold text-primary">3.2%</p>
                  <p className="text-xs text-white/60">Conversion Rate</p>
                </div>
                <div className="text-center p-4 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                  <p className="text-2xl font-bold text-white">+47%</p>
                  <p className="text-xs text-white/60">vs. Industry Avg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

