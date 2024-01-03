"use client";

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Collapse } from "antd";
import SelectFiled from "../components/common/selectField";
import { useForm } from "react-hook-form";

const TestApiBlock = () => {
  const { Panel } = Collapse;

  const { register, control, formState } = useForm({});
  const data = [
    {
      title: "Header Parameters",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan volutpat lacinia. Donec a nisl imperdiet, pharetra ipsum vitae, euismod enim.",
      apiList: [
        {
          name: "Armur api",
          desc: "Lorem ipsum",
        },
        {
          name: "Armur api",
          desc: "Lorem ipsum",
        },
      ],
    },
    {
      title: "Required Parameters",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan volutpat lacinia. Donec a nisl imperdiet, pharetra ipsum vitae, euismod enim.",
      apiList: [
        {
          name: "Lorem ipsum",
          desc: "Lorem ipsum",
        },
      ],
    },
    {
      title: "Optional Parameters",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan volutpat lacinia. Donec a nisl imperdiet, pharetra ipsum vitae, euismod enim.",
      apiList: [
        {
          name: "Lorem ipsum",
          desc: "Lorem ipsum",
        },
      ],
    },
  ];

  const getHeader = (headerText: string) => (
    <div className={` w-full text-white font-michroma`}>
      <h3 className="text-sm tracking-wide break-words">{headerText}</h3>{" "}
    </div>
  );
  return (
    <div className=" p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-base tracking-wide font-michroma">
          <span className="text-[#23C778] font-medium uppercase font-orbitron">
            GET{" "}
          </span>
          Test test 123
        </h3>
        <Link href={"/"}>
          <Button className="flex items-center text-white test-btn border-0 text-base tracking-wider font-michroma">
            <div className=" w-4 h-7 relative mr-1">
              <div className="w-full h-full absolute left-0 top-0">
                <Image
                  src="/marketplace-details/test.svg"
                  alt="marketplace test"
                  fill
                />
              </div>
            </div>
            Test Endpoint
          </Button>
        </Link>
      </div>
      {/* accordian */}
      <Collapse
        defaultActiveKey={["0", "1", "2", "3", "4"]}
        // onChange={onChangeCollapse}
        expandIconPosition={"start"}
        className="testapicollapse"
      >
        {data?.map((data: any, index: number) => {
          return (
            <Panel
              key={index}
              header={getHeader(`${data.title}`)}
              //   showArrow={true}
            >
              <div className="flex flex-col gap-3 text-white">
                <p className="text-xs font-michroma tracking-wide">
                  {data.description}
                </p>
                <div className="flex flex-col gap-5">
                  {data?.apiList?.map((apiData: any, key: number) => (
                    <div
                      className="flex justify-between gap-1 text-sm"
                      key={key}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-inter text-sm font-medium tracking-wide">
                          {apiData?.name}
                        </span>
                        <span className="font-inter text-sm font-medium tracking-wide text-[#FFFFFFB2]">
                          {apiData?.desc}
                        </span>
                      </div>
                      <div className="w-1/2 flex flex-col gap-2">
                        <SelectFiled
                          {...{
                            register,
                            control,
                            formState,
                            name: `${apiData?.name}.${key}`,
                            placeholder: "test",
                            defaultValue: "Test test 1",
                            options: [
                              { label: "Test test 1", value: "Test test 1" },
                              { label: "Test test 2", value: "Test test 2" },
                              { label: "Test test 3", value: "Test test 3" },
                              {
                                label: "+ Add new app",
                                value: "+ Add new app",
                              },
                            ],
                          }}
                        />
                        <h5 className="text-[#307FF4] text-xs tracking-wide font-orbitron">
                          Required
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default TestApiBlock;
