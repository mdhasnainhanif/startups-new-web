declare module 'react-phone-number-input' {
  import { ComponentType, InputHTMLAttributes } from 'react';

  export type E164Number = string;

  export interface PhoneInputProps {
    value?: E164Number | string;
    onChange?: (value: E164Number | undefined) => void;
    defaultCountry?: string;
    international?: boolean;
    placeholder?: string;
    className?: string;
    numberInputProps?: InputHTMLAttributes<HTMLInputElement>;
  }

  const PhoneInput: ComponentType<PhoneInputProps>;
  export default PhoneInput;
}

