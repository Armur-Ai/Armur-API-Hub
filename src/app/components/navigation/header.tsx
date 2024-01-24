"use client";

import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import "./headerFooter.scss";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { Button } from "antd";

const Header = () => {
  const router = usePathname();
  const [isOpen, setOpen] = useState(false);

  const navLink = [
    {
      name: "Marketplace",
      link: "/marketplace",
    },
    {
      name: "Team",
      link: "/",
    },
    {
      name: "Whitepaper",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  useEffect(() => {
    if (router) {
      setOpen(false);
    }
    return () => {};
  }, [router]);

  const iconBlock = () => {
    return (
      <label htmlFor="check">
        <input
          type="checkbox"
          id="check"
          checked={isOpen}
          onChange={() => {}}
          onClick={() => setOpen(!isOpen)}
        />
        <span />
        <span />
        <span />
      </label>
    );
  };

  return (
    <div className="header fixed w-full top-0 z-[9999] border-b-[0.5px] border-black">
      <header className="flex items-center justify-between py-6 xl:px-24 px-12  relative">
        <a href={"https://www.armur.ai/"} target="_self">
          <Image
            src="/logo/main_logo.png"
            alt="Armur Logo"
            width={171}
            height={100}
            priority
          />
        </a>
        {/* <div className="lg:flex hidden items-center shrink">
          <ul className={`flex items-center xl:gap-10 gap-4 font-michroma`}>
            {navLink?.map((data: any, key: number) => (
              <Link href={data?.link} key={key}>
                <li>{data?.name}</li>
                <div
                  className={`activeLink ${
                    key === 0 && router === "/marketplace"
                      ? " opacity-100"
                      : "opacity-0"
                  }`}
                />
              </Link>
            ))}
          </ul>
          <Button className="btn-primary ml-11 relative">
            <div className="w-full h-full absolute left-0 top-0">
              <Image src={"/bgs/btn_bg.png"} fill alt="btn bg" />
            </div>
            LAUNCH APP
            <ArrowRightOutlined className="btn-primary-icon" />
          </Button>
        </div>
        <div className="lg:hidden block">{iconBlock()}</div> */}
      </header>
      {/* <div className="lg:hidden block">
        {isOpen && (
          <ul className="flex flex-col gap-8 items-center text-sm font-michroma pb-12">
            {navLink?.map((data: any, key: number) => (
              <Link key={key} href={data?.link}>
                <li>{data.name}</li>
              </Link>
            ))}
            <Button className="btn-primary ml-11 relative">
              <div className="w-full h-full  absolute left-0 top-0">
                <div className="w-full h-full ">
                  <Image src={"/bgs/btn_bg.png"} fill alt="btn bg" />
                </div>
              </div>
              LAUNCH APP
              <ArrowRightOutlined className="btn-primary-icon" />
            </Button>
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default Header;
