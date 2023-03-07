import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmFor }) => {
  return (
    <label className="text-sm font-medium text-text-2 cursor-pointer inline-block">
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmFor: PropTypes.string,
};

export default Label;
