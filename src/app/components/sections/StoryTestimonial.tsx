"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { StoryTestimonialData } from "../../data/webDevelopment";

interface StoryTestimonialProps {
  data: StoryTestimonialData;
}

export function StoryTestimonial({ data }: StoryTestimonialProps) {
  return (
    <Section variant="dark" id="testimonials" className="sectionPadding border-y border-[#2f2a63]/50">
      <Container maxWidth="xl">
        <div className="text-center mb-12 py-16">
          <div className="sectionHeading">
            <h2>
              {data.heading.text}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                {data.heading.highlight}
              </span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 pb-16">
          <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
            <h3 className="font-semibold text-white mb-4">{data.challenge.title}</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              {data.challenge.description}
            </p>

            <h3 className="font-semibold text-white mb-4">{data.transformation.title}</h3>
            <ul className="space-y-3 text-white/70">
              {data.transformation.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1c1949] rounded-xl p-6 border-2 border-primary/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: data.testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8">
                "{data.testimonial.quote}"
              </blockquote>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-[#2f2a63]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">
                  {data.testimonial.author.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-semibold text-white">{data.testimonial.author}</p>
                <p className="text-sm text-primary">
                  {data.testimonial.company} • {data.testimonial.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

