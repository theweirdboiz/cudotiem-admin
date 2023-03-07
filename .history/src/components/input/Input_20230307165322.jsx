import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";

import { ErrorComponent } from "@components";

const Input = ({ control, error = "", placeholder, children, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={props.name}
        className={`w-full border dark:border-darkStroke rounded-xl py-4 px-6 font-medium text-sm dark:text-white placeholder:text-text-4 dark:placeholder:text-text-2 bg-transparent ${
          error.length > 0
            ? "border-error text-error"
            : "border-strock text-text-1"
        } ${children && "pr-14"}`}
        placeholder={`${error.length < 1 ? placeholder : ""}`}
        {...field}
        {...props}
      />
      {error.length >= 0 && (
        <span className="text-sm font-medium text-error absolute top-2/4 -translate-y-1/2 left-6 error-input pointer-events-none">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute top-2/4 -translate-y-1/2 right-6 text-text-4 cursor-pointer select-none">
          {children}
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

export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
