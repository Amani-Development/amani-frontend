import React from 'react';
import styles from './button-III.module.css';


export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    // primary?: boolean;
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    // disabled?: boolean;
    backgroundColor: string;
    iconLink?: string;
    textColour?: string;
}

/**
 * Primary UI component for user interaction, styled using CSS modules.
 *
 * This component supports customization through props:
 * - `primary`: If true, renders the button as the primary call-to-action.
 * - `disabled`: If true, disables the button interaction and changes its appearance.
 * - `label`: The text displayed on the button.
 * - `onClick`: Optional click handler function.
 *
 * The styling is managed using CSS modules to ensure scoped styles and prevent global CSS conflicts.
 */

const ButtonIII = ({
                     label,
                     iconLink,
                        backgroundColor,
    textColour,
                     ...props
                 }:  ButtonProps) => {
    // const mode = primary ? styles.storybookButtonPrimary : styles.storybookButtonSecondary;
    // const disable = disabled ? styles['storybook-button--disabled'] : '';
    return (
        <button
            type="button"
            style={{ backgroundColor, color: textColour}}
            className={[styles.storybookButton].join(' ')}
            {...props}
            onClick={props.onClick}
        >
            <img className={styles.iconsize} src={iconLink} alt="icon"/>  {label}
        </button>
    );
};

export default ButtonIII;