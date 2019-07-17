import React from "react";
import { Formik } from "formik";

// RMWC Components
import { Button, TextField } from "../UI-kit";

// Styles
import commonStyles from "../styles";

const initialValues = { email: "", password: "" };

const LoginForm = () => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    }) => (
      <form onSubmit={handleSubmit} style={commonStyles.form}>
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
);

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
