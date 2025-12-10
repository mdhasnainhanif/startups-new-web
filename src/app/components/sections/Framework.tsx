"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { FrameworkData } from "../../data/webDevelopment";
import { SearchIcon, PhoneIcon } from "../../icons";

interface FrameworkProps {
  data: FrameworkData;
}

export function Framework({ data }: FrameworkProps) {
  return (
    <Section variant="dark" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="text-center max-w-3xl mx-auto mb-16 py-16">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pb-16">
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-1/4 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold text-lg text-white">Strategic</p>
                  <p className="font-bold text-lg text-primary">Framework</p>
                </div>
              </div>

              {data.frameworkSlices.map((slice, i) => {
                const angleRad = (slice.angle - 90) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div
                    key={i}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className="bg-[#1c1949] rounded-xl p-3 w-28 text-center border border-[#2f2a63] hover:border-primary/50 transition-colors cursor-default">
                      <p className="text-xs font-medium text-white leading-tight">
                        {slice.label}
                      </p>
                    </div>
                  </div>
                );
              })}

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="rgba(15, 218, 194, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>

          <div>
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Website Revenue Plan</h3>
                  <p className="text-sm text-white/60">What's included</p>
                </div>
              </div>

              <ul className="space-y-4 mb-6">
                {data.valueStackItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      {item.icon === "FileSearch" ? (
                        <SearchIcon style={{ width: "16px", height: "16px" }} />
                      ) : item.icon === "Phone" ? (
                        <PhoneIcon style={{ width: "16px", height: "16px" }} />
                      ) : (
                        <span className="text-primary">✓</span>
                      )}
                    </div>
                    <span className="text-white/90">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#2f2a63]">
                <p className="text-sm text-white/70">
                  <span className="text-primary font-semibold">Available free</span> for
                  qualified B2B, SaaS and service projects. This is the starting point for working
                  with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

