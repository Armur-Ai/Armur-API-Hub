"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./team.scss";

const TeamHeroImage = () => {
  useEffect(() => {
    if (window !== null) {
      var elem: any = document.querySelector(".scroll-animation");
      window.addEventListener("scroll", function () {
        var value = window.scrollY * 0.05;
        elem.style.transform = `translatex(0%) translatey(0%) rotate(${value}deg)`;
      });
    }
  }, []);
  return (
    <div className="w-[1021px] h-[1021px] mx-auto relative -z-10 -mt-[250px]">
      <div className="w-[618px] h-[618px] absolute right-[20%] top-[20%]">
        <Image src="/bgs/team-hero-bg.svg" alt="hero bg" fill />
      </div>
      <div className="w-full h-full">
        <Image
          src="/team/hero-img.svg"
          alt="hero img"
          fill
          className="scroll-animation"
        />
      </div>
    </div>
  );
};

export default TeamHeroImage;
