"use client";
import React from "react";
import styles from "./ContactCta.module.css";

type BtnType = {
  label: string;
  icon: string;        // left icon (main)
  link: string;
  iconRight?: string;  // optional right icon
};

interface ContactCtaProps {
  title: string;
  highlight: string;
  description: string;
  buttons: BtnType[];
}

const ContactCta: React.FC<ContactCtaProps> = ({
  title,
  highlight,
  description,
  buttons,
}) => {
  return (
    <section className="sectionPadding">
      <div
        className={`${styles.ctaBox} max-w-4xl mx-auto rounded-2xl px-8 py-12 text-center relative`}
      >
        {/* Heading */}
        <h2 className="text-5xl font-bold text-white mb-4">
          {title} <span className="text-teal-400">{highlight}</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 z-10 relative">
          {buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.link}
              className="flex items-center gap-2 bg-[#181339] hover:bg-[#643bff] transition-all duration-300 px-6 py-3 rounded-full font-medium text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Left icon image */}
              <img
                src={btn.icon}
                alt={btn.label}
                className="w-5 h-5 object-contain"
              />

              {/* Button label */}
              <span>{btn.label}</span>

              {/* Optional Right icon */}
              {btn.iconRight && (
                <img
                  src={btn.iconRight}
                  alt=""
                  className="w-5 h-5 object-contain ml-2"
                />
              )}
            </a>
          ))}
        </div>

        {/* Floating Rockets */}
        <img
          src="/assets/images/rocket1.webp"
          className={`${styles.rocket1} z-0`}
        />
        <img
          src="/assets/images/rocket1.webp"
          className={`${styles.rocket2} z-0`}
        />
      </div>
    </section>
  );
};

export default ContactCta;
