import React from "react";
import Accodion from "../UI/Accordion/Accordion";
import styles from "./Questions.module.css";

const Questions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Курмандык жөнүндөгү суроолор</h2>
      <div className={styles.accordion}>
        <Accodion />
      </div>
    </div>
  );
};

export default Questions;
