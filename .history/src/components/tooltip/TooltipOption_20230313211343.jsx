import React, { useState } from "react";
import PropTypes from "prop-types";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const TooltipOption = ({ icon, children }) => {
  const { hovered, nodeRef } = useHover(false);

  const [coords, setCoords] = useState({});

  // handle events
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
    console.log(hovered);
  };

  return (
    <>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span ref={nodeRef} onClick={handleHover}>
        {icon}
      </span>
    </>
  );
};

const TooltipContent = ({ children, coords }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        top: coords.top - coords.height / 2,
        left: coords.left + coords.width / 2,
      }}
      className="p-3 rounded-2xl bg-white shadow-sd-primary absolute -translate-x-1/2 translate-y-full"
    >
      {children}
    </div>,
    document.body
  );
};

TooltipOption.propTypes = {};

export default TooltipOption;
