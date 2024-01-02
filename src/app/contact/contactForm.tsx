"use client";

import React, { useEffect } from "react";
import InputField from "@/app/components/common/inputField";
import { useForm } from "react-hook-form";
import TextAreaFiled from "../components/common/textAreaField";
import { Button } from "antd";
import Image from "next/image";

const ContactForm = (props: any) => {
  const { michroma } = props;
  const { register, formState, control, handleSubmit, watch, setFocus } =
    useForm({
      defaultValues: {
        userName: null,
        email: null,
        message: null,
      },
    });
  const submit = () => {
    console.log("object", watch());
  };

  useEffect(() => {
    if (setFocus !== null) {
      setFocus("userName");
    }
    return () => {};
  }, [setFocus]);

  return (
    <div className="flex flex-col gap-14">
      <h2 className={`text-[2rem] tracking-[-0.02em] ${michroma?.className}`}>
        Let&apos;s chat
      </h2>
      <form
        noValidate
        id="contactForm"
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-8"
      >
        <InputField
          {...{
            register,
            formState,
            control,
            name: "userName",
            id: "userName",
            placeholder: "Name",
          }}
        />
        <InputField
          {...{
            register,
            formState,
            control,
            name: "email",
            id: "email",
            type: "email",
            placeholder: "Email",
          }}
        />
        <TextAreaFiled
          {...{
            register,
            formState,
            control,
            name: "message",
            id: "message",
            type: "type",
            placeholder: "Leave us message",
          }}
        />
        <Button
          form="contactForm"
          className="btn-primary w-48 relative mt-9 hover:!bg-transparent"
          type="primary"
          htmlType="submit"
        >
          <div className="w-full h-full absolute left-0 top-0">
            <div className="w-full h-full">
              <Image src={"/bgs/btn_bg.png"} fill alt="btn bg" />
            </div>
          </div>
          SEND MESSAGE
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
