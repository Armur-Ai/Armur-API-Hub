import { Button, Modal } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import TextAreaFiled from "../components/common/textAreaField";
import InputField from "../components/common/inputField";
import { Michroma, Orbitron } from "next/font/google";

interface contactModalProps {
  open: boolean;
  handleOk: (d: any) => void;
  handleCancel: (d: any) => void;
  register: any;
  formState: any;
  control: any;
  handleSubmit: any;
  watch: any;
  setFocus: (d: any) => void;
  clickedKey: {
    title: string;
    para: string;
    btnText: string;
    index: number;
  };
}

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400"] });

const ContactModal = (props: contactModalProps) => {
  const {
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
  } = props;
  console.log(clickedKey);
  const onSubmit = () => {
    console.log("object");
  };

  useEffect(() => {
    if (setFocus !== null) {
      setFocus("userName");
    }
  }, [setFocus]);
  return (
    <Modal
      open={open}
      title={
        <span className={`${orbitron?.className} !font-bold`}>
          {clickedKey?.title}
        </span>
      }
      onOk={handleOk}
      onCancel={handleCancel}
      className="add-member-model"
      wrapClassName="add-member-model-wrapper"
      width={"35.5rem"}
      centered={true}
    >
      <div className=" absolute left-0 top-0 w-full h-full -z-10">
        <Image src={"/bgs/modal-bg.png"} alt="modal-bg" fill />
      </div>
      <div className="text-white pt-2.5 flex flex-col gap-14">
        <p className={` text-sm ${michroma.className}`}>{clickedKey?.para}</p>
        <form noValidate id="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-7">
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
                placeholder: `${
                  clickedKey?.index === 0
                    ? "Please leave your message or resume link here. Also, indicate the position you want to apply for."
                    : clickedKey?.index === 1
                    ? "What do you need help with?"
                    : "What issues are you facing?"
                }`,
              }}
            />
            <Button
              form="contactForm"
              className={`btn-primary w-min relative hover:!bg-transparent !font-semibold ${michroma.className}`}
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
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
