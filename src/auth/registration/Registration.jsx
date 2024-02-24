import React from "react";
import styles from "../registration/Reg.module.css";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import ErrorHandle from "../error-handle/ErrorHandle";
import PasswordConfirmItem from "../error-handle/PasswordConfirmItem";

const Registration = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // dispatch(registerUser(values));
  };

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    username: yup
      .string("Enter your username")
      .required("Username is required"),
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
      username: "",
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
                style={{
                  m: 1,

                  backgroundColor: "rgb(249, 247, 247)",
                  border: "none",
                  borderRadius: "12px",
                }}
                fullWidth
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />

              <input
                className={styles.form__input}
                style={{ borderRadius: "12px" }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                id="password"
                type={showPassword ? "text" : "password"}
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       className={styles.adornment}
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //       edge="end"
                //     >
                //       {showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // }
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
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       className={styles.adornment}
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //       edge="end"
                //     >
                //       {showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // }
              />

              <PasswordConfirmItem values={formik.values} />
              <button
                // style={{
                //   backgroundColor: formik.isValid ? "black" : "lightgrey",
                // }}
                className={styles.form__button}
                onClick={() => handleSubmit(formik.values)}
                type="submit"
                disabled={isSubmitting}
                variant="contained"
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
