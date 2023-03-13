import React from "react";
import PropTypes from "prop-types";

import classNames from "@ultis/classNames";

const Status = ({ text, color = "#cccccc" }) => {
  return (
    <div className={classNames("px-2 py-1 rounded-md", color)}>{text}</div>
  );
};

Status.propTypes = {};

export default Status;
