import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Input } from "@components";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center h-[100vh] bg-primary-color">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="rounded-xl bg-white px-5 py-8 max-w-[24rem] ">
          <header>
            <h1>Login</h1>
            <h3>Welcom back, guy</h3>
          </header>
          <>
            <Input />
            <Input />
            <h4>
              Do not have an account?
              <Link to="/sign-up">Register</Link>
            </h4>
            <button>Login</button>
          </>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
