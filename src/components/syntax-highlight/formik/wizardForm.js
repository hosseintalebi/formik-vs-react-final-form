const codeString = `import React from "react";
import { Field, ErrorMessage } from "formik";
import Wizard from "./Wizard";

// RMWC Components
import { TextField, Select } from "../UI-kit";

// Styles
const styles = {
  error: {
    marginTop: 5,
    fontSize: "0.8em",
    color: "red"
  },
  select: { minWidth: 233, maxWidth: 233 }
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  favoriteColor: ""
};

const WizardForm = () => (
  <div className="App">
    <Wizard initialValues={initialValues} onSubmit={onSubmit}>
      <Wizard.Page>
        <div>
          <Field
            type={"text"}
            name={"firstName"}
            validate={required}
            render={({ field }) => (
              <TextField {...field} type={"text"} label={"First Name"} />
            )}
          />
          <ErrorMessage
            style={styles.error}
            name="firstName"
            component="div"
            className="field-error"
          />
        </div>
        <div>
          <Field
            type={"text"}
            name={"lastName"}
            validate={required}
            render={({ field }) => (
              <TextField {...field} type={"text"} label={"Last Name"} />
            )}
          />
          <ErrorMessage
            style={styles.error}
            name="lastName"
            component="div"
            className="field-error"
          />
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.favoriteColor) {
            errors.favoriteColor = "Required";
          }
          return errors;
        }}
      >
        <div>
          <Field
            type={"email"}
            name={"email"}
            validate={required}
            render={({ field }) => (
              <TextField {...field} type={"email"} label={"Email"} />
            )}
          />
          <ErrorMessage
            style={styles.error}
            name="email"
            component="div"
            className="field-error"
          />
        </div>
        <div>
          <Field
            name="favoriteColor"
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  label="Select a Color"
                  options={[
                    { label: "❤️ Red", value: "red" },
                    { label: "💚 Green", value: "green" },
                    { label: "💙 Blue", value: "blue" }
                  ]}
                  style={styles.select}
                />
              );
            }}
          />
          <ErrorMessage
            style={styles.error}
            name="favoriteColor"
            component="div"
            className="field-error"
          />
        </div>
      </Wizard.Page>
    </Wizard>
  </div>
);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onSubmit = (values, actions) => {
  sleep(300).then(() => {
    window.alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  });
};

const required = value => (value ? undefined : "Required");

export default WizardForm;
`;
export default codeString;
