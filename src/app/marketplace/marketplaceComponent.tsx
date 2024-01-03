"use client";
import {
  CheckOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DISCOVERTOOLS, POPULAR_TOOLS, RECOMMENDED_TOOLS } from "./data.json";
import "./marketplace.scss";

const MarketplaceComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

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

  //--------------------------------------------------------------------
  //                       TITLE_WITH_PARA
  //--------------------------------------------------------------------
  const titleWithPara = (props: { title: string; para: string }) => {
    const { title, para } = props;
    return (
      <div className="flex gap-5 pt-8">
        <div className="w-5 h-24 relative">
          <div className="w-full h-full absolute left-0 top-0">
            <Image src="/team/line.svg" alt="line" fill />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className={` font-michroma text-[1.75rem] leading-[2.4rem]`}>
            {title}
          </h2>
          <p
            className={`text-base w-9/12 font-michroma text-[rgba(255,255,255,0.6)]`}
          >
            {para}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="xl:px-28 lg:px-16 px-10 py-5">
      <div className="md:flex block items-center justify-between">
        <div className="flex items-center">
          <h2 className="marketplace-title">AI Security</h2>
          <h2 className="marketplace-title">&nbsp;Tools Hub</h2>
        </div>
        <div className=" relative search-input md:mt-0 mt-5">
          <Input
            prefix={
              <SearchOutlined className="!text-[rgba(204,204,204,0.3)] !text-base mr-1" />
            }
            type="search"
            placeholder="Search for AI Security tools"
            className=" font-michroma"
          />
        </div>
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
      {/*===================================================================================== 
                          Discover More Tools
      ======================================================================================*/}
      {titleWithPara({
        title: "Discover More Tools",
        para: "Browse through our collections to learn more about new use cases to implement in your app ",
      })}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 mt-10 gap-[3rem]">
        {Object?.values(DISCOVERTOOLS)?.map((data: any, key: number) => (
          <div key={key} className="discover-card ">
            <div className="w-full h-[8.3rem] relative">
              <div className="w-full h-full absolute left-0 top-0">
                <Image src={data?.imageUrl} alt={data.name} fill />
              </div>
            </div>
            <div className="discover-card-content">
              <h4 className={`font-michroma text-lg`}> {data.name}</h4>
            </div>
          </div>
        ))}
      </div>
      {/*===================================================================================== 
                          Recommended Tools
      ======================================================================================*/}
      {titleWithPara({
        title: "Recommended Tools",
        para: "Tools Curated specifically for you based on functionality offered, performance and requirement.",
      })}
      <div className="w-[2000px]">
        <div className="flex gap-5 mt-7 items-stretch">
          {Object?.values(RECOMMENDED_TOOLS)?.map((data: any, key: number) => (
            <Link href={"/marketplace-details"} key={key}>
              <div
                // key={key}
                className={`recommended-card  font-michroma`}
              >
                {/* background */}
                <div className="w-full h-full absolute left-0 top-0 -z-10">
                  <Image
                    src="/bgs/marketplace-card-bg.svg"
                    alt="background"
                    fill
                  />
                </div>
                {/* content */}
                <div className="flex justify-between items-start">
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

                <div className="recommended-card-content mt-8 flex flex-col gap-3">
                  <h4 className={`text-sm`}>{data.toolName}</h4>
                  <p className="text-sm text-[rgba(255,255,255,0.7)]">
                    {data?.description}
                  </p>
                </div>
                <div className="w-16 h-16 absolute -right-2 -bottom-1">
                  <Image src={data?.imageUrl} alt={data.name} fill />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/*===================================================================================== 
                          Popular Tools
      ======================================================================================*/}
      {titleWithPara({
        title: "Popular Tools",
        para: "Tools that are popular and used frequently on ARMUR.",
      })}
      <div className="w-[2000px]">
        <div className="flex gap-5 mt-7 items-stretch">
          {Object?.values(POPULAR_TOOLS)?.map((data: any, key: number) => (
            <Link href={"/marketplace-details"} key={key}>
              <div
                // key={key}
                className={`recommended-card font-michroma`}
              >
                {/* background */}
                <div className="w-full h-full absolute left-0 top-0 -z-10">
                  <Image
                    src="/bgs/marketplace-card-bg.svg"
                    alt="background"
                    fill
                  />
                </div>
                {/* content */}
                <div className="flex justify-between items-start">
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
                <div className="recommended-card-content mt-8 flex flex-col gap-3">
                  <h4 className={`text-sm`}>{data.toolName}</h4>
                  <p className="text-sm text-[rgba(255,255,255,0.7)]">
                    {data?.description}
                  </p>
                </div>
                <div className="w-16 h-16 absolute -right-2 -bottom-1">
                  <Image src={data?.imageUrl} alt={data.name} fill />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceComponent;
