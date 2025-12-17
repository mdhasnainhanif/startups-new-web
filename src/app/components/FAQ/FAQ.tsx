"use client";

import { useState } from "react";
import Container from "../Container";
import Button from "../Button";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionData {
  title: {
    part1: string;
    part2: string;
  };
  subtitle: string;
}

interface FAQProps {
  faqs: FAQItem[];
  sectionData: FAQSectionData;
  className?: string;
}

export default function FAQ({ faqs, sectionData, className = "" }: FAQProps) {
  const [leftOpenIndex, setLeftOpenIndex] = useState<number | null>(0);
  const [rightOpenIndex, setRightOpenIndex] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [question, setQuestion] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const toggleLeftFAQ = (index: number) => {
    setLeftOpenIndex(leftOpenIndex === index ? null : index);
  };

  const toggleRightFAQ = (index: number) => {
    setRightOpenIndex(rightOpenIndex === index ? null : index);
  };

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
    // Reset success message when opening/closing form
    if (isFormOpen) {
      setShowSuccess(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      // Handle form submission
      // Hide form and show success message
      setIsFormOpen(false);
      setShowSuccess(true);
      setQuestion("");
      setAdditionalDetails("");
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <section className={`relative sectionPadding faqSection ${className}`}>
      <Container maxWidth="xl" className="px-0">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* Section Title */}
          <div className="sectionHeading forH2 text-[#ffffff] flex flex-col items-center justify-center gap-3">
            <h2 className="text-center">
              <span className="text-white">{sectionData.title.part1}</span>{" "}
              <span className="text-[#0fdac2]">{sectionData.title.part2}</span>
            </h2>
            <p className="text-center">
              {sectionData.subtitle}
            </p>
          </div>

          {/* FAQ Items - 2 Column Layout */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-6">
              {/* Left Column */}
              <div className="space-y-0">
                {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b-2 border-[#312d63a8] last:border-b-0"
                    >
                      {/* FAQ Question */}
                      <button
                        onClick={() => toggleLeftFAQ(index)}
                        className="w-full px-0 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left focus:outline-none transition-colors hover:opacity-80 gap-3 sm:gap-4 cursor-pointer"
                      >
                        <span className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-xl pr-2 sm:pr-4 flex-1 leading-snug sm:leading-normal">
                          {faq.question}
                        </span>
                        <span className={`text-xl sm:text-2xl md:text-3xl font-light shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center transition-colors ${
                          leftOpenIndex === index ? "text-[#643bff]" : "text-[#0fdac2]"
                        }`}>
                          {leftOpenIndex === index ? "−" : "+"}
                        </span>
                      </button>
                      
                      {/* FAQ Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          leftOpenIndex === index
                            ? "max-h-[500px] pb-4 sm:pb-5 md:pb-6"
                            : "max-h-0"
                        }`}
                      >
                        <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed pr-2 sm:pr-4 md:pr-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column */}
              <div className="space-y-0">
                {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b-2 border-[#312d63a8] last:border-b-0"
                    >
                      {/* FAQ Question */}
                      <button
                        onClick={() => toggleRightFAQ(index)}
                        className="w-full px-0 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left focus:outline-none transition-colors hover:opacity-80 gap-3 sm:gap-4 cursor-pointer"
                      >
                        <span className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-xl pr-2 sm:pr-4 flex-1 leading-snug sm:leading-normal">
                          {faq.question}
                        </span>
                        <span className={`text-xl sm:text-2xl md:text-3xl font-light shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center transition-colors ${
                          rightOpenIndex === index ? "text-[#643bff]" : "text-[#0fdac2]"
                        }`}>
                          {rightOpenIndex === index ? "−" : "+"}
                        </span>
                      </button>
                      
                      {/* FAQ Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          rightOpenIndex === index
                            ? "max-h-[500px] pb-4 sm:pb-5 md:pb-6"
                            : "max-h-0"
                        }`}
                      >
                        <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed pr-2 sm:pr-4 md:pr-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Center Button */}
          <div className="w-full flex justify-center mt-6 sm:mt-8">
            <Button
              variant="green"
              size="lg"
              onClick={handleToggleForm}
              className="px-8 py-3"
            >
              Ask A Question
            </Button>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="w-full overflow-hidden transition-all duration-500 ease-in-out max-h-[300px] opacity-100">
              <div className="py-6 sm:py-8">
                <div className="border border-[#0fdac2] rounded-xl bg-[#0b0a24] p-6 sm:p-8 text-center">
                  {/* Circular Checkmark Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#0fdac2] flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0fdac2] mb-2">
                    Question Submitted Successfully!
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    Thank you for your question. We'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Slide Down Form */}
          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              isFormOpen && !showSuccess ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-6 sm:py-8">
              <div className="border border-white/20 rounded-xl bg-white/5 p-6 sm:p-8">
                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
                  Ask A Question
                </h3>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Question Input */}
                  <div>
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Question"
                      required
                      className="w-full px-4 py-3 bg-[#0e1030] border-2 border-transparent rounded-lg text-white placeholder-white/50 text-base focus:outline-none focus:border-[#0fdac2] transition-all duration-200"
                      style={{
                        backgroundImage: `linear-gradient(#0e1030, #0e1030),
                          linear-gradient(to right, #0fdac2, #643bff)`,
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }}
                    />
                  </div>

                  {/* Additional Details Textarea */}
                  <div>
                    <textarea
                      value={additionalDetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      placeholder="Add additional details (optional)"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0e1030] border-2 border-transparent rounded-lg text-white placeholder-white/50 text-base resize-none focus:outline-none focus:border-[#0fdac2] transition-all duration-200"
                      style={{
                        backgroundImage: `linear-gradient(#0e1030, #0e1030),
                          linear-gradient(to right, #0fdac2, #643bff)`,
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-2">
                    <Button
                      type="submit"
                      variant="green"
                      size="lg"
                      disabled={!question.trim()}
                      className="px-8 py-3"
                    >
                      Submit Question
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
