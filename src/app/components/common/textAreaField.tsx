"use client";

import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { Michroma } from "next/font/google";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

interface TextareaProps {
  register: any;
  name: string;
  id?: any;
  extraClass?: string;
  control: any;
  prefix?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  readOnly?: boolean;
  containerExtraClass?: string;
  type?: string;
  formState: any;
  suffix?: any;
  autoFocus?: boolean;
}
const TextAreaFiled = (props: TextareaProps) => {
  const {
    register,
    name = "",
    id = "",
    extraClass = "",
    control,
    prefix = null,
    label = "",
    placeholder = null,
    defaultValue = "",
    readOnly = false,
    containerExtraClass = "",
    type = "text",
    formState,
    suffix = null,
    autoFocus = false,
  } = props;
  const [error, setError] = useState(null);
  useEffect(() => {
    if (
      formState &&
      formState?.errors &&
      formState?.errors[id] &&
      formState?.errors[id].message
    ) {
      setError(formState?.errors[id].message);
    }
    return () => {
      setError(null);
    };
  }, [formState]);
  return (
    <div className={`flex flex-col ${containerExtraClass}`}>
      {label && (
        <label htmlFor={id} className=" tracking-[0.03em] text-sm mb-3">
          {label}
        </label>
      )}
      <Controller
        // id={id}
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative">
            <div className=" absolute w-full h-full top-0 left-0">
              <Image src={"/bgs/teatarea-bg.png"} alt="bg" fill />
            </div>
            <TextArea
              {...register(id)}
              {...field}
              className={`h-auto text-base p-4 
                          bg-transparent
                        placeholder:text-[rgba(255,255,255,0.5)]  !border-0
                          shadow-[inset_0_0_0_1px_transparent]
                          placeholder:text-gray !min-h-40
                        text-white ${extraClass} ${michroma.className}
                          hover:border-0 focus:border-0`}
              prefix={prefix}
              defaultValue={defaultValue}
              readOnly={readOnly}
              type={type}
              suffix={suffix}
              autoFocus={autoFocus}
              placeholder={placeholder}
            />
          </div>
        )}
      />
      {error && <span className="text-red-500 mt-3">{error}</span>}
    </div>
  );
};

export default TextAreaFiled;
