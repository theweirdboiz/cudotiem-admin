import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SideUpPage = (props) => {
  return (
    <>
      <h3 className="font-semibold text-3xl text-center mb-5">Sign Up</h3>
      <p className="text-center lg:text-sm text-xs font-normal text-text-3 lg:mb-8">
        Already have an acccount?{" "}
        <Link className="text-primary font-medium underline" to="/auth/sign-in">
          Sign in
        </Link>
      </p>
      <button className="flex items-center gap-x-2"></button>
    </>
  );
};

SideUpPage.propTypes = {};

export default SideUpPage;
