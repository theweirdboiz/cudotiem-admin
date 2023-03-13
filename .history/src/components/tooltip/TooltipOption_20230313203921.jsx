import React from "react";
import PropTypes from "prop-types";

const TooltipOption = ({ icon, children }) => {
  return (
    <div>
      <div className="absolute top-full left-0">{children}</div>
      <div className="relative">{icon}</div>
    </div>
  );
};

TooltipOption.propTypes = {};

export default TooltipOption;
