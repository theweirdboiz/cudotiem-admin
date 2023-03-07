import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@components";

import brand from "../assets/react.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-text-2 p-10 shadow-md">
      <Link to="">
        <img src={brand} alt="" className="w-10 h-10" />
      </Link>
      <div className="w-full bg-white max-w-[556px] rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        {children}
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default withErrorBoundary(AuthLayout, {
  FallbackComponent: ErrorComponent,
});
