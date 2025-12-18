'use client';

import React, { useState } from 'react';
import Container from '../Container';
import styles from './GuessWorkAdvertising.module.css';
import Button from '../Button';
import Image from 'next/image';
// import CreativeScore from '../CreativeScore/CreativeScore';

export interface GuessWorkAdvertisingData {
  heading: {
    part1: string;
    highlight: string;
    part2: string;
  };
  description: string;
  form: {
    placeholder: string;
    buttonText: string;
    buttonIcon?: React.ReactNode;
  };
  image: {
    src: string;
    alt: string;
  };
}

interface GuessWorkAdvertisingProps {
  data?: GuessWorkAdvertisingData;
}

const GUESS_WORK_ADVERTISING_DATA: GuessWorkAdvertisingData = {
  heading: {
    part1: 'Unlock Your  ',
    highlight: 'Growth',
    part2: ' Roadmap',
  },
  description:
    'Speak your heart out and get an actionable and clear plan built around your business. You’ll see what to focus on, what to fix, and what can push your growth faster. Your growth is now just a few taps away!',
  form: {
    placeholder: 'Enter Your Business Name',
    buttonText: 'Get Started',
    buttonIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
  image: {
    src: '/assets/images/guesswork.png',
    alt: 'Guesswork Advertising Analytics',
  },
};

const GuessWorkAdvertising = ({ data = GUESS_WORK_ADVERTISING_DATA }: GuessWorkAdvertisingProps) => {
  const [websiteLink, setWebsiteLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Website Link:', websiteLink);
  };

  const { heading, description, form, image } = data;

  return (
    <section
      className={`sectionPadding bg-gradient-to-br from-[#1a0b3f] via-[#05001a] to-[#020014] relative overflow-hidden ${styles.section}`}
    >
      <Container maxWidth="xl">
        <div className="flex flex-col items-center text-center sectionHeading forH2 mb-0">
          {/* Heading */}
          <h2>
            {heading.part1}
            <span className="text-[#0fdac2]">{heading.highlight}</span>
            {heading.part2}
          </h2>

          {/* Description */}
          <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-3xl mb-8 leading-relaxed">
            {description}
          </p>

          {/* Form Field */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mb-8"
          >
            <div className={`relative ${styles.inputWrapper} inputFieldWrapper`}>
              <input
                type="text"
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
                placeholder={form.placeholder}
                className={`w-full bg-[rgba(29,14,87,0.5)] border border-[rgba(100,59,255,0.3)] text-white placeholder:text-white/50 focus:outline-none focus:border-[#0fdac2] transition-all ${styles.inputField}`}
              />
              <Button
                variant="purple"
                size="lg"
                type="submit"
                className={`absolute inputFieldBtn right-1 md:right-2 top-1/2 -translate-y-1/2 px-4 md:px-6 py-2 md:py-3  rounded-4xl text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-1 md:gap-2 whitespace-nowrap text-sm md:text-base`}>
                {form.buttonText}
                {form.buttonIcon && (
                  <span className="inline-flex items-center">
                    {form.buttonIcon}
                  </span>
                )}
              </Button>
            </div>
          </form>

          {/* Infographic Images Grid */}
          <div className={`w-full`}>
            {/* <div className={styles.imageWrapper}>
              <Image 
                className="w-full h-auto" 
                src="/assets/images/infographic1.webp" 
                alt="Infographic 1" 
                width={650} 
                height={500} 
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image 
                className="w-full h-auto" 
                src="/assets/images/infographic2.webp" 
                alt="Infographic 2" 
                width={650} 
                height={500} 
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image 
                className="w-full h-auto" 
                src="/assets/images/infographic3.webp" 
                alt="Infographic 3" 
                width={650} 
                height={500} 
              />
            </div> */}
            <div className={styles.imageWrapper}>
              <Image 
                className="block mx-auto h-auto w-[90%]" 
                src="/assets/images/graph-image.webp" 
                alt="Infographic 4" 
                width={650} 
                height={500} 
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GuessWorkAdvertising;

