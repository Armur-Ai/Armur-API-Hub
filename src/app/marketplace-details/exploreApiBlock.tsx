"use client";

import React from "react";
import { Collapse } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./marketplace-details.scss";

const ExploreApiBlock = (props: any) => {
  const { michroma } = props;
  const { Panel } = Collapse;
  const apiList = [
    {
      name: "Test test 1",
      apis: [
        {
          mode: "GET",
          api: "/autocompletes",
        },
        {
          mode: "POST",
          api: "/autocompletes",
        },
        {
          mode: "POST",
          api: "/autocompletes",
        },
      ],
    },
    {
      name: "Test test 123",
      apis: [
        {
          mode: "GET",
          api: "/autocompletes",
        },
        {
          mode: "POST",
          api: "/autocompletes",
        },
        {
          mode: "POST",
          api: "/autocompletes",
        },
      ],
    },
    {
      name: "Test test 1",
      apis: [
        {
          mode: "GET",
          api: "/autocompletes",
        },
        {
          mode: "POST",
          api: "/autocompletes",
        },
        {
          mode: "POST",
          api: "/autocompletes",
        },
      ],
    },
    {
      name: "Test test 1",
      apis: [
        {
          mode: "GET",
          api: "/autocompletes",
        },
        {
          mode: "POST",
          api: "/autocompletes",
        },
        {
          mode: "POST",
          api: "/autocompletes",
        },
      ],
    },
  ];

  const getHeader = (headerText: string) => (
    <div
      className={`flex justify-between items-center w-full text-white ${michroma.className}`}
    >
      <h3 className="text-sm tracking-wide break-words">{headerText}</h3>{" "}
      <InfoCircleOutlined />
    </div>
  );
  return (
    <div className="flex flex-col gap-4 py-5">
      <h2 className=" text-2xl text-center">Explore APIs</h2>
      {/* accordian */}
      <Collapse
        defaultActiveKey={["0", "1", "2", "3", "4"]}
        // onChange={onChangeCollapse}
        expandIconPosition={"start"}
      >
        {apiList?.map((data: any, index: number) => {
          return (
            <Panel
              key={index}
              header={getHeader(`${data.name}`)}
              //   showArrow={true}
            >
              <div className="flex flex-col gap-3">
                {data?.apis?.map((apiData: any, key: number) => (
                  <div className="flex gap-1 text-sm" key={key}>
                    <span
                      className={`text-sm font-orbitron font-medium ${
                        apiData?.mode?.toUpperCase() === "GET"
                          ? "text-[#23C778]"
                          : "text-[#5D9EFF]"
                      } `}
                    >
                      {apiData.mode}
                    </span>

                    <span className="font-michroma text-[#AFAFAFAB]">
                      {apiData.api}
                    </span>
                  </div>
                ))}
              </div>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default ExploreApiBlock;
