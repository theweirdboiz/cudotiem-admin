import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = (props) => {
  return (
    <div className="text-red-500 bg-red-100 p-5 rounded-lg">
      Look like component is error
    </div>
  );
};

ErrorComponent.propTypes = {};

export default ErrorComponent;
