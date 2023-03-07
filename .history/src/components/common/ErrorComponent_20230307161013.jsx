import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = (props) => {
  return (
    <div className="inline-block text-error bg-light-error bg-opacity-95 mx-auto my-5 p-5 rounded-lg">
      Look like component is error
    </div>
  );
};

ErrorComponent.propTypes = {};

export default ErrorComponent;
