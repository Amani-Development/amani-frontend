import React, {useEffect, useState} from "react";
import styles from './input-II.module.css'; // Import CSS module

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
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

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

const InputII: React.FC<InputProps> = ({
                                         default: defaultProp,
                                         focused,
                                         error,
                                         disabled,
                                         label,
                                         onChange,
                                         placeholder,
                                         type = 'text',
                                         value,
                                         maxContent, name,
                                     }: InputProps) => {
    const [isFocused, setIsFocused] = useState(focused);

    useEffect(() => {
        setIsFocused(focused);
    }, [focused]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div  className={styles.container}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{cursor: disabled ? 'not-allowed' : ''}}
        >
            {label &&
                <div className={`${styles.InputLabel} `}>{label}</div>}
            <>
                <input
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    className={[
                        styles['storybook-input'], disabled ? styles['storybook-input--disabled'] : ''
                    ].join(' ')}
                    onChange={onChange}
                />
            </>

        </div>
    );
};

export default InputII;