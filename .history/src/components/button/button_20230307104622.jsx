import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", children, className = "" }) => {
  return (
    <button
      className={`${className} flex justify-center items-center w-full py-3 text-base font-semibold text-white rounded-xl bg-primary`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
