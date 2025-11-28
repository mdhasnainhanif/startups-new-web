'use client';

import Container from '../../Container';
import Button from '../../Button';
import { ArrowRightIcon } from '../../icons';
import { THE_PROBLEM_DATA } from '../../../data/Page2';
import styles from './TheProblem.module.css';

const TheProblem = () => {
  // Function to render text with highlights
  const renderTextWithHighlights = (text: string, highlights?: Array<{ text: string; position: number }>) => {
    if (!highlights || highlights.length === 0) {
      return <span>{text}</span>;
    }

    const parts: React.ReactElement[] = [];
    let lastIndex = 0;
    let processedText = text;

    // Process each highlight
    highlights.forEach((highlight, index) => {
      const startIndex = processedText.indexOf(highlight.text, lastIndex);
      if (startIndex === -1) return;

      // Add text before highlight
      if (startIndex > lastIndex) {
        parts.push(
          <span key={`text-${index}`}>{processedText.substring(lastIndex, startIndex)}</span>
        );
      }

      // Add highlighted text
      parts.push(
        <span key={`highlight-${index}`} className="text-[#0fdac2]">
          {highlight.text}
        </span>
      );

      lastIndex = startIndex + highlight.text.length;
    });

    // Add remaining text
    if (lastIndex < processedText.length) {
      parts.push(<span key="text-end">{processedText.substring(lastIndex)}</span>);
    }

    return parts.length > 0 ? <>{parts}</> : <span>{text}</span>;
  };

  return (
    <section className={`sectionPadding ${styles.theProblemSection}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          {/* Heading */}
          <div className={styles.headingWrapper}>
            <h2 className={styles.heading}>
              <span className="text-white">{THE_PROBLEM_DATA.headline.part1}</span>
              <span className="text-[#0fdac2]">{THE_PROBLEM_DATA.headline.part2}</span>
              <span className={styles.exclamationIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
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

          {/* Paragraphs */}
          <div className={styles.paragraphsWrapper}>
            {THE_PROBLEM_DATA.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {renderTextWithHighlights(paragraph.text, paragraph.highlights)}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <div className={styles.ctaWrapper}>
            <Button
              href={THE_PROBLEM_DATA.cta.href}
              variant="primary"
              icon={<ArrowRightIcon style={{ fill: '#fff' }} />}
              iconPosition="right"
            >
              {THE_PROBLEM_DATA.cta.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TheProblem;

