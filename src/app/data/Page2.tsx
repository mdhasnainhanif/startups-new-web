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
      part1: 'Your Business Runs Better When Someone Owns the ',
      part2: 'Day-to-Day Push',
      part3: '',
    },
    description:
      'Every founder hits a point where the workload piles up, the pace slows down, and the business starts waiting on you. A Key Growth Manager steps in to carry that weight — driving progress, clearing blockages, and keeping the machine in motion while you stay focused on the real work.',
    features: [
      'Built to take pressure off you',
      'Supported by a full team that keeps things moving',
      'Simple monthly plan, built for real businesses',
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
      'A Key Growth Manager steps in where your time disappears — picking up the work you keep postponing, the tasks that slow your pace, and the decisions that keep stacking on your plate.',
    subHeading: "Here's what they drive each week:",
    features: [
      'Clearing your backlog before it turns into clutter',
      'Keeping your moving tasks from falling through the cracks',
      'Watching your numbers so you aren\'t guessing anymore',
      'Keeping communication tight, quick, and under control',
      'Streamlining the small repetitive work that clogs your day',
    ],
    conclusion:
      'They operate like the steady hand behind your business — keeping the flow clean, the pace consistent, and your head free from the noise that holds you back.',
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
        text: 'Most owners don\'t get stuck because they\'re bad at business — they get stuck because they\'re buried in things that steal their time, energy, and focus.',
      },
      {
        text: 'Your day fills up with tiny decisions, half-finished tasks, open loops, and "I\'ll handle it later" moments that slowly choke your momentum.',
      },
      {
        text: 'You end up reacting instead of moving. Fixing instead of growing. Catching up instead of leading.',
      },
      {
        text: 'You\'ve probably felt it: the constant pile-up, the silent pressure, the feeling that everything depends on you.',
      },
      {
        text: 'A Key Growth Manager steps in right there — taking weight off your shoulders and turning scattered chaos into steady movement again.',
        highlights: [
          { text: 'Key Growth Manager', position: 0 },
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
        'This system works because every business moves faster when someone is thinking one step ahead for you. Not guessing. Not reacting. Actually steering.',
        'The Key Growth Manager becomes the person who sees what you can\'t see while you\'re in the middle of the work — spotting slowdowns, closing loops, and keeping momentum alive without waiting for you to push.',
        'Not an agency. Not a freelancer. Not another tool you have to babysit. Just one person who knows your pace, understands your goals, and keeps your business moving with steady, everyday execution.',
      ],
    },
    rightSection: {
      headline: 'Every Key Growth Manager is:',
      items: [
        {
          text: 'Trained to think strategically, not just "do tasks"',
          icon: '/assets/images/globe1.png',
        },
        {
          text: 'Supported by a team that guards consistency and performance',
          icon: '/assets/images/globe1.png',
        },
        {
          text: 'Committed to keeping your business in forward motion, always',
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
        heading: 'Momentum First, Always',
        description: 'If we don\'t get your workflow running smoother in the first month, your next month is free. No debate. No delay. We take the hit, not you.',
      },
      {
        number: '02',
        heading: 'You\'re Never Left Hanging',
        description: 'If your Growth Manager needs to be swapped, we replace them instantly — no gaps, no slowdowns, no extra cost. Your rhythm stays protected.',
      },
      {
        number: '03',
        heading: 'Direct Access When It Matters',
        description: 'If something feels off, a senior operator steps in and handles it personally. No tickets. No waiting. Just solutions that keep your business moving.',
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
    paragraphs: string[];
  }

  export const CREATED_BY_ENTREPRENEURS_DATA: CreatedByEntrepreneursData = {
    image: '/assets/images/entrepreneurs.webp',
    headline: {
      part1: 'Created By ',
      part2: 'Entrepreneurs',
      part3: ' Who Know ',
      part4: 'The ',
      highlight1: 'Pressure',
      part5: '',
      highlight2: '',
      part6: '',
    },
    paragraphs: [
      'Startup Advisory was built by founders who know exactly how it feels when the work stacks up faster than you can clear it.',
      'When you\'re running the business, putting out fires, and juggling a hundred moving parts — and the important things start slipping because there\'s just no one to hold the other side.',
      'We created the Key Growth Manager because we lived the same chaos. We needed someone who could step in, steady the pace, and keep the wheels turning while we focused on the real work.',
      'Now you get the kind of support we wished we had when we were trying to grow our own companies.',
    ],
  };

  export interface WhyChooseUsData {
    headline: {
      part1: string;
      part2: string;
    };
    paragraphs: string[];
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
    paragraphs: [
      'Startup Advisory is built for owners who want steady progress without drowning in the small stuff.',
      'They don\'t want to manage tasks, chase updates, or figure out what to fix next.',
      'They want someone who steps in, keeps things moving, and handles the work that always steals their time.',
      'A Key Growth Manager does exactly that — giving your business daily movement, clean execution, and the consistency you never get when you\'re doing everything alone.',
    ],
    cards: [
      {
        label: 'Vetting',
        title: 'Work With Top-Tier Growth Managers',
        description:
          'Your Growth Manager isn\'t here to "help out." They come in to organize, steady, and speed up the parts of your business that fall behind when things get busy. They think fast, move clean, and keep your daily operations running in a straight line — so you get reliable output every week without having to push, remind, or manage constantly.',
        backgroundImage: '/assets/images/businessdot.png',
        image: '/assets/images/businessclient.png',
      },
      {
        label: 'AI',
        title: 'AI-Enabled Growth Managers',
        description:
          'Your Growth Manager works faster because they use smart systems that take the slow work off their hands. Nothing for you to learn, nothing for you to set up — just cleaner tasks done quicker and a business that stays ahead instead of catching up. The result? Consistent output. Less waiting. More movement every single week.',
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
      'If at any point you feel your Growth Manager isn\'t the right fit, we replace them instantly — no delays, no downtime, no extra cost. You don\'t deal with hiring, retraining, or gaps in support. Your rhythm stays steady, your tasks stay handled, and your business keeps moving without interruption.',
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

  export interface ToolsTrainedData {
    headline: {
      part1: string;
      part2: string;
      part3: string;
    };
    description: string[];
    image: string;
  }

  export const TOOLS_TRAINED_DATA: ToolsTrainedData = {
    headline: {
      part1: 'Tools Your ',
      part2: 'Growth ',
      part3: 'Manager Is Trained On',
    },
    description: [
      'Work with Growth Managers who already know how to move inside the everyday tools most businesses live on.',
      'They step in ready — understanding how you track work, store files, manage tasks, communicate with customers, and keep things organized — so nothing starts slow and nothing needs explaining.',
      'Your Growth Manager plugs into your setup fast, keeps it clean, and makes it work smoother than before.',
    ],
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
      part2: 'Three Easy Steps',
    },
    cards: [
      {
        number: '01',
        heading: 'Talk With Us for a Quick Breakdown',
        description:
          'We walk through where your time is slipping, what\'s slowing your week, and what your Growth Manager will take off your plate. No pressure — just clarity.',
      },
      {
        number: '02',
        heading: 'Meet the Person Who\'ll Carry the Load',
        headingParts: {
          part1: 'Meet the Person Who\'ll ',
          part2: 'Carry the ',
          part3: 'Load',
        },
        description:
          'You\'re matched with a trained operator who studies how you work and builds a simple action plan to steady your pace.',
      },
      {
        number: '03',
        heading: 'Step Back and Let Them Take Over',
        description:
          'Your Growth Manager jumps in, handles the moving parts, and keeps everything flowing — while you stay focused on running the business, not running after tasks.',
      },
    ],
    cta: {
      text: 'Book Free Strategy Call',
      href: '#',
    },
  };

  export interface TechnologiesPage2Data {
    heading: string;
    description: string | string[];
    subDescription: string;
  }

  export const TECHNOLOGIES_PAGE2_DATA: TechnologiesPage2Data = {
    heading: 'Tools Your [Growth Manager] Is Trained On',
    description: [
      'Work with Growth Managers who already know how to move inside the everyday tools most businesses live on.',
      'They step in ready — understanding how you track work, store files, manage tasks, communicate with customers, and keep things organized — so nothing starts slow and nothing needs explaining.',
      'Your Growth Manager plugs into your setup fast, keeps it clean, and makes it work smoother than before.',
    ],
    subDescription: '',
  };
  
  