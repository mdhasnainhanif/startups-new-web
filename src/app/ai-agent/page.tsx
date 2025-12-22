import type { Metadata } from "next";
import React from "react";
import AiAgentHero from "../components/aiAgentComponents/AiAgentHero/AiAgentHero";
import AiAgentServices from "../components/aiAgentComponents/AiAgentServices/AiAgentServices";
import AiAgentBenefits from "../components/aiAgentComponents/AiAgentBenefits/AiAgentBenefits";
import AiAgentIndustry from "../components/aiAgentComponents/AiAgentIndustry/AiAgentIndustry";
import AiAgentNetwork from "../components/aiAgentComponents/AiAgentNetwork/AiAgentNetwork";
import FAQ from "../components/FAQ/FAQ";

export const metadata: Metadata = {
  title: "AI Agent Services | Intelligent AI Solutions | Startups Advisory",
  description:
    "Transform your business with cutting-edge AI solutions that automate workflows, enhance customer experiences, and drive measurable results around the clock.",
  robots: "nofollow",
};

const AI_AGENT_FAQS = [
  {
    question: "What are AI Agents?",
    answer:
      "AI Agents are intelligent automated systems that can perform tasks, make decisions, and interact with users or other systems autonomously. They use artificial intelligence to understand context, learn from interactions, and execute complex workflows without constant human intervention.",
  },
  {
    question: "What kind of tasks can AI Agents handle?",
    answer:
      "AI Agents can handle a wide range of tasks including customer support inquiries, appointment scheduling, data analysis, lead qualification, order processing, content generation, and workflow automation. They adapt to your specific business needs and industry requirements.",
  },
  {
    question: "Can I customize my AI Agent?",
    answer:
      "Yes, absolutely! Our AI Agents are fully customizable. You can configure their knowledge base, response style, workflows, integrations, and behavior to match your brand voice and business processes. They learn and adapt to your specific requirements over time.",
  },
  {
    question: "Can AI Agents be used in multiple languages?",
    answer:
      "Yes, our AI Agents support multiple languages and can communicate with users in their preferred language. They can automatically detect the language being used and respond accordingly, making them ideal for global businesses serving diverse customer bases.",
  },
  {
    question: "How does the AI Agent ensure data accuracy?",
    answer:
      "Our AI Agents use advanced validation techniques, cross-reference data from multiple sources, and continuously learn from corrections. They're trained on your specific knowledge base and can escalate to human agents when uncertain, ensuring high accuracy and reliability in all interactions.",
  },
  {
    question: "How do AI Agents work?",
    answer:
      "AI Agents work by processing natural language inputs, understanding context and intent, accessing relevant knowledge bases, and generating appropriate responses or actions. They use machine learning to improve over time and can integrate with your existing systems and workflows seamlessly.",
  },
  {
    question: "How do AI Agents interact with users?",
    answer:
      "AI Agents interact with users through various channels including chat interfaces, voice systems, email, and messaging platforms. They provide instant, 24/7 responses, understand natural language, and can handle complex conversations while maintaining context throughout the interaction.",
  },
  {
    question: "How does an AI Agent integrate with forms?",
    answer:
      "AI Agents can integrate with forms by automatically filling fields based on user conversations, validating input data, providing real-time assistance during form completion, and submitting information to your CRM or database systems. They can also extract data from completed forms for further processing.",
  },
  {
    question: "How secure do AI Agents handle the data?",
    answer:
      "AI Agents handle data with enterprise-grade security. All data is encrypted in transit and at rest, access is controlled through authentication and authorization, and we comply with industry standards like GDPR and SOC 2. Your data remains confidential and is never shared with third parties.",
  },
  {
    question: "How do AI Agents improve customer service?",
    answer:
      "AI Agents improve customer service by providing instant responses 24/7, reducing wait times, handling multiple inquiries simultaneously, ensuring consistent service quality, and freeing up human agents to focus on complex issues. They can resolve up to 80% of common queries automatically.",
  },
];

const AI_AGENT_FAQ_SECTION = {
  title: {
    part1: "Frequently Asked",
    part2: "Questions",
  },
  subtitle:
    "Explore answers to common questions about our AI Agent services and how they can transform your business operations.",
};

export default function AiAgentPage() {
  return (
    <>
      <AiAgentHero />
      <AiAgentServices />
      <AiAgentBenefits />
      <AiAgentIndustry />
      <AiAgentNetwork />
      <FAQ faqs={AI_AGENT_FAQS} sectionData={AI_AGENT_FAQ_SECTION} />
    </>
  );
}

