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
        className={`w-full border border-stroke rounded-xl py-4 px-6 font-medium transition-all focus:border-primary-color pl-10 text-text-1 placeholder:text-text-4 ${
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
