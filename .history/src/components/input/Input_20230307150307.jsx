import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
const Input = ({ control, error = "", placeholder, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={props.name}
        className={`w-full border border-strock rounded-xl py-4 px-6 font-medium text-sm transition-all focus:border-primary-color  text-text-1 placeholder:text-text-4  ${
          error.length > 0 && "border-error"
        }`}
        placeholder={`${
          error.length > 0 ? "" : placeholder
        } pointer-events-none`}
        {...field}
        {...props}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error absolute top-2/4 -translate-y-1/2 left-6 error-input">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
  props: PropTypes.object,
};

export default Input;
