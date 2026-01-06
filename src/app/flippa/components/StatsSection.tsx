"use client";

import { TrendingUp, Clock, DollarSign, Users } from "./icons";
import { MotionDiv } from "./motion";
import { useCountUp } from "./use-count-up";
import { statsData } from "../../data/FlippaPageData";
import Container from "../../components/Container";

const iconMap: Record<string, typeof TrendingUp> = {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
};

const StatCard = ({ stat, index }: { stat: typeof statsData.stats[0]; index: number }) => {
  const { ref, formattedValue } = useCountUp({
    end: stat.value,
    duration: 2000,
    prefix: stat.prefix || "",
    suffix: stat.suffix || "",
    decimals: stat.decimals || 0,
  });

  const IconComponent = iconMap[stat.icon] || TrendingUp;
  
  return (
    <div
      ref={ref}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 text-center group hover:border-[var(--color-purple)]/50 transition-all duration-300 hover:shadow-lg"
    >
      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-[50%] bg-[#2e2277] flex items-center justify-center mx-auto mb-4 transition-colors">
          <img src={stat.icon} alt={stat.label} className="w-6 h-6 lg:w-7 lg:h-7" />
      </div>

      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-2">
        {formattedValue}
      </div>

      <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
        {stat.label}
      </h3>
      <p className="text-sm text-white/70">{stat.description}</p>

      <div className="absolute inset-0 rounded-2xl bg-[var(--color-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="sectionPadding bg-[var(--color-dark)]">
      <Container maxWidth="xl">
        <MotionDiv className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-4 block">
            {statsData.label}
          </span>
          <div className="sectionHeading">
            <h2>
              {statsData.title.main}{" "}
              <span className="text-[var(--color-primary)]">{statsData.title.highlight}</span>
            </h2>
          </div>
          <p className="text-lg text-white/80">{statsData.description}</p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {statsData.stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

