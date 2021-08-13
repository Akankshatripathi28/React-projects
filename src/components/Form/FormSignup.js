import React from "react";
import UseForm from "./UseForm";
import ValidateInfo from "./ValidInfo";
import Login from "../Login/Login";
import styles from "./Form.module.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submitForm,
    ValidateInfo
  );

  return (
    <div className={styles.formcontentright}>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Welcome, create ur account</h1>
        <div className={styles.forminputs}>
          <label className={styles.formlabel}>Username</label>
          <input
            className={styles.forminput}
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className={styles.forminputs}>
          <label className={styles.formlabel}>Email</label>
          <input
            className={styles.forminput}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className={styles.forminputs}>
          <label className={styles.formlabel}>Password</label>
          <input
            className={styles.forminput}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className={styles.forminputs}>
          <label className={styles.formlabel}>Confirm Password</label>
          <input
            className={styles.forminput}
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className={styles.forminputbtn} type="submit">
          Sign up
        </button>
        <span className={styles.forminputlogin}>
          Already have an account? Login <a href={<Login />}>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
