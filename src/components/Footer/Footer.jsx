import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyeright {new Date().getFullYear()} By world-wize Inc.
      </p>
    </footer>
  );
};

export default Footer;
