import React, { useState } from "react";
import PropTypes from "prop-types";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const TooltipOption = ({ icon, children }) => {
  const { hovered, nodeRef } = useHover();

  const [coords, setCoords] = useState({});

  // handle events
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientReact());
  };

  return (
    <>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span ref={nodeRef} onMouseOver={handleHover}>
        {icon}
      </span>
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
