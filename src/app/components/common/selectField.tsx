"use client";

import { Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
// import commonStyle from "./commonStules.module.scss";
import "./common.scss";

interface SelectfiledProps {
  register: any;
  name?: string;
  id?: string;
  extraClass?: string;
  control: any;
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  readOnly?: boolean;
  containerExtraClass?: string;
  options?: any;
  formState: any;
}
const SelectFiled = (props: SelectfiledProps) => {
  const {
    register,
    name = "",
    id = "",
    extraClass = "",
    control,
    label,
    placeholder,
    defaultValue = "",
    readOnly = false,
    containerExtraClass = "",
    options,
    formState,
  } = props;

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
          <Select
            {...{ register, formState }}
            {...field}
            className={`${extraClass}`}
            placeholder={placeholder}
            defaultValue={defaultValue}
            options={options}
            // open={true}
            disabled={readOnly}
          />
        )}
      />
    </div>
  );
};

export default SelectFiled;
