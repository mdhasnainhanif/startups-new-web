"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import styles from "./ContactForm.module.css";

// Comprehensive country data with codes
const COUNTRIES = [
  { code: "US", name: "United States", callingCode: "1" },
  { code: "GB", name: "United Kingdom", callingCode: "44" },
  { code: "CA", name: "Canada", callingCode: "1" },
  { code: "AU", name: "Australia", callingCode: "61" },
  { code: "DE", name: "Germany", callingCode: "49" },
  { code: "FR", name: "France", callingCode: "33" },
  { code: "IT", name: "Italy", callingCode: "39" },
  { code: "ES", name: "Spain", callingCode: "34" },
  { code: "NL", name: "Netherlands", callingCode: "31" },
  { code: "BE", name: "Belgium", callingCode: "32" },
  { code: "AT", name: "Austria", callingCode: "43" },
  { code: "CH", name: "Switzerland", callingCode: "41" },
  { code: "SE", name: "Sweden", callingCode: "46" },
  { code: "NO", name: "Norway", callingCode: "47" },
  { code: "DK", name: "Denmark", callingCode: "45" },
  { code: "FI", name: "Finland", callingCode: "358" },
  { code: "PL", name: "Poland", callingCode: "48" },
  { code: "PT", name: "Portugal", callingCode: "351" },
  { code: "GR", name: "Greece", callingCode: "30" },
  { code: "IE", name: "Ireland", callingCode: "353" },
  { code: "CZ", name: "Czech Republic", callingCode: "420" },
  { code: "HU", name: "Hungary", callingCode: "36" },
  { code: "RO", name: "Romania", callingCode: "40" },
  { code: "BG", name: "Bulgaria", callingCode: "359" },
  { code: "HR", name: "Croatia", callingCode: "385" },
  { code: "SK", name: "Slovakia", callingCode: "421" },
  { code: "SI", name: "Slovenia", callingCode: "386" },
  { code: "LT", name: "Lithuania", callingCode: "370" },
  { code: "LV", name: "Latvia", callingCode: "371" },
  { code: "EE", name: "Estonia", callingCode: "372" },
  { code: "CY", name: "Cyprus", callingCode: "357" },
  { code: "MT", name: "Malta", callingCode: "356" },
  { code: "LU", name: "Luxembourg", callingCode: "352" },
  { code: "IS", name: "Iceland", callingCode: "354" },
  { code: "JP", name: "Japan", callingCode: "81" },
  { code: "CN", name: "China", callingCode: "86" },
  { code: "IN", name: "India", callingCode: "91" },
  { code: "KR", name: "South Korea", callingCode: "82" },
  { code: "SG", name: "Singapore", callingCode: "65" },
  { code: "MY", name: "Malaysia", callingCode: "60" },
  { code: "TH", name: "Thailand", callingCode: "66" },
  { code: "ID", name: "Indonesia", callingCode: "62" },
  { code: "PH", name: "Philippines", callingCode: "63" },
  { code: "VN", name: "Vietnam", callingCode: "84" },
  { code: "TW", name: "Taiwan", callingCode: "886" },
  { code: "HK", name: "Hong Kong", callingCode: "852" },
  { code: "NZ", name: "New Zealand", callingCode: "64" },
  { code: "ZA", name: "South Africa", callingCode: "27" },
  { code: "BR", name: "Brazil", callingCode: "55" },
  { code: "MX", name: "Mexico", callingCode: "52" },
  { code: "AR", name: "Argentina", callingCode: "54" },
  { code: "CL", name: "Chile", callingCode: "56" },
  { code: "CO", name: "Colombia", callingCode: "57" },
  { code: "PE", name: "Peru", callingCode: "51" },
  { code: "VE", name: "Venezuela", callingCode: "58" },
  { code: "EG", name: "Egypt", callingCode: "20" },
  { code: "NG", name: "Nigeria", callingCode: "234" },
  { code: "KE", name: "Kenya", callingCode: "254" },
  { code: "GH", name: "Ghana", callingCode: "233" },
  { code: "ET", name: "Ethiopia", callingCode: "251" },
  { code: "TZ", name: "Tanzania", callingCode: "255" },
  { code: "UG", name: "Uganda", callingCode: "256" },
  { code: "DZ", name: "Algeria", callingCode: "213" },
  { code: "MA", name: "Morocco", callingCode: "212" },
  { code: "TN", name: "Tunisia", callingCode: "216" },
  { code: "LY", name: "Libya", callingCode: "218" },
  { code: "SD", name: "Sudan", callingCode: "249" },
  { code: "SA", name: "Saudi Arabia", callingCode: "966" },
  { code: "AE", name: "United Arab Emirates", callingCode: "971" },
  { code: "IL", name: "Israel", callingCode: "972" },
  { code: "TR", name: "Turkey", callingCode: "90" },
  { code: "IR", name: "Iran", callingCode: "98" },
  { code: "IQ", name: "Iraq", callingCode: "964" },
  { code: "JO", name: "Jordan", callingCode: "962" },
  { code: "LB", name: "Lebanon", callingCode: "961" },
  { code: "KW", name: "Kuwait", callingCode: "965" },
  { code: "QA", name: "Qatar", callingCode: "974" },
  { code: "BH", name: "Bahrain", callingCode: "973" },
  { code: "OM", name: "Oman", callingCode: "968" },
  { code: "YE", name: "Yemen", callingCode: "967" },
  { code: "AF", name: "Afghanistan", callingCode: "93" },
  { code: "PK", name: "Pakistan", callingCode: "92" },
  { code: "BD", name: "Bangladesh", callingCode: "880" },
  { code: "LK", name: "Sri Lanka", callingCode: "94" },
  { code: "NP", name: "Nepal", callingCode: "977" },
  { code: "MM", name: "Myanmar", callingCode: "95" },
  { code: "KH", name: "Cambodia", callingCode: "855" },
  { code: "LA", name: "Laos", callingCode: "856" },
  { code: "MN", name: "Mongolia", callingCode: "976" },
  { code: "KZ", name: "Kazakhstan", callingCode: "7" },
  { code: "UZ", name: "Uzbekistan", callingCode: "998" },
  { code: "TJ", name: "Tajikistan", callingCode: "992" },
  { code: "KG", name: "Kyrgyzstan", callingCode: "996" },
  { code: "TM", name: "Turkmenistan", callingCode: "993" },
  { code: "GE", name: "Georgia", callingCode: "995" },
  { code: "AM", name: "Armenia", callingCode: "374" },
  { code: "AZ", name: "Azerbaijan", callingCode: "994" },
  { code: "BY", name: "Belarus", callingCode: "375" },
  { code: "UA", name: "Ukraine", callingCode: "380" },
  { code: "MD", name: "Moldova", callingCode: "373" },
  { code: "RS", name: "Serbia", callingCode: "381" },
  { code: "ME", name: "Montenegro", callingCode: "382" },
  { code: "BA", name: "Bosnia and Herzegovina", callingCode: "387" },
  { code: "MK", name: "North Macedonia", callingCode: "389" },
  { code: "AL", name: "Albania", callingCode: "355" },
  { code: "RU", name: "Russia", callingCode: "7" },
] as const;

type CountryCode = typeof COUNTRIES[number]["code"];

interface CustomCountrySelectProps {
  value: string | undefined;
  onChange: (country: CountryCode) => void;
  defaultCountry?: CountryCode;
  disabled?: boolean;
  phoneInputWidth?: number;
}

export default function CustomCountrySelect({
  value,
  onChange,
  defaultCountry = "PK",
  disabled = false,
  phoneInputWidth,
}: CustomCountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Get current country from phone number or use default
  const getCurrentCountry = (): CountryCode => {
    if (value) {
      // Try to extract country code from phone number
      // Format: +[country code][number]
      const match = value.match(/^\+(1|44|33|49|39|34|31|32|43|41|46|47|45|358|48|351|30|353|420|36|40|359|385|421|386|370|371|372|357|356|352|354|81|86|91|82|65|60|66|62|63|84|886|852|64|27|55|52|54|56|57|51|58|20|234|254|233|251|255|256|213|212|216|218|249|966|971|972|90|98|964|962|961|965|974|973|968|967|93|92|880|94|977|95|855|856|976|7|998|992|996|993|995|374|994|375|380|373|381|382|387|389|355)/);
      if (match) {
        const callingCode = match[1];
        const country = COUNTRIES.find(c => c.callingCode === callingCode);
        if (country) return country.code;
      }
    }
    return defaultCountry;
  };

  const currentCountry = getCurrentCountry();
  const currentCountryData = COUNTRIES.find(c => c.code === currentCountry);
  const countryData: { code: string; name: string; callingCode: string } = currentCountryData || COUNTRIES[0];

  // Filter countries based on search term
  const filteredCountries: Array<{ code: string; name: string; callingCode: string }> = COUNTRIES.filter((country) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      country.name.toLowerCase().includes(searchLower) ||
      country.code.toLowerCase().includes(searchLower) ||
      country.callingCode.includes(searchTerm)
    );
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is inside dropdown or button
      const isInsideDropdown = dropdownRef.current?.contains(target);
      const isInsideButton = buttonRef.current?.contains(target);
      
      // Don't close if clicking inside
      if (isInsideDropdown || isInsideButton) {
        return;
      }

      // Close dropdown if clicking outside
      setIsOpen(false);
      setSearchTerm("");
    };

    // Use click event with delay to ensure li clicks process first
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);


  return (
    <div className={styles.customCountrySelect}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.countrySelectButton}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className={styles.countryFlag} title={countryData.name}>
          <ReactCountryFlag
            countryCode={countryData.code}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
            title={countryData.name}
          />
        </span>
        <span className={styles.countrySelectArrow}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            <path d="M6 9L1 4H11L6 9Z" fill="currentColor" />
          </svg>
        </span>
        <span className={styles.countryCode}>+{countryData.callingCode}</span>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={styles.countryDropdown}
          style={{ width: phoneInputWidth ? `${phoneInputWidth}px` : "100%" }}
          onClick={(e) => {
            // Prevent click outside handler from firing
            e.stopPropagation();
          }}
        >
          <div className={styles.countrySearch}>
            <input
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              className={styles.countrySearchInput}
              autoFocus
            />
          </div>
          <ul className={styles.countryList}>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => {
                const isSelected = country.code === currentCountry;

                return (
                  <li
                    key={country.code}
                    className={`${styles.countryOption} ${isSelected ? styles.countryOptionSelected : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      
                      console.log('Selecting country:', country.code); // Debug
                      
                      // Update country immediately
                      onChange(country.code as CountryCode);
                      
                      // Close dropdown
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onChange(country.code as CountryCode);
                        setIsOpen(false);
                        setSearchTerm("");
                      }
                    }}
                  >
                    <span className={styles.countryOptionFlag} title={country.name}>
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{
                          width: '1.25em',
                          height: '1.25em',
                        }}
                        title={country.name}
                      />
                    </span>
                    <span className={styles.countryOptionName}>{country.name}</span>
                    <span className={styles.countryOptionCode}>+{country.callingCode}</span>
                  </li>
                );
              })
            ) : (
              <li className={styles.countryNoResults}>No countries found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

