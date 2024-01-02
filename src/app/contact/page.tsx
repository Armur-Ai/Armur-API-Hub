"use client";
import React, { useState } from "react";
import { Michroma } from "next/font/google";
import ContactForm from "./contactForm";
import Image from "next/image";
import ContactCard from "./contactCard";
import { useForm } from "react-hook-form";
import ContactModal from "./contactModal";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

const Contact = () => {
  const cardArray: any = [
    {
      title: "Careers",
      para: "Want to build in Web3?",
      image: "/contact-us/gradient-one.svg",
      btnText: "JOIN OUT TEAM",
    },
    {
      title: "Sales Team",
      image: "/contact-us/gradient-two.svg",
      btnText: "CONTACT SALES",
      para: "Talk to our sales team to find right product for you",
    },
    {
      title: "Help & Support",
      image: "/contact-us/gradient-three.svg",
      para: "Run into a problem? Reach out - Contact Support",
      btnText: "CONTACT SUPPORT",
    },
  ];
  const [open, setOpen] = useState(false);
  const [clickedKey, setClickedKey] = useState({
    title: "",
    para: "",
    btnText: "",
    index: 0,
  });
  const { register, formState, control, handleSubmit, watch, setFocus } =
    useForm({
      defaultValues: {
        userName: "",
        email: "",
        message: "",
      },
    });

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="pb-[25rem]">
      <div className="relative h-[79.9rem]">
        <div className="absolute flex flex-col gap-3 w-[43rem] left-[7%] top-[339px]">
          <h1 className="page-title"> GET IN TOUCH!</h1>
          <p className={`text-2xl leading-9 ${michroma.className}`}>
            Want to build on Web3 in a secure way? Leave us a message, and we
            will get in touch.
          </p>
        </div>
        <div className="absolute flex flex-col gap-3 w-[35rem] right-[7%] top-[300px] p-[4.3rem] z-10">
          <div className="w-full h-full absolute left-0 top-0 right-0 bottom-0 -z-10">
            <Image
              src="/bgs/contact-us.png"
              alt="contact form background"
              fill
            />
          </div>
          <ContactForm {...{ michroma }} />
        </div>
      </div>
      <div className="flex flex-col gap-52">
        <div>
          <h2 className="page-title !mx-auto text-center">
            PREFER TO REACH <br /> OUT DIRECTLY?
          </h2>
          <p
            className={`mt-5 text-2xl leading-9 text-center w-8/12 mx-auto ${michroma.className}`}
          >
            If you&apos;re like us, you probably don&apos;t like filling up
            forms. Contact us directly with any of the links below.
          </p>
        </div>
        <div className="flex justify-center gap-12 items-center">
          {cardArray?.map((data: any, key: number) => (
            <ContactCard
              {...{
                index: key,
                title: data?.title,
                image: data?.image,
                para: data?.para,
                michroma,
                btnText: data?.btnText,
                setClickedKey,
                setOpen,
              }}
              key={key}
            />
          ))}
        </div>
      </div>
      {open && (
        <ContactModal
          {...{
            open,
            handleOk,
            handleCancel,
            register,
            formState,
            control,
            handleSubmit,
            watch,
            setFocus,
            clickedKey,
          }}
        />
      )}
    </div>
  );
};

export default Contact;
