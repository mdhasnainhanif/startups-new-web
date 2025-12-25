import styles from "./HomenewBanner.module.css";
import Button from "../../Button";
import { ArrowRightIcon } from "../../icons";
import Container from "../../Container";
import Image from "next/image";

export interface HomenewBannerData {
  className?: string;
  heading: {
    part1: string;
    highlight1: string;
    highlight2: string;
    part2: string;
  };
  description: string;
  experienceBox: {
    title: string;
    items: string[];
  };
  cta: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
    className?: string;
  };
}

interface HomenewBannerProps {
  data?: HomenewBannerData;
}

const DEFAULT_DATA: HomenewBannerData = {
  heading: {
    part1: "Your ",
    highlight1: "AI-Powered",
    highlight2: "Design",
    part2: " Team Ready From Day One",
  },
  description:
    "Everything your business needs to look professional, trusted, and ready to serve — handled by your own design team powered by AI and real experts",
  experienceBox: {
    title: "Experience Box – Your Design Team's Expertise",
    items: [
      "2,500+ full brand kits created for local businesses",
      "40+ years combined experience in business design",
      "Specialists for branding, social, print, website, and ads",
      "Design systems used by real customers in 15+ industries",
      "Trained in AI, modern design tools, and high-conversion branding",
    ],
  },
  cta: {
    text: "Book a Free Call to See How It Works",
    href: "#",
  },
  image: {
    src: "/assets/images/designer/banner.webp",
    alt: "AI Design Team Character",
    className: "designerBanner",
  },
};

const HomenewBanner = ({ data = DEFAULT_DATA }: HomenewBannerProps) => {
  return (
    <section
      className={`sectionPadding relative ${styles.extraPaddingTop} ${styles.HomenewBanner} ${data.className}`}
    >
      <Container maxWidth="xl">
        <div className={`${styles.row} md:pt-20`}>
          <div className={`${styles.colLeft} sectionHeading`}>
            <h1 className="mb-4 text-white">
              {data.heading.part1}
              <span className="text-[#0fdac2]">{data.heading.highlight1}</span>{" "}
              <span className="text-[#0fdac2]">{data.heading.highlight2}</span>{" "}
              {data.heading.part2}
              <br className="hidden md:block" />
            </h1>

            <p className="text-white text-lg mb-6">
              {data.description}
            </p>

            <div
              className={`${styles.experienceBox} p-6 rounded-lg shadow-sm mb-6`}
            >
              <h3 className="text-xl font-semibold text-[#0fdac2] mb-4">
                {data.experienceBox.title}
              </h3>
              <ul className="space-y-2 text-white list-none ">
                {data.experienceBox.items.map((item, index) => (
                  <li key={index} className={styles.checkItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href={data.cta.href}
              variant="green"
              icon={<ArrowRightIcon style={{ fill: "#000" }} />}
              iconPosition="right"
            >
              {data.cta.text}
            </Button>
          </div>

          <div className={styles.colRight}>
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={800}
              height={800}
              fetchPriority="high"
              quality={85}
              className={`w-full ${styles.homenewbanner1} ${data.image.className}`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomenewBanner;
