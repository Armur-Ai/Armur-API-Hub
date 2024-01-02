import React from "react";
import { Michroma } from "next/font/google";
import Image from "next/image";
import "./team.scss";
import TeamCard from "./teamCard";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

const Team = () => {
  const team = [
    {
      maskImage: "/team/akhil-mask.svg",
      profileImage: "/team/akhil.png",
      title: "Akhil Sharma",
      designation: "ceo",
      desc: "Akhil is a blockchain engineer, security enthusiast and has built tech business before. He teaches advanced tech topics on his youtube, udemy and linkedin learning.",
    },
    {
      maskImage: "/team/shane-mask.svg",
      profileImage: "/team/shane.png",
      title: "Shane Kehoe",
      designation: "COO",
      desc: "Shane has a wide experience of scaling companies and a deep understanding of business, he was recently an M.D at Swissborg Ventures.",
    },
    {
      maskImage: "/team/paul-mask.svg",
      profileImage: "/team/paul.png",
      title: "Paul Slattery",
      designation: "CHIEF ARCHITECT",
      desc: "Paul has more than two decades of technical experience and has built and led large teams. He’s currently the V.P of Engineering at BCGX.",
    },
    {
      maskImage: "/team/jesper-mask.svg",
      profileImage: "/team/jesper.png",
      title: "Jesper Kristensen",
      designation: "A.I & BLOCKCHAIN RESEARCHER",
      desc: "Having a dual masters’ degree and a PhD from Cornell, Jesper is an expert at A.I and Blockchain.",
    },
  ];

  return (
    <div>
      <div className=" relative pt-[18.7rem] min-h-[99rem]">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="page-title">Founding Partners</h1>
          <p
            className={`xl:text-2xl text-sm xl:leading-9 ${michroma.className} text-center w-8/12 mx-auto`}
          >
            With a combined technical experience of more than 50 years and more
            than 30 years combined experience of running tech companies, our
            Founding members have what it takes to bring the vision to life.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2  grid-cols-1 flex-wrap gap-12 items-start lg:px-[10rem] px-8 w-full">
        {team?.map((data: any, key: number) => (
          <div key={key} className={`flex flex-col relative  team-card gap-12`}>
            <div className=" relative transfrom-1200 h-[17rem] team-image-section">
              <div className=" absolute left-0 top-0 w-full h-full mask-image">
                <Image src={data.maskImage} alt={data.title} fill />
              </div>
              <div className=" absolute left-0 top-0 w-full h-full profile-image">
                <Image src={data.profileImage} alt={data.title} fill />
              </div>
            </div>
            {/* flex flex-[0_0_auto] gap-6  */}
            <div className="transfrom-1200 flex flex-[0_0_auto]  gap-6">
              <div className="w-[25px] h-[196px] relative ">
                <div className=" absolute w-full h-full">
                  <Image src="/team/line.svg" alt="gradient" fill />
                </div>
              </div>
              <div
                className={`relative flex flex-col  team-card-content ${
                  team?.length - 1 === key ? " gap-8" : "gap-16"
                }`}
              >
                <h3
                  className={`${michroma.className} text-base uppercase w-auto`}
                >
                  <span className="text-color">{data?.designation}</span>
                </h3>
                <h3
                  className={`${michroma.className} text-[1.6rem] leading-[130%] w-auto`}
                >
                  <span className="text-color">{data?.title}</span>
                </h3>
              </div>
            </div>
            <p
              className={`${michroma.className} text-lg text-[rgba(255,255,255,0.8)] leading-[150%]`}
            >
              {data?.desc}
            </p>
          </div>
        ))}
      </div>
      <div className=" lg:px-[7.5rem] lg:pt-[15rem] lg:pb-[31rem] px-7 pt-12 pb-28">
        <div className=" flex flex-col lg:gap-40 gap-12">
          <h3 className="transfrom-1200 page-title text-center">
            WHAT OUR CLIENTS
            <br />
            ARE SAYING.
          </h3>
          <div className="flex relative flex-[0_0_auto] gap-12 flex-wrap justify-center">
            {/* Card One */}
            <div className="flex flex-col gap-[3.1rem]">
              <TeamCard
                {...{
                  title: `“THE FUTURE OF CYBERSECURITY”`,
                  image: "/team/card_one.png",
                  para: "We've been using Armur for our decentralized application and the experience hass been nothing short of extraordinary.",
                  clientName: "WILLIAM MILLER",
                  clientCompany: "@CRYPTOMIL",
                }}
              />
              <TeamCard
                {...{
                  title: `“AMAZING DEVELOPER EXPERIENCE”`,
                  image: "/team/card_three.png",
                  para: "Documentation is nice and easy to get started with, toolkit is simple to use and libraries are a breeze to import, install and get started with. I'd always recommend Armur to everyone building in Web3.",
                  clientName: "WILLIAM MILLER",
                  clientCompany: "@CRYPTOMIL",
                }}
              />
            </div>
            <div className="flex flex-col gap-[3.1rem] lg:pt-40">
              <TeamCard
                {...{
                  title: `“THE BEST SHIELD FOR YOUR SMART CONTRACTS”`,
                  image: "/team/card_two.png",
                  para: "We've built and deployed smart contracts on Polygon, Tezos and Solana and each time used Armur to find vulnerabilities and enhance the general quality of our smart contracts. Needless to say, great product offerings, simple to use and integrate and very developer-friendly.We look forward to using Armur again.",
                  clientName: "JOHN CARTER ",
                  clientCompany: "@JOHNNYCARTER",
                }}
              />
              <TeamCard
                {...{
                  title: "“THE FUTURE OF CYBERSECURITY”",
                  image: "/team/card_one.png",
                  para: "We've been using Armur for our decentralized application and the experience has been nothing short of extraordinary.",
                  clientName: "WILLIAM MILLER",
                  clientCompany: "@CRYPTOMIL",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
