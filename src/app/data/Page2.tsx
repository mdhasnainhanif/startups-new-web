export interface HomeBannerData {
    headline: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    features: string[];
    cta: {
      text: string;
      href: string;
    };
    video: {
      thumbnail: string;
      videoUrl: string;
      videoTitle: string;
    };
    review: {
      logo: string;
      companyName: string;
      rating: string;
      reviewCount: string;
    };
  }
  
  export const HOME_BANNER_DATA: HomeBannerData = {
    headline: {
      part1: 'Finally — Someone Who Handles the ',
      part2: 'Digital Side',
      part3: ' of your Business for You',
    },
    description:
      'Your Key Growth Manager keeps your business visible, organized, and running online — so you don\'t have to chase agencies, juggle tools, or guess what\'s working.',
    features: [
      'Trained in Google, Meta, and AI tools',
      'Backed by Startup Advisory\'s expert team',
      'One flat monthly cost — no extras, no surprises',
    ],
    cta: {
      text: 'Book a Free Call to See How It Works',
      href: '#',
    },
    video: {
      thumbnail: '/assets/images/man.jpg',
      videoUrl: '/assets/images/videoplayback.mp4',
      videoTitle: 'Pareto Talent Demo',
    },
    review: {
      logo: '/assets/images/google-image.png',
      companyName: 'Pareto Talent',
      rating: '5.0',
      reviewCount: '84 Google reviews',
    },
  };

  export interface GrowthManagerData {
    headline: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    subHeading: string;
    features: string[];
    conclusion: string;
    cta: {
      text: string;
      href: string;
    };
    calendly: {
      url: string;
      duration: string;
      date: string;
      timezone: string;
    };
  }

  export const GROWTH_MANAGER_DATA: GrowthManagerData = {
    headline: {
      part1: 'What a Key ',
      part2: 'Growth Manager',
      part3: ' Handles',
    },
    description:
      'Your Key Growth Manager takes full charge of your digital presence — setup, upkeep, and growth',
    subHeading: "Here's what they handle every week:",
    features: [
      'Keeping your website and Google listing up to date',
      'Managing your social media and online ads',
      'Tracking results and showing you what\'s working',
      'Organizing reviews and customer messages',
      'Automating small digital tasks that eat up your time',
    ],
    conclusion:
      'They work like an online operations manager — focused on keeping your business steady, visible, and professional online.',
    cta: {
      text: 'See What Your Growth Manager Can Do',
      href: '#',
    },
    calendly: {
      url: 'https://calendly.com/md-hasnain-developer/30min?month=2025-11',
      duration: '45 Mins',
      date: 'Thu, Nov 13, 2025',
      timezone: 'Asia/Karachi (GMT+5)',
    },
  };

  export interface TheProblemData {
    headline: {
      part1: string;
      part2: string;
    };
    paragraphs: Array<{
      text: string;
      highlights?: Array<{
        text: string;
        position: number;
      }>;
    }>;
    cta: {
      text: string;
      href: string;
    };
  }

  export const THE_PROBLEM_DATA: TheProblemData = {
    headline: {
      part1: 'The ',
      part2: 'Problem',
    },
    paragraphs: [
      {
        text: "Let's be honest — you didn't start your business to manage websites or ads.",
      },
      {
        text: "But these days, everything runs online. Customers look you up before they call. Reviews decide who gets picked. A single bad setup can make you invisible overnight.",
        highlights: [
          { text: 'online', position: 30 },
        ],
      },
      {
        text: 'You\'ve probably said this before: "I just need someone who can handle all that digital stuff." That\'s exactly what a Key Growth Manager does.',
        highlights: [
          { text: 'digital stuff', position: 75 },
          { text: 'Key Growth Manager', position: 120 },
        ],
      },
    ],
    cta: {
      text: 'See What Your Growth Manager Can Do',
      href: '#',
    },
  };

  export interface WhyItWorksData {
    leftSection: {
      headline: {
        part1: string;
        part2: string;
      };
      paragraphs: string[];
    };
    rightSection: {
      headline: string;
      items: Array<{
        text: string;
        icon: string;
      }>;
    };
  }

  export const WHY_IT_WORKS_DATA: WhyItWorksData = {
    leftSection: {
      headline: {
        part1: 'Why It ',
        part2: 'Works',
      },
      paragraphs: [
        "We built this service because most business owners don't need a full marketing agency — they just need a reliable person who gets it done",
        'No guessing. No wasted spend. Just one person who handles your digital growth while you handle the business',
      ],
    },
    rightSection: {
      headline: 'Every Key Growth Manager is:',
      items: [
        {
          text: 'Pre-trained in digital marketing tools used by small businesses',
          icon: '/assets/images/globe1.png',
        },
        {
          text: 'Backed by experts who monitor performance and strategy',
          icon: '/assets/images/globe1.png',
        },
        {
          text: 'Dedicated to one goal — keeping your business ahead online',
          icon: '/assets/images/globe1.png',
        },
      ],
    },
  };

  export interface TheGuaranteesData {
    headline: {
      part1: string;
      part2: string;
    };
    cards: Array<{
      number: string;
      heading: string;
      description: string;
    }>;
    cta: {
      text: string;
      href: string;
    };
  }

  export const THE_GUARANTEES_DATA: TheGuaranteesData = {
    headline: {
      part1: 'The ',
      part2: 'Guarantees',
    },
    cards: [
      {
        number: '01',
        heading: '30-Day Performance Promise',
        description: "If your digital setup isn't fixed and running better in the first month, the next month is on us.",
      },
      {
        number: '02',
        heading: 'Always Covered',
        description: "If you ever need a replacement Growth Manager, we'll handle it at no cost.",
      },
      {
        number: '03',
        heading: 'Founder Support',
        description: "If something's not right, one of our founders will step in to fix it personally.",
      },
    ],
    cta: {
      text: 'Start Risk-Free',
      href: '#',
    },
  };

  export interface CreatedByEntrepreneursData {
    image: string;
    headline: {
      part1: string;
      part2: string;
      part3: string;
      part4: string;
      highlight1: string;
      part5: string;
      highlight2: string;
      part6: string;
    };
    description: string;
  }

  export const CREATED_BY_ENTREPRENEURS_DATA: CreatedByEntrepreneursData = {
    image: '/assets/images/entrepreneurs.png',
    headline: {
      part1: 'Created By ',
      part2: 'Entrepreneurs',
      part3: ' Who Understand ',
      part4: 'The ',
      highlight1: 'Digital',
      part5: ' Side Of ',
      highlight2: 'Business',
      part6: '',
    },
    description:
      "Startup Advisory was created by entrepreneurs who know how hard it is to run a business and keep the digital side under control at the same time. We built the Key Growth Manager program so owners never have to guess about websites, social media, or online systems again. Your Growth Manager gives you the kind of digital support we wished we had when we were growing our own companies.",
  };

  export interface WhyChooseUsData {
    headline: {
      part1: string;
      part2: string;
    };
    subtitle: string;
    cards: Array<{
      label: string;
      title: string;
      description: string;
      backgroundImage?: string;
      image?: string;
    }>;
  }

  export const WHY_CHOOSE_US_DATA: WhyChooseUsData = {
    headline: {
      part1: 'Why Business Owners Choose ',
      part2: 'Startup Advisory',
    },
    subtitle:
      'Startup Advisory is for owners who want steady growth but do not have time to manage websites, social channels, and digital tools. A Key Growth Manager takes over that work so your business looks professional and stays organised online.',
    cards: [
      {
        label: 'Vetting',
        title: 'Work With Top Tier Growth Managers',
        description:
          'Every Growth Manager completes structured training in digital tools, website basics, ads setup, design coordination, automation, and reporting before working with clients',
        backgroundImage: '/assets/images/businessdot.png',
        image: '/assets/images/businessclient.png',
      },
      {
        label: 'AI',
        title: 'AI Enabled Growth Managers',
        description:
          'Your Growth Manager uses modern AI tools to plan, organise, and improve your digital systems faster so you get clean, reliable output every week',
        image: '/assets/images/businessowner1.png',
      },
    ],
  };

  export interface ReplacementGuaranteeData {
    headline: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    cta: {
      text: string;
      href: string;
    };
    image: string;
  }

  export const REPLACEMENT_GUARANTEE_DATA: ReplacementGuaranteeData = {
    headline: {
      part1: 'Lifetime ',
      part2: 'Replacement ',
      part3: 'Guarantee',
    },
    description:
      "If at any time you feel your Growth Manager is not the right fit, we will replace them at no extra cost. You do not deal with rehiring, retraining, or gaps in support. Your digital side always stays covered.",
    cta: {
      text: 'Book Free Strategy Call',
      href: '#',
    },
    image: '/assets/images/replacement.png',
  };

  export interface SupportAndTrainingData {
    cards: Array<{
      label: string;
      heading: string;
      description: string;
      image: string;
    }>;
  }

  export const SUPPORT_AND_TRAINING_DATA: SupportAndTrainingData = {
    cards: [
      {
        label: 'Support',
        heading: 'Weekly Support And Ongoing Training',
        description:
          'You and your Growth Manager receive weekly guidance so your online presence keeps improving. You get clear updates and simple reports without having to manage the process yourself',
        image: '/assets/images/image1.png',
      },
      {
        label: 'Education',
        heading: 'Ongoing Training & Community',
        description:
          'Growth Managers are part of an internal training community where they learn new tools, workflows, and best practices. This keeps your digital systems current and effective',
        image: '/assets/images/image2.png',
      },
    ],
  };

  export interface ToolsTrainedData {
    headline: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string;
    image: string;
  }

  export const TOOLS_TRAINED_DATA: ToolsTrainedData = {
    headline: {
      part1: 'Tools Your ',
      part2: 'Growth ',
      part3: 'Manager Is Trained On',
    },
    description:
      'Work With Growth Managers Trained On The Tools You Already Use Your Growth Manager is familiar with the common tools used by local businesses so nothing starts from zero. Examples include Google Business, Meta Ads, Canva, ClickUp, HubSpot, ChatGPT, Google Drive, Zapier, HighLevel, YouTube, Gmail, analytics platforms, calendars, and website builders',
    image: '/assets/images/growthmanager.png',
  };

  export interface ThreeEasyStepsData {
    headline: {
      part1: string;
      part2: string;
    };
    cards: Array<{
      number: string;
      heading: string;
      headingParts?: {
        part1: string;
        part2: string;
        part3: string;
      };
      description: string;
    }>;
    cta: {
      text: string;
      href: string;
    };
  }

  export const THREE_EASY_STEPS_DATA: ThreeEasyStepsData = {
    headline: {
      part1: 'Start Delegating in ',
      part2: 'Three Easy Steps!',
    },
    cards: [
      {
        number: '01',
        heading: 'Book Your Free Growth Call',
        description:
          'Schedule a short call so we can review the digital side of your business and see what is missing. Together we outline what needs to be fixed and how a Key Growth Manager will take it over.',
      },
      {
        number: '02',
        heading: 'Meet Your Key Growth Manager',
        headingParts: {
          part1: 'Meet Your ',
          part2: 'Key Growth ',
          part3: 'Manager',
        },
        description:
          'We assign you a trained Growth Manager who reviews your tools, website, and online presence, then creates a clear action plan.',
      },
      {
        number: '03',
        heading: 'Let Them Run The Digital Side',
        description:
          'Your Growth Manager starts handling updates, tracking, messages, and coordination across your digital platforms. You focus on customers while they keep everything online organised and moving',
      },
    ],
    cta: {
      text: 'Book Free Strategy Call',
      href: '#',
    },
  };

  export interface TechnologiesPage2Data {
    heading: string;
    description: string;
    subDescription: string;
  }

  export const TECHNOLOGIES_PAGE2_DATA: TechnologiesPage2Data = {
    heading: 'Your [Growth Manager] Can Do More Than You Think',
    description:
      'We help you and your Growth Manager with ideas and workflows so you always get full value from their support and protect your time',
    subDescription: 'Common Areas They Can Handle Include:',
  };
  
  