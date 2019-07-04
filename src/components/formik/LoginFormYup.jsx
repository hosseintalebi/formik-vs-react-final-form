import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(6, () => <span>Too short</span>)
    .max(50, <span>Too long</span>)
    .required("Required")
});

const LoginFormYup = () => {
  return (
    <div>
      <div style={styles.title}>Formik Login Form (Schema Validation)</div>
      <Formik
        initialValues={getInitialValues()}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting
        }) => (
          <Form style={styles.form}>
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

const getInitialValues = () => ({
  email: "",
  password: ""
});

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export default LoginFormYup;
