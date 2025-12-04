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
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [userQuestion, setUserQuestion] = useState<string>("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleQuestionChange = (value: string) => {
    setUserQuestion(value);
  };

  const handleSubmitQuestion = () => {
    const question = userQuestion.trim();
    if (question) {
      // Here you can handle the question submission
      // For now, we'll just show an alert
      alert(`Question submitted: ${question}`);
      // Clear the input after submission
      setUserQuestion("");
    }
  };

  return (
    <section className={`relative sectionPadding ${className}`}>
      <Container maxWidth="xl" className="px-0">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* Section Title */}
          <div className="sectionHeading forH2 flex flex-col items-center justify-center gap-3">
            <h2 className="text-center">
              <span className="text-white">{sectionData.title.part1}</span>{" "}
              <span className="text-[#0fdac2]">{sectionData.title.part2}</span>
            </h2>
            <p className="text-center">
              {sectionData.subtitle}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="w-full">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 last:border-b-0"
                >
                  {/* FAQ Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-0 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left focus:outline-none transition-colors hover:opacity-80 gap-3 sm:gap-4 cursor-pointer"
                  >
                    <span className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl pr-2 sm:pr-4 flex-1 leading-snug sm:leading-normal">
                      {faq.question}
                    </span>
                    <span className="text-white text-xl sm:text-2xl md:text-3xl font-light shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  
                  {/* FAQ Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-[500px] pb-4 sm:pb-5 md:pb-6"
                        : "max-h-0"
                    }`}
                  >
                    <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed pr-2 sm:pr-4 md:pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Question Input Box - Below all FAQs */}
          <div className="w-full mt-6 sm:mt-8">
            <div className="py-3 sm:py-4 border border-white/20 rounded-lg bg-white/5">
              <div className="px-3 sm:px-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <div className="flex-1">
                    <textarea
                      value={userQuestion}
                      onChange={(e) => handleQuestionChange(e.target.value)}
                      placeholder="Ask your own question here..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm sm:text-base resize-none focus:outline-none focus:border-[#0fdac2] focus:ring-1 focus:ring-[#0fdac2] transition-all duration-200"
                      rows={2}
                    />
                  </div>
                  <Button
                    variant="green"
                    size="md"
                    onClick={handleSubmitQuestion}
                    disabled={!userQuestion.trim()}
                    className="hover:bg-[#0fdac2]/90"
                  >
                    Submit Question
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
