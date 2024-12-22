import React from "react";
import styles from "./AppHeader.module.css";
import search from "../../assets/icons/Search.svg";
import notification from "../../assets/icons/notification.svg";
import message from "../../assets/icons/message.svg";
import person from "../../assets/icons/profile.svg";
import {NavLink,
    // useNavigate
} from "react-router-dom";

const AppHeader = () => {
    // let nav = useNavigate();

    const handleNav = () => {
        window.location.href='#/app/profile';
    }
  return (
    <div className={styles.header}>
      <div className={styles.searchContainer}>
        <img src={search} alt="Search icon" className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.iconContainer}>
        <NavLink to="/app/notification">
          <img
            src={notification}
            alt="Notification icon"
            className={styles.icon}
          />
        </NavLink>
        <img src={message} alt="Message icon" className={styles.icon} />
        <img src={person} alt="Profile icon" onClick={handleNav} className={styles.icon} />
      </div>
    </div>
  );
};

export default AppHeader;
