import React from "react";
import PropTypes from "prop-types";

const TooltipOption = ({ icon, children }) => {
  return (
    <div>
      <div className="">{children}</div>
      {icon}
    </div>
  );
};

TooltipOption.propTypes = {};

export default TooltipOption;
