import React from "react";
import styles from "./AppHeader.module.css";
import search from "../../assets/icons/Search.svg";
import notification from "../../assets/icons/notification.svg";
import message from "../../assets/icons/message.svg";
import profile from "../../assets/icons/profile.svg";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
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
        <img src={profile} alt="Profile picture" className={styles.icon} />
      </div>
    </div>
  );
};

export default AppHeader;
