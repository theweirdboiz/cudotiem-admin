import React from "react";
import PropTypes from "prop-types";

const TooltipOption = ({ icon, children }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0">{children}</div>
      <div className="">{icon}</div>
    </div>
  );
};

TooltipOption.propTypes = {};

export default TooltipOption;
