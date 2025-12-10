"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { ContentManagementData } from "../../data/contentWriting";

interface CWContentManagementProps {
  data: ContentManagementData;
}

export function CWContentManagement({ data }: CWContentManagementProps) {
  return (
    <Section variant="darker" className="sectionPadding">
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

            <div className="grid grid-cols-2 gap-4">
              {data.features.map((item, index) => (
                <div key={index} className="bg-[#1c1949] rounded-xl p-4 border border-[#2f2a63]">
                  <span className="text-primary text-xl mb-3 block">⚡</span>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-white">Content Editor</span>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                <label className="text-xs text-white/60 mb-1 block">Title</label>
                <div className="h-8 bg-white/5 rounded flex items-center px-3">
                  <span className="text-sm text-white/80">How to Scale Your Content...</span>
                </div>
              </div>

              <div className="p-3 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                <label className="text-xs text-white/60 mb-1 block">Meta Description</label>
                <div className="h-16 bg-white/5 rounded p-2">
                  <span className="text-xs text-white/60">Learn proven strategies to scale your content...</span>
                </div>
              </div>

              <div className="p-3 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
                <label className="text-xs text-white/60 mb-2 block">Content Blocks</label>
                <div className="space-y-2">
                  <div className="h-8 bg-primary/10 rounded border border-primary/30 flex items-center px-3">
                    <span className="text-xs text-primary">Hero Section</span>
                  </div>
                  <div className="h-8 bg-primary/10 rounded border border-primary/30 flex items-center px-3">
                    <span className="text-xs text-primary">Key Benefits</span>
                  </div>
                  <div className="h-8 bg-white/5 rounded border border-[#2f2a63] flex items-center px-3">
                    <span className="text-xs text-white/60">+ Add Block</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-primary text-white text-sm px-4 py-2 rounded-lg">
                  Publish
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

