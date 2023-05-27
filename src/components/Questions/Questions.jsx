import React from "react";
import Accodion from "../UI/Accordion/Accordion";
import styles from "./Questions.module.css";
import { useTranslation } from "react-i18next";

const Questions = ({ refOf }) => {
  const { t } = useTranslation();
  return (
    <div ref={refOf} className={styles.container}>
      <div className={styles["inner-wrap"]}>
        <h2 className={styles.title}>{t('question.title')}</h2>
        <div className={styles.accordion}>
          <Accodion />
        </div>
      </div>
    </div>
  );
};

export default Questions;
