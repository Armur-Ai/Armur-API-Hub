"use client";
import React, { useState, useEffect } from "react";
import { CopyBlock, anOldHope } from "react-code-blocks";
import { codeSamples } from "./codeBlocks";

const RequestCodeEditor = () => {
  const [language, changeLanguage] = useState("javascript");
  const [languageDemo, changeDemo] = useState<any>(
    Object.values(codeSamples)[5]
  );
  const [lineNumbers, toggleLineNumbers] = useState(false);

  useEffect(() => {
    try {
      const storedTool = localStorage.getItem("selectedTool");
      if (storedTool) {
        let selectedTool = JSON.parse(storedTool);
        const codeBlocksData: any = codeSamples;
        changeLanguage(selectedTool.codeBlockLanguage);
        changeDemo(codeBlocksData[selectedTool.codeBlockName]);
      }
    } catch (error) {
      console.error("Error parsing selectedTool:", error);
    }
  }, []);

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
          customStyle={{ height: "100%;" }}
        />
      </div>
    </div>
  );
};

export default RequestCodeEditor;
