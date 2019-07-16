import React from "react";
import { Select as RmwcSelect } from "rmwc";

const styles = {
  container: { margin: 10 },
  error: {
    marginTop: 5,
    fontSize: "0.8em",
    color: "red"
  }
};

const Select = props => {
  const { error, touched } = props;
  return (
    <div style={styles.container}>
      <RmwcSelect {...props} />
      {error && touched && <div style={styles.error}>{error}</div>}
    </div>
  );
};

export default Select;
