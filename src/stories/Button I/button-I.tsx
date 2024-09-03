import React from 'react';
import styles from './button-I.module.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
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

 const ButtonI = ({
  primary = false,
  label,
    disabled,
  ...props
}:  ButtonProps) => {
    const mode = primary ? styles.storybookButtonPrimary : styles.storybookButtonSecondary;
    const disable = disabled ? styles['storybook-button--disabled'] : '';
    return (
        <button
            disabled={disabled}
            type="button"
            className={[styles.storybookButton,  mode, disable].join(' ')}
            {...props}
        >
            {label} <img className={disabled? styles.arrowdisable : ''} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725366167/Am/Amani/Left_qmfsxi.svg" alt="left"/>
        </button>
  );
};

export default ButtonI;