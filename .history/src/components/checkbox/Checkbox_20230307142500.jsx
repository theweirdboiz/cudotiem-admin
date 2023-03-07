import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const Checkbox = ({ isChecked }) => {
  // const { field } = useController({
  //   control,
  //   name: props.name,
  //   defaultValue: false,
  // });
  return (
    <label
      className={`inline-flex items-center justify-center text-white w-5 h-5 rounded border cursor-pointer transition-all custom-checkbox ${
        isChecked ? "bg-primary border-primary" : "border-text-4"
      }`}
    >
      <input hidden type="checkbox"></input>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="currentColor"
          className="w-3.5 h-3.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </span>
    </label>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
