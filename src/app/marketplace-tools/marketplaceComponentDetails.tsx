"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Select } from "antd";
import TOOLS from "../marketplace/data.json";
import { CloseOutlined } from "@ant-design/icons";
import MarketplaceCard from "../marketplace/marketplaceCard";
import "../marketplace/marketplace.scss";
import TOOLS_DATA from "../marketplace/securityTools.json";

const MarketplaceComponentDetails = () => {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [allTools, setAllTools] = useState<string[]>([]);



  useEffect(() => {
    try {
      const storedTool = localStorage.getItem("selectedTool");
      if (storedTool) {
      let  selectedTool = JSON.parse(storedTool);
      const TOOLSDATA: any = TOOLS_DATA;
      
        console.log("selectedTool",TOOLSDATA[selectedTool])
        setAllTools(TOOLSDATA[selectedTool])
        
      }
    } catch (error) {
      console.error("Error parsing selectedTool:", error);
    }

  },[])

  const options = [
    { label: "Web3 Auditing tools (6)", value: "Web3 Auditing tools" },
    { label: "Code scan  (4)", value: "Code scan" },
    { label: "SecOps  (8)", value: "SecOps" },
    { label: "API Security (4)", value: "API Security" },
    { label: "Pentesting  (4)", value: "Pentesting" },
    { label: "Recon  (7)", value: "Recon" },
    { label: "Web3 sec  (5)", value: "Web3 sec" },
    { label: "DB Security  (4)", value: "DB Security" },
    { label: "Plugins  (3)", value: "Plugins" },
  ];

  const handleRemoveAll = () => {
    setSelectedFilter([]);
  };

  const handleRemove = () => {
    setSelectedFilter(selectedFilter.slice(1));
  };

  const handleChange = (e: string) => {
    console.log("before object", selectedFilter.indexOf(e));
    if (selectedFilter.indexOf(e) === -1) {
      setSelectedFilter(() => {
        const temp = selectedFilter;
        temp.push(e);
        return [...temp];
      });
    }
  };

  return (
    <div className="xl:px-28 lg:px-16 px-10 py-5">
      <div className=" items-center  flex">
        <h2 className="marketplace-title">AI Security</h2>
        <h2 className="marketplace-title">Tools Hub</h2>
      </div>
      {/*======================================================================================
                                         FILTERS   
      =========================================================================================*/}
      <div className="flex gap-10 items-start mt-9 pb-6 border-b-[1px] border-[#79797B]">
        <button
          onClick={handleRemoveAll}
          className="reset-bg px-3 py-1 flex gap-3 items-center text-base font-medium min-w-28 min-h-8"
        >
          <div className=" absolute left-0 top-0 w-full h-full -z-10">
            <Image src="/bgs/reset-bg.svg" alt="aa" fill />
          </div>
          <Image
            src="/icons/refresh.svg"
            alt="refresh"
            width={21}
            height={18}
            priority
          />
          Reset
        </button>
        <h5 className="text-xl text-[#CCCCCC] font-semibold">Filters</h5>
        <div className="marketplace-select">
          <Select
            options={options}
            placeholder="Categories"
            onChange={handleChange}
            prefixCls="marketplace"
          />
        </div>
        <div className="flex w-7/12 flex-wrap gap-3">
          {selectedFilter?.length > 0 &&
            selectedFilter?.map((data: string, key: number) => (
              <div
                key={key}
                className="flex gap-2 selected-option px-3 py-1 reset-bg "
              >
                <div className=" absolute left-0 top-0 w-full h-full -z-10">
                  <Image src="/bgs/reset-bg.svg" alt="aa" fill />
                </div>
                <h4 className="font-medium text-base"> {data}</h4>
                <button onClick={handleRemove}>
                  <CloseOutlined />
                </button>
              </div>
            ))}
        </div>
      </div>
      {/*===========================================================================================
                                        CARDS
      ============================================================================================*/}
      <div className="flex gap-10 py-12 flex-wrap">
        {Object?.values(allTools).map((data: any, key: number) => (
          <Link href={"/marketplace-details"} key={key}>
            <MarketplaceCard
              {...{
                toolName: data?.toolName,
                description: data?.description,
                imageUrl: data?.imageUrl,
                name: data?.toolName,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceComponentDetails;
