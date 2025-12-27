"use client";

import styles from "./Questionnaire.module.css";
import Button from "../Button";

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
  multiSelect?: boolean;
  maxSelections?: number;
}

interface QuestionnaireStepProps {
  step: Step;
  onSelect: (stepId: string, value: string, nextStep: string) => void;
  onBack: () => void;
  selectedValue?: string | string[];
  showBack?: boolean;
}

export default function QuestionnaireStep({
  step,
  onSelect,
  onBack,
  selectedValue,
  showBack = true,
}: QuestionnaireStepProps) {
  const isMultiSelect = step.multiSelect === true;
  const maxSelections = step.maxSelections || 2;
  const selectedValues = isMultiSelect 
    ? (Array.isArray(selectedValue) ? selectedValue : [])
    : [];

  const handleOptionClick = (option: Option) => {
    if (isMultiSelect) {
      // For multi-select, toggle the selection
      // Use selectedValues (already parsed) instead of selectedValue
      const isSelected = selectedValues.includes(option.value);
      
      if (isSelected) {
        // Deselect
        const newValues = selectedValues.filter(v => v !== option.value);
        // Always use JSON string to handle values with commas
        onSelect(step.id, JSON.stringify(newValues), "");
      } else {
        // Select (if under max)
        if (selectedValues.length < maxSelections) {
          const newValues = [...selectedValues, option.value];
          const shouldAutoAdvance = newValues.length === maxSelections;
          
          // Always use JSON string to handle values with commas
          onSelect(step.id, JSON.stringify(newValues), shouldAutoAdvance ? option.nextStep : "");
        }
      }
    } else {
      // Single select - proceed to next step
      onSelect(step.id, option.value, option.nextStep);
    }
  };

  const getColumnClass = () => {
    if (step.columns === 2) return styles.twoColumns;
    if (step.columns === 3) return styles.threeColumns;
    if (step.isFiftyPercent) return styles.fiftyPercentBoxes;
    return "";
  };

  const isOptionSelected = (value: string) => {
    if (isMultiSelect) {
      return selectedValues.includes(value);
    }
    return selectedValue === value;
  };

  const canProceed = () => {
    if (isMultiSelect) {
      return selectedValues.length > 0;
    }
    return true;
  };

  return (
    <div
      className={`${styles.stepContainer} ${getColumnClass()}`}
    >
      <h2 className={styles.stepTitle}>{step.title}</h2>
      {isMultiSelect && selectedValues.length > 0 && (
        <p className={styles.multiSelectHint}>
          ({selectedValues.length}/{maxSelections} selected)
        </p>
      )}
      
      <div className={styles.optionsContainer}>
        {step.options.map((option) => {
          const optionSelected = isOptionSelected(option.value);
          const isDisabled = isMultiSelect && !optionSelected && selectedValues.length >= maxSelections;
          
          return (
            <div 
              key={option.id} 
              className={`${styles.optionWrapper} ${isDisabled ? styles.optionDisabled : ""}`}
              onClick={(e) => {
                e.preventDefault();
                if (!isDisabled) {
                  handleOptionClick(option);
                }
              }}
            >
              <input
                type={isMultiSelect ? "checkbox" : "radio"}
                id={option.id}
                name={step.id}
                value={option.value}
                checked={optionSelected}
                onChange={(e) => {
                  e.stopPropagation();
                  if (!isDisabled) {
                    handleOptionClick(option);
                  }
                }}
                disabled={isDisabled}
                className={styles.radioInput}
              />
              <label
                htmlFor={option.id}
                className={`${styles.optionLabel} ${styles[option.color + "Label"]} ${optionSelected ? styles.optionSelected : ""}`}
                onClick={(e) => {
                  if (isMultiSelect) {
                    e.preventDefault();
                  }
                }}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>

      {/* {isMultiSelect && canProceed() && (
        <Button
          onClick={() => {
            // Find the next step from any option (they all have the same nextStep)
            const nextStep = step.options[0]?.nextStep;
            if (nextStep) {
              // Trigger navigation by calling onSelect with the current selections
              onSelect(step.id, selectedValues.join(","), nextStep);
            }
          }}
          variant="primary"
          size="md"
          className={styles.continueButton}
        >
          Continue
        </Button>
      )} */}

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

