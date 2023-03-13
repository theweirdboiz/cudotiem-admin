import React from "react";
import PropTypes from "prop-types";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const TooltipOption = ({ icon, children }) => {
  const { hovered, nodeRef } = useHover();
  return (
    <>
      {hovered && <TooltipContent>{children}</TooltipContent>}
      <span ref={nodeRef}>{icon}</span>
    </>
  );
};

const TooltipContent = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="p-3 rounded-2xl bg-white shadow-sd-primary">
      {children}
    </div>,
    document.body
  );
};

TooltipOption.propTypes = {};

export default TooltipOption;
