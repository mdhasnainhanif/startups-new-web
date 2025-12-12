export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicesFAQDataMap {
  [key: string]: FAQItem[];
}

export const SERVICES_FAQ_DATA: ServicesFAQDataMap = {
  "brand-identity": [
    {
      question: "What exactly does your brand identity service include?",
      answer: "Our brand identity service includes logos, visual systems, brand guidelines, and core assets designed to keep your business consistent and credible everywhere.",
    },
    {
      question: "How is this different from hiring a designer or agency?",
      answer: "Instead of one person or slow agency cycles, you get a system-driven brand team that delivers faster and stays consistent.",
    },
    {
      question: "Who is brand identity best suited for?",
      answer: "Founders and growing businesses that want to look established, trustworthy, and professional before scaling marketing or sales.",
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients receive initial brand assets within days and see immediate improvement in clarity and confidence.",
    },
    {
      question: "Do I need to prepare anything before starting?",
      answer: "No. We guide you through a simple intake to understand your business and goals quickly.",
    },
    {
      question: "Can this replace my in-house design team?",
      answer: "Yes, or work alongside them. Many teams use us to reduce overhead while increasing output.",
    },
    {
      question: "Will my brand stay consistent over time?",
      answer: "Yes. All work follows defined brand systems to ensure long-term consistency.",
    },
    {
      question: "Is this suitable for rebranding an existing business?",
      answer: "Absolutely. We modernize or reposition brands without losing existing trust.",
    },
    {
      question: "Are the tools and assets legally safe to use?",
      answer: "Yes. All assets are created using fully licensed, commercial-safe tools.",
    },
    {
      question: "How do I get started?",
      answer: "Book a free call to review your brand and see if our system is the right fit.",
    },
  ],
  "marketing-advertising": [
    {
      question: "What exactly does your marketing & advertising service include?",
      answer: "Our marketing & advertising service covers end-to-end campaign execution — from strategy and messaging to ad creation, funnel setup, testing, optimization, and scaling. We focus on building systems that consistently attract qualified traffic, convert attention into leads, and turn spend into measurable revenue.",
    },
    {
      question: "How is this different from hiring an agency or freelancers?",
      answer: "Agencies move slow and lock you into rigid retainers. Freelancers lack consistency and ownership. Our system gives you a dedicated, always-on growth team that executes faster, tests continuously, and improves performance without long contracts or overhead.",
    },
    {
      question: "Who is this service best suited for?",
      answer: "This service is built for founders, startups, and growing businesses that want predictable lead flow and customer acquisition — without guessing, burning ad spend, or managing multiple vendors.",
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients launch their first campaigns within days. Early performance signals typically appear in the first few weeks, with optimization and cost efficiency improving steadily as data compounds.",
    },
    {
      question: "Do I need existing ads, funnels, or data before starting?",
      answer: "No. We can build everything from scratch or optimize existing campaigns. Whether you're starting fresh or scaling what's already working, the system adapts to your current stage.",
    },
    {
      question: "Can this replace or support my in-house marketing team?",
      answer: "Yes. Many businesses use our service to reduce hiring pressure, increase execution speed, or support internal teams with strategy, testing, and performance optimization.",
    },
    {
      question: "Will campaign performance improve over time or stay flat?",
      answer: "Performance improves by design. Every campaign runs inside a structured testing and optimization loop, allowing us to refine messaging, targeting, and funnels based on real data — not assumptions.",
    },
    {
      question: "Can you safely scale ad spend without wasting budget?",
      answer: "Yes. We scale only what converts. Budget increases are controlled, data-backed, and tied directly to performance metrics to protect ROI and prevent overspending.",
    },
    {
      question: "Are campaigns compliant with ad platforms and legal standards?",
      answer: "Absolutely. All campaigns follow platform policies, licensing requirements, and compliance best practices to protect your brand from account risk or legal exposure.",
    },
    {
      question: "How do I get started?",
      answer: "You can book a free call to review your current marketing, identify growth gaps, and see whether our marketing & advertising system is the right fit for your goals.",
    },
  ],
  "digital-web": [
    {
      question: "What does your digital & web service include?",
      answer: "Our digital and web service includes UX strategy, UI design, development, performance optimization, SEO foundations, and scalable architecture built to support marketing, sales, and growth initiatives.",
    },
    {
      question: "How is this different from traditional web agencies?",
      answer: "Instead of slow timelines and rigid scopes, you get a system-led team that ships faster, iterates continuously, and improves performance without locking you into long retainers.",
    },
    {
      question: "Who is this service best suited for?",
      answer: "It's built for founders, startups, and growing businesses that need high-performing websites to support acquisition, credibility, and scale — not just online presence.",
    },
    {
      question: "How long does it take to launch a website?",
      answer: "Most projects launch within weeks depending on scope. Core pages and landing experiences are often delivered faster to support immediate business goals.",
    },
    {
      question: "Do I need content, designs, or assets beforehand?",
      answer: "No. We can work with existing assets or build everything from scratch. The process adapts to your current stage without slowing momentum.",
    },
    {
      question: "Can this replace my internal development team?",
      answer: "Yes, or it can complement them. Many businesses use our system to reduce workload, speed up delivery, and maintain consistent quality.",
    },
    {
      question: "Will my website stay scalable as the business grows?",
      answer: "Yes. All builds use modular, scalable systems so new pages, features, and integrations can be added without rebuilding.",
    },
    {
      question: "Is performance and SEO built in from the start?",
      answer: "Absolutely. Speed, structure, and SEO foundations are integrated during build — not patched in later.",
    },
    {
      question: "Are security and compliance handled?",
      answer: "Yes. All projects follow modern security, accessibility, and compliance standards to protect your business and users.",
    },
    {
      question: "How do I get started?",
      answer: "You can book a free call to review your current website, identify gaps, and confirm whether our digital and web system is the right fit for your goals.",
    },
  ],
};

export const getServiceFAQData = (slug: string): FAQItem[] => {
  return SERVICES_FAQ_DATA[slug] || [];
};

