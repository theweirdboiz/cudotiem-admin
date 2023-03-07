import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = (props) => {
  return (
    <div className="inline-block text-error bg-light-error translate-x-1/2 p-5 rounded-lg">
      Look like component is error
    </div>
  );
};

ErrorComponent.propTypes = {};

export default ErrorComponent;
