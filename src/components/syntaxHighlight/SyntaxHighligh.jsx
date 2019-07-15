import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const SyntaxHighlight = ({ codeString }) => {
  return (
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
  );
};

export default SyntaxHighlight;
