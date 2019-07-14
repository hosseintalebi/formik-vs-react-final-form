import React from "react";
import { Formik } from "formik";

// RMWC Components
import { Button, TextField } from "../UI-Kit";

const styles = {
  title: {
    fontWeight: 500,
    color: "rgba(45,45,45,1)",
    margin: "40px 10px 20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};
const LoginForm = () => (
  <div>
    <div style={styles.title}>Simple Login Form</div>
    <Formik
      initialValues={getInitialValues()}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} style={styles.form}>
          <TextField
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            label={"Email"}
          />
          <TextField
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            label={"Pasword"}
          />
          <Button
            label="Submit"
            type="submit"
            disabled={isSubmitting}
            unelevated
          />
        </form>
      )}
    </Formik>
  </div>
);

const getInitialValues = () => ({ email: "", password: "" });

const validate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export default LoginForm;
