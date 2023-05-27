import React from "react";
import styles from "./Footer.module.css";
import Logotype from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className={styles.container}>
      <img src={Logotype} alt="logo" />
      <h6>&copy; Курмандык</h6>
    </div>
  );
}

export default Footer;
