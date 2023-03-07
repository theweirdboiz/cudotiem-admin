import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} flex justify-center items-center w-full p-3 text-base font-semibold text-white rounded-xl`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
