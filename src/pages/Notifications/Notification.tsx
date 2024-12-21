import styles from "./Notification.module.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrowLeft.svg";
import { useState } from "react";

const Notification = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // State for toggles
  const [settings, setSettings] = useState({
    messageNotifications: true,
    communicationEmails: true,
    promotionEmails: false,
    notificationSounds: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <img
          src={arrow}
          alt="Go Back"
          onClick={handleGoBack}
          className={styles.backButton}
          style={{ cursor: "pointer" }}
        />
        <p>Notification settings</p>
      </div>

      <div className={styles.settingsContainer}>
        <div className={styles.settingItem}>
          <div>
            <p className={styles.settingTitle}>Message notifications</p>
            <p className={styles.settingDescription}>
              Enable or disable message notifications from hosts
            </p>
          </div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={settings.messageNotifications}
              onChange={() => handleToggle("messageNotifications")}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.settingItem}>
          <div>
            <p className={styles.settingTitle}>Communication emails</p>
            <p className={styles.settingDescription}>
              Receive emails from  activities on amani  such as
              reservation confirmations e.t.c
            </p>
          </div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={settings.communicationEmails}
              onChange={() => handleToggle("communicationEmails")}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.settingItem}>
       <div className={styles.divider}>
  <div>
    <p className={styles.settingTitle}>Promotion and updates emails</p>
    <p className={styles.settingDescription}>
      Receive emails from amani about new updates, surveys, opportunities, products, etc.
    </p>
  </div>
  <label className={styles.switch}>
    <input
      type="checkbox"
      checked={settings.promotionEmails}
      onChange={() => handleToggle("promotionEmails")}
    />
    <span className={styles.slider}></span>
  </label>
</div>

        </div>

        <div className={styles.settingItem}>
          <div>
            <p className={styles.settingTitle}>Notification sounds</p>
            <p className={styles.settingDescription}>
              Enable or disable notification sounds
            </p>
          </div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={settings.notificationSounds}
              onChange={() => handleToggle("notificationSounds")}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Notification;
