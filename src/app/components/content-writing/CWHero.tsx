"use client";

import Container from "../Container";
import { HeroData } from "../../data/contentWriting";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";

interface CWHeroProps {
  data: HeroData;
}

export function CWHero({ data }: CWHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center sectionPadding overflow-hidden bg-[#03001D]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(100, 59, 255, 0.1) 10px, rgba(100, 59, 255, 0.1) 20px)`
        }} />
      </div>

      <Container maxWidth="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center md:pt-40">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-primary">{data.badge}</span>
            </div>

            <div className="sectionHeading">
              <h1>
                {data.heading.text}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                  {data.heading.highlight}
                </span>
              </h1>
            </div>

            <p className="text-lg text-white/80 mb-8">
              {data.description}
            </p>

            <ul className="space-y-4 mb-10">
              {data.features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                href="#content-growth-plan"
                variant="purple"
                icon={<ArrowRightIcon style={{ fill: "#fff" }} />}
                iconPosition="right"
              >
                {data.cta.primary}
              </Button>
              <Button
                href="#case-studies"
                variant="green"
                iconPosition="right"
              >
                {data.cta.secondary}
              </Button>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63] relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">📄</span>
                  </div>
                  <span className="font-semibold text-white">Content Performance</span>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30">
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg p-4 border border-[#2f2a63] bg-[#0a0a1a]">
                  <p className="text-xs text-white/60 mb-1">Organic Traffic</p>
                  <p className="text-2xl font-bold text-white">+127%</p>
                  <p className="text-xs text-primary flex items-center gap-1 mt-1">
                    <span>↑</span> vs last quarter
                  </p>
                </div>
                <div className="rounded-lg p-4 border border-[#2f2a63] bg-[#0a0a1a]">
                  <p className="text-xs text-white/60 mb-1">Rankings Improved</p>
                  <p className="text-2xl font-bold text-white">48</p>
                  <p className="text-xs text-primary">keywords</p>
                </div>
              </div>

              <div className="h-32 bg-[#0a0a1a]/50 rounded-lg flex items-end justify-around p-4 gap-2 border border-[#2f2a63]">
                {[40, 55, 45, 70, 60, 85, 75, 95].map((height, i) => (
                  <div
                    key={i}
                    className="w-full bg-primary/60 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#1c1949] rounded-xl p-4 border border-[#2f2a63] z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-lg">📈</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Leads from Content</p>
                  <p className="text-lg font-bold text-primary">+42%</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-[#1c1949] rounded-xl p-4 border border-[#2f2a63] z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-lg">📊</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Articles Published</p>
                  <p className="text-lg font-bold text-white">24 <span className="text-white/60 text-sm font-normal">this quarter</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

