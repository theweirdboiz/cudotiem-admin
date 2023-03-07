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
    <label className="inline-block w-5 h-5 rounded border cursor-pointer border-strock custom-checkbox">
      <input hidden type="checkbox"></input>
      <div className="flex items-center gap-x-3 mt-2">
        <div className="bg-white rounded-sm custom-checkbox-square transition-all flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#fff"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
      </div>
    </label>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
