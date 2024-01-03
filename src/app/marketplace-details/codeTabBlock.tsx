"use client";
import React, { useState } from "react";
import { Tabs, Button } from "antd";
import RequestCodeEditor from "../components/codeEditor/RequestCodeEditor";
import ExampleResponses from "../components/codeEditor/exampleResponses";
import ResultCodeEditor from "../components/codeEditor/resultCodeEditor";

const CodeTabBlock = () => {
  const [activeKey, setActiveKey] = useState("1");
  const items = [
    {
      key: "1",
      label: `Request`,
      children: <RequestCodeEditor />,
      closable: false,
    },
    {
      key: "2",
      label: `Example Responses`,
      children: <ExampleResponses />,
      closable: false,
    },
    {
      key: "3",
      label: `Results`,
      children: <ResultCodeEditor />,
      closable: false,
    },
  ];
  const onChange = (key: any) => {
    setActiveKey(key);
  };
  return (
    <Tabs
      hideAdd
      onChange={onChange}
      activeKey={activeKey}
      type="editable-card"
      // onEdit={onEdit}
      items={items}
    />
  );
};

export default CodeTabBlock;
