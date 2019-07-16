import React from "react";
import { TextField as RmwcTxtField } from "rmwc";

const styles = {
  container: { margin: 10 },
  error: {
    marginTop: 5,
    fontSize: "0.8em",
    color: "red"
  }
};

const TextField = props => {
  const { error, touched } = props;
  return (
    <div style={styles.container}>
      <RmwcTxtField {...props} />
      {error && touched && <div style={styles.error}>{error}</div>}
    </div>
  );
};

export default TextField;
