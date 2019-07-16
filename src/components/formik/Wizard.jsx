import React from "react";
import { Formik, Field, ErrorMessage } from "formik";

// RMWC Components
import { Button, TextField, Select } from "../UI-kit";

// Styles
const styles = {
  error: {
    marginTop: 5,
    fontSize: "0.8em",
    color: "red"
  }
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : "Required");

class Wizard extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues
    };
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      bag.setSubmitting(false);
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ values, handleSubmit, isSubmitting, handleReset }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <Button
                  label="« Previous"
                  type="button"
                  onClick={this.previous}
                />
              )}

              {!isLastPage && (
                <Button label="Next »" type="button" onClick={this.next} />
              )}
              {isLastPage && (
                <Button
                  label="Submit"
                  type="submit"
                  disabled={isSubmitting}
                  unelevated
                />
              )}
            </div>
          </form>
        )}
      />
    );
  }
}

const App = () => (
  <div className="App">
    <Wizard
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        favoriteColor: ""
      }}
      onSubmit={(values, actions) => {
        sleep(300).then(() => {
          window.alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        });
      }}
    >
      <Wizard.Page>
        <div>
          <FormikRMWCTextField
            type="text"
            name="firstName"
            label="First Name"
            validate={required}
          />
          <ErrorMessage
            style={styles.error}
            name="firstName"
            component="div"
            className="field-error"
          />
        </div>
        <div>
          <FormikRMWCTextField
            type="text"
            name="lastName"
            label="Last Name"
            validate={required}
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
          <FormikRMWCTextField type="email" name="email" label="Email" />
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
                  style={{ minWidth: 233, maxWidth: 233 }}
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

export default App;

const FormikRMWCTextField = ({ name, type, label }) => (
  <Field
    type={type}
    name={name}
    render={({ field }) => <TextField {...field} type={type} label={label} />}
  />
);
