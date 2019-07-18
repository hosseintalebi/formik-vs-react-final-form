const codeString = `import React, { useState } from "react";
import _ from "lodash";
import Spinner from "react-spinkit";
import { Form, Field } from "react-final-form";
import { createSelector } from "reselect";

// RMWC Components
import { Button, TextField, Select } from "../UI-kit";

// Hooks
import useCountries from "../../hooks/useCountries";
import useRegions from "../../hooks/useRegions";

// Styles
import commonStyles from "../styles";
const styles = {
  select: { minWidth: 233, maxWidth: 233 },
  selectWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  spinner: {
    position: "absolute"
  }
};

// Local Selectors
const countiesOptions$ = createSelector(
  _.identity,
  countries => {
    return _.map(countries, ({ name, code }) => ({
      label: name,
      value: code
    }));
  }
);

const regionsOptions$ = createSelector(
  _.identity,
  regions => {
    return _.map(regions, ({ region }) => ({
      label: region,
      value: region
    }));
  }
);

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  region: ""
};

const SignUpForm = () => {
  const [country, setCountry] = useState(null);
  const [countries, loadingCountries] = useCountries();
  const [regions, loadingRegions] = useRegions(country);

  return (
    <div>
      <Form
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, submitting, form }) => (
          <form onSubmit={handleSubmit} style={commonStyles.form}>
            <Field name="firstName">
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
            <Field name="lastName">
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
            <Field name="password">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  type="password"
                  error={meta.error}
                  touched={meta.touched}
                  label={"Password"}
                />
              )}
            </Field>
            <Field name="country">
              {({ input, meta }) => (
                <div style={styles.selectWrapper}>
                  <Select
                    {...input}
                    disabled={loadingCountries}
                    label="Country"
                    error={meta.error}
                    touched={meta.touched}
                    options={countiesOptions$(countries)}
                    style={styles.select}
                    onChange={e => {
                      form.change("country", e.target.value);
                      setCountry(e.target.value);
                      form.change("region", "");
                    }}
                  />
                  {loadingCountries && (
                    <Spinner style={styles.spinner} name="double-bounce" />
                  )}
                </div>
              )}
            </Field>
            <Field name="region">
              {({ input, meta }) => (
                <div style={styles.selectWrapper}>
                  <Select
                    {...input}
                    label="State/Province"
                    disabled={loadingRegions}
                    error={meta.error}
                    touched={meta.touched}
                    options={regionsOptions$(regions)}
                    style={styles.select}
                  />
                  {loadingRegions && (
                    <Spinner style={styles.spinner} name="double-bounce" />
                  )}
                </div>
              )}
            </Field>
            <Button
              label="Submit"
              type="submit"
              disabled={submitting}
              unelevated
            />
          </form>
        )}
      </Form>
    </div>
  );
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(400);
  window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Too Short!";
  } else if (values.firstName.length > 50) {
    errors.firstName = "Too Long!";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Too Short!";
  } else if (values.lastName.length > 50) {
    errors.lastName = "Too Long!";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Too Short!";
  } else if (values.password.length > 50) {
    errors.password = "Too Long!";
  }

  if (!values.country) {
    errors.country = "Required";
  }

  if (!values.region) {
    errors.region = "Required";
  }
  return errors;
};

export default SignUpForm;
`;
export default codeString;
