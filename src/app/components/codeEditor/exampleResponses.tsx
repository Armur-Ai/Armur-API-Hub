"use client";
import React, { useState } from "react";
import { CopyBlock, anOldHope } from "react-code-blocks";
import { codeSamples } from "./codeBlocks";

const ExampleResponses = () => {
  const [language, changeLanguage] = useState("javascript");
  const [languageDemo, changeDemo] = useState<any>(
    Object.values(codeSamples)[4]
  );
  const [lineNumbers, toggleLineNumbers] = useState(false);
  return (
    <div className="codeTab-block">
      <div className="h-full custom-border">
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={anOldHope}
          wrapLongLines
          codeBlock
          customStyle={{ height: "100%" }}
        />
      </div>
    </div>
  );
};

export default ExampleResponses;
