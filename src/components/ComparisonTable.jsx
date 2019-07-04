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
    background: "rgba(98, 42, 109, 0.3)",
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
    name: "Formik",
    size: {
      minified: "43 kB",
      minifiedGZipped: "12.6 kB"
    },
    typescript: "✓",
    asyncValidation: "✓",
    schemaValidation: "✓",
    popularity: "428,133",
    wizard: "✓"
  },
  finalForm: {
    name: "React Final Form",
    size: {
      minified: "8.1 kB",
      minifiedGZipped: "3.1 kB"
    },
    typescript: "✓",
    asyncValidation: "✓",
    schemaValidation: "✗",
    popularity: "83,674",
    wizard: "✓"
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
            <span>{formik.size.minified}</span>
            <span>{formik.size.minifiedGZipped}</span>
          </td>
          <td style={styles.td}>
            <span>{finalForm.size.minified}</span>
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
          <th style={styles.th}>Popularity</th>
          <td style={styles.td}>
            <div>
              <div>{formik.popularity}</div>
              <div style={styles.secondaryInfo}>Weekly Download</div>
            </div>
          </td>
          <td style={styles.td}>
            <div>
              <div>{finalForm.popularity}</div>
              <div style={styles.secondaryInfo}>Weekly Download</div>
            </div>
          </td>
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
