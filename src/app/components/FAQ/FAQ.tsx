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

  const handleSubmit = () => {
    if (question.trim()) {
      // Handle form submission
      // Hide form and show success message
      setIsFormOpen(false);
      setShowSuccess(true);
      setQuestion("");
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <section className={`relative sectionPadding faqSection ${className}`}>
      <Container maxWidth="xl" className="px-0">
        <div className="flex flex-col items-center">
          {/* Section Title */}
          <div className="sectionHeading forH2 text-[#ffffff] flex flex-col items-center justify-center">
            <h2 className="text-center">
              <span className="text-white">{sectionData.title.part1}</span>{" "}
              <span className="text-[#0fdac2]">{sectionData.title.part2}</span>
            </h2>
            <p className="text-center mb-10 md:mb-0">
              {sectionData.subtitle}
            </p>
          </div>

          {/* FAQ Items - 2 Column Layout */}
          <div className="w-full md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-12">
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
                        <span className={`shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center transition-all duration-300 ${
                          leftOpenIndex === index ? "text-[#643bff] rotate-180" : "text-[#0fdac2] rotate-0"
                        }`}>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-full h-full"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
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
                        <span className={`shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center transition-all duration-300 ${
                          rightOpenIndex === index ? "text-[#643bff] rotate-180" : "text-[#0fdac2] rotate-0"
                        }`}>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-full h-full"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
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

          {/* Slide Down Form */}
          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              isFormOpen && !showSuccess ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-6 sm:py-8">
              <div className="py-3 sm:py-4 border border-white/20 rounded-xl bg-white/5 faqInputWrapper">
                <div className="px-3 sm:px-4">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex-1">
                      <textarea
                        placeholder="Ask your own question here..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="faqaskquestion h-full w-full px-3 sm:px-4 py-2 sm:py-[0.4rem] bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm sm:text-base resize-none transition-all duration-200"
                        rows={2}
                      ></textarea>
                    </div>
                    <Button
                      type="button"
                      variant="green"
                      size="md"
                      onClick={handleSubmit}
                      disabled={!question.trim()}
                      className="hover:bg-[#0fdac2]/90 px-10"
                    >
                      Submit Question
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="w-full overflow-hidden transition-all duration-500 ease-in-out max-h-[300px] opacity-100 mt-6">
              <div className="py-6 sm:py-8">
                <div className="border border-[#0fdac2] rounded-xl bg-[#0b0a24] p-6 sm:p-8 text-center">
                  {/* Circular Checkmark Icon */}
                  {/* <div className="flex items-center justify-center mb-4">
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
                  </div> */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0fdac2] mb-2">
                    Question Submitted Successfully!
                  </h3>
                  {/* <p className="text-white/80 text-sm sm:text-base">
                    Thank you for your question. We'll get back to you soon.
                  </p> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
