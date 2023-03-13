import React from "react";
import PropTypes from "prop-types";

import brand from "@assets/react.svg";
import { Search } from "@layouts";

const Topbar = (props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-14 flex-1">
        <img src={brand} alt="cudotiem-app" />
        <div className="max-w-[458px] w-full">
          <Search />
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
