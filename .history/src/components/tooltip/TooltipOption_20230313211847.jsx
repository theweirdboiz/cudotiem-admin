import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import useClickOutSide from "../../hooks/useClickOutSide";

const TooltipOption = ({ icon, children }) => {
  const { show, setShow, nodeRef } = useClickOutSide;

  const [coords, setCoords] = useState({});

  // handle events
  const handleClick = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };

  return (
    <>
      {show && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span ref={nodeRef} onClick={handleClick}>
        {icon}
      </span>
    </>
  );
};

const TooltipContent = ({ children, coords }) => {
  console.log(coords);
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
