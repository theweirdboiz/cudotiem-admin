import React from "react";
import PropTypes from "prop-types";
import useHover from "../../hooks/useHover";

const TooltipOption = ({ icon, children }) => {
  const { hovered, nodeRef } = useHover();
  console.log(hovered);
  return (
    <>
      <TooltipContent>{children}</TooltipContent>
      <span ref={nodeRef}>{icon}</span>
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
