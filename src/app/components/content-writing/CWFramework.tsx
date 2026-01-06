"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { FrameworkData } from "../../data/contentWriting";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";

interface CWFrameworkProps {
  data: FrameworkData;
}

export function CWFramework({ data }: CWFrameworkProps) {
  return (
    <Section variant="dark" className="sectionPadding">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-[#1c1949] rounded-xl p-8 border border-[#2f2a63]">
            <h3 className="text-xl font-semibold text-white mb-6">1 Month Content Package Includes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.frameworkSlices.map((slice, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-primary/40 bg-primary/20 flex flex-col items-center gap-2 text-center"
                >
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-sm font-medium text-white">{slice.label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/70 mt-6 text-center">
              Consistent output across all builds. Polished, modern content shaped for clarity, relevance, and ongoing business performance.
            </p>
          </div>

          <div className="bg-[#1c1949] rounded-xl p-8 border-2 border-primary/30" id="content-growth-plan">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">$3,299</div>
              <div className="text-sm text-white/70">One-Time Payment</div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Content KITs Included</h3>
            <p className="text-sm text-white/70 mb-6">Complete writing foundation for brand presence and commercial use</p>

            <ul className="space-y-4 mb-8">
              {data.valueStackItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-primary text-lg">✓</span>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 mb-6">
              <p className="text-sm text-primary font-medium">
                {data.note}
              </p>
            </div>

            <Button
              href="#get-started"
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

