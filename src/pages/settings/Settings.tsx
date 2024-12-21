import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Settings.module.css"; 
import arrow from '../../assets/icons/arrow.svg'
import updateId from '../../assets/icons/updateId.svg'
import changeEmail from '../../assets/icons/emailChange.svg'
import changePassword from '../../assets/icons/changePassword.svg'
import notification from '../../assets/icons/NotificationSettings.svg'
import currency from '../../assets/icons/currency.svg'
import trash from '../../assets/icons/delete.svg'


const settings = [
  { label: "Update ID", route: "updateId", icon: updateId },
  { label: "Change e-mail", route: "changeEmail", icon: changeEmail },
  { label: "Change password", route: "changePassword", icon: changePassword },
  {
    label: "Notification settings",
    route: "notification-settings",
    icon: notification,
  },
  {
    label: "Currency & language settings",
    route: "currencyndregion",
    icon: currency,
  },
  { label: "Delete Account", route: "/delete-account", icon: trash },
];

const Settings = () => {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    console.log(route);
    
    navigate(route); 
  };

  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.settingsTitle}>Settings</h3>
      <div className={styles.settingsContainer}>
        <ul className={styles.settingsList}>
          {settings.map((item, index) => (
            <li
              key={index}
              className={styles.settingsItem}
              onClick={() => handleClick(item.route)}
            >
              <span className={styles.icon}><img src={item.icon} alt="" /></span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.arrow}><img src={arrow} alt="" /></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Settings;
