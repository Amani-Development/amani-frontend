import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import styles from './phone.module.css'; // Import CSS module

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
    options: OptionType[];
    getValue?: (option: string) => void;
}

interface OptionType {
    value: string;
    CountryCode: string;
    Country: string;
}

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
                                              getValue,
                                              maxContent,
                                              name,
                                          }: InputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [searchTerm, setSearchTerm] = useState(value || "");

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelectOption = useCallback(
        (option: OptionType) => {
            setSelectedOption(option);
            setIsOpen(false);
            onChange(option);

            // Save selected country code and value to localStorage
            localStorage.setItem('CountryCode', option.CountryCode || '+234');
            localStorage.setItem('SelectedCountry', JSON.stringify(option));
        },
        [onChange]
    );

    // Retrieve the selected country from localStorage on initial render
    useEffect(() => {
        const savedCountry = localStorage.getItem('SelectedCountry');
        if (savedCountry) {
            const parsedCountry = JSON.parse(savedCountry) as OptionType;
            setSelectedOption(parsedCountry);
        } else {
            // Set default country if nothing is saved
            const defaultCountry = options.find((opt) => opt.value === 'NG') || options[0];
            setSelectedOption(defaultCountry);
        }
    }, [options]);

    useEffect(() => {
        if (getValue && phone && phone !== searchTerm) {
            getValue(phone);
            setSearchTerm(phone); // Update searchTerm to avoid infinite loop
        }
    }, [getValue, phone, searchTerm]);

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
                <ReactCountryFlag
                    countryCode={selectedOption?.value || 'NG'}
                    svg
                    style={{
                        fontSize: '1.2em',
                        lineHeight: '1.2em',
                    }}
                />
            </div>

            <div className={styles.container} style={{ cursor: disabled ? 'not-allowed' : '' }}>
                {label && <div className={`${styles.InputLabel} `}>{label}</div>}

                <div className={styles.phoneCont}>
                    <div>{selectedOption?.CountryCode || '+234'}</div>
                    <input
                        disabled={disabled}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        className={[styles['storybook-input'], disabled ? styles['storybook-input--disabled'] : ''].join(' ')}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
            </div>

            {isOpen && (
                <div ref={dropdownRef} className={styles.dropdownList}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={styles.dropdownItem}
                            onClick={() => handleSelectOption(option)}
                        >
                            <ReactCountryFlag
                                countryCode={option.value}
                                svg
                                style={{
                                    fontSize: '1.5em',
                                    lineHeight: '1.5em',
                                }}
                            />
                            ({option.Country}) {option.CountryCode}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PhoneInput;
