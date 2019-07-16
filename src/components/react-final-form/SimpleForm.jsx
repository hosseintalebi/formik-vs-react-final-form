import React from "react";
import { Form, Field } from "react-final-form";

// RMWC Components
import { Button, TextField } from "../UI-kit";

// Styles
import commonStyles from "../styles";

const LoginForm = () => (
  <Form
    initialValues={getInitialValues()}
    validate={validate}
    onSubmit={onSubmit}
  >
    {({ handleSubmit, submitting }) => (
      <form onSubmit={handleSubmit} style={commonStyles.form}>
        <Field
          name="email"
          render={({ input, meta }) => (
            <TextField
              {...input}
              type="email"
              error={meta.error}
              touched={meta.touched}
              label={"Email"}
            />
          )}
        />
        <Field
          name="password"
          render={({ input, meta }) => (
            <TextField
              {...input}
              type="password"
              error={meta.error}
              touched={meta.touched}
              label={"Pasword"}
            />
          )}
        />
        <Button disabled={submitting} label="Submit" type="submit" unelevated />
      </form>
    )}
  </Form>
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
