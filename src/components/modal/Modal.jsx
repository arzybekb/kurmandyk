import React from "react";
import { Modal } from "react-responsive-modal";
import styles from "./Modal.module.css";
import "react-responsive-modal/styles.css";

export const ModalWindow = ({ open, onClose, children, className }) => {
  return (
    open && (
      <div className={styles.modalWrapper}>
        <Modal
          open={open}
          onClose={onClose}
          center
          showCloseIcon={false}
          classNames={{
            modal: className,
          }}
        >
          {children}
        </Modal>
      </div>
    )
  );
};
