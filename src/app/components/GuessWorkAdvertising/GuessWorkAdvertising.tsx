'use client';

import React, { useState } from 'react';
import Container from '../Container';
import styles from './GuessWorkAdvertising.module.css';

interface GuessWorkAdvertisingData {
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

const GUESS_WORK_ADVERTISING_DATA: GuessWorkAdvertisingData = {
  heading: {
    part1: 'Take The ',
    highlight: 'Guesswork',
    part2: ' out of Advertising',
  },
  description:
    'Creative Score analyses your ads before launch, identifying weak creative, forecasting results, and helping enterprise teams improve output without increasing spend.',
  form: {
    placeholder: 'Enter Your Website Link',
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

const GuessWorkAdvertising = () => {
  const [websiteLink, setWebsiteLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Website Link:', websiteLink);
  };

  const { heading, description, form, image } = GUESS_WORK_ADVERTISING_DATA;

  return (
    <section
      className={`sectionPadding bg-gradient-to-br from-[#1a0b3f] via-[#05001a] to-[#020014] relative overflow-hidden ${styles.section}`}
    >
      <Container maxWidth="xl">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
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
            <div className={`relative ${styles.inputWrapper}`}>
              <input
                type="text"
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
                placeholder={form.placeholder}
                className={`w-full px-6 py-4 pr-32 rounded-lg bg-[rgba(29,14,87,0.5)] border border-[rgba(100,59,255,0.3)] text-white placeholder:text-white/50 focus:outline-none focus:border-[#0fdac2] transition-all ${styles.inputField}`}
              />
              <button
                type="submit"
                className={`absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#643bff] to-[#7c5aff] text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 whitespace-nowrap ${styles.submitButton}`}
              >
                {form.buttonText}
                {form.buttonIcon && (
                  <span className="inline-flex items-center">
                    {form.buttonIcon}
                  </span>
                )}
              </button>
            </div>
          </form>

          {/* Image */}
          <div className="w-full max-w-5xl">
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-auto object-contain ${styles.image}`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GuessWorkAdvertising;

