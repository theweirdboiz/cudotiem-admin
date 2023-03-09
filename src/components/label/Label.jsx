import React from "react";
import PropTypes from "prop-types";
import classNames from "@ultis/classNames";

const Label = ({ children, htmlFor, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "text-sm font-medium text-text-2 dark:text-text-3 cursor-pointer inline-block",
        className
      )}
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
