"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { AIInsightsData } from "../../data/webDevelopment";
import { SearchIcon } from "../../icons";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";
  


interface AIInsightsProps {
  data: AIInsightsData;
}

export function AIInsights({ data }: AIInsightsProps) {
  return (
    <Section variant="darker" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-sm text-primary">{data.badge.text}</span>
            </div>

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

            <div className="space-y-6 mb-10">
              {data.beforeAfter.map((item, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <span className="text-xs font-semibold text-red-400 uppercase">Before</span>
                    <p className="text-sm text-white/80">{item.before}</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/30">
                    <span className="text-xs font-semibold text-primary uppercase">After</span>
                    <p className="text-sm text-white/80">{item.after}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63] mb-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                What you get inside this phase
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.valuePreview.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <SearchIcon style={{ width: "16px", height: "16px" }} />
                    <span className="text-sm text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              href="#website-revenue-plan"
              variant="purple"
              icon={<ArrowRightIcon style={{ fill: "#fff" }} />}
              iconPosition="right"
              className="w-fit"
            >
              {data.cta}
            </Button>
          </div>

          <div className="relative">
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">🧠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">AI Insights Engine</h4>
                    <p className="text-xs text-white/60">Analyzing your market</p>
                  </div>
                </div>
                <div className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30">
                  <span className="relative flex h-2 w-2 mr-1 inline-block">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Active
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#0a0a1a]/50 border border-[#2f2a63]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Keyword Opportunity</span>
                    <span className="text-xs text-primary">+2.4K monthly searches</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-3/4" />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0a0a1a]/50 border border-[#2f2a63]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Conversion Gap</span>
                    <span className="text-xs text-primary">4.2% → 7.8% potential</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-1/2" />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0a0a1a]/50 border border-[#2f2a63]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Content Score</span>
                    <span className="text-xs text-primary">Improvement identified</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-2/3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#2f2a63]">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">47</p>
                  <p className="text-xs text-white/60">Pages Analyzed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-xs text-white/60">Quick Wins Found</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">3.2x</p>
                  <p className="text-xs text-white/60">ROI Potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

