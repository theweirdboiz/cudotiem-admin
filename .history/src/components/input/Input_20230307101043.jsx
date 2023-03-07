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
        className={`w-full outline-none border border-light-gray-border rounded-md p-2 my-2 transition-all focus:border-primary-color pl-10 ${
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
