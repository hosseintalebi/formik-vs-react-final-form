const codeString = `import React from "react";
import * as Yup from "yup";
import _ from "lodash";
import { Form, Formik, Field, FieldArray } from "formik";

// RMWC Components
import { Button, TextField } from "../UI-kit";
import { IconButton } from "rmwc";

// Styles
import commonStyles from "../styles";
const styles = {
  todoItem: {
    display: "flex"
  },
  todoRemoveBtn: {
    marginTop: 15,
    color: "rgba(45,45,45,0.9)"
  }
};

const initialValues = {
  todos: [{ item: "shopping" }, { item: "" }]
};

const ValidationSchema = Yup.object({
  todos: Yup.array().of(
    Yup.object({
      item: Yup.string().required("Required")
    })
  )
});

export default class FormWithDynamicInput extends React.Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={this.onSubmit}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form style={commonStyles.form}>
              <FieldArray name="todos">
                {({ remove, push }) => (
                  <div>
                    {_.map(values.todos, (todo, index) => (
                      <div style={styles.todoItem} key={index}>
                        <GroupItemTextField
                          type="text"
                          name={\`todos.\${ index }.item\`}
                          index={index}
                          label="Todo"
                          groupName="todos"
                          errors={errors}
                          touched={touched}
                        />
                        <IconButton
                          style={styles.todoRemoveBtn}
                          icon={"close"}
                          type="button"
                          onClick={() => remove(index)}
                        />
                      </div>
                    ))}
                    <Button
                      label="Add Todo"
                      icon="add"
                      type="button"
                      onClick={() => push({ item: "" })}
                    />
                  </div>
                )}
              </FieldArray>

              <Button
                unelevated
                type="submit"
                label="Submit"
                disabled={isSubmitting}
                onClick={this.submit}
              />
            </Form>
          )}
        </Formik>
      </div>
    );
  }

  onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
}

const GroupItemTextField = ({
  groupName,
  name,
  type,
  errors,
  touched,
  label,
  index
}) => (
  <Field
    type={type}
    name={name}
    render={({ field }) => (
      <TextField
        {...field}
        type={type}
        error={_.get(errors, [groupName, index, "item"], null)}
        touched={_.get(touched, [groupName, index, "item"], false)}
        label={label}
      />
    )}
  />
);
`;
export default codeString;
