// Dropdown.tsx
import React, { useState } from 'react';
import styles from './SelectDropdownII.module.css';

interface Option {
    FullName: string;
}

interface DropdownProps {
    options: Option[];
    label?: string;
    defaultValue?: string;
    onChange?: (item: Option) => void;
    placeholder?: string;
}

const SelectDropdownII: React.FC<DropdownProps> = ({

                                               options,
                                               defaultValue = '',
    label,
                                               onChange,
                                               placeholder = 'Select an option'
                                           }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>(defaultValue);

    const handleSelect = (item: Option) => {
        setSelectedItem(item.FullName);
        setIsOpen(false);
        onChange?.(item);
    };

    return (
        <div className={styles.dropdownContainer}>
            <div
                className={`${styles.sourceLabelRow} d-flex justify-content-between`}
            >
                {label && <label className={styles.label}>{label}</label>}
            </div>
            <button
                type="button"
                className={styles.dropdownButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span>{selectedItem || placeholder}</span>
                {/*<span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>*/}
            </button>

            {isOpen && (
                <ul className={styles.dropdownList} role="listbox">
                    {options.map((item) => (
                        <li
                            key={item.FullName}
                            className={styles.dropdownItem}
                            onClick={() => handleSelect(item)}
                            role="option"
                            aria-selected={selectedItem === item.FullName}
                        >
                            {item.FullName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectDropdownII;