'use client';

import Image from 'next/image';
import Container from '../../Container';
import { TOOLS_TRAINED_DATA } from '../../../data/Page2';
import styles from './ToolsTrained.module.css';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { useState } from 'react';
import CalendlyPopup from '../../CalendlyPopup/CalendlyPopup';

const ToolsTrained = () => {
  const [isCalendlyPopupOpen, setIsCalendlyPopupOpen] = useState(false);
  return (
    <section className={`sectionPadding bg-[#020016] ${styles.section}`}>
      <Container maxWidth="xl">
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto sectionHeading forH2">
            <h2>
              <span className="text-white">{TOOLS_TRAINED_DATA.headline.part1}</span>
              <span className="text-[#0fdac2]">{TOOLS_TRAINED_DATA.headline.part2}</span>
              <span className="text-white">{TOOLS_TRAINED_DATA.headline.part3}</span>
            </h2>
            <div className="flex flex-col gap-2 mt-7">
              {TOOLS_TRAINED_DATA.description.map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl text-white leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
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
          <div className="flex justify-center mt-8 mx-auto">
            <Button
              variant="green"
              className='w-fit'
              size="lg"
              href="#"
              icon={<ArrowRightIcon style={{ fill: '#000' }} />}
              iconPosition="right"
              onClick={() => setIsCalendlyPopupOpen(true)}
            >
              Book a Free Call To See How it works
            </Button>
          </div>
        </div>
      </Container>
      <CalendlyPopup
        isOpen={isCalendlyPopupOpen}
        onClose={() => setIsCalendlyPopupOpen(false)}
        calLink="inhouse-team-loexw9/30min"
        layout="month_view"
      />
    </section>
  );
};

export default ToolsTrained;

