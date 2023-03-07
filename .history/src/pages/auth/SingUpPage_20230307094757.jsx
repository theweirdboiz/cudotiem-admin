import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SideUpPage = (props) => {
  return (
    <>
      <h3>Sign up</h3>
      <p className="text-center text-sm font-medium">
        Already have an acccount?{" "}
        <Link className="text-primary" to="/auth/sign-in">
          Sign in
        </Link>
      </p>
    </>
  );
};

SideUpPage.propTypes = {};

export default SideUpPage;
