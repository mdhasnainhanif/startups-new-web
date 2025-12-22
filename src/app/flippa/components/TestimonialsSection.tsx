"use client";

import { Quote } from "./icons";
import { MotionDiv, StaggerContainer, StaggerItem } from "./motion";
import { testimonialsData } from "../../data/FlippaPageData";
import Container from "../../components/Container";

export default function TestimonialsSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)]">
      <Container maxWidth="xl">
        <MotionDiv className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[var(--color-purple)] text-sm font-semibold uppercase tracking-wider mb-4 block">
            {testimonialsData.label}
          </span>
          <div className="sectionHeading">
            <h2>
              {testimonialsData.title.main}{" "}
              <span className="text-[var(--color-purple)]">{testimonialsData.title.highlight}</span>
            </h2>
          </div>
          <p className="text-lg text-white/80">{testimonialsData.description}</p>
        </MotionDiv>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsData.testimonials.map((testimonial, index) => {
            const isPurple = index % 2 === 1;
            return (
              <StaggerItem key={testimonial.author} delay={index * 0.1}>
                <div className="relative bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-[var(--color-primary)]/50 transition-all duration-300 h-full">
                  <div className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-medium rounded-full mb-4">
                    {testimonial.industry}
                  </div>

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${isPurple ? 'bg-[var(--color-purple)]/10' : 'bg-[var(--color-primary)]/10'}`}>
                    <Quote className={`w-5 h-5 ${isPurple ? 'text-[var(--color-purple)]' : 'text-[var(--color-primary)]'}`} />
                  </div>

                <blockquote className="text-white text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                  <div className="flex items-center gap-3 md:gap-4 mb-4 p-2 md:p-3 bg-white/5 rounded-xl">
                  <div className="flex-1 text-center">
                    <div className="text-xs text-white/70 mb-1">Before</div>
                    <div className="text-sm font-semibold text-white">
                      {testimonial.before}
                    </div>
                  </div>
                  <div className={`font-bold ${isPurple ? 'text-[var(--color-purple)]' : 'text-[var(--color-primary)]'}`}>→</div>
                  <div className="flex-1 text-center">
                    <div className="text-xs text-white/70 mb-1">After</div>
                    <div className="text-sm font-semibold text-white">
                      {testimonial.after}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/70">{testimonial.role}</div>
                  <div className={`text-xs font-medium mt-1 ${isPurple ? 'text-[var(--color-purple)]' : 'text-[var(--color-primary)]'}`}>
                    {testimonial.metric}
                  </div>
                </div>
              </div>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}

