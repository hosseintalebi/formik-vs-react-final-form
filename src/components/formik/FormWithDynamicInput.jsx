import React from "react";
import * as Yup from "yup";
import _ from "lodash";
import { Form, Formik, Field, FieldArray } from "formik";

// RMWC Components
import { Button, TextField } from "../UI-Kit";
import { IconButton } from "rmwc";

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
  },
  todoItem: {
    display: "flex"
  },
  todoRemoveBtn: {
    marginTop: 15
  }
};

const initialValues = {
  todos: [{ item: "shopping" }, { item: "" }]
};

export default class FormWithDynamicInput extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.title}>Add Dynamic Inputs</div>
        <Formik
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          render={({ values, errors, touched }) => (
            <Form style={styles.form}>
              <FieldArray
                name="todos"
                render={({ insert, remove, push }) => (
                  <div>
                    {_.map(values.todos, (todo, index) => (
                      <div style={styles.todoItem} key={index}>
                        <GroupItemTextField
                          type="text"
                          name={`todos.${index}.item`}
                          index={index}
                          label="Todo"
                          groupName="todos"
                          errors={errors}
                          touched={touched}
                          validate={this.validateTodo}
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
              />
              <Button
                unelevated
                type="submit"
                label="Submit"
                onClick={this.submit}
              />
            </Form>
          )}
        />
      </div>
    );
  }

  validateTodo = value => {
    let error;
    if (value == null || _.size(value) === 0) {
      error = "Required";
    }
    return error;
  };

  getInitialValues = todos =>
    _.reduce(
      todos,
      (acc, todo, index) => ({
        ...acc,
        [`${this.todoPrefix}${index}`]: todo.item
      }),
      {}
    );

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { item: "" }]
    });
  };

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
  index,
  validate
}) => (
  <Field
    type={type}
    name={name}
    validate={validate}
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
