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
      <div className="search-result w-[843px] absolute left-0 bg-white z-50 translate-y-5 pb-6 rounded-3xl">
        <div className="flex items-center justify-between p-3 bg-gray-soft">
          <h4 className="font-medium text-sm pl-4">Se all 20013</h4>
          <button className="flex items-center justify-center w-[72px] h-12 rounded-xl bg-error bg-opacity-20">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
