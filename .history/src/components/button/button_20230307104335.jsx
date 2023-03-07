import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children, className }) => {
  return (
    <button className={`${className} py-3 text-base font-semibold`} type={type}>
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
