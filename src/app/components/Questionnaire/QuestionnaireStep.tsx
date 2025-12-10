"use client";

import styles from "./Questionnaire.module.css";

export interface Option {
  id: string;
  value: string;
  label: string;
  color: "green" | "yellow" | "blue" | "purple" | "pink";
  nextStep: string;
}

export interface Step {
  id: string;
  title: string;
  options: Option[];
  progress: number;
  backTo?: string;
  isFiftyPercent?: boolean;
  columns?: 2 | 3;
}

interface QuestionnaireStepProps {
  step: Step;
  onSelect: (stepId: string, value: string, nextStep: string) => void;
  onBack: () => void;
  selectedValue?: string;
  showBack?: boolean;
}

export default function QuestionnaireStep({
  step,
  onSelect,
  onBack,
  selectedValue,
  showBack = true,
}: QuestionnaireStepProps) {
  const handleOptionClick = (option: Option) => {
    onSelect(step.id, option.value, option.nextStep);
  };

  const getColumnClass = () => {
    if (step.columns === 2) return styles.twoColumns;
    if (step.columns === 3) return styles.threeColumns;
    if (step.isFiftyPercent) return styles.fiftyPercentBoxes;
    return "";
  };

  return (
    <div
      className={`${styles.stepContainer} ${getColumnClass()}`}
    >
      <h2 className={styles.stepTitle}>{step.title}</h2>
      
      <div className={styles.optionsContainer}>
        {step.options.map((option) => (
          <div 
            key={option.id} 
            className={styles.optionWrapper}
            onClick={() => handleOptionClick(option)}
          >
            <input
              type="radio"
              id={option.id}
              name={step.id}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleOptionClick(option)}
              className={styles.radioInput}
            />
            <label
              htmlFor={option.id}
              className={`${styles.optionLabel} ${styles[option.color + "Label"]}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {showBack && (
        <button
          type="button"
          onClick={onBack}
          className={styles.backButton}
        >
          ← Back
        </button>
      )}

    </div>
  );
}

