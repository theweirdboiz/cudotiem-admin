import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = (props) => {
  return (
    <div className="text-error bg-error bg-opacity-95 p-5 rounded-lg">
      Look like component is error
    </div>
  );
};

ErrorComponent.propTypes = {};

export default ErrorComponent;
