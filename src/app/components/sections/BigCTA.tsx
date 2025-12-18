"use client";

import { useState } from "react";
import Container from "../Container";
import { Section } from "../ui/Section";
import { BigCTAData } from "../../data/webDevelopment";
import { SearchIcon, PhoneIcon } from "../../icons";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";

interface BigCTAProps {
  data: BigCTAData;
}

export function BigCTA({ data }: BigCTAProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({});
    setIsSubmitting(false);
  };

  return (
    <Section variant="darker" id="website-revenue-plan" className="sectionPadding relative overflow-hidden">
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
          <div className="text-center mb-12 py-16">
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
                {data.heading.highlight && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2]">
                    {data.heading.highlight}
                  </span>
                )}
              </h2>
            </div>

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 pb-16">
            <div className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63]">
              <h3 className="font-semibold text-xl text-white mb-6">
                Here's what happens next:
              </h3>

              <div className="space-y-6">
                {data.process.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      {step.step === "1" || step.step === "2" || step.step === "3" ? (
                        <span className="font-bold text-primary">{step.step}</span>
                      ) : step.icon === "FileSearch" ? (
                        <SearchIcon style={{ width: "20px", height: "20px" }} />
                      ) : step.icon === "Phone" ? (
                        <PhoneIcon style={{ width: "20px", height: "20px" }} />
                      ) : (
                        <span className="text-primary">👤</span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">{step.title}</p>
                      <p className="text-sm text-white/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#2f2a63]">
                <p className="text-sm text-white/70">
                  <span className="text-primary mr-2">✓</span>
                  {data.note}
                </p>
              </div>
            </div>

            <div className="bg-[#1c1949] rounded-xl p-6 border-2 border-primary/30">
              <h3 className="font-semibold text-xl text-white mb-6">{data.form.title}</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {data.form.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-white mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.name]: e.target.value })
                        }
                        required={field.required}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#2f2a63] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.name]: e.target.value })
                        }
                        required={field.required}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#2f2a63] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
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
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default BigCTA;
