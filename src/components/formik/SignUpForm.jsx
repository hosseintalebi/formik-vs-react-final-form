import React, { useState } from "react";

import _ from "lodash";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { createSelector } from "reselect";

// RMWC Components
import { Button, TextField, Select } from "../UI-Kit";

// Hooks
import useCountries from "../../hooks/useCountries";
import userRegions from "../../hooks/userRegions";

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

const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(6, () => <span>Too short</span>)
    .max(50, <span>Too long</span>)
    .required("Required"),
  country: Yup.string().required("Required"),
  region: Yup.string().required("Required")
});

const SignUpForm = () => {
  const [country, setCountry] = useState(null);
  const [countries, loadingCountries] = useCountries();
  const [regions, loadingRegions] = userRegions(country);

  return (
    <div>
      <div style={styles.title}>
        Formik Signup Form (Fetch data on the form)
      </div>
      <Formik
        initialValues={getInitialValues()}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, handleChange }) => (
          <Form style={styles.form}>
            <FormikRMWCTextField
              type="text"
              name="firstName"
              label="First Name"
              errors={errors}
              touched={touched}
            />
            <FormikRMWCTextField
              type="text"
              name="lastName"
              label="Last Name"
              errors={errors}
              touched={touched}
            />
            <FormikRMWCTextField
              type="email"
              name="email"
              label="Email"
              errors={errors}
              touched={touched}
            />
            <FormikRMWCTextField
              type="password"
              name="password"
              label="Password"
              errors={errors}
              touched={touched}
            />
            <Field
              name="country"
              render={({ field, form }) => {
                return (
                  <Select
                    {...field}
                    label="Country"
                    error={errors["country"]}
                    touched={touched["country"]}
                    options={countiesOptions$(countries)}
                    style={{ minWidth: 233, maxWidth: 233 }}
                    onChange={e => {
                      setCountry(e.target.value);
                      handleChange(e);
                      form.setFieldValue("region", "");
                    }}
                  />
                );
              }}
            />
            <Field
              name="region"
              render={({ field }) => {
                return (
                  <Select
                    {...field}
                    label="State/Province"
                    error={errors["region"]}
                    touched={touched["region"]}
                    options={regionsOptions$(regions)}
                    style={{ minWidth: 233, maxWidth: 233 }}
                  />
                );
              }}
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

const FormikRMWCTextField = ({ name, type, errors, touched, label }) => (
  <Field
    type={type}
    name={name}
    render={({ field }) => (
      <TextField
        {...field}
        type={type}
        error={errors[name]}
        touched={touched[name]}
        label={label}
      />
    )}
  />
);

const getInitialValues = () => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  region: ""
});

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export default SignUpForm;
