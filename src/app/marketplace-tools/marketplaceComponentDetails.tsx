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
import isEmpty from "../../isEmpty";
// import { RootState } from '../../store/store';

const MarketplaceComponentDetails = () => {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [allTools, setAllTools] = useState<string[]>([]);
  const [selectedDefaultOption, selectedToolType] = useState<string[]>([]);
 

  // const value = useSelector((state: RootState) => state.demo.value);

  // console.log("value",value)

  // alert("sd")


  useEffect(() => {
    const TOOLSDATA: any = TOOLS_DATA;
      
    // console.log("TOOLSDATA",TOOLSDATA)
    let finalData:any = []
    if(!isEmpty(selectedFilter)){
      selectedFilter.forEach((ele:any) => {
        let filteredData = TOOLSDATA[ele.toolType]
        console.log(filteredData)
        finalData.push(...filteredData);
      })
      setAllTools(finalData)
   
    }else{
      setAllTools([])
    }
  },[selectedFilter])



  useEffect(() => {
    try {
      const storedTool = localStorage.getItem("selectedToolType");
      if (storedTool) {
      let  selectedTool = JSON.parse(storedTool);
      const TOOLSDATA: any = TOOLS_DATA;
      
        // console.log("selectedTool",TOOLSDATA[selectedTool])
        const filteredTool:any = options.filter(ele => ele.toolType === selectedTool)
        setAllTools(TOOLSDATA[selectedTool])
        selectedToolType(filteredTool[0])
        setSelectedFilter(filteredTool)
        // console.log("filteredTool",filteredTool)
      }
    } catch (error) {
      console.error("Error parsing selectedTool:", error);
    }

  },[])

  const options = [
    { label: "Web3 Auditing tools (6)", value: "Web3 Auditing tools",toolType:"web3" },
    { label: "Code scan  (4)", value: "Code scan",toolType: "codeScan" },
    { label: "SecOps  (8)", value: "SecOps",toolType: "secOps" },
    { label: "API Security (4)", value: "API Security",toolType: "apiSecurity" },
    { label: "Pentesting  (4)", value: "Pentesting",toolType: "penTesting" },
    { label: "Recon  (7)", value: "Recon",toolType: "recon" },
    { label: "Web3 sec  (5)", value: "Web3 sec",toolType: "web3sec" },
    { label: "DB Security  (4)", value: "DB Security",toolType: "dbSecurity"  },
    { label: "Plugins  (3)", value: "Plugins",toolType: "plugins" },
  ];

  const handleRemoveAll = () => {
    setSelectedFilter([]);
    selectedToolType([])
  };

  const handleRemove = () => {
    setSelectedFilter(selectedFilter.slice(1));
    selectedToolType([])
  };

  const handleChange = (e: string,value:any) => {
    console.log("before object", selectedFilter.indexOf(e));
    // console.log("value",value) 
   console.log("toolPresent",selectedFilter.includes(value))
   console.log(selectedFilter)
    if (selectedFilter.indexOf(e) === -1) {
      setSelectedFilter(() => {
        const temp = selectedFilter;
        temp.push(value);
        return [...temp];
      });
      selectedToolType(value)
    }
  };

  let defaultOption:any =  { label: selectedDefaultOption.label, value: selectedDefaultOption.label,toolType: "codeScan" } 

  // console.log("selectedFilter",selectedFilter)
  // console.log("selectedDefaultOption",selectedDefaultOption)
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
            value={defaultOption}
          />
        </div>
        <div className="flex w-7/12 flex-wrap gap-3">
          {selectedFilter?.length > 0 &&
            selectedFilter?.map((data: any, key: number) => (
              <div
                key={key}
                className="flex gap-2 selected-option px-3 py-1 reset-bg "
              >
                <div className=" absolute left-0 top-0 w-full h-full -z-10">
                  <Image src="/bgs/reset-bg.svg" alt="aa" fill />
                </div>
                <h4 className="font-medium text-base"> {data.label}</h4>
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
          // <Link href={"/marketplace-details"} key={key}>
            <MarketplaceCard
              {...{
                toolName: data?.toolName,
                description: data?.description,
                imageUrl: data?.imageUrl,
                name: data?.toolName,
                data:data
              }}
            />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceComponentDetails;
