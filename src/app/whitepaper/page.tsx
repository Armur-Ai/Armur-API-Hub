import React from "react";
import "./whitepaper.scss";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

const Whitepaper = () => {
  return (
    <div className=" py-64">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="page-title">WHITE PAPER</h1>
        <p className=" w-6/12 text-center mx-auto text-2xl font-normal tracking-wider para">
          At Armur A.I, we &apos; re changing the future of cybcer security, to
          read more about our vision, the best place is our whitepaper.
        </p>
        <Link
          href={
            "https://armur-ai.notion.site/armur-ai/Armur-A-I-Solidity-Product-Details-ae4b60dca0514ae5b74de649babcaeba"
          }
          target="_blank"
          className="btn-primary mx-auto relative mt-9 !px-6 !py-4"
        >
          <div className="w-full h-full absolute left-0 top-0">
            <div className="w-full h-full">
              <Image src={"/bgs/btn_bg.png"} fill alt="btn bg" />
            </div>
          </div>
          VIEW WHITEPAPER
        </Link>
      </div>
    </div>
  );
};

export default Whitepaper;
