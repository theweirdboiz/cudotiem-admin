import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-t-0 animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      {...rest}
      className={`${className} flex justify-center items-center w-full p-3 text-base font-semibold text-white rounded-xl`}
      type={type}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
