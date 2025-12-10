"use client";

import Container from "../Container";
import { Section } from "../ui/Section";
import { MicroCTAData } from "../../data/contentWriting";
import Button from "../Button";
import { ArrowRightIcon } from "../icons";

interface CWMicroCTAProps {
  data: MicroCTAData;
}

export function CWMicroCTA({ data }: CWMicroCTAProps) {
  return (
    <Section variant="darker" className="py-12 border-t border-[#2f2a63]/50">
      <Container maxWidth="sxl">
        <div className="text-center">
          <p className="text-lg text-white mb-4">
            {data.text}
          </p>
          <Button
            href="#get-started"
            variant="purple"
            icon={<ArrowRightIcon style={{ fill: "#fff" }} />}
            iconPosition="right"
          >
            {data.cta}
          </Button>
        </div>
      </Container>
    </Section>
  );
}

