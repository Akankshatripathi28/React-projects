import styles from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  return (
    <div onClick={onClose} className={styles.modal}>
      <div className={styles.modalBody}>{children}</div>
    </div>
  );
};

export default Modal;
