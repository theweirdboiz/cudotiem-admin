import React from "react";
import PropTypes from "prop-types";

const TooltipOption = ({ icon, children }) => {
  return (
    <>
      <span className="">{icon}</span>
    </>
  );
};

const TooltipContent = ({ children }) => {
  return (
    <div className="p-3 rounded-2xl bg-white shadow-sd-primary">{children}</div>
  );
};

TooltipOption.propTypes = {};

export default TooltipOption;
