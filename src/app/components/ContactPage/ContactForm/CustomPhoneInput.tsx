"use client";

import React, { useState, useRef, useEffect } from "react";
import CustomCountrySelect from "./CustomCountrySelect";
import styles from "./ContactForm.module.css";

interface CustomPhoneInputProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  defaultCountry?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function CustomPhoneInput({
  value,
  onChange,
  defaultCountry = "PK",
  placeholder = "Phone number",
  required = false,
  disabled = false,
  className = "",
}: CustomPhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const phoneInputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [phoneInputWidth, setPhoneInputWidth] = useState<number | undefined>();

  // Get country data (simplified - you might want to import from a shared file)
  const getCountryData = (countryCode: string) => {
    const countries: Record<string, { callingCode: string }> = {
      US: { callingCode: "1" },
      GB: { callingCode: "44" },
      CA: { callingCode: "1" },
      AU: { callingCode: "61" },
      DE: { callingCode: "49" },
      FR: { callingCode: "33" },
      IT: { callingCode: "39" },
      ES: { callingCode: "34" },
      NL: { callingCode: "31" },
      BE: { callingCode: "32" },
      AT: { callingCode: "43" },
      CH: { callingCode: "41" },
      SE: { callingCode: "46" },
      NO: { callingCode: "47" },
      DK: { callingCode: "45" },
      FI: { callingCode: "358" },
      PL: { callingCode: "48" },
      PT: { callingCode: "351" },
      GR: { callingCode: "30" },
      IE: { callingCode: "353" },
      CZ: { callingCode: "420" },
      HU: { callingCode: "36" },
      RO: { callingCode: "40" },
      BG: { callingCode: "359" },
      HR: { callingCode: "385" },
      SK: { callingCode: "421" },
      SI: { callingCode: "386" },
      LT: { callingCode: "370" },
      LV: { callingCode: "371" },
      EE: { callingCode: "372" },
      CY: { callingCode: "357" },
      MT: { callingCode: "356" },
      LU: { callingCode: "352" },
      IS: { callingCode: "354" },
      JP: { callingCode: "81" },
      CN: { callingCode: "86" },
      IN: { callingCode: "91" },
      KR: { callingCode: "82" },
      SG: { callingCode: "65" },
      MY: { callingCode: "60" },
      TH: { callingCode: "66" },
      ID: { callingCode: "62" },
      PH: { callingCode: "63" },
      VN: { callingCode: "84" },
      TW: { callingCode: "886" },
      HK: { callingCode: "852" },
      NZ: { callingCode: "64" },
      ZA: { callingCode: "27" },
      BR: { callingCode: "55" },
      MX: { callingCode: "52" },
      AR: { callingCode: "54" },
      CL: { callingCode: "56" },
      CO: { callingCode: "57" },
      PE: { callingCode: "51" },
      VE: { callingCode: "58" },
      EG: { callingCode: "20" },
      NG: { callingCode: "234" },
      KE: { callingCode: "254" },
      GH: { callingCode: "233" },
      ET: { callingCode: "251" },
      TZ: { callingCode: "255" },
      UG: { callingCode: "256" },
      DZ: { callingCode: "213" },
      MA: { callingCode: "212" },
      TN: { callingCode: "216" },
      LY: { callingCode: "218" },
      SD: { callingCode: "249" },
      SA: { callingCode: "966" },
      AE: { callingCode: "971" },
      IL: { callingCode: "972" },
      TR: { callingCode: "90" },
      IR: { callingCode: "98" },
      IQ: { callingCode: "964" },
      JO: { callingCode: "962" },
      LB: { callingCode: "961" },
      KW: { callingCode: "965" },
      QA: { callingCode: "974" },
      BH: { callingCode: "973" },
      OM: { callingCode: "968" },
      YE: { callingCode: "967" },
      AF: { callingCode: "93" },
      PK: { callingCode: "92" },
      BD: { callingCode: "880" },
      LK: { callingCode: "94" },
      NP: { callingCode: "977" },
      MM: { callingCode: "95" },
      KH: { callingCode: "855" },
      LA: { callingCode: "856" },
      MN: { callingCode: "976" },
      KZ: { callingCode: "7" },
      UZ: { callingCode: "998" },
      TJ: { callingCode: "992" },
      KG: { callingCode: "996" },
      TM: { callingCode: "993" },
      GE: { callingCode: "995" },
      AM: { callingCode: "374" },
      AZ: { callingCode: "994" },
      BY: { callingCode: "375" },
      UA: { callingCode: "380" },
      MD: { callingCode: "373" },
      RS: { callingCode: "381" },
      ME: { callingCode: "382" },
      BA: { callingCode: "387" },
      MK: { callingCode: "389" },
      AL: { callingCode: "355" },
      RU: { callingCode: "7" },
    };
    return countries[countryCode];
  };

  // Extract phone number from value (remove country code)
  useEffect(() => {
    if (value) {
      // Format: +[country code][number]
      // Try to match country code and extract the number part
      const countryData = getCountryData(selectedCountry);
      if (countryData) {
        const callingCode = countryData.callingCode;
        // Try to extract number after country code
        const regex = new RegExp(`^\\+${callingCode}(.+)$`);
        const match = value.match(regex);
        if (match && match[1]) {
          setPhoneNumber(match[1]);
        } else if (value.startsWith(`+${callingCode}`)) {
          // If it starts with the calling code but no match, set empty
          setPhoneNumber("");
        } else {
          // Try generic extraction
          const genericMatch = value.match(/^\+\d{1,4}(.+)$/);
          if (genericMatch && genericMatch[1]) {
            setPhoneNumber(genericMatch[1]);
          } else {
            // Just remove the + if present
            setPhoneNumber(value.replace(/^\+/, ""));
          }
        }
      } else {
        // Fallback: try to extract number after any country code
        const genericMatch = value.match(/^\+\d{1,4}(.+)$/);
        if (genericMatch && genericMatch[1]) {
          setPhoneNumber(genericMatch[1]);
        } else {
          setPhoneNumber(value.replace(/^\+/, ""));
        }
      }
    } else {
      setPhoneNumber("");
    }
  }, [value, selectedCountry]);

  // Update width when component mounts or resizes
  useEffect(() => {
    const updateWidth = () => {
      if (phoneInputRef.current) {
        const width = phoneInputRef.current.offsetWidth;
        setPhoneInputWidth(width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    // Update the full phone number with new country code
    const countryData = getCountryData(country);
    if (countryData) {
      if (phoneNumber) {
        // If there's a phone number, update with new country code
        onChange(`+${countryData.callingCode}${phoneNumber}`);
      } else {
        // If no phone number, just set the country code
        onChange(`+${countryData.callingCode}`);
      }
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow digits
    const digitsOnly = inputValue.replace(/\D/g, "");
    setPhoneNumber(digitsOnly);
    
    const countryData = getCountryData(selectedCountry);
    if (countryData) {
      const fullNumber = digitsOnly ? `+${countryData.callingCode}${digitsOnly}` : undefined;
      onChange(fullNumber);
    } else {
      onChange(undefined);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent non-numeric characters
    if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div ref={phoneInputRef} className={`${styles.phoneInput} ${className}`}>
      <div className={styles.phoneInputContainer}>
        <CustomCountrySelect
          value={value}
          onChange={handleCountryChange}
          defaultCountry={defaultCountry as any}
          disabled={disabled}
          phoneInputWidth={phoneInputWidth}
        />
        <input
          ref={inputRef}
          type="tel"
          inputMode="numeric"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={styles.phoneNumberInput}
        />
      </div>
    </div>
  );
}

