const codeString = `import React, { useState } from "react";
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
        {({ errors, touched, isSubmitting, handleChange }) => (
          <Form style={commonStyles.form}>
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

export default SignUpForm;
`;
export default codeString;
