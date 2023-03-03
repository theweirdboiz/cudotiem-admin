import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type="text"
      className="w-full outline-none border border-light-gray-border rounded-md p-2 my-2"
    />
  );
};

Input.propTypes = {};

export default Input;
