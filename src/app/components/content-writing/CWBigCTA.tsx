"use client";

import { useState } from "react";
import Container from "../Container";
import { Section } from "../ui/Section";
import { BigCTAData } from "../../data/contentWriting";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";

interface CWBigCTAProps {
  data: BigCTAData;
}

export function CWBigCTA({ data }: CWBigCTAProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormData({});
    setIsSubmitting(false);
  };

  return (
    <Section variant="darker" id="get-started" className="sectionPadding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(100, 59, 255, 0.1) 10px, rgba(100, 59, 255, 0.1) 20px)`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6 mx-auto">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
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

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="bg-[#1c1949] rounded-xl p-8 lg:p-12 border-2 border-primary/30">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-6">
              {data.form.fields.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                  placeholder={field.placeholder}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#2f2a63] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              ))}
              <Button
                type="submit"
                variant="purple"
                disabled={isSubmitting}
                icon={isSubmitting ? undefined : <ArrowRightIcon style={{ fill: "#fff" }} />}
                iconPosition="right"
                className="w-full flex justify-center items-center"
              >
                {isSubmitting ? "Submitting..." : data.form.submitText}
              </Button>
            </form>

            <p className="text-sm text-white/60 text-center">
              {data.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

