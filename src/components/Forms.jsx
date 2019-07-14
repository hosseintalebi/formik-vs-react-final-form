import React from "react";

import ComparisonTable from "./ComparisonTable";
import SimpleForm from "./formik/SimpleForm";
import FormWithYup from "./formik/FormWithYup";
import FormWithFetch from "./formik/FormWithFetch";
import FormWithDynamicInput from "./formik/FormWithDynamicInput";

const styles = {
  form: {
    margin: "20px 10px 50px"
  }
};
const Forms = () => {
  return (
    <div>
      <div style={styles.form}>
        <ComparisonTable />
      </div>
      <div style={styles.form}>
        <SimpleForm />
      </div>
      <div style={styles.form}>
        <FormWithYup />
      </div>
      <div style={styles.form}>
        <FormWithFetch />
      </div>
      <div style={styles.form}>
        <FormWithDynamicInput />
      </div>
    </div>
  );
};

export default Forms;
