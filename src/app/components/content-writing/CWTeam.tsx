"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { TeamData } from "../../data/contentWriting";

interface CWTeamProps {
  data: TeamData;
}

export function CWTeam({ data }: CWTeamProps) {
  return (
    <Section variant="dark" className="sectionPadding">
      <Container maxWidth="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6 mx-auto">
            <span className="text-sm text-primary">{data.badge}</span>
          </div>
          <div className="sectionHeading">
            <h2>
              {data.heading}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {data.team.map((member, index) => (
            <div
              key={index}
              className="bg-[#1c1949] rounded-xl p-6 text-center border border-[#2f2a63] group hover:border-primary/50 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <span className="font-bold text-xl text-primary">{member.initials}</span>
              </div>
              <h4 className="font-semibold text-lg text-white mb-1">{member.name}</h4>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              <p className="text-xs text-white/70">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-16">
          {data.stats.map((stat, index) => (
            <div key={index} className="bg-[#1c1949] rounded-xl p-6 text-center border border-[#2f2a63]">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📊</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0fdac2] mb-2">{stat.value}</p>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

