const codeString = `import React from "react";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";

// RMWC Components
import { Button, TextField } from "../UI-kit";

// Styles
import commonStyles from "../styles";

const focusOnError = createDecorator();

const LoginForm = () => (
  <Form
    initialValues={getInitialValues()}
    validate={validate}
    onSubmit={onSubmit}
    decorators={[focusOnError]}
  >
    {({ handleSubmit, submitting }) => (
      <form onSubmit={handleSubmit} style={commonStyles.form}>
        <Field
          name="firstNameFocus"
          render={({ input, meta }) => (
            <TextField
              {...input}
              type="text"
              error={meta.error}
              touched={meta.touched}
              label={"First Name"}
            />
          )}
        />
        <Field
          name="lastNameFocus"
          render={({ input, meta }) => (
            <TextField
              {...input}
              type="text"
              error={meta.error}
              touched={meta.touched}
              label={"Last Name"}
            />
          )}
        />
        <Field
          name="emailFocus"
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
          name="passwordFocus"
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

const getInitialValues = () => ({
  firstNameFocus: "",
  lastNameFocus: "",
  emailFocus: "",
  passwordFocus: ""
});

const validate = values => {
  let errors = {};
  if (!values.emailFocus) {
    errors.emailFocus = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailFocus)
  ) {
    errors.emailFocus = "Invalid email address";
  }
  if (!values.passwordFocus) {
    errors.passwordFocus = "Password is required";
  }
  if (!values.firstNameFocus) {
    errors.firstNameFocus = "First name is required";
  }
  if (!values.lastNameFocus) {
    errors.lastNameFocus = "Last name is required";
  }
  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(400);
  window.alert(JSON.stringify(values, 0, 2));
};

export default LoginForm;
`;
export default codeString;
