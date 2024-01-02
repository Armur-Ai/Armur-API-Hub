import React from "react";
import Image from "next/image";
import { Michroma } from "next/font/google";
import { CheckOutlined } from "@ant-design/icons";
import ExploreApiBlock from "./exploreApiBlock";
import "./marketplace-details.scss";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const Maketplacedetails = () => {
  return (
    <div className="p-28 pt-10">
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
              className={`${michroma.className} text-base text-[rgba(255,255,255,0.6)]`}
            >
              Security Checker
            </p>
            <p
              className={`${michroma.className} text-base text-[rgba(255,255,255,0.6)]`}
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
        <div className="w-4/12 explore-api">
          <ExploreApiBlock {...{ michroma }} />
        </div>
        <div className="w-6/12 "></div>
      </div>
    </div>
  );
};

export default Maketplacedetails;
