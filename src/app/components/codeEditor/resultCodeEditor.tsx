"use client";
import React, { useState } from "react";
import { CopyBlock, anOldHope } from "react-code-blocks";
import { codeSamples } from "./codeBlocks";

const ResultCodeEditor = () => {
  const [language, changeLanguage] = useState("javascript");
  const [languageDemo, changeDemo] = useState<any>(
    Object.values(codeSamples)[5]
  );
  const [lineNumbers, toggleLineNumbers] = useState(false);

  return (
    <div className="h-full codeTab-block">
      <CopyBlock
        language={language}
        text={languageDemo}
        showLineNumbers={lineNumbers}
        theme={anOldHope}
        wrapLongLines
        codeBlock
        customStyle={{ height: "100%;" }}
      />
    </div>
  );
};

export default ResultCodeEditor;
