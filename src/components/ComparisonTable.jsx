import React from "react";

const styles = {
  table: {
    margin: "20px auto"
  },
  th: {
    fontWeight: 500,
    padding: "10px 5px"
  },
  tht: {
    fontWeight: 500,
    color: "rgb(45,45,45)",
    padding: "10px 5px",
    fontSize: "1.1em"
  },
  tr: {
    padding: "10px 0",
    color: `rgba(45,45,45,0.8)`
  },
  trh: {
    padding: "10px 0",
    background: "rgba(233, 223, 250)",
    color: `rgba(45,45,45,0.8)`
  },
  td: {
    padding: "10px 30px"
  },
  secondaryInfo: {
    marginTop: 5,
    fontSize: "0.8em"
  }
};
const comparisionData = {
  formik: {
    name: "formik@1.5.8",
    size: {
      minifiedGZipped: "12.6 kB gzipped"
    },
    typescript: "✓",
    asyncValidation: "✓",
    schemaValidation: "✓",
    errorFocus: "✗",
    hooks: "✗",
    wizard: "✓",
    rerenderOptimization: "✗"
  },
  finalForm: {
    name: "react-final-form@6.3.0",
    size: {
      minifiedGZipped: `8.1 kB gzipped (including final-form@4.18.2)`
    },
    typescript: "✓",
    asyncValidation: "✓",
    schemaValidation: "✗",
    errorFocus: "✓",
    hooks: "✓",
    wizard: "✓",
    rerenderOptimization: "✓"
  }
};
const Table = () => {
  const { formik, finalForm } = comparisionData;
  return (
    <table style={styles.table}>
      <tbody>
        <tr style={styles.tr}>
          <th />
          <th style={styles.tht}>{formik.name}</th>
          <th style={styles.tht}>{finalForm.name}</th>
        </tr>
        <tr style={styles.trh}>
          <th style={styles.th}>Size</th>
          <td style={styles.td}>
            <span>{formik.size.minifiedGZipped}</span>
          </td>
          <td style={styles.td}>
            <span>{finalForm.size.minifiedGZipped}</span>
          </td>
        </tr>
        <tr style={styles.tr}>
          <th style={styles.th}>TypeScripct</th>
          <td style={styles.td}>{formik.typescript}</td>
          <td style={styles.td}>{finalForm.typescript}</td>
        </tr>
        <tr style={styles.trh}>
          <th style={styles.th}>Async Validation</th>
          <td style={styles.td}>{formik.asyncValidation}</td>
          <td style={styles.td}>{finalForm.asyncValidation}</td>
        </tr>
        <tr style={styles.tr}>
          <th style={styles.th}>Schema Validation</th>
          <td style={styles.td}>{formik.schemaValidation}</td>
          <td style={styles.td}>{finalForm.schemaValidation}</td>
        </tr>
        <tr style={styles.trh}>
          <th style={styles.th}>On Submit Error Focus</th>
          <td style={styles.td}>{formik.errorFocus}</td>
          <td style={styles.td}>{finalForm.errorFocus}</td>
        </tr>
        <tr style={styles.tr}>
          <th style={styles.th}>Hooks Support</th>
          <td style={styles.td}>{formik.hooks}</td>
          <td style={styles.td}>{finalForm.hooks}</td>
        </tr>
        <tr style={styles.trh}>
          <th style={styles.th}>Rerender Optimization</th>
          <td style={styles.td}>{formik.rerenderOptimization}</td>
          <td style={styles.td}>{finalForm.rerenderOptimization}</td>
        </tr>
        <tr style={styles.tr}>
          <th style={styles.th}>Wizard</th>
          <td style={styles.td}>{formik.wizard}</td>
          <td style={styles.td}>{finalForm.wizard}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
