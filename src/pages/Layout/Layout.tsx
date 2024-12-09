import React from "react";
import AppHeader from "components/AppHeader/AppHeader";
import Sidebar from "pages/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css"; // Import the styles

const Layout = () => {
  return (
    <main className={styles.layout}>
      <div
        className={`${styles.sidebarContainer} ${styles.sidebarDesktop} bg-white`}
      >
        <Sidebar />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <AppHeader />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
