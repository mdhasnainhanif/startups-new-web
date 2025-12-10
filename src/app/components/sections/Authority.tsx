"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { AuthorityData } from "../../data/webDevelopment";

interface AuthorityProps {
  data: AuthorityData;
}

export function Authority({ data }: AuthorityProps) {
  return (
    <Section variant="dark" id="authority" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="bg-[#1c1949] rounded-xl border border-[#2f2a63] transform rotate-1">
                <div className="rounded-lg overflow-hidden border border-[#2f2a63]">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a1a] border-b border-[#2f2a63]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 bg-[#1c1949] rounded px-3 py-1 text-xs text-white/60 ml-4 border border-[#2f2a63]">
                      yourcompany.com
                    </div>
                  </div>
                  <div className="p-6 space-y-4 bg-[#0a0a1a]">
                    <div className="h-4 bg-primary/30 rounded w-1/3" />
                    <div className="h-8 bg-white/15 rounded w-3/4" />
                    <div className="h-3 bg-white/20 rounded w-full" />
                    <div className="h-3 bg-white/20 rounded w-5/6" />
                    <div className="flex gap-3 pt-2">
                      <div className="h-10 bg-primary rounded-lg w-32" />
                      <div className="h-10 bg-[#1c1949] rounded-lg w-28 border border-[#2f2a63]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 w-3/4 bg-[#1c1949] rounded-xl border border-[#2f2a63] transform -rotate-2 z-10">
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10" />
                    <div className="space-y-1 flex-1">
                      <div className="h-3 bg-white/20 rounded w-1/2" />
                      <div className="h-2 bg-white/10 rounded w-3/4" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-[#0a0a1a] rounded border border-[#2f2a63]" />
                    <div className="h-16 bg-[#0a0a1a] rounded border border-[#2f2a63]" />
                    <div className="h-16 bg-[#0a0a1a] rounded border border-[#2f2a63]" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#1c1949] rounded-xl p-3 border border-[#2f2a63] z-20">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm font-medium text-white">Conversion +47%</span>
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

            <p className="text-lg text-white/80 mb-8">
              {data.description}
            </p>

            <ul className="space-y-5 mb-8">
              {data.services.map((service, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary">✓</span>
                  </div>
                  <span className="text-white/90 pt-2">{service.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-white/60 border-l-2 border-primary/50 pl-4 italic">
              {data.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

