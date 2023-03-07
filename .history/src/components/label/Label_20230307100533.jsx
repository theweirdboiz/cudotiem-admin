import React from "react";
import PropTypes from "prop-types";

const Label = ({ children }) => {
  return (
    <label className="text-sm font-medium text-text-2 cursor-pointer inline-block">
      {children}
    </label>
  );
};

Label.propTypes = {};

export default Label;
