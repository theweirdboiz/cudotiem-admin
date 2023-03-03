import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import {TbLock} from 'react-icons/tb'
const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        className="w-full outline-none border border-light-gray-border rounded-md p-2 my-2 transition-all focus:border-primary-color pl-8"
        {...field}
        {...props}
      />
<TbLock/>
    </div>
  );
};

Input.propTypes = {};

export default Input;
