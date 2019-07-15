import React from "react";

import ComparisonTable from "./ComparisonTable";
import SimpleForm from "./formik/SimpleForm";
import FormWithYup from "./formik/FormWithYup";
import FormWithFetch from "./formik/FormWithFetch";
import FormWithDynamicInput from "./formik/FormWithDynamicInput";
import Wizard from "./formik/Wizard";

// Syntax Highligher
import SyntaxHighlight from "./syntaxHighlight/SyntaxHighligh";
import simpleFormCode from "./syntaxHighlight/formik/simpleForm";
import formWithDynamicInput from "./syntaxHighlight/formik/formWithDynamicInput";
import formWithFetch from "./syntaxHighlight/formik/formWithFetch";
import formWithYup from "./syntaxHighlight/formik/formWithYup";
import wizard from "./syntaxHighlight/formik/wizard";

// Styles
const styles = {
  table: {
    margin: "20px 10px 50px"
  },
  titleWapper: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: 28,
    lineHeight: "28px",
    fontWeight: 600,
    marginBottom: 15,
    width: "100%",
    color: "#252942",
    textAlign: "left"
  },
  subtitle: {
    fontSize: 18,
    lineHeight: "28px",
    width: "100%",
    color: "#252942",
    textAlign: "left"
  },
  formAndCodeWrapper: {
    background: "#fafafa",
    display: "flex",
    margin: "30px 0 60px",
    position: "relative"
  },
  formAndCode: {
    display: "flex",
    flexWrap: "nowrap",
    width: "100%"
  },
  formWrapper: {
    justifyContent: "flex-end",
    minHeigh: 250,
    overflow: "hidden",
    margin: 20
  },
  form: {
    flex: "0 1 450px",
    maxWidth: "450px",
    display: "flex",
    perspective: "500px",
    alignItems: "center",
    justifyContent: "center"
  },
  codeWrapper: {
    justifyContent: "flex-end",
    minHeigh: 250,
    overflow: "hidden",
    margin: "0px 10px 0px 50px"
  },
  code: {
    flex: "0 1 100%",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

const Forms = () => {
  return (
    <div>
      <div style={styles.table}>
        <ComparisonTable />
      </div>
      {renderForm({
        title: "Simple form",
        subtitle: "Just a simple example of a form with validation.",
        form: <SimpleForm />,
        code: <SyntaxHighlight codeString={simpleFormCode} />
      })}
      {renderForm({
        title: "Form with schema validation",
        subtitle:
          "You can combine normal validation with schema validation using Yup.",
        form: <FormWithYup />,
        code: <SyntaxHighlight codeString={formWithYup} />
      })}
      {renderForm({
        title: "Form with network request",
        subtitle: "Fetch data based on the value of certain input.",
        form: <FormWithFetch />,
        code: <SyntaxHighlight codeString={formWithFetch} />
      })}
      {renderForm({
        title: "Dynamic form",
        subtitle: "Add new inputs dynamically to the form.",
        form: <FormWithDynamicInput />,
        code: <SyntaxHighlight codeString={formWithDynamicInput} />
      })}
      {renderForm({
        title: "Form wizard",
        subtitle: "Multi step form with validation.",
        form: <Wizard />,
        code: <SyntaxHighlight codeString={wizard} />
      })}
    </div>
  );
};

const renderForm = ({ title, subtitle, form, code }) => (
  <div style={styles.item}>
    <div style={styles.titleWapper}>
      <div style={styles.title}>{title}</div>
      <div style={styles.subtitle}>{subtitle}</div>
    </div>
    <div style={styles.formAndCodeWrapper}>
      <div style={styles.formAndCode}>
        <div style={styles.formWrapper}>
          <div style={styles.form}>{form}</div>
        </div>
        <div style={styles.codeWrapper}>
          <div style={styles.code}>{code}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Forms;
