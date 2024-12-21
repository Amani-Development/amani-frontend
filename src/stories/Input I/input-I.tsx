import React, { useEffect, useState } from "react";
import styles from './input-I.module.css'; // Import CSS module

interface InputProps {
    default?: boolean;
    focused?: boolean;
    error?: boolean;
    disabled?: boolean;
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
    maxContent?: number;
    name?: string;
    value?: string;
    isTextArea: boolean;
    width?: number; // Width prop to dynamically adjust the input width
}

const Input: React.FC<InputProps> = ({
                                         default: defaultProp,
                                         focused,
                                         error,
                                         disabled,
                                         width, // Destructure the width prop here
                                         label,
                                         onChange,
                                         placeholder,
                                         isTextArea,
                                         type = 'text',
                                         value,
                                         maxContent,
                                         name,
                                     }: InputProps) => {

    const [isFocused, setIsFocused] = useState(focused);

    useEffect(() => {
        setIsFocused(focused);
    }, [focused]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    if (isFocused) {
        console.log('Input is focused');
    }

    return (
        <div
            className={isTextArea ? styles.containerTextarea : styles.container}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ cursor: disabled ? 'not-allowed' : '',   width: width ? `${width}px` : '',}}
        >
            {label && <div className={styles.InputLabel}>{label}</div>}
            {isTextArea ? (
                <textarea
                    cols={30}
                    rows={10}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    className={[
                        styles['storybook-input'],
                        disabled ? styles['storybook-input--disabled'] : ''
                    ].join(' ')}
                    style={{
                        resize: 'vertical',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        minWidth: '100%',
                        height: '106px',
                        width: width ? `${width-50}px` : 'auto',
                    }}
                    onChange={onChange}
                    maxLength={maxContent}
                ></textarea>
            ) : (
                <input
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    className={[
                        styles['storybook-input'],
                        disabled ? styles['storybook-input--disabled'] : ''
                    ].join(' ')}
                    onChange={onChange}
                    style={{
                        width: width ? `${width-50}px` : 'auto',
                    }}
                />
            )}
        </div>
    );
};

export default Input;
