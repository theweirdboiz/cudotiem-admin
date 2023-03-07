import React from "react";
import PropTypes from "prop-types";

const ButtonGoogle = ({ text }) => {
  return (
    <button className="flex items-center justify-center py-3 gap-x-3 w-full border border-strock rounded-xl dark:border-darkStroke text-text-2 dark:text-white text-base font-semibold mb-5">
      <img src={iconGoogle} alt="" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
};

export default ButtonGoogle;
