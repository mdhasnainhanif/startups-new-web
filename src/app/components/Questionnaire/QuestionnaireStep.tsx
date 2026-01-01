"use client";

import styles from "./Questionnaire.module.css";
import Button from "../Button";
import { ArrowLeftIcon } from "../../icons";

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
  hideButtons?: boolean; // Hide buttons in step component (for brief page footer)
}

export default function QuestionnaireStep({
  step,
  onSelect,
  onBack,
  selectedValue,
  showBack = true,
  hideButtons = false,
}: QuestionnaireStepProps) {
  const isMultiSelect = step.multiSelect === true;
  const maxSelections = step.maxSelections || Infinity; // Allow unlimited selections if not specified
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
        // Select (no limit for multiple select - user can select 1 or all)
        const newValues = [...selectedValues, option.value];
        
        // Auto-advance if all options are selected
        const allOptionsSelected = newValues.length === step.options.length;
        const nextStep = allOptionsSelected ? step.options[0]?.nextStep : "";
        
        // Always use JSON string to handle values with commas
        onSelect(step.id, JSON.stringify(newValues), nextStep);
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


  return (
    <div
      className={`${styles.stepContainer} ${getColumnClass()}`}
    >
      <div className={styles.optionsContainer}>
        {step.options.map((option) => {
          const optionSelected = isOptionSelected(option.value);
          // No disabling for multiple select - user can select unlimited options
          const isDisabled = false;
          
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

      {/* Buttons Container - Continue and Back in one line */}
      {/* Hide buttons if hideButtons prop is true (for brief page footer) */}
      {!hideButtons && (
      <div className={styles.buttonsContainer}>
        {showBack && (
          <Button
            type="button"
            onClick={onBack}
            variant="primary"
            size="md"
            className={styles.backButton}
            icon={<ArrowLeftIcon />}
            iconPosition="left"
          >
            Back
          </Button>
        )}
        {/* Show Continue button for both multiple and single select */}
        {/* For single select: disabled when no selection, enabled when selection exists (for back navigation) */}
        {/* For multiple select: disabled when no selection */}
        <Button
          onClick={() => {
            // Find the next step from any option (they all have the same nextStep)
            const nextStep = step.options[0]?.nextStep;
            if (nextStep) {
              if (isMultiSelect) {
                // For multiple select, use JSON string
                const currentValue = JSON.stringify(selectedValues);
                onSelect(step.id, currentValue, nextStep);
              } else {
                // For single select, use the selected value
                const singleSelectedValue = typeof selectedValue === 'string' ? selectedValue : '';
                onSelect(step.id, singleSelectedValue, nextStep);
              }
            }
          }}
          variant="primary"
          size="md"
          className={styles.continueButton}
          disabled={isMultiSelect ? selectedValues.length === 0 : !selectedValue || (typeof selectedValue === 'string' && selectedValue.trim() === '')}
        >
          Continue
        </Button>
      </div>
      )}

    </div>
  );
}

