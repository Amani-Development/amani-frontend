import React, {useEffect, useRef } from 'react';
import styles from './header.module.css';
import ButtonI from '../Button I/button-I';



export interface HeaderProps {
    /**
     * Determines if the user is authenticated.
     */
    backGround? : boolean;
    mask? : boolean;
    Auth?: Boolean;
}

/**
 * Header component renders a navigation bar with different sections based on authentication status.
 * - `auth`: Specifies if the user is authenticated.
 */

 const Header = ({ Auth , backGround, mask}: HeaderProps) => {
     const[openToggle, SetOpenToggle] = React.useState(false);
    const toggleRef = useRef<HTMLDivElement>(null);
     const handleToggle = () => {
            SetOpenToggle(!openToggle);
     }


    const handleClickOutside = (event: MouseEvent) => {
        if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
            SetOpenToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

     return(
       <>
           {mask ?
               <></> :
               <header style={{backgroundColor: backGround? '#f7faf2' : 'white'}}>
                   <div className={styles.storybookHeader}>
                       <div className={styles.logoContainer}>
                           <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725366169/Am/Amani/Amani_Blue_ct9uzj.svg"  className={styles.logo} alt="logo"/>
                       </div>

                       {/*<div className={Auth ? styles.desktopNav : ''}>*/}
                       {Auth ? (
                           <div className={styles.MiddleListContainer}>
                               <ul className={styles.middleList}>
                                   <li>Places to stay</li>
                                   <li> Buy an Amani </li>
                                   <li> Rent an Amani</li>
                               </ul>
                           </div>
                       ) : <></>}


                       {Auth ? (
                               <div className={styles.LastListContainer}>
                                   <div className={styles.lastContainerText}>
                                       Become a Host
                                   </div>
                                   <div>
                                       <ButtonI onClick={() => console.log('clicked')} label="Sign Up" primary={true} />
                                   </div>
                               </div>) :

                           (<div className={styles.LastListContainer2}>
                               <div className={styles.lastContainerText2}>
                                   Become a Host
                               </div>
                               <div>
                                   <ButtonI onClick={() => console.log('clicked')} label="Contact Us" primary={true} />
                               </div>
                           </div>)

                       }
                       {/*</div>*/}

                       {Auth ? (
                               <div className={styles.menu} onClick={handleToggle}>
                                   <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725380212/Am/Amani/Frame_12355_jcckla.svg" alt="menu"/>
                               </div>
                           ) :
                           <></>
                       }




                   </div>
                   {openToggle &&
                       <div className={styles.toggleCont}  ref={toggleRef}>
                           <div className={styles.mobileNav}>
                               <ul className={styles.mobileList}>
                                   <li>Places to stay</li>
                                   <li> Buy an Amani </li>
                                   <li> Rent an Amani</li>
                               </ul>
                           </div>
                       </div>
                   }

               </header>

           }
       </>
     )
}

export default Header;