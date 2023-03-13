import React, { useState } from "react";
import PropTypes from "prop-types";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const TooltipOption = ({ icon, children }) => {
  const { hovered, nodeRef } = useHover();

  const [coords, setCoords] = useState({});

  // handle events
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
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

const TooltipContent = ({ children, coords }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        bottom: coords.bottom,
        left: coords.left,
      }}
      className="p-3 rounded-2xl bg-white shadow-sd-primary absolute translate-x-1/2 translate-y-1/2"
    >
      {children}
    </div>,
    document.body
  );
};

TooltipOption.propTypes = {};

export default TooltipOption;
