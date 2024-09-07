import React, {useCallback, useEffect, useRef, useState} from "react";
import ReactCountryFlag from "react-country-flag";
import styles from './phone.module.css'; // Import CSS module

interface InputProps {
    /**
     * Sets the input to its default value or state.
     */
    default?: boolean;

    /**
     * Determines if the input field should be focused initially.
     */
    focused?: boolean;

    /**
     * Indicates that the input has an error, displaying an error message and styling accordingly.
     */
    error?: boolean;

    /**
     * Disables the input field if true.
     */
    disabled?: boolean;

    /**
     * Label text for the input field.
     */
    label?: string;

    /**
     * Optional function called when the input value changes.
     */
    onChange?: (option: OptionType) => void;
    /**
     * Error message to display when `error` is true.
     */
    errorMessage?: string;

    /**
     * Placeholder text displayed when the input is empty.
     */
    placeholder?: string;


    /**
     * Type of the input field (e.g., 'text', 'password').
     */
    type?: string;


    /**
     * Maximum number of characters allowed in the input field.
     */
    maxContent?: number;
    name?: string;
    value?: string;
    options: OptionType[];
}

interface OptionType {
    value: string;
    CountryCode: string;
    Country: string;
}

/**
 * Input component for user input, styled using CSS modules.
 *
 * Props:
 * - `default`: Sets the input to its default value or state.
 * - `focused`: Determines if the input field should be focused initially.
 * - `error`: Indicates that the input has an error, displaying an error message and styling accordingly.
 * - `disabled`: Disables the input field if true.
 * - `label`: Label text for the input field.
 * - `onChange`: Optional function called when the input value changes.
 * - `errorMessage`: Error message to display when `error` is true.
 * - `placeholder`: Placeholder text displayed when the input is empty.
 * - `size`: Size of the input field ('small', 'medium', 'large').
 * - `type`: Type of the input field (e.g., 'text', 'password').
 * - `isTextArea`: Indicates whether the input field is a textarea (true) or not (false).
 * - `maxContent`: Maximum number of characters allowed in the input field (only applicable if `isTextArea` is true).
 *
 * This component uses CSS modules for scoped styles, ensuring encapsulation and minimizing global CSS conflicts.
 */

const PhoneInput: React.FC<InputProps> = ({
                                         default: defaultProp,
                                         focused,
                                         error,
                                         disabled,
                                         label,
                                              onChange = () => {},
                                         placeholder,
                                        options,
                                         type = 'text',
                                         value,
                                         maxContent, name,
                                     }: InputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [searchTerm, setSearchTerm] = useState(value || "");

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelectOption = useCallback(
        (option: OptionType) => {
            setSelectedOption(option);
            // setSearchTerm(option.label);
            setIsOpen(false);
            onChange(option);
            localStorage.setItem('CountryCode', selectedOption?.CountryCode || '+234')
        },
        [onChange]
    );

    // const filteredOptions = options.filter((option) =>
    //     option.label.toLowerCase().includes(searchTerm.toLowerCase())
    // );

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
        <div className={styles.Maincont}>
            <div className={styles.flagCont} onClick={() => setIsOpen(true)}>
                <ReactCountryFlag countryCode={selectedOption?.value ||'NG'} svg style={{
                    fontSize: '1.5em',
                    lineHeight: '1.5em',
                }} />
            </div>

            <div  className={styles.container}
                  style={{cursor: disabled ? 'not-allowed' : ''}}
            >
                {
                    label &&
                    <div className={`${styles.InputLabel} `}>{label}</div>
                }

                <div className={styles.phoneCont}>
                    <div>{selectedOption?.CountryCode || '+234'}</div>
                    <input
                        disabled={disabled}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        className={[
                            styles['storybook-input'], disabled ? styles['storybook-input--disabled'] : ''
                        ].join(' ')}
                        onChange={(e) => {}}
                    />
                </div>

            </div>

            {isOpen  && (
                <div ref={dropdownRef} className={styles.dropdownList}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={styles.dropdownItem}
                            onClick={() => handleSelectOption(option)}
                        >
                            <ReactCountryFlag countryCode={option.value} svg  style={{
                                fontSize: '1.5em',
                                lineHeight: '1.5em',
                            }}/>
                           ({option.Country}) {option.CountryCode}
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default PhoneInput;