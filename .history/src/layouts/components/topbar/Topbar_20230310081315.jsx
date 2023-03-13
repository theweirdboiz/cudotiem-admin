import React from "react";
import PropTypes from "prop-types";

import brand from "@assets/react.svg";
import { Search } from "@layouts";

const Topbar = (props) => {
  return (
    <div className="flex items-center">
      <img src={brand} alt="cudotiem-app" />
      <div className="ml-14">
        <Search />
      </div>
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
