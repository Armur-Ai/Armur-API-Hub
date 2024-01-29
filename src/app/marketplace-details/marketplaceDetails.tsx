"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckOutlined } from "@ant-design/icons";
import ExploreApiBlock from "./exploreApiBlock";
import "./marketplace-details.scss";
import TestApiBlock from "./testApiBlock";
import CodeTabBlock from "./codeTabBlock";
import ExtensionCard from "./extensionCard";
import AdvanceApiCodeEditor from "../components/codeEditor/advanceApiCodeEditor";
import isEmpty from "../../isEmpty";

const MarketplaceDetails = () => {
  const [toolData, setToolData] = useState<any[]>([]);

  useEffect(() => {
    try {
      const storedTool = localStorage.getItem("selectedTool");
      if (storedTool) {
        let selectedTool = JSON.parse(storedTool);
        setToolData(selectedTool);
      }
    } catch (error) {
      console.error("Error parsing selectedTool:", error);
    }
  }, []);

  React.useEffect(() => {
    if (document.body.clientWidth < 1300) {
      const viewport: any = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        "width=1300, initial-scale=1, user-scalable=1"
      );
      if (document !== null) {
        document.querySelector("body")?.classList?.add("overflow-x-visible");
      }
    }
  }, []);

  console.log("toolData", toolData);
  return (
    <div className=" px-16 pt-10 marketplacedetails ">
      {/* header */}
      <div className="flex justify-between items-start pb-6 border-b-[1px] border-[#79797B]">
        <div className="flex gap-6 ">
          <div className="relative w-[5.75rem] h-[5.75rem]">
            <div className="absolute w-full h-full left-0 top-0">
              <Image
                src="/marketplace-details/go.svg"
                alt="GO Security Scan"
                fill
              />
            </div>
          </div>
          <div className="relative w-5 h-[5.75rem]">
            <div className="absolute w-full h-full left-0 top-0">
              <Image src="/marketplace-details/line.svg" alt="Line" fill />
            </div>
          </div>
          <div>
            <h2 className="text-[2.5rem] font-semibold leading-[3.1rem]">
              {toolData.name}
            </h2>
            <p
              className={`font-michroma text-base text-[rgba(255,255,255,0.6)]`}
            >
              {toolData.description}
            </p>
            <p
              className={`font-michroma text-base text-[rgba(255,255,255,0.6)]`}
            >
              Updated 10 months ago
            </p>
          </div>
          <div className="relative w-[6.25rem] h-[1.8rem] flex justify-center items-center">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image src="/bgs/verfied-bg.svg" alt="bg" fill />
            </div>
            <h4 className="text-xs">
              <CheckOutlined className="mr-1" />
              Verified
            </h4>
          </div>
          <div className="relative w-3.5 h-5 cursor-pointer">
            <div className=" absolute left-0 top-0 w-full h-full">
              <Image src="/icons/saved.svg" alt="save" fill />
            </div>
          </div>
        </div>
      </div>
      {/* Detailed Block */}
      <div className="flex pt-3 items-stretch">
        <div className="w-3/12 custom-border custom-border--explore-api">
          <ExploreApiBlock />
        </div>
        <div className="w-6/12 custom-border custom-border--testApi-block">
          <TestApiBlock />
        </div>
        <div className="w-3/12 h-full pl-5">
          <CodeTabBlock />
        </div>
      </div>
      {/* Extension Block */}

      {!isEmpty(toolData) && (
        <div className="mt-8 flex gap-10">
          <ExtensionCard
            {...{
              iconUrl: "/icons/vs-code.svg",
              heading: "VScode Extension",
              description: toolData.vsExtensionInfo,
              url: toolData.vsExtensionUrl,
              width: 59,
              height: 55,
            }}
          />
          <ExtensionCard
            {...{
              iconUrl: "/icons/github.png",
              heading: "Github App",
              description: toolData.packageInfo,
              url: toolData.vsExtensionUrl,
              width: 67,
              height: 26,
            }}
          />
        </div>
      )}

      {/* Advanced API Usage */}
      <div className="flex gap-3 mt-5">
        <Image
          src="/marketplace-details/setting.svg"
          alt="settings"
          width={80}
          height={74}
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Advanced API Usage</h3>
          <p className="text-[#FFFFFFB2] font-michroma text-base tracking-wider">
          You can also build your own tooling by using this API. Below are the docs for the API -
          </p>
        </div>
      </div>
      <AdvanceApiCodeEditor />
    </div>
  );
};

export default MarketplaceDetails;
