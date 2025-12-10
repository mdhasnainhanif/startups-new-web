"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { CMSControlData } from "../../data/webDevelopment";
import { SearchIcon } from "../../icons";
import Button from "../Button";

interface CMSControlProps {
  data: CMSControlData;
}

export function CMSControl({ data }: CMSControlProps) {
  return (
    <Section variant="darker" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-primary">⚙️</span>
                    </div>
                  <div>
                    <h4 className="font-semibold text-white">Page Editor</h4>
                    <p className="text-xs text-white/60">Edit any section in seconds</p>
                  </div>
                </div>
                <Button variant="purple" size="sm">
                  Publish
                </Button>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-lg border border-primary/40 bg-primary/5 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs">📑</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Hero Section</p>
                        <p className="text-xs text-white/60">Homepage hero with CTA</p>
                      </div>
                    </div>
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Edit →
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#2f2a63] bg-white/5 cursor-pointer group hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                        <span className="text-white/60 text-xs">📑</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Features Grid</p>
                        <p className="text-xs text-white/60">3-column feature cards</p>
                      </div>
                    </div>
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Edit →
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#2f2a63] bg-white/5 cursor-pointer group hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                        <span className="text-white/60 text-xs">📑</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Testimonials</p>
                        <p className="text-xs text-white/60">Customer quote carousel</p>
                      </div>
                    </div>
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Edit →
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-dashed border-[#2f2a63] bg-transparent flex items-center justify-center cursor-pointer hover:border-primary/40 transition-colors">
                  <span className="text-sm text-white/60">+ Add new section</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
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

            <ul className="space-y-4">
              {data.cmsFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {item.icon === "Search" ? (
                      <SearchIcon style={{ width: "16px", height: "16px" }} />
                    ) : (
                      <span className="text-primary">✓</span>
                    )}
                  </div>
                  <span className="text-white/90 pt-1">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

