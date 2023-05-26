import styles from "./Backdrop.module.css";

export function Backdrop({ onClose }) {
  return <div className={styles.backdrop} onClick={onClose} />;
}
