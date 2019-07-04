import React from "react";

import ComparisonTable from "./ComparisonTable";
import LoginForm from "./formik/LoginForm";
import LoginFormYup from "./formik/LoginFormYup";
import SignUpFrom from "./formik/SignUpForm";

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
        <LoginForm />
      </div>
      <div style={styles.form}>
        <LoginFormYup />
      </div>
      <div style={styles.form}>
        <SignUpFrom />
      </div>
    </div>
  );
};

export default Forms;
