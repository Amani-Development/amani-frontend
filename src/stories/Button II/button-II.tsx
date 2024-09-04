import React from 'react';
import styles from './button-II.module.css';
import {FcGoogle} from "react-icons/fc";
import { DiApple } from "react-icons/di";

export interface ButtonProps {
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;

    disabled?: boolean;
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

const ButtonII = ({
                     label,
                     disabled,
                     ...props
                 }:  ButtonProps) => {
    const disable = disabled ? styles['storybook-button--disabled'] : '';
    return (
        <button
            disabled={disabled}
            type="button"
            className={[styles.storybookButton,  disable].join(' ')}
            {...props}
            onClick={props.onClick}

        >
            {label}
        </button>
    );
};

export default ButtonII;