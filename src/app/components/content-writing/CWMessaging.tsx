"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { MessagingData } from "../../data/contentWriting";

interface CWMessagingProps {
  data: MessagingData;
}

export function CWMessaging({ data }: CWMessagingProps) {
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
              {data.contentServices.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-white">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1c1949] rounded-xl p-8 lg:p-10 border-2 border-primary/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <span className="text-primary text-xl">📋</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{data.freeOffer.title}</h3>
                <p className="text-sm text-white/60">Content Outline Reference</p>
              </div>
            </div>

            <p className="text-lg text-white/80 mb-6">
              {data.freeOffer.description}
            </p>

            <div className="p-4 bg-[#0a0a1a] rounded-lg border border-[#2f2a63]">
              <p className="text-sm text-white/60 mb-2">Includes:</p>
              <ul className="space-y-2">
                {data.freeOffer.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white">
                    <span className="text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

