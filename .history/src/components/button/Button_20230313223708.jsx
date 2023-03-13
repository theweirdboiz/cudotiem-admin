import React from "react";
import PropTypes from "prop-types";
import classNames from "@ultis/classNames";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-t-transparent border-b-transparent animate-spin border-white"></div>
  ) : (
    children
  );

  let defaultClassName =
    "flex justify-center items-center p-3 text-base font-semibold  rounded-xl";

  switch (rest.kind) {
    case "primary":
      defaultClassName += " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName += " bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName += " bg-secondary bg-opacity-20 text-white";
      break;
  }

  if (rest.href) {
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      className={classNames(
        defaultClassName,
        !!isLoading ? "bg-opacity-60 pointer-events-nones" : "",
        className
      )}
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
  isLoading: PropTypes.bool,
};

export default Button;
