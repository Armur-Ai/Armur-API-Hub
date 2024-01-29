"use client";
import React, { useState } from "react";
import { CopyBlock, anOldHope } from "react-code-blocks";
import { codeSamples } from "./codeBlocks";
import isEmpty from "@/isEmpty";
import "./codeEditor.scss"

const ResultCodeEditor = () => {
  // const [language, changeLanguage] = useState("javascript");
  // const [languageDemo, changeDemo] = useState<any>(
  //   Object.values(codeSamples)[5]
  // );
  // const [lineNumbers, toggleLineNumbers] = useState(false);

  const data = [
    {
      order_id: "pi_3O7yghLHyIJIOmJg0q26mumZ",
      order_date: "2023-11-02 11:05:24",
      order_total: 15,
      credits: 100,
      new_organization_credits: 1288,
      package_name: "Ninja",
      order_status: "succeeded",
      organization_id: "5ce8ed46-2445-4a8e-95fc-2ae18c438c5f",
      sessions_id:
        "cs_test_b1ebEVkrVg62FVUezwP1rcuhuLZwfDeedsswTRNw45Jo869ORTpIKcapOb",
    },
    {
      order_id: "pi_3O7ykgLHyIJIOmJg1lUJM3P6",
      order_date: "2023-11-02 11:08:52",
      order_total: 15,
      credits: 100,
      new_organization_credits: 1388,
      package_name: "Ninja",
      order_status: "succeeded",
      organization_id: "5ce8ed46-2445-4a8e-95fc-2ae18c438c5f",
      sessions_id:
        "cs_test_b1sMFI5VcwQmujrRb6eUJB65LrYICZFTDtx0uKaZyCZkQRWUmUMMkTaemR",
    },
  ];

  let finalValue =
    "<div><!DOCTYPE html>\n<html>\n<head>\n<title>List of Bugs and Vulnerabilities</title>\n</head>\n<body>\n\n<h1>List of Bugs and Vulnerabilities</h1>\n\n<ul>\n  <li><strong>Vulnerability: Reentrancy Attack</strong><br>\n  The code is susceptible to a reentrancy attack because it performs external calls before updating the state variable balances. This can allow an attacker to repeatedly call the transfer function and drain the contract's balance.</li>\n\n  <li><strong>Insufficient Balance Check</strong><br>\n  The code does not perform a thorough check for the sender's balance before proceeding with the transfer. It only checks if the balance is greater than or equal to the specified amount, which can lead to unexpected behavior if an account has a negative balance.</li>\n\n  <li><strong>Artificial State Change</strong><br>\n  The for loop in the transfer function artificially induces multiple state changes by adding and subtracting 1</div>";

  let dummyResult =
    "<div><!DOCTYPE html>\n<html>\n<head>\n<title>List of Bugs and Vulnerabilities</title>\n</head>\n<body>\n\n<h1>List of Bugs and Vulnerabilities</h1>\n\n<ul>\n  <li><strong>Vulnerability: Reentrancy Attack</strong><br>\n  The code is susceptible to a reentrancy attack because it performs external calls before updating the state variable balances. This can allow an attacker to repeatedly call the transfer function and drain the contract's balance.</li>\n\n  <li><strong>Insufficient Balance Check</strong><br>\n  The code does not perform a thorough check for the sender's balance before proceeding with the transfer. It only checks if the balance is greater than or equal to the specified amount, which can lead to unexpected behavior if an account has a negative balance.</li>\n\n  <li><strong>Artificial State Change</strong><br>\n  The for loop in the transfer function artificially induces multiple state changes by adding and subtracting 1</div>";

  return (
    <div className="result-container codeTab-block">
      <div className="h-full custom-border p-5">
        {/* <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={anOldHope}
          wrapLongLines
          codeBlock
          customStyle={{ height: "100%;" }}
        /> */}
        <div
          className=" text-base h-[100%] py-1 font-normal text-md text-green-500"
          dangerouslySetInnerHTML={{
            __html: isEmpty(finalValue) ? dummyResult : finalValue,
          }}
        />
        {/* </pre> */}
      </div>
    </div>
  );
};

export default ResultCodeEditor;
