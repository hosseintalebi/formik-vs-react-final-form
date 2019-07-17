import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "rmwc";
import { ReactComponent as Logo } from "../../github-logo.svg";

const styles = {
  wrapper: {
    width: "100%"
  },
  link: {
    color: "#9B64DE",
    textDecoration: "none",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "5px 5px 15px"
  },
  icon: { marginLeft: 5 }
};
const SyntaxHighlight = ({ codeString, codeUrl }) => {
  return (
    <div style={styles.wrapper}>
      <SyntaxHighlighter
        language="javascript"
        style={prism}
        customStyle={{
          background: "#ECECEC",
          borderLeft: "2px solid #9B65DE",
          maxHeight: 400
        }}
      >
        {codeString}
      </SyntaxHighlighter>
      <div>
        <a
          style={styles.link}
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on <Icon style={styles.icon} icon={<Logo />} />
        </a>
      </div>
    </div>
  );
};

export default SyntaxHighlight;
