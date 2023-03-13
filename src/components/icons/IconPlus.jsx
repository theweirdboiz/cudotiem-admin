import React from "react";
import PropTypes from "prop-types";

const IconPlus = ({ w = "w-6", h = "h-6", stroke = "1.5" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke="currentColor"
      className={`${w} ${h}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

IconPlus.propTypes = {};

export default IconPlus;
