const codeString = `import React from "react";
import { Field } from "react-final-form";
import Wizard from "./Wizard";

// RMWC Components
import { TextField, Select } from "../UI-kit";

// Styles
const styles = {
  select: { minWidth: 233, maxWidth: 233 }
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  favoriteColor: ""
};

const WizatForm = () => (
  <div className="App">
    <Wizard initialValues={initialValues} onSubmit={onSubmit}>
      <Wizard.Page>
        <div>
          <Field name="firstName" validate={required}>
            {({ input, meta }) => (
              <TextField
                {...input}
                type="text"
                error={meta.error}
                touched={meta.touched}
                label={"First Name"}
              />
            )}
          </Field>
          <Field name="lastName" validate={required}>
            {({ input, meta }) => (
              <TextField
                {...input}
                type="text"
                error={meta.error}
                touched={meta.touched}
                label={"Last Name"}
              />
            )}
          </Field>
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
        <Field name="email">
          {({ input, meta }) => (
            <TextField
              {...input}
              type="email"
              error={meta.error}
              touched={meta.touched}
              label={"Email"}
            />
          )}
        </Field>
        <Field name="favoriteColor">
          {({ input, meta }) => {
            return (
              <Select
                {...input}
                label="Select a Color"
                options={[
                  { label: "❤️ Red", value: "red" },
                  { label: "💚 Green", value: "green" },
                  { label: "💙 Blue", value: "blue" }
                ]}
                error={meta.error}
                touched={meta.touched}
                style={styles.select}
              />
            );
          }}
        </Field>
      </Wizard.Page>
    </Wizard>
  </div>
);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : "Required");

export default WizatForm;
`;

export default codeString;
