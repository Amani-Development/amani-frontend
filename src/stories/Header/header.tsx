import React from 'react';
import styles from './header.module.css';
import ButtonI from '../Button I/button-I';



export interface HeaderProps {
    /**
     * Determines if the user is authenticated.
     */
  Auth?: Boolean;
}

/**
 * Header component renders a navigation bar with different sections based on authentication status.
 * - `auth`: Specifies if the user is authenticated.
 */

 const Header = ({ Auth }: HeaderProps) => (
  <header>
    <div className="storybook-header">
        <div className={styles.logoContainer}>
            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725366169/Am/Amani/Amani_Blue_ct9uzj.svg" alt="logo"/>
        </div>

        {Auth ? (
            <div className={styles.MiddleListContainer}>
                <ul>
                    <li>Places to stay</li>
                    <li> Buy an Amani </li>
                    <li> Rent an Amani</li>
                </ul>
            </div>
        ) : <></>}


        {Auth ? (
            <div className={styles.LastListContainer}>
                <div>
                    Become a Host
                </div>
                <div>
                    <ButtonI onClick={() => console.log('clicked')} label="Sign Up" primary={true} />
                </div>
            </div>) :
            (<div className={styles.LastListContainer}>
                <div>
                    Become a Host
                </div>
                <div>
                    <ButtonI onClick={() => console.log('clicked')} label="Contact Us" primary={true} />
                </div>
            </div>)

        }

    </div>
  </header>
);

export default Header;