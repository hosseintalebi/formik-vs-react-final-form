import React, { useState } from "react";

import _ from "lodash";
import { Form, Field } from "react-final-form";
import { createSelector } from "reselect";

// RMWC Components
import { Button, TextField, Select } from "../UI-kit";

// Hooks
import useCountries from "../../hooks/useCountries";
import userRegions from "../../hooks/userRegions";

// Styles
import commonStyles from "../styles";

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

const SignUpForm = () => {
  const [country, setCountry] = useState(null);
  const [countries, loadingCountries] = useCountries();
  const [regions, loadingRegions] = userRegions(country);

  return (
    <div>
      <Form
        initialValues={getInitialValues()}
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
                <Select
                  {...input}
                  label="Country"
                  error={meta.error}
                  touched={meta.touched}
                  options={countiesOptions$(countries)}
                  style={{ minWidth: 233, maxWidth: 233 }}
                  onChange={e => {
                    form.change("country", e.target.value);
                    setCountry(e.target.value);
                    form.change("region", "");
                  }}
                />
              )}
            </Field>
            <Field name="region">
              {({ input, meta }) => (
                <Select
                  {...input}
                  label="State/Province"
                  error={meta.error}
                  touched={meta.touched}
                  options={regionsOptions$(regions)}
                  style={{ minWidth: 233, maxWidth: 233 }}
                />
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

const getInitialValues = () => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  region: ""
});

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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(400);
  window.alert(JSON.stringify(values, 0, 2));
};

export default SignUpForm;
