import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ chidren }) => {
  return <div className="flex flex-col gap-y-3 mb-5">{chidren}</div>;
};

FormGroup.propTypes = {
  // chidren: PropTypes.node,
};

export default FormGroup;
