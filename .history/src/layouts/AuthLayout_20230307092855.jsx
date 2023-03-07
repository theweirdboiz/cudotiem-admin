import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import brand from "../assets/brand.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lite">
      <Link to="">
        <img src={brand} alt="" />
      </Link>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {};

export default AuthLayout;
