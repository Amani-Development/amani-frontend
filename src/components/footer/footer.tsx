import { FooterNavigation as navigation } from "api/navigation/footernav";

import { useState } from "react";
import CautionModal from "components/Modal/cautionModal";
import styles from "./Footer.module.css"; // Import your CSS module

const Footer = () => {
 



  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left section */}
        <div className={styles.footerLeft}>
          <h2 className={styles.footerHeading}>
            <p>
              <span className={styles.highlight}>Amani </span>offers you
            </p>
            everything you need, <p> all in one place.</p>
          </h2>
          <a href="#" className={styles.contactLink}>
            Contact Us Today
          </a>
        </div>

        <div className="flex flex-col gap-8 text-gray-200 text-base">
      

          <div className={styles.learnCompanySection}>
            <div className="space-y-6">
              <ul>
                {navigation.learn.map((item) => (
                  <li key={item.name} className="mt-2 my-8">
                    <a
                      href={item.href}
                      className="hover:underline text-sm mb-8"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <ul>
                {navigation.company.map((item) => (
                  <li key={item.name} className="mt-2 my-8">
                    <a href={item.href} className="hover:underline text-sm">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.socialIcons}>
            {navigation.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className={styles.icon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerImage}>
        <img src={navigation.vector} alt="Navigation Graphic" />
      </div>
    </footer>
  );
};

export default Footer;
