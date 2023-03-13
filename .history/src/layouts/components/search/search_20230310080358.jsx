import React from "react";
import PropTypes from "prop-types";

import classNames from "@ultis/classNames";

const Search = (props) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-1.5 w-full max-w-[458px]"
      )}
    >
      <input
        type="text"
        placeholder="Search something..."
        className="bg-transparent text-sm placeholder:text-text-4 text-text-1"
      />
    </div>
  );
};

Search.propTypes = {};

export default Search;
