import React from "react";
import PropTypes from "prop-types";

const TooltipOption = ({ icon, children }) => {
  return (
    <div className="">
      <div className="p-3 rounded-2xl bg-white shadow-sd-primary">
        {children}
      </div>
      <span className="">{icon}</span>
    </div>
  );
};

TooltipOption.propTypes = {};

export default TooltipOption;
