import React, { useState } from "react";
import styles from "./MobileNavbar.module.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ModalWindow } from "../../modal/Modal";
import { useTranslation } from "react-i18next";

export const MobileNavbar = ({ openHandler, closeHandler, scroll }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => {
    setIsModal((prevState) => !prevState);
    closeHandler();
  };
  return (
    <div style={{ color: "white" }}>
      <ModalWindow
        onClose={modalHandler}
        open={isModal}
        className={styles.modal}
      ></ModalWindow>
      {openHandler && (
        <Modal
          open={openHandler}
          onClose={closeHandler}
          classNames={{
            overlay: "customOverlay",
            modal: styles.customModal,
            modalAnimationIn: styles.customEnterModalAnimation,
            modalAnimationOut: styles.customLeaveModalAnimation,
          }}
          animationDuration="250"
          closeIcon
        >
          <div className={styles.burgerIcon}>
            <div
              onClick={closeHandler}
              className={`${styles.burger} ${openHandler && styles.active}`}
            >
              <span></span>
              <span className={styles.shortLine}></span>
              <span></span>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.linkBox}>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component1")}> {t("nav.main")}</p>
              </div>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component2")}> {t("nav.video")}</p>
              </div>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component3")}>{t("nav.questions")}</p>
              </div>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component4")}>{t("nav.kurman")}</p>
              </div>
              <div className={styles.links_title}>
                <p onClick={() => scroll("component5")}>{t("nav.more")}</p>
              </div>
              <div className={styles.links_title}>
                <p>
                  <span
                    style={{ color: i18n.language === "ky" ? "#3b71ca" : "" }}
                    onClick={() => changeLanguage("ky")}
                  >
                    КЫР
                  </span>{" "}
                  |{" "}
                  <span
                    style={{ color: i18n.language === "ru" ? "#3b71ca" : "" }}
                    onClick={() => changeLanguage("ru")}
                  >
                    РУ
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
