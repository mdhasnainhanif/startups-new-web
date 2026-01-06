"use client";

import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { MotionDiv } from "./motion";
import Button from "../../components/Button";
import Container from "../../components/Container";

export default function FlippaCTA() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)] relative overflow-hidden">
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(15, 218, 194, 0.1) 1px, transparent 1px),
                            radial-gradient(circle at 60% 70%, rgba(15, 218, 194, 0.08) 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, rgba(15, 218, 194, 0.1) 1px, transparent 1px),
                            radial-gradient(circle at 40% 80%, rgba(15, 218, 194, 0.08) 1px, transparent 1px)`,
          backgroundSize: "50px 50px, 80px 80px, 60px 60px, 70px 70px",
          backgroundPosition: "0 0, 25px 25px, 50px 50px, 75px 75px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-transparent" />
      <Container maxWidth="xl" className="relative z-10">
        <MotionDiv className="max-w-4xl mx-auto text-center">
          <div className="sectionHeading mb-4 md:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center w-full mx-auto">
              <span className="text-white">Ready to Turn Your Business Into a</span>
              <span className="text-[var(--color-primary)]"> High Value Asset?</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Book a free strategy call and discover how we can help you 2-5x your business value in 90 days.
          </p>
          <div className="flex justify-center">
            <Button
              variant="green"
              size="lg"
              className="group flex items-center justify-center"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                Start Your Growth Journey
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </MotionDiv>
      </Container>
    </section>
  );
}


