import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lite">
      <Link to="/"></Link>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {};

export default AuthLayout;
