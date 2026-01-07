"use client";

import Image from "next/image";
import { OurJourneyProps } from "../../types/types";
import Container from "../../components/Container";
import styles from "./OurJourney.module.css";

export default function OurJourney({ items, className = "" }: OurJourneyProps) {
  const steps = items.map((item) => ({
    id: item.id,
    num: item.number,
    title: item.title,
    subtitle: item.subtitle,
    desc: item.description,
    side: item.imagePosition || "right",
    icon: item.icon as string,
    points: item.points || [],
  }));

  return (
    <section className={`${styles.wrap} ${className} sectionPadding pt-0`}>
      <Container className="xl">
      {/* <div className="sectionHeading lg:mb-30 mb-6">
        <h2
          className="mx-auto max-w-7xl text-3xl text-center font-semibold leading-tight tracking-tight text-white 
        sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Our <span className="text-[#0fdac2]">Journey</span>
        </h2>
      </div> */}
      <div className={styles.listMain}>
      <div className={styles.list}>
        {steps.map((s, i) => (
          <div
            key={s.id}
            className={`${styles.item} ${styles[s.side]} ${
              styles[`line0${i + 1}`]
            }`}
            data-side={s.side}
          >
            <div className={`${styles.ring} ${styles[s.side]}`}>
              <div className={styles.ringInner}>
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={120}
                  height={120}
                  className={styles.iconImage}
                  key={s.id}
                  unoptimized
                />
              </div>
            </div>

            <div className={`${styles.content}`}>
              <div className={styles.contentHeader}>
                <span className={styles.badge}>{s.num}</span>
                <h3 className={styles.title}>{s.title}</h3>
              </div>
              <h4 className={styles.subtitle}>{s.subtitle}</h4>
              <p className={styles.desc}>{s.desc}</p>
              {s.points && s.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {s.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0fdac2] mt-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {i < steps.length - 1 && (
              <div
                className={`${styles.line} ${styles[`line_${s.side}`]}`}
                aria-hidden
              >
                <span className={styles.lineTrack} />
                <span className={styles.lineFill} />
                <span className={styles.lineEdgeGlow} />
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      </Container>
    </section>
  );
}
