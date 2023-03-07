import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SideUpPage = (props) => {
  return (
    <>
      <h3>Sign up</h3>
      <p className="text-center lg:text-sm text-xs font-normal text-text-3">
        Already have an acccount?{" "}
        <Link className="text-primary font-medium underline" to="/auth/sign-in">
          Sign in
        </Link>
      </p>
    </>
  );
};

SideUpPage.propTypes = {};

export default SideUpPage;
