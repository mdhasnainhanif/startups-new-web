"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { DataInsightsData } from "../../data/contentWriting";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";

interface CWDataInsightsProps {
  data: DataInsightsData;
}

export function CWDataInsights({ data }: CWDataInsightsProps) {
  return (
    <Section variant="darker" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6 mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">The Transformation</h3>
            {data.beforeAfter.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div className="bg-[#1c1949] rounded-lg p-4 border border-[#2f2a63] opacity-60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-destructive text-lg">✗</span>
                    <span className="text-xs font-medium text-white/60 uppercase">Before</span>
                  </div>
                  <p className="text-sm text-white/70">{item.before}</p>
                </div>
                <div className="bg-[#1c1949] rounded-lg p-4 border-2 border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-lg">✓</span>
                    <span className="text-xs font-medium text-primary uppercase">After</span>
                  </div>
                  <p className="text-sm text-white">{item.after}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1c1949] rounded-xl p-8 border-2 border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary text-xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">What You Get</h3>
                <p className="text-sm text-white/60">Inside your Content Growth Plan</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {data.valueStack.map((item, index) => (
                <li key={index} className="flex items-center gap-4 p-3 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <Button
              href="#content-growth-plan"
              variant="purple"
              icon={<ArrowRightIcon style={{ fill: "#fff" }} />}
              iconPosition="right"
              className="w-full flex justify-center items-center"
            >
              {data.cta}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

