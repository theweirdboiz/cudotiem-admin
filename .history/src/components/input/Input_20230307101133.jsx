import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
const Input = ({ control, style, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        className={`w-full outline-none border border-stroke rounded-xl py-4 px-6 my-2 transition-all focus:border-primary-color pl-10 text-text-1 ${
          style && style
        }`}
        {...field}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {};

export default Input;
