import React from "react";
import PropTypes from "prop-types";

import classNames from "@ultis/classNames";

const State = ({ text, color = "#cccccc" }) => {
  return (
    <div className={classNames("px-2 py-1 rounded-md", color)}>{text}</div>
  );
};

State.propTypes = {};

export default State;
