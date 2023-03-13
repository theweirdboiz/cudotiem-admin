import React from "react";
import PropTypes from "prop-types";

import classNames from "@ultis/classNames";

const Search = (props) => {
  return (
    <div className="relative">
      <div
        className={classNames(
          "bg-white rounded-full shadow-sd-primary p-1.5 w-full  flex items-center"
        )}
      >
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Search something..."
            className="bg-transparent text-sm placeholder:text-text-4 text-text-1 w-full"
          />
        </div>

        <button className="w-[72px] h-10 rounded-full bg-primary text-white rouned-[20px] flex items-center justify-center flex-shrink-0">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="search-result w-[843px] absolute top-full left-0 bg-white z-50 translate-y-5"></div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
