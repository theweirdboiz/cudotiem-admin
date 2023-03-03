import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="w-full outline-none border border-light-gray-border rounded-md p-2 my-2 transition-all focus:border-b-primary-color"
      {...field}
      {...props}
    />
  );
};

Input.propTypes = {};

export default Input;
