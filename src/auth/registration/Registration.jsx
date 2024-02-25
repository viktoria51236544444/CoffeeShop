import React from "react";
import styles from "../registration/Reg.module.css";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import ErrorHandle from "../error-handle/ErrorHandle";
import PasswordConfirmItem from "../error-handle/PasswordConfirmItem";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";

const Registration = () => {
  const {
    user,
    email,
    password,
    passowrdConfirm,
    emailError,
    passwordError,
    setEmail,
    setEmailError,
    setUser,
    setPassword,
    setPasswordConfirm,
    setPasswordError,
    handleRegister,
    handleLogOut,
    handleLogin,
    hasAccount,
    setHasAccount,
  } = useAuth();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  // const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    password_confirm: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password confirmation is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <div className={styles.form__main_title}>
          <p className={styles.form__header}>Create your own account</p>
        </div>
        <Formik
          initialValues={formik.initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form__registration} action="">
              <input
                className={styles.form__input}
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                // error={formik.touched.email && Boolean(formik.errors.email)}
              />

              <input
                className={styles.form__input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onBlur={formik.handleBlur}
                placeholder="Enter password"
                // error={
                //   formik.touched.password && Boolean(formik.errors.password)
                // }
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      className={styles.adornment}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <ErrorHandle
                values={formik.values}
                touched={formik.touched.password}
              />

              <input
                className={styles.form__input}
                style={{ borderRadius: "12px" }}
                value={formik.values.password_confirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirm your password"
                error={
                  formik.touched.password_confirm &&
                  Boolean(formik.errors.password_confirm)
                }
                id="password_confirm"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      className={styles.adornment}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <PasswordConfirmItem values={formik.values} />
              <button
                style={{
                  backgroundColor: formik.isValid ? "#a88c81" : "#e34608",
                }}
                className={styles.form__button}
                onClick={handleRegister}
                type="submit"
                // disabled={isSubmitting}
                // variant="contained"
              >
                Continue
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
