import React from "react";
import PropTypes from "prop-types";

import brand from "@assets/react.svg";
import { Search } from "@layouts";

const Topbar = (props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-14">
        <img src={brand} alt="cudotiem-app" />
        <div className="max-w-[458px] w-full">
          <Search />
        </div>
      </div>
      <></>
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
