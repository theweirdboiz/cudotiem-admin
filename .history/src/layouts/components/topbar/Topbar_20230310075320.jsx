import React from "react";
import PropTypes from "prop-types";

import brand from "@assets/react.svg";

const Topbar = (props) => {
  return (
    <div className="flex items-center">
      <img src={brand} alt="" />
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
