import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ chidren }) => {
  return <div>{chidren}</div>;
};

FormGroup.propTypes = {
  chidren: PropTypes.node,
};

export default FormGroup;
