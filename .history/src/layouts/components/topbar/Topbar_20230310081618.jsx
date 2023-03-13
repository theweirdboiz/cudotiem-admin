import React from "react";
import PropTypes from "prop-types";

import brand from "@assets/react.svg";
import { Search } from "@layouts";

const Topbar = (props) => {
  return (
    <div className="flex items-center justify-between">
      <>
        <img src={brand} alt="cudotiem-app" />
        <div className="ml-14 max-w-[458px] w-full">
          <Search />
        </div>
      </>
      <></>
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
