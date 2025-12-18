"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { MessagingData } from "../../data/webDevelopment";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";

interface MessagingProps {
  data: MessagingData;
}

export function Messaging({ data }: MessagingProps) {
  return (
    <Section variant="dark" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="sectionHeading">
              <h2>
                {data.heading.text}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                  {data.heading.highlight}
                </span>
              </h2>
            </div>

            <p className="text-lg text-white/80 mb-8">
              {data.description}
            </p>

            <ul className="space-y-4 mb-10">
              {data.copyBenefits.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary">✓</span>
                  </div>
                  <span className="text-white/90 pt-1">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <p className="text-sm text-white/70 mb-3">
                <span className="text-primary font-semibold">{data.freeOffer.title}</span>
              </p>
              <p className="text-white">
                {data.freeOffer.description}
              </p>
              <Button
                href="#website-revenue-plan"
                variant="purple"
                icon={<ArrowRightIcon style={{ fill: "#fff" }} />}
                iconPosition="right"
                className="mt-4"
              >
                {data.freeOffer.cta}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-white/60 text-xs">📄</span>
                    <span className="text-xs font-medium text-white/60">Before</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/20 rounded w-full" />
                    <div className="h-2 bg-white/20 rounded w-4/5" />
                    <div className="h-2 bg-white/20 rounded w-3/5" />
                  </div>
                </div>

                <span className="text-primary">→</span>

                <div className="flex-1 p-4 rounded-lg bg-primary/5 border border-primary/40">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary text-xs">✏️</span>
                    <span className="text-xs font-medium text-primary">After</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/40 rounded w-full" />
                    <div className="h-2 bg-primary/30 rounded w-4/5" />
                    <div className="h-2 bg-primary/20 rounded w-3/5" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <p className="text-xs font-medium text-white/60 mb-2">Hero Section</p>
                  <div className="h-3 bg-primary/30 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-white/10 rounded w-full" />
                </div>

                <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <p className="text-xs font-medium text-white/60 mb-2">Value Proposition</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 bg-white/5 rounded" />
                    <div className="h-12 bg-white/5 rounded" />
                    <div className="h-12 bg-white/5 rounded" />
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-primary/40 bg-primary/5">
                  <p className="text-xs font-medium text-primary mb-2">Call to Action</p>
                  <div className="h-8 bg-primary/30 rounded w-1/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

