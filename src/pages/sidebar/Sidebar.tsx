import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for active route functionality
import styles from "./Sidebar.module.css"; // Import the CSS Module
import { FaTimes } from "react-icons/fa"; // Icons for Hamburger Menu
import dashboard from "../../assets/icons/dashboard-icon.svg"
import sales from "../../assets/icons/sale-icon.svg"
import analytics from "../../assets/icons/analytics-icon.svg"
import chats from "../../assets/icons/chat-icon.svg"
import referral from "../../assets/icons/referral-icon.svg"
import support from "../../assets/icons/support-icon.svg"
import settings from "../../assets/icons/settings-icon.svg"
import logout from "../../assets/icons/logout-icon.svg"
import hamburger from"../../assets/icons/hamburger.svg"

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

    const handleLinkClick = () => {
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

  return (
    <>
      <button
        className={`${styles.hamburgerButton} md:hidden`}
        onClick={toggleMobileMenu}
        aria-label="Toggle Sidebar"
      >
        {/* <FaBars size={24} /> */}
        {isMobileMenuOpen ? (
          <FaTimes size={24} className={styles.cancel} />
        ) : (
          <img src={hamburger} alt="" className={styles.hamburger} />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          isMobileMenuOpen ? styles.open : styles.closed
        } `}
      >
        <nav className={styles.nav}>
          {/* Main Menu */}
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/dashboard"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={handleLinkClick}
              >
                <img src={dashboard} alt="" /> Dashboard
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/mysales"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={handleLinkClick}
              >
                <img src={sales} alt="" /> My Sales
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/analytics"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={handleLinkClick}
              >
                <img src={analytics} alt="" /> Analytics
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/myamani"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={handleLinkClick}
              >
                <span>
                  <svg
                    width="26"
                    height="23"
                    viewBox="0 0 26 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9149 1.05226C14.9149 1.6144 18.2986 13.2795 25 17.1731C24.5577 18.5574 23.8529 19.9642 22.9901 21.0936C20.1417 19.1584 16.703 18.0272 13 18.0272C9.29696 18.0272 5.85826 19.1584 3.00995 21.0936C2.14714 19.9642 1.44221 18.5574 1 17.1731C7.70139 13.2795 11.0851 1.6144 11.0851 1.05226C11.7094 0.956757 12.3489 0.907227 13 0.907227C13.6511 0.907227 14.2906 0.956757 14.9149 1.05226ZM16.9356 14.5624C16.9311 14.556 16.9267 14.5497 16.9223 14.5434C15.3548 12.3179 14.0557 9.83052 13 7.30655C11.9443 9.83052 10.6452 12.3179 9.07772 14.5434C9.07325 14.5497 9.06886 14.556 9.0643 14.5623C10.3548 14.3247 11.6713 14.2038 13 14.2038C14.3286 14.2038 15.6453 14.3247 16.9356 14.5624Z"
                      stroke="#DCDDDF"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                My Amani
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/chats"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={handleLinkClick}
              >
                <img src={chats} alt="" /> Chats
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/referral-program"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={handleLinkClick}
              >
                <img src={referral} alt="" /> Referral Program
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/support"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={handleLinkClick}
              >
                <img src={support} alt="" /> Support
              </NavLink>
            </li>
          </ul>

          {/* Bottom Menu */}
          <ul className={styles.bottomMenu}>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/become-a-tenant"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                onClick={handleLinkClick}
              >
                Become a tenant
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/settings"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <img src={settings} alt="" /> Settings
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/app/logout"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                    onClick={handleLinkClick}
              >
                <img src={logout} alt="" /> Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
