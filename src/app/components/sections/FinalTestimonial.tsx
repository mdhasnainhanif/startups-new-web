"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { FinalTestimonialData } from "../../data/webDevelopment";

interface FinalTestimonialProps {
  data: FinalTestimonialData;
}

export function FinalTestimonial({ data }: FinalTestimonialProps) {
  return (
    <Section variant="dark" className="sectionPadding border-y border-[#2f2a63]/30">
      <Container maxWidth="sxl">
        <div className="text-center py-16">

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-10">
            "{data.quote.text}{" "}
            <span className="text-primary">{data.quote.highlight}</span>"
          </blockquote>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl font-bold text-white/60">{data.author.initials}</span>
            </div>
            <div className="text-center">
              <p className="font-semibold text-white">{data.author.name}</p>
              <p className="text-sm text-white/70">
                {data.author.role}, {data.author.company}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FinalTestimonial;

