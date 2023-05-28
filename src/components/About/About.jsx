import React from "react";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next";

function About({ refOf }) {
  const { t } = useTranslation();
  return (
    <div ref={refOf} className={styles.container}>
      <h2 className={styles.title}>{t('more.title')}</h2>
      <p>{t("more.text")}</p>
      <p>{t("more.text2")}</p>
      <p>{t("more.text3")}</p>
      <p>{t("more.text4")}</p>
      <p>{t("more.text5")}</p>
      <p>{t("more.text6")}</p>
      <p>{t("more.text7")}</p>
    </div>
  );
}

export default About;
