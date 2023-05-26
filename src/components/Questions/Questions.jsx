import React from "react";
import Accodion from "../UI/Accordion/Accordion";
import styles from "./Questions.module.css";

const Questions = ({ refOf }) => {
  return (
    <div ref={refOf} className={styles.container}>
      <div className={styles["inner-wrap"]}>
        <h2 className={styles.title}>Курмандык жөнүндөгү суроолор</h2>
        <div className={styles.accordion}>
          <Accodion />
        </div>
      </div>
    </div>
  );
};

export default Questions;
