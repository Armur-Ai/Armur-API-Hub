import { Metadata } from "next";
import React from "react";
// import CustomStyle from "../app/component/customButtonStyles.module.scss";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 - Not Found",
  description:
    "Armur makes tools for Code Security (Code vulnerability scanning, Static code analysis, Dynamic code analysis)",
  icons: {
    icon: "/icon.ico",
  },
};
const NotFound = () => {
  return (
    <div className="min-h-screen lg:px-36 md:px-20 px-7  pt-12 not-found-bg">
      <div className="py-20 lg:text-left text-center">
        <h2 className="font-extrabold md:text-[150px] text-8xl font-orbitron">
          404
        </h2>
        <p className="font-medium md:text-3xl text-xl md:pt-0 pt-9 lg:pr-28">
          Did You Know : Armur has the best Static Source Code Analysis Tools
          for finding Code Vulnerabilities in GO, Rust, Python and Javascript
          code.
        </p>
        <div className="pt-24 btn-left">
          <Link href={"/"} passHref legacyBehavior>
            <button
              className={`flex items-center text-white test-btn border-0 rounded-sm text-base tracking-wider font-michroma`}
            >
              Back to Home Page
            </button>
          </Link>
          <p className="text-[#CFCFCF] md:text-lg text-sm pt-4">
            Try reloading this page or go back to homepage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
