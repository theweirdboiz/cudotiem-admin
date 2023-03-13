import React from "react";
import PropTypes from "prop-types";

import classNames from "@ultis/classNames";

const Search = (props) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-full shadow-[10px 10px 20px rgba(218, 213, 213, 0.15)]"
      )}
    ></div>
  );
};

Search.propTypes = {};

export default Search;
