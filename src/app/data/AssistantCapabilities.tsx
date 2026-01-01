export interface AssistantCapability {
  id: string;
  icon: string; // SVG path or icon name
  title: string;
  description: string;
}

export interface AssistantCapabilitiesData {
  heading: string;
  description: string;
  capabilities: AssistantCapability[];
}

export const ASSISTANT_CAPABILITIES_DATA: AssistantCapabilitiesData = {
  heading: "Your [Growth Manager] Handles Far More Than You [Expect]",
  description: "We guide your Growth Manager with clear workflows and strong direction — so you always get higher output, tighter execution, and more time back in your week.",
  capabilities: [
    {
      id: "daily-flow-control",
      icon: "/assets/images/key-growth/slider-icons/1.svg",
      title: "Daily Flow Control",
      description: "They make sure your tasks don't pile up, your day isn't chaotic, and nothing important gets lost in the shuffle.",
    },
    {
      id: "content-communication",
      icon: "/assets/images/key-growth/slider-icons/2.svg",
      title: "Content & Communication Rhythm",
      description: "Your weekly updates, posts, messages, and follow-ups stay on track without you having to remind anyone.",
    },
    {
      id: "schedule-planning",
      icon: "/assets/images/key-growth/slider-icons/3.svg",
      title: "Schedule & Planning Support",
      description: "Your meetings, priorities, and commitments stay organized — and your following steps are already mapped out.",
    },
    {
      id: "process-cleanup",
      icon: "/assets/images/key-growth/slider-icons/4.svg",
      title: "Process Cleanup",
      description: "They streamline the repetitive steps in your workflow so you don't waste time fixing the same problems again.",
    },
    {
      id: "documentation-file-order",
      icon: "/assets/images/key-growth/slider-icons/5.svg",
      title: "Documentation & File Order",
      description: "Your important info, notes, folders, and resources stay sorted, labeled, and easy to find.",
    },
    {
      id: "market-competitor-checks",
      icon: "/assets/images/key-growth/slider-icons/6.svg",
      title: "Market & Competitor Checks",
      description: "You get simple, useful insights — not random data — so you always know what's happening around your business.",
    },
    {
      id: "offer-customer-support",
      icon: "/assets/images/key-growth/slider-icons/7.svg",
      title: "Offer & Customer Support Alignment",
      description: "They help you keep your offers clear, your customers updated, and your business steady.",
    },
    {
      id: "financial-organization",
      icon: "/assets/images/key-growth/slider-icons/8.svg",
      title: "Financial Organization Support",
      description: "Your recurring numbers, summaries, and weekly snapshots stay neat—so you know where things stand without digging.",
    },
    {
      id: "task-automation",
      icon: "/assets/images/key-growth/slider-icons/9.svg",
      title: "Task Automation & Workflow",
      description: "Automate repetitive tasks and streamline your daily workflow to save time and increase productivity.",
    },
    {
      id: "client-relationship",
      icon: "/assets/images/key-growth/slider-icons/10.svg",
      title: "Client Relationship Management",
      description: "Maintain strong relationships with your clients through timely communication and personalized follow-ups.",
    },
    {
      id: "analytics-reporting",
      icon: "/assets/images/key-growth/slider-icons/11.svg",
      title: "Analytics & Performance Reporting",
      description: "Get detailed insights and reports on your business performance to make data-driven decisions.",
    },
    {
      id: "analytics-reporting",
      icon: "/assets/images/key-growth/slider-icons/12.svg",
      title: "Social Media Handling and Management",
      description: "Get detailed insights and reports on your business performance to make data-driven decisions.",
    },
    {
      id: "analytics-reporting",
      icon: "/assets/images/key-growth/slider-icons/13.svg",
      title: "Tele sales and Marketing",
      description: "Get detailed insights and reports on your business performance to make data-driven decisions.",
    },
  ],
};