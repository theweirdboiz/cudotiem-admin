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
      className={`inline-block w-5 h-5 rounded border cursor-pointer  custom-checkbox ${
        isChecked ? "bg-primary border-primary" : "border-text-4"
      }`}
    >
      <input hidden type="checkbox"></input>
      <div className="flex items-center gap-x-3 mt-2">
        <div className="bg-white rounded-sm custom-checkbox-square transition-all flex items-center justify-center"></div>
      </div>
    </label>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
