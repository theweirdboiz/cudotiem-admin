import React from "react";
import PropTypes from "prop-types";

import brand from "@assets/react.svg";
import { Search } from "@layouts";

const Topbar = (props) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-x-14">
        <img src={brand} alt="cudotiem-app" />
        <Search />
      </div>
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
