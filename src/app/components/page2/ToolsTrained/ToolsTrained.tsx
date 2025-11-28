'use client';

import Image from 'next/image';
import Container from '../../Container';
import { TOOLS_TRAINED_DATA } from '../../../data/Page2';

const ToolsTrained = () => {
  return (
    <section className="sectionPadding bg-[#020016]">
      <Container maxWidth="xl">
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">{TOOLS_TRAINED_DATA.headline.part1}</span>
              <span className="text-[#0fdac2]">{TOOLS_TRAINED_DATA.headline.part2}</span>
              <span className="text-white">{TOOLS_TRAINED_DATA.headline.part3}</span>
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {TOOLS_TRAINED_DATA.description}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center mt-8">
            <div className="relative w-full max-w-4xl">
              <Image
                src={TOOLS_TRAINED_DATA.image}
                alt="Growth Manager Tools"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ToolsTrained;

