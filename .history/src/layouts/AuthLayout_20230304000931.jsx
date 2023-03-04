import React from "react";
import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-primary-color">
      {children}
    </div>
  );
};

AuthLayout.propTypes = {};

export default AuthLayout;
