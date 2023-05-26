import React, { useState } from "react";
import styles from "./MobileNavbar.module.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ModalWindow } from "../../modal/Modal";

export const MobileNavbar = ({ openHandler, closeHandler }) => {
  const [isSelecte, setIsSelect] = useState(false);
  const selectHandler = () => setIsSelect((prevState) => !prevState);

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
      >
        {/* <CloseModalIcon onClick={modalHandler} /> */}
      </ModalWindow>
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
            <a href="/">Logo</a>
            <div className={styles.linkBox}>
              <div className={styles.links_title}>
                <a href="/">Главная</a>
              </div>
              <div className={styles.links_title}>
                <a href="/">Швейные машины</a>
              </div>
              <div className={styles.links_title}>
                <a href="/">О компании</a>
              </div>
              <div className={styles.links_title}>
                <a href="/">Контакты</a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
