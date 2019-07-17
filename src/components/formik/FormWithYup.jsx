import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

// RMWC Components
import { Button, TextField } from "../UI-kit";

// Styles
import commonStyles from "../styles";

const initialValues = {
  email: "",
  password: ""
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
      <Formik
        initialValues={initialValues}
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
          <Form style={commonStyles.form}>
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

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export default LoginFormYup;
