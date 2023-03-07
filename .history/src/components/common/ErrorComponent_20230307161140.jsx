import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = (props) => {
  return (
    <div className="text-center">
      <div className="inline-block text-error bg-light-error p-5 rounded-lg">
        Look like component is error
      </div>
    </div>
  );
};

ErrorComponent.propTypes = {};

export default ErrorComponent;
