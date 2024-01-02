import React from "react";
import Image from "next/image";
import "./headerFooter.scss";
import Link from "next/link";
import { Michroma, Sora } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

const sora = Sora({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  const menuLink = [
    {
      name: "Platfrom",
      link: "/contact-us",
    },
    {
      name: "team",
      link: "/team",
    },
    {
      name: "Whitepaper",
      link: "/Whitepaper",
    },
    {
      name: "blog",
      link: "/blog",
    },
    {
      name: "conatct",
      link: "/contact-us",
    },
  ];

  const socialIcon = [
    {
      icon: "/icons/tiwtter.png",
      link: "https://twitter.com/armur_ai",
    },
    {
      icon: "/icons/hashnode.png",
      link: "https://armurai.hashnode.dev/",
    },
    {
      icon: "/icons/medium.png",
      link: "https://armur.medium.com/",
    },
    {
      icon: "/icons/docker.png",
      link: "https://discord.gg/pQCXjGQWsJ",
    },
    {
      icon: "/icons/linkedIn.png",
      link: "https://www.linkedin.com/company/armurai/?viewAsMember=true",
    },
    {
      icon: "/icons/youtube.png",
      link: "https://www.youtube.com/@AkhilSharmaTech",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-image-main">
        <div className="w-full h-full absolute left-0 top-0 bottom-0 right-0">
          <div className="w-full h-full absolute left-0 top-0 bottom-0 right-0">
            <Image
              src="/bgs/footer_bg.webp"
              alt="footer bg"
              fill
              className="!relative h-auto"
            />
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="flex lg:flex-row flex-col gap-8 justify-between items-start lg:items-center py-8 border-b-[1px] border-[rgba(255,255,255,0.1)]">
          <div className="flex flex-col gap-16">
            <Link href={"/"}>
              <Image
                src="/logo/main_logo.png"
                alt="Armur Logo"
                width={171}
                height={100}
                priority
              />
            </Link>
            <h3 className=" text-2xl uppercase tracking-widest font-semibold">
              SECURING THE FUTURE WITH A.I.
            </h3>
          </div>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <h4 className=" text-base tracking-[0.06em] text-[rgba(255,255,255,0.5)]">
                Menu
              </h4>
              <div className="flex lg:flex-row flex-col gap-11">
                {menuLink?.map((data: any, key: number) => (
                  <div
                    key={key}
                    className={` text-base font-normal ${michroma.className}`}
                  >
                    <Link href={data.link}>{data.name}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className=" text-base tracking-[0.06em] text-[rgba(255,255,255,0.5)]">
                Backed By
              </h4>
              <div className="flex items-center gap-4">
                <Image
                  src="/company-logo/techstars.svg"
                  alt="techstars"
                  width={113}
                  height={20}
                />
                <Image
                  src="/company-logo/outlier_ventures.svg"
                  alt="outlier ventures"
                  width={180}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 gap-5 footer-bottom">
          <h5 className={`${sora.className} text-sm`}>© 2024 armur.ai</h5>
          <div className="flex items-center gap-7">
            {socialIcon?.map((data: any, key: number) => (
              <div key={key}>
                <Link target="blank" href={data.link}>
                  <Image
                    src={data.icon}
                    alt="social icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
