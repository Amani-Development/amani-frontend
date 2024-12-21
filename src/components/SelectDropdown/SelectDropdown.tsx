import React, { FC, useState } from "react";
import styles from "./SelectDropdown.module.css";

interface DropdownOption {
  FullName?: string;
  Flag?: string; // Flag URL or image path
  [key: string]: any;
}

interface SelectDropdownProps {
  label?: string;
  options: DropdownOption[];
  placeholder?: string;
  selectedOption: DropdownOption | null;
  onOptionSelect: (option: DropdownOption) => void;
  error?: string;
  renderOption?: (option: DropdownOption) => React.ReactNode; // Custom rendering option
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  label,
  options,
  placeholder = "Select an option",
  selectedOption,
  onOptionSelect,
  error,
  renderOption, // Custom render function
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isTouched) setIsTouched(true); // Mark dropdown as touched when opened
  };

  const handleOptionSelect = (option: DropdownOption) => {
    onOptionSelect(option);
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <div className={styles.selectContainer}>
      <div
        className={`${styles.sourceLabelRow} d-flex justify-content-between`}
      >
        {label && <label className={styles.label}>{label}</label>}
      </div>

      <div className={styles.customSelect} onClick={toggleDropdown}>
        <span
          className={`${styles.selectedOption} ${
            !selectedOption ? styles.unSelected : ""
          }`}
        >
          {/* Display both FullName and Flag if available */}
          {selectedOption?.Flag && (
            <img
              src={selectedOption.Flag}
              alt={selectedOption.FullName}
              className={styles.flagIcon}
            />
          )}
          {selectedOption?.FullName || placeholder}
        </span>
        <i className="bi bi-chevron-down"></i>
      </div>

      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.length > 0 ? (
            options.map((option, index) => (
              <div
                key={index}
                className={`${styles.option} ${
                  option === selectedOption ? styles.selected : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {renderOption ? (
                  renderOption(option)
                ) : (
                  <div className={styles.optionContent}>
                    {option.Flag && (
                      <img
                        src={option.Flag}
                        alt={option.FullName}
                        className={styles.flagIcon}
                      />
                    )}
                    {option.FullName}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className={styles.noOptions}>No options available</div>
          )}
        </div>
      )}

      {isTouched && !selectedOption && error && (
        <div className={styles.errorMessage}>{error}</div>
      )}
    </div>
  );
};

export default SelectDropdown;
