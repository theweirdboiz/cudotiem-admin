import React from "react";
import PropTypes from "prop-types";

import classNames from "@ultis/classNames";

const Search = (props) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-1.5 w-full max-w-[458px] flex items-center"
      )}
    >
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search something..."
          className="bg-transparent text-sm placeholder:text-text-4 text-text-1 w-full"
        />
      </div>

      <button className="w-[72px] h-full rounded-full bg-primary text-white rouned-[20px]">
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
  );
};

Search.propTypes = {};

export default Search;
