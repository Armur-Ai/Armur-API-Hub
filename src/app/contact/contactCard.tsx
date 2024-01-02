import Image from "next/image";
import React from "react";
import "./contactCard.scss";
import { Button } from "antd";
import { Orbitron } from "next/font/google";

interface ContactCardProps {
  title: string;
  index: number;
  para: string;
  michroma: any;
  btnText: string;
  image: any;
  setClickedKey: any;
  setOpen: any;
}

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400"] });

const ContactCard = (props: ContactCardProps) => {
  const {
    title,
    para,
    michroma,
    btnText,
    image,
    setClickedKey,
    index,
    setOpen,
  } = props;

  return (
    <div className=" relative contact-card flex flex-col justify-between w-[24rem] z-50">
      <div className=" absolute w-[21rem] h-[21rem] top-[-11rem] left-1/2 z-10 contact-card-image-outer">
        <div className="contact-card-image-shadow">
          <div className=" absolute left-0 bottom-0 z-[9999] w-full h-full">
            <Image src="/bgs/contact-card-shadow.png" alt="shadow" fill />
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full ">
          <Image src={image} alt="contact us gradient" fill />
        </div>
      </div>
      <div className="w-full h-full left-0 top-0 absolute -z-10 ">
        <Image
          src={"/bgs/contact-us-card-bg.png"}
          alt="contact us background"
          fill
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-[2rem] font-bold capitalize">{title}</h2>
        <p className={`text-base ${michroma?.className}`}>{para}</p>
      </div>
      <Button
        className={`btn-primary relative w-min ${orbitron.className}`}
        onClick={() => {
          if (setClickedKey) {
            setClickedKey({ title, para, btnText, index });
          }
          if (setOpen) {
            setOpen(true);
          }
        }}
      >
        <div className="w-full h-full absolute left-0 top-0">
          <div className="w-full h-full">
            <Image src={"/bgs/btn_bg.png"} fill alt="btn bg" />
          </div>
        </div>
        {btnText}
      </Button>
    </div>
  );
};

export default ContactCard;
