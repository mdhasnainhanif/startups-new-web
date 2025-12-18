"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { PackageDetailsData } from "../../data/webDevelopment";

interface PackageDetailsProps {
  data: PackageDetailsData;
}

export function PackageDetails({ data }: PackageDetailsProps) {
  return (
    <Section className="sectionPadding">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="sectionHeading">
              <h2>
                {data.heading.text}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                  {data.heading.highlight}
                </span>
              </h2>
            </div>
            <p className="text-lg text-white/80 mt-6 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.items.map((item, i) => (
              <div
                key={i}
                className="bg-[#1c1949] rounded-lg p-4 border border-[#2f2a63] text-center hover:border-primary/50 transition-all"
              >
                <div className="text-primary font-bold text-sm mb-2">
                  {item.number}
                </div>
                <div className="text-white text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

