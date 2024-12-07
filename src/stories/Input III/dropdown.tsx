import React, { memo, useCallback, useEffect, useRef, useState, useMemo } from "react";
import styles from './dropdown.module.css'; // Import CSS module
import { RiArrowDropDownLine } from "react-icons/ri";
import ReactCountryFlag from "react-country-flag";

interface OptionType {
    value: string;
    label: string;
}

interface InputProps {
    default?: boolean;
    focused?: boolean;
    error?: boolean;
    disabled?: boolean;
    label?: string;
    onChange?: (option: OptionType) => void;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
    maxContent?: number;
    name?: string;
    value?: string;
    isTextArea: boolean;
    options: OptionType[];
    defaultText?: string;
    width?: number;
    img?: boolean;
    getValue?: (option: OptionType) => void;
}

const DropdownInput: React.FC<InputProps> = ({
                                                 default: defaultProp,
                                                 focused,
                                                 error,
                                                 disabled,
                                                 label,
                                                 img,
                                                 onChange = () => {},
                                                 placeholder,
                                                 isTextArea,
                                                 type = "text",
                                                 width,
                                                 value,
                                                 maxContent,
                                                 name,
                                                 options = [],
                                                 getValue,
                                                 defaultText = "",
                                             }: InputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [searchTerm, setSearchTerm] = useState(value || "");

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Store the previous selected option in a ref
    const previousSelectedOptionRef = useRef<OptionType | null>(null);

    // Memoize the filtered options to prevent unnecessary recalculations
    const filteredOptions = useMemo(
        () => options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm, options]
    );

    // Retrieve the saved option from localStorage on initial render
    useEffect(() => {
        const savedOption = localStorage.getItem('DropdownSelectedOption');
        if (savedOption) {
            const parsedOption = JSON.parse(savedOption) as OptionType;
            setSelectedOption(parsedOption);
            setSearchTerm(parsedOption.label); // Set the search term to match the saved option's label
        } else if (options.length > 0) {
            // Fallback to default or first option
            const defaultOption = options[0];
            setSelectedOption(defaultOption);
            setSearchTerm(defaultOption.label);
        }
    }, [options]);

    // Effect for handling getValue callback when selectedOption changes
    useEffect(() => {
        if (getValue && selectedOption && selectedOption !== previousSelectedOptionRef.current) {
            getValue(selectedOption);
            // Save the selected option to localStorage
            localStorage.setItem('DropdownSelectedOption', JSON.stringify(selectedOption));
        }
        // Update the ref to the current selectedOption after calling getValue
        previousSelectedOptionRef.current = selectedOption;
    }, [getValue, selectedOption]);

    // Handle selecting an option from the dropdown
    const handleSelectOption = useCallback(
        (option: OptionType) => {
            setSelectedOption(option);
            setSearchTerm(option.label); // Update search term to the selected label
            setIsOpen(false); // Close the dropdown
            onChange(option); // Notify parent component of the selected option
        },
        [onChange]
    );

    // Close the dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className={styles.dropCont}>
            <div
                className={styles.container}
                style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    width: width ? `${width}px` : "auto",
                }}
            >
                {label && <div className={styles.InputLabel}>{label}</div>}
                <div className={styles.inputCont} onClick={() => !disabled && setIsOpen(true)}>
                    <ReactCountryFlag
                        countryCode={img ? selectedOption?.value || "NG" : ""}
                        svg
                        style={{
                            fontSize: "0.9em",
                            lineHeight: "0.9em",
                        }}
                    />
                    <input
                        disabled={disabled}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={searchTerm}
                        className={[
                            styles["storybook-input"],
                            disabled ? styles["storybook-input--disabled"] : "",
                        ].join(" ")}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSelectedOption(null); // Clear selected option when typing
                            setIsOpen(true); // Open the dropdown when typing
                        }}
                    />
                </div>
            </div>

            {isOpen && filteredOptions.length > 0 && (
                <div ref={dropdownRef} style={{ width: width ? `${width}px` : "" }} className={styles.dropdownList}>
                    {filteredOptions.map((option) => (
                        <div key={option.value} className={styles.dropdownItem} onClick={() => handleSelectOption(option)}>
                            <ReactCountryFlag
                                countryCode={option.value}
                                svg
                                style={{
                                    fontSize: "1.5em",
                                    lineHeight: "1.5em",
                                }}
                            />
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default memo(DropdownInput);
