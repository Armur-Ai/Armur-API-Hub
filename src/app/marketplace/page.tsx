import React from "react";
import "./marketplace.scss";
import { Input } from "antd";
import { CheckOutlined, SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Michroma } from "next/font/google";
import { DISCOVERTOOLS, RECOMMENDED_TOOLS, POPULAR_TOOLS } from "./data.json";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

const Marketplace = () => {
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
          <h2
            className={`${michroma.className} text-[1.75rem] leading-[2.4rem]`}
          >
            {title}
          </h2>
          <p
            className={`text-base w-9/12 ${michroma.className} text-[rgba(255,255,255,0.6)]`}
          >
            {para}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="p-28">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="marketplace-title">AI Security</h2>
          <h2 className="marketplace-title">&nbsp;Tools Hub</h2>
        </div>
        <div className="w-[28.125rem] search-input">
          <Input
            prefix={<SearchOutlined />}
            type="search"
            placeholder="Search for AI Security tools"
          />
        </div>
      </div>
      {/*===================================================================================== 
                              Discover More Tools
      ======================================================================================*/}
      {titleWithPara({
        title: "Discover More Tools",
        para: "Browse through our collections to learn more about new use cases to implement in your app ",
      })}
      <div className="grid xl:grid-cols-4 mt-10 gap-[3rem]">
        {Object?.values(DISCOVERTOOLS)?.map((data: any, key: number) => (
          <div key={key} className="discover-card ">
            <div className="w-full h-[8.3rem] relative">
              <div className="w-full h-full absolute left-0 top-0">
                <Image src={data?.imageUrl} alt={data.name} fill />
              </div>
            </div>
            <div className="discover-card-content">
              <h4 className={`${michroma.className} text-lg`}> {data.name}</h4>
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
            <div
              key={key}
              className={`recommended-card  ${michroma.className}`}
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
            <div
              key={key}
              className={`recommended-card  ${michroma.className}`}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
