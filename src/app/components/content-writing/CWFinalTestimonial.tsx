"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { FinalTestimonialData } from "../../data/contentWriting";

interface CWFinalTestimonialProps {
  data: FinalTestimonialData;
}

export function CWFinalTestimonial({ data }: CWFinalTestimonialProps) {
  return (
    <Section variant="darker" className="sectionPadding border-y border-[#2f2a63]/50">
      <Container maxWidth="sxl">
        <div className="text-center py-16">
          <div className="bg-[#1c1949] rounded-xl p-8 lg:p-12 border-2 border-primary/30 relative">
            <div className="absolute top-6 left-6 text-primary/20 text-6xl">"</div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-2xl">★</span>
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl xl:text-3xl font-medium text-white mb-8 italic leading-relaxed">
                "{data.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-white/60">{data.author.initials}</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{data.author.name}</p>
                  <p className="text-sm text-white/70">{data.author.role}, {data.author.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

