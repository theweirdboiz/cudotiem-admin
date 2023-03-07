import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmFor, className = "" }) => {
  return (
    <label
      htmlFor={htmFor}
      className={`text-sm font-medium text-text-2 cursor-pointer inline-block ${className}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmFor: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
