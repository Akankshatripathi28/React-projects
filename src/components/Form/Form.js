import React, { useState } from "react";
import styles from "./Form.module.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className={styles.formcontainer}>
        <span className={styles.closebtn}>×</span>
        <div className={styles.formcontentleft}>
          <img className={styles.formimg} src="img/img-2.jpg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
