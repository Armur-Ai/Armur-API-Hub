import React from "react";
import Image from "next/image";
import { CheckOutlined } from "@ant-design/icons";
import ExploreApiBlock from "./exploreApiBlock";
import "./marketplace-details.scss";
import TestApiBlock from "./testApiBlock";
import CodeTabBlock from "./codeTabBlock";
import ExtensionCard from "./extensionCard";
import AdvanceApiCodeEditor from "../components/codeEditor/advanceApiCodeEditor";

const Maketplacedetails = () => {
  return (
    <div className=" px-16 pt-10">
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
              GO Security Scan
            </h2>
            <p
              className={`font-michroma text-base text-[rgba(255,255,255,0.6)]`}
            >
              Security Checker
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
        <div className="w-3/12 explore-api custom-border">
          <ExploreApiBlock />
        </div>
        <div className="w-6/12 testApi-block custom-border">
          <TestApiBlock />
        </div>
        <div className="w-3/12 h-full pl-5">
          <CodeTabBlock />
        </div>
      </div>
      {/* Extension Block */}
      <div className="mt-8 flex gap-10">
        <ExtensionCard
          {...{
            iconUrl: "/icons/vs-code.svg",
            heading: "VScode Extension",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ut odio sit amet ",
            url: "/",
            width: 59,
            height: 55,
          }}
        />
        <ExtensionCard
          {...{
            iconUrl: "/icons/npm.svg",
            heading: "NPM Dependency",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum ut odio sit amet ",
            url: "/",
            width: 67,
            height: 26,
          }}
        />
      </div>
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
            You can also build your own tooling by using this API. Below are the
            docs for the API -
          </p>
        </div>
      </div>
      <AdvanceApiCodeEditor />
    </div>
  );
};

export default Maketplacedetails;
