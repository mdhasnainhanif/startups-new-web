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
      answer: "Yes. All work follows defined brand systems to ensure long term consistency.",
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
      answer: "Our marketing & advertising service covers end-to-end campaign execution   from strategy and messaging to ad creation, funnel setup, testing, optimization, and scaling. We focus on building systems that consistently attract qualified traffic, convert attention into leads, and turn spend into measurable revenue.",
    },
    {
      question: "How is this different from hiring an agency or freelancers?",
      answer: "Agencies move slow and lock you into rigid retainers. Freelancers lack consistency and ownership. Our system gives you a dedicated, always-on growth team that executes faster, tests continuously, and improves performance without long contracts or overhead.",
    },
    {
      question: "Who is this service best suited for?",
      answer: "This service is built for founders, startups, and growing businesses that want predictable lead flow and customer acquisition   without guessing, burning ad spend, or managing multiple vendors.",
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
      answer: "Performance improves by design. Every campaign runs inside a structured testing and optimization loop, allowing us to refine messaging, targeting, and funnels based on real data   not assumptions.",
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
      answer: "It's built for founders, startups, and growing businesses that need High performing websites to support acquisition, credibility, and scale   not just online presence.",
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
      answer: "Absolutely. Speed, structure, and SEO foundations are integrated during build   not patched in later.",
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
  "product-packaging": [
    {
      question: "What does your product & packaging design service include?",
      answer: "It includes packaging concepts, label design, layouts, print ready files, and scalable packaging systems.",
    },
    {
      question: "How is this different from hiring a packaging agency?",
      answer: "You get faster turnaround, flexible output, and consistent brand execution without long contracts or retainers.",
    },
    {
      question: "Who is this service best suited for?",
      answer: "Product brands, startups, and businesses launching or scaling physical products.",
    },
    {
      question: "How fast can packaging designs be delivered?",
      answer: "Initial concepts are often delivered within days, depending on complexity and SKUs.",
    },
    {
      question: "Do you handle multiple product variations?",
      answer: "Yes. Packaging systems are designed to scale across sizes, flavors, and variants.",
    },
    {
      question: "Will packaging stay consistent over time?",
      answer: "Yes. All designs follow defined brand systems for long term consistency.",
    },
    {
      question: "Are designs ready for printing and manufacturing?",
      answer: "Absolutely. Files are delivered in print-safe, production-ready formats.",
    },
    {
      question: "Are the assets legally safe to use?",
      answer: "Yes. All assets are fully licensed and commercial-safe.",
    },
    {
      question: "Can this support rebranding existing packaging?",
      answer: "Yes. We modernize and refine packaging without losing brand recognition.",
    },
    {
      question: "How do I get started?",
      answer: "Book a free call to review your product goals and see if our packaging system fits your needs.",
    },
  ],
  "environmental-event": [
    {
      question: "What does your corporate event design service include?",
      answer: "It includes stage visuals, signage, booths, badges, banners, screens, and complete event design systems.",
    },
    {
      question: "How is this different from event agencies?",
      answer: "You get faster delivery, flexible output, and consistent brand execution without large retainers.",
    },
    {
      question: "Who is this service best suited for?",
      answer: "Corporations, startups, and teams hosting conferences, expos, launches, or internal events.",
    },
    {
      question: "How fast can event designs be delivered?",
      answer: "Many assets are delivered within days, depending on event size and scope.",
    },
    {
      question: "Can this support recurring or annual events?",
      answer: "Yes. Event systems are designed for reuse and easy updates.",
    },
    {
      question: "Will event designs stay on brand?",
      answer: "Yes. All assets follow defined brand systems for long term consistency.",
    },
    {
      question: "Are designs ready for vendors and printers?",
      answer: "Absolutely. Files are delivered production-ready and vendor-friendly.",
    },
    {
      question: "Are assets legally safe to use?",
      answer: "Yes. All assets are fully licensed and commercial-safe.",
    },
    {
      question: "Can this support hybrid or virtual events?",
      answer: "Yes. Designs can be adapted for physical, hybrid, and virtual formats.",
    },
    {
      question: "How do I get started?",
      answer: "Book a free call to review your event goals and see if our design system fits your needs.",
    },
  ],
  "presentations": [
    {
      question: "What does your presentation design service include?",
      answer: "It includes slide structure, layout design, typography systems, charts, visuals, and reusable templates.",
    },
    {
      question: "How is this different from using slide templates?",
      answer: "Our decks are custom-built around your message, audience, and brand   not generic layouts.",
    },
    {
      question: "Who is this service best for?",
      answer: "Founders, sales teams, executives, and marketers who need presentations that persuade and perform.",
    },
    {
      question: "How fast can presentations be delivered?",
      answer: "Initial decks are often delivered within days, depending on scope and slide count.",
    },
    {
      question: "Do I need final content before starting?",
      answer: "No. We can design from outlines, drafts, or existing slides.",
    },
    {
      question: "Can decks be updated later?",
      answer: "Yes. Slides and templates are built for long term reuse and updates.",
    },
    {
      question: "Will presentations stay on brand?",
      answer: "Yes. All decks follow defined brand systems for consistency over time.",
    },
    {
      question: "Are presentations suitable for live and shared use?",
      answer: "Absolutely. Slides are optimized for presenting, sharing, and exporting.",
    },
    {
      question: "Are fonts and assets legally safe?",
      answer: "Yes. All assets used are fully licensed and commercial-safe.",
    },
    {
      question: "How do I get started?",
      answer: "Book a free call to review your presentation needs and see if our system fits your workflow.",
    },
  ],
  "ebooks-digital-report": [
    {
      question: "What does your eBook & report template service include?",
      answer: "It includes cover design, page layouts, typography systems, charts, tables, and reusable templates for future content.",
    },
    {
      question: "How is this different from using templates online?",
      answer: "Our templates are custom-built around your brand, content type, and audience   not generic layouts reused across industries.",
    },
    {
      question: "Who is this service best for?",
      answer: "Founders, marketers, and teams creating lead magnets, reports, guides, or educational content at scale.",
    },
    {
      question: "How fast can templates be delivered?",
      answer: "Initial layouts are often delivered within days, depending on scope and content length.",
    },
    {
      question: "Do I need finalized content before starting?",
      answer: "No. We can design using outlines or draft content and refine layouts as content is finalized.",
    },
    {
      question: "Can these templates be reused later?",
      answer: "Yes. Templates are built for long term use and easy updates.",
    },
    {
      question: "Will documents stay on brand over time?",
      answer: "Yes. All layouts follow defined brand systems to ensure consistency across future documents.",
    },
    {
      question: "Are documents suitable for print and digital use?",
      answer: "Absolutely. Templates are optimized for both digital distribution and professional printing.",
    },
    {
      question: "Are fonts and assets legally safe?",
      answer: "Yes. All assets used are fully licensed and commercial-safe.",
    },
    {
      question: "How do I get started?",
      answer: "Book a free call to review your content goals and see if our eBook and report system fits your needs.",
    },
  ],
  "illustration-artwork": [
    {
      question: "What types of illustration do you offer?",
      answer: "We create brand illustrations, editorial artwork, marketing visuals, product illustrations, icons, and custom artwork tailored to your brand style.",
    },
    {
      question: "Will the illustrations match our brand identity?",
      answer: "Yes. All artwork is created to align with your brand guidelines, tone, and visual direction.",
    },
    {
      question: "Are the illustrations completely original?",
      answer: "Yes. Every illustration is custom-created for your business   no stock or reused assets.",
    },
    {
      question: "Can illustrations be used across multiple platforms?",
      answer: "Absolutely. Assets are delivered in flexible formats suitable for digital, print, and motion use.",
    },
    {
      question: "How fast can illustrations be delivered?",
      answer: "Most initial illustrations are delivered within days, depending on complexity and scope.",
    },
    {
      question: "Can you adapt an existing illustration style?",
      answer: "Yes. We can match, refine, or evolve an existing style while keeping consistency intact.",
    },
    {
      question: "Are the assets commercially safe to use?",
      answer: "Yes. All artwork is created with full commercial usage rights.",
    },
    {
      question: "Can you create illustration systems for long term use?",
      answer: "Yes. We design scalable illustration systems that grow with your brand.",
    },
    {
      question: "Do you handle revisions and refinements?",
      answer: "Yes. Feedback and refinements are part of the process to ensure the final artwork fits perfectly.",
    },
    {
      question: "How do we get started?",
      answer: "Book a free call to discuss your illustration needs, visual direction, and goals.",
    },
  ],
  "motion-video": [
    {
      question: "What does your motion & video service include?",
      answer: "Our motion and video service includes scripting, storyboarding, animation, editing, sound design, and delivery optimized for ads, websites, and campaigns.",
    },
    {
      question: "How is this different from video agencies?",
      answer: "Instead of long timelines and high retainers, you get a system-driven team that produces faster, iterates smoothly, and delivers consistent results.",
    },
    {
      question: "Who is this service best suited for?",
      answer: "It's built for startups, founders, and growth teams that need video to explain, sell, and scale   not just look impressive.",
    },
    {
      question: "How fast can videos be delivered?",
      answer: "Many videos are delivered within days depending on scope. Short Form and ad creatives often move even faster.",
    },
    {
      question: "Do I need scripts or ideas beforehand?",
      answer: "No. We can work from rough ideas or create everything from scratch based on your goals and audience.",
    },
    {
      question: "Can this support ongoing ad creatives?",
      answer: "Yes. Many clients use this service to produce continuous ad, social, and campaign video content.",
    },
    {
      question: "Will videos stay on brand over time?",
      answer: "Yes. All motion assets follow defined brand systems to maintain consistency as output scales.",
    },
    {
      question: "Are videos optimized for paid ads and social platforms?",
      answer: "Absolutely. Aspect ratios, pacing, captions, and formats are tailored for each platform.",
    },
    {
      question: "Are the tools and assets legally safe?",
      answer: "Yes. All work is produced using fully licensed, commercial-safe tools and assets.",
    },
    {
      question: "How do I get started?",
      answer: "You can book a free call to review your current video needs, identify gaps, and confirm whether our motion and video system fits your goals.",
    },
  ],
  "print": [
    {
      question: "What types of print design do you offer?",
      answer: "We design business stationery, brochures, flyers, catalogs, packaging, labels, event materials, and custom print assets tailored to your brand and use case.",
    },
    {
      question: "Can you match our existing brand identity?",
      answer: "Yes. All print work follows your brand guidelines to ensure visual consistency across digital and physical touchpoints.",
    },
    {
      question: "Do you handle printing or just design?",
      answer: "We focus on design and provide press-ready files. We also guide you on formats, finishes, and printer specifications if needed.",
    },
    {
      question: "Is print suitable for startups and small businesses?",
      answer: "Absolutely. Print often builds trust fastest   especially in sales meetings, events, and physical brand interactions.",
    },
    {
      question: "How fast can print designs be delivered?",
      answer: "Most initial designs are delivered within days, depending on scope and complexity.",
    },
    {
      question: "Will files be ready for professional printing?",
      answer: "Yes. All files include correct bleed, margins, and color profiles required for production.",
    },
    {
      question: "Can you redesign existing print materials?",
      answer: "Yes. We can refine or modernize existing assets without breaking brand consistency.",
    },
    {
      question: "Are the assets commercially safe to use?",
      answer: "Yes. All designs use licensed fonts, assets, and tools suitable for commercial use.",
    },
    {
      question: "Can you design packaging and labels?",
      answer: "Yes. We design packaging and labels that align with your product positioning and brand tone.",
    },
    {
      question: "How do we get started?",
      answer: "Book a free call to discuss your print needs, review use cases, and see if our print service is the right fit.",
    },
  ],
};

export const getServiceFAQData = (slug: string): FAQItem[] => {
  return SERVICES_FAQ_DATA[slug] || [];
};

