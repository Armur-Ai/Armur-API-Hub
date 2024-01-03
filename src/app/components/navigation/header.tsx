"use client";

import React from "react";
import Image from "next/image";
import "./headerFooter.scss";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { Button } from "antd";

const Header = () => {
  const router = usePathname();

  return (
    <header className="flex items-center justify-between py-6 px-24 header border-b-[1px] border-black sticky top-0 overflow-hidden">
      <Link href={"/"}>
        <Image
          src="/logo/main_logo.png"
          alt="Armur Logo"
          width={171}
          height={100}
          priority
        />
      </Link>
      <div className="flex items-center">
        <ul className={`flex items-center gap-10 font-michroma`}>
          <Link href={"/marketplace"}>
            <li>Marketplace</li>
            <div
              className={`activeLink ${
                router === "/marketplace" ? " opacity-100" : "opacity-0"
              }`}
            />
          </Link>
          {/* <Link href={"/team"}> */}
          <div>
            <li>Team</li>
            <div
              className={`activeLink ${
                router === "/team" ? " opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* </Link> */}
          {/* <Link href={"/whitepaper"}> */}
          <div>
            <li>Whitepaper</li>
            <div
              className={`activeLink ${
                router === "/whitepaper" ? " opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* </Link> */}
          {/* <Link href={"/blog"}> */}
          <div>
            <li>Blog</li>
            <div
              className={`activeLink ${
                router === "/blog" ? " opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* </Link> */}
          <div>
            {/* <Link href={"/contact"}> */}
            <li>Contact</li>
            <div
              className={`activeLink ${
                router === "/contact" ? " opacity-100" : "opacity-0"
              }`}
            />
          </div>
          {/* </Link>{" "} */}
        </ul>
        <Button className="btn-primary ml-11 relative">
          <div className="w-full h-full absolute left-0 top-0">
            <div className="w-full h-full">
              <Image src={"/bgs/btn_bg.png"} fill alt="btn bg" />
            </div>
          </div>
          LAUNCH APP
          <ArrowRightOutlined />
        </Button>
      </div>
    </header>
  );
};

export default Header;
