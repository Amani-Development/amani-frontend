import React, { memo, useCallback, useEffect, useRef, useState } from "react";
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
    defaultText: string;
}

const DropdownInput: React.FC<InputProps> = ({
                                                 default: defaultProp,
                                                 focused,
                                                 error,
                                                 disabled,
                                                 label,
                                                 onChange = () => {},
                                                 placeholder,
                                                 isTextArea,
                                                 type = "text",
                                                 value,
                                                 maxContent,
                                                 name,
                                                 options = [],
                                                 defaultText = "",
                                             }: InputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [searchTerm, setSearchTerm] = useState(value || "");

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelectOption = useCallback(
        (option: OptionType) => {
            setSelectedOption(option);
            setSearchTerm(option.label);
            setIsOpen(false);
            onChange(option);
        },
        [onChange]
    );

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
    }, []);

    return (
        <div className={styles.dropCont}>
            <div
                className={styles.container}
                style={{ cursor: disabled ? "not-allowed" : "pointer" }}
            >
                {label && <div className={styles.InputLabel}>{label}</div>}
                <div className={styles.inputCont} onClick={() => !disabled && setIsOpen(true)}>
                    <ReactCountryFlag countryCode={selectedOption?.value || 'NG'} svg style={{
                        fontSize: '0.9em',
                        lineHeight: '0.9em',
                    }} />
                    <input
                        disabled={disabled}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={searchTerm || 'Nigeria'}
                        className={[
                            styles["storybook-input"],
                            disabled ? styles["storybook-input--disabled"] : "",
                        ].join(" ")}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSelectedOption(null); // Clear the selected option when typing
                            setIsOpen(true); // Open the dropdown when typing
                        }}
                    />
                </div>

            </div>
            <br/>
            {isOpen && filteredOptions.length > 0 && (
                <div ref={dropdownRef} className={styles.dropdownList}>
                    {filteredOptions.map((option) => (
                        <div
                            key={option.value}
                            className={styles.dropdownItem}
                            onClick={() => handleSelectOption(option)}
                        >
                            <ReactCountryFlag countryCode={option.value} svg  style={{
                                fontSize: '1.5em',
                                lineHeight: '1.5em',
                            }}/>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default memo(DropdownInput);
