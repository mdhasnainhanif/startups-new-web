"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { ContentEngineData } from "../../data/contentWriting";

interface CWContentEngineProps {
  data: ContentEngineData;
}

export function CWContentEngine({ data }: CWContentEngineProps) {
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

        <div className={`grid md:grid-cols-2 ${data.steps.length <= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
          {data.steps.map((step, index) => (
            <div key={index} className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63] group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <span className="text-4xl font-bold text-white/10">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/70 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

