"use client";

import Input from "antd/es/input/Input";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import "./common.scss";
import Image from "next/image";

interface InputProps {
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
const InputField = (props: InputProps) => {
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
    <div className={`flex  flex-col ${containerExtraClass}`}>
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
            <div className=" absolute w-full h-full top-0 left-0 bg-image">
              <Image src={"/bgs/input_bg.svg"} alt="bg" fill />
            </div>
            <Input
              {...register(id)}
              {...field}
              className={`h-auto text-base p-4 
                          shadow-[inset_0_0_0_1px_transparent]
                          bg-transparent
                         placeholder:text-[rgba(255,255,255,0.5)] 
                        border-0
                        text-white ${extraClass} font-michroma
                        hover:border-0 focus:border-0 custom-inputField`}
              prefix={prefix}
              placeholder={placeholder}
              defaultValue={defaultValue}
              readOnly={readOnly}
              type={type}
              suffix={suffix}
              autoFocus={autoFocus}
            />
          </div>
        )}
      />
      {error && <span className="text-red-500 mt-3">{error}</span>}
    </div>
  );
};

export default InputField;
