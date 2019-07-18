import React, { useState } from "react";
import _ from "lodash";
import Spinner from "react-spinkit";
import { Form, Formik, Field } from "formik";
import { createSelector } from "reselect";
import * as Yup from "yup";

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

const SignUpSchema = Yup.object().shape({
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
  const [regions, loadingRegions] = useRegions(country);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={onSubmit}
      >
        {({
          errors,
          touched,
          isSubmitting,
          handleBlur,
          values,
          handleChange,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit} style={commonStyles.form}>
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values["firstName"]}
              type="text"
              name="firstName"
              error={errors["firstName"]}
              touched={touched["firstName"]}
              label="First Name"
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values["lastName"]}
              type="text"
              name="lastName"
              error={errors["lastName"]}
              touched={touched["lastName"]}
              label="Last Name"
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values["email"]}
              type="email"
              name="email"
              label="Email"
              error={errors["email"]}
              touched={touched["email"]}
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values["password"]}
              type="password"
              name="password"
              label="Password"
              error={errors["Password"]}
              touched={touched["Password"]}
            />
            <Field
              name="country"
              render={({ field, form }) => {
                return (
                  <div style={styles.selectWrapper}>
                    <Select
                      {...field}
                      label="Country"
                      disabled={loadingCountries}
                      error={errors["country"]}
                      touched={touched["country"]}
                      options={countiesOptions$(countries)}
                      style={styles.select}
                      onChange={e => {
                        setCountry(e.target.value);
                        handleChange(e);
                        form.setFieldValue("region", "");
                      }}
                    />
                    {loadingCountries && (
                      <Spinner style={styles.spinner} name="double-bounce" />
                    )}
                  </div>
                );
              }}
            />
            <Field
              name="region"
              render={({ field }) => {
                return (
                  <div style={styles.selectWrapper}>
                    <Select
                      {...field}
                      label="State/Province"
                      disabled={loadingRegions}
                      error={errors["region"]}
                      touched={touched["region"]}
                      options={regionsOptions$(regions)}
                      style={styles.select}
                    />
                    {loadingRegions && (
                      <Spinner style={styles.spinner} name="double-bounce" />
                    )}
                  </div>
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

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export default SignUpForm;
