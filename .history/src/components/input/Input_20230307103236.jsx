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
        id={props.name}
        className={`w-full border border-strock rounded-xl py-4 px-6 font-medium text-sm transition-all focus:border-primary-color  text-text-1 placeholder:text-text-4 ${
          style && style
        }`}
        {...field}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  props: PropTypes.object,
};

export default Input;