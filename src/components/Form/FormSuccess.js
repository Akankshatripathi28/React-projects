import React from "react";
import styles from "./Form.module.css";

const FormSuccess = () => {
  return (
    <div className={styles.formcontentright}>
      <h1 className={styles.formsuccess}>We have received your request!</h1>
      <img className={styles.formimg2} src="img/img-3.svg" alt="success" />
    </div>
  );
};

export default FormSuccess;
