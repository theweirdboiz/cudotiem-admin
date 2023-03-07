import React from "react";
import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lite">
      {children}
    </div>
  );
};

AuthLayout.propTypes = {};

export default AuthLayout;
