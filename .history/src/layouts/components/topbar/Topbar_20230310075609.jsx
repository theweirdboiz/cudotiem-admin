import React from "react";
import PropTypes from "prop-types";

import brand from "@assets/react.svg";
import Search from "@layout";

const Topbar = (props) => {
  return (
    <div className="flex items-center">
      <img src={brand} alt="cudotiem-app" />
      <Search />
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
