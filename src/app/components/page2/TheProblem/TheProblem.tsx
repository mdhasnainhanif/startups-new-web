'use client';
import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { THE_PROBLEM_DATA } from '../../../data/Page2';
import styles from './TheProblem.module.css';
import { useState } from 'react';
import CalendlyPopup from '../../CalendlyPopup/CalendlyPopup';
const TheProblem = () => {
  const [isCalendlyPopupOpen, setIsCalendlyPopupOpen] = useState(false);
  const renderTextWithHighlights = (text: string, highlights?: Array<{ text: string; position: number }>) => {
    if (!highlights || highlights.length === 0) {
      return <span>{text}</span>;
    }
    const parts: React.ReactElement[] = [];
    let lastIndex = 0;
    let processedText = text;
    highlights.forEach((highlight, index) => {
      const startIndex = processedText.indexOf(highlight.text, lastIndex);
      if (startIndex === -1) return;
      if (startIndex > lastIndex) {
        parts.push(
          <span key={`text-${index}`}>{processedText.substring(lastIndex, startIndex)}</span>
        );
      }
      parts.push(
        <span key={`highlight-${index}`} className="text-[#0fdac2]">
          {highlight.text}
        </span>
      );
      lastIndex = startIndex + highlight.text.length;
    });
    if (lastIndex < processedText.length) {
      parts.push(<span key="text-end">{processedText.substring(lastIndex)}</span>);
    }
    return parts.length > 0 ? <>{parts}</> : <span>{text}</span>;
  };
  return (
    <>
    <section className={`sectionPadding ${styles.theProblemSection}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>        
          <div className={`${styles.headingWrapper} sectionHeading`}>
            <h2>
              <span className="text-white">{THE_PROBLEM_DATA.headline.part1}</span>
              <span className="text-[#0fdac2]">{THE_PROBLEM_DATA.headline.part2}</span>
              &nbsp;
              <span className={styles.exclamationIcon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" fill="#FF4772" />
                  <path
                    d="M12 8V12M12 16H12.01"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>          
          <div className={styles.paragraphsWrapper}>
            {THE_PROBLEM_DATA.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {renderTextWithHighlights(paragraph.text, paragraph.highlights)}
              </p>
            ))}
          </div>
          <div className={styles.ctaWrapper}>
            <Button
              href={THE_PROBLEM_DATA.cta.href}
              variant="green"
              icon={<ArrowRightIcon style={{ fill: '#000' }} />}
              iconPosition="right"
              onClick={() => setIsCalendlyPopupOpen(true)}
            >
              {THE_PROBLEM_DATA.cta.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
    <CalendlyPopup
        isOpen={isCalendlyPopupOpen}
        onClose={() => setIsCalendlyPopupOpen(false)}
      />
    </>
  );
};
export default TheProblem;