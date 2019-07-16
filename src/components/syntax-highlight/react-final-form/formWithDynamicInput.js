const codeString = `import React from "react";
import * as Yup from "yup";
import _ from "lodash";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

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

export default class FormWithDynamicInput extends React.Component {
  render() {
    return (
      <div>
        <Form
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          validate={this.validate}
          mutators={{
            ...arrayMutators
          }}
        >
          {({
            handleSubmit,
            form: {
              mutators: { push, pop }
            }, // injected from final-form-arrays above
            pristine,
            form,
            submitting,
            values
          }) => (
            <form onSubmit={handleSubmit} style={commonStyles.form}>
              <FieldArray name="todos">
                {({ fields }) => (
                  <div>
                    {_.map(fields, (todo, index) => (
                      <div style={styles.todoItem} key={index}>
                        <Field name={\`\${ todo }.item\`}>
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
                        <IconButton
                          style={styles.todoRemoveBtn}
                          icon={"close"}
                          type="button"
                          onClick={() => pop("todos")}
                        />
                      </div>
                    ))}
                    <Button
                      label="Add Todo"
                      icon="add"
                      type="button"
                      onClick={() => push("todos", { item: "" })}
                    />
                  </div>
                )}
              </FieldArray>

              <Button
                unelevated
                type="submit"
                label="Submit"
                disabled={submitting}
                onClick={this.submit}
              />
            </form>
          )}
        </Form>
      </div>
    );
  }

  validate = values => {};
  onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
}
`;
export default codeString;
