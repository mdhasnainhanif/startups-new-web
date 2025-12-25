export interface ProfessionalDesignData {
  heading: {
    part1: string;
    part2: string;
    className?: {
      part1?: string;
      part2?: string;
      container?: string;
    };
  };
  description: {
    text1: string;
    text2?: string;
    highlight: string;
    className?: {
      text?: string;
      text1Highlight?: string;
      highlight?: string;
    };
  };
  factsHeading: {
    text: string;
    className?: string;
  };
  factsList: Array<{
    text: string;
    className?: string;
  }>;
  bottomHeading: {
    part1: string;
    part2: string;
    part3: string;
    className?: {
      part1?: string;
      part2?: string;
      part3?: string;
      container?: string;
    };
  };
  rightSectionFact: Array<{
    text: string;
    className?: string;
  }>;
  videoOverlayText: string;
  video: {
    videoUrl: string;
    videoTitle: string;
  };
  videoImage: {
    src: string;
    alt: string;
    className?: string;
  };
  className?: {
    section?: string;
    contentWrapper?: string;
    leftSection?: string;
    rightSectionMain?: string;
    videoMain?: string;
    videoImageWrapper?: string;
    playButtonContainer?: string;
    playButton?: string;
    playIcon?: string;
    backgroundDecoration?: string;
  };
}

export const PROFESSIONAL_DESIGN_DATA: ProfessionalDesignData = {
  heading: {
    part1: "Good Design",
    part2: " Is Not Decoration. It is A Financial Driver.",
    className: {
      part1: "headingPart1",
      part2: "headingPart2",
      container: "heading",
    },
  },
  description: {
    text1: "Customers judge your business in the first 3 seconds. They judge your professionalism, pricing, and reliability by how your brand looks. Strong design creates instant trust, higher perceived value, and more people choosing you over a ",
    highlight: "competitor",
    className: {
      text: "description",
      highlight: "descriptionHighlight",
    },
  },
  factsHeading: {
    text: "Facts About U.S. Local Businesses Benefiting From Design:",
    className: "factsHeading",
  },
  factsList: [
    {
      text: "Local service businesses with updated branding see an average revenue increase of 15-25 percent within the first 12 months",
      className: "factsListItem",
    },
    {
      text: "Contractors who refreshed their brand identity reported paying 20-40 percent less in ad spend for the same number of leads.",
      className: "factsListItem",
    },
    {
      text: "Local businesses with consistent visual design closed up to 30 percent more jobs.",
      className: "factsListItem",
    },
    {
      text: "Home-service businesses using professional design saw a 2-3x improvement in lead conversion after updating visuals.",
      className: "factsListItem",
    },
    {
      text: "Companies that invested in brand design increased their lifetime customer value by 28 percent.",
      className: "factsListItem",
    },
  ],
  bottomHeading: {
    part1: "Your ",
    part2: "Design Team",
    part3: " Builds a Brand That Signals Credibility, & Business",
    className: {
      part1: "bottomHeadingPart1",
      part2: "bottomHeadingPart2",
      part3: "bottomHeadingPart3",
      container: "bottomHeading",
    },
  },
  rightSectionFact: [],
  videoOverlayText:
    "Your Smart AI Business Team operate a behind-the-scenes planning promotions, creating visuals.",
  video: {
    videoUrl: "YOUR_VIDEO_URL_HERE",
    videoTitle: "Smart AI Business Team Demo",
  },
  videoImage: {
    src: "/assets/images/man.png",
    alt: "Video Thumbnail",
    className: "videoImage",
  },
  className: {
    section: "section",
    contentWrapper: "contentWrapper",
    leftSection: "leftSection",
    rightSectionMain: "rightSectionMain",
    videoMain: "videoMain",
    videoImageWrapper: "videoImageWrapper",
    playButtonContainer: "playButtonContainer",
    playButton: "playButton",
    playIcon: "playIcon",
    backgroundDecoration: "backgroundDecoration",
  },
};

