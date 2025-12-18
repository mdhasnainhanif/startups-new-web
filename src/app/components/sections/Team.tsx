"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { TeamData } from "../../data/webDevelopment";

interface TeamProps {
  data: TeamData;
}

export function Team({ data }: TeamProps) {
  return (
    <Section variant="darker" className="sectionPadding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 py-16">
          <div className="sectionHeading">
            <h2>
              {data.heading}
            </h2>
          </div>
          <p className="text-lg text-white/80">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {data.team.map((member, i) => (
            <div
              key={i}
              className="bg-[#1c1949] rounded-xl p-6 border border-[#2f2a63] group hover:border-primary/50 transition-all duration-300 w-full"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <span className="font-bold text-xl text-primary">{member.initials}</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              <p className="text-sm text-white/70 text-left leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-16">
          {data.stats.map((stat, i) => (
            <div key={i} className="bg-[#1c1949] rounded-xl p-6 text-center border border-[#2f2a63]">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📊</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

