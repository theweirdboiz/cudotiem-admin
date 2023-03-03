import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Input } from "@components";
import { Link } from "react-router-dom";

import { TbLock } from "react-icons/tb";
import { FiUser } from "react-icons/fi";

const Login = (props) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center h-[100vh] bg-primary-color">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="rounded-xl bg-white px-5 py-8 w-[30rem]">
          <header>
            <h1>Login</h1>
            <h3>Welcom back, guy</h3>
          </header>
          <div className="relative">
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              control={control}
            />
            <FiUser
              style={{
                position: "absolute",
                top: "16px",
                left: "10px",
                width: "24px",
                height: "24px",
              }}
            />
          </div>
          <div className="relative">
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              control={control}
            />

            <TbLock
              style={{
                position: "absolute",
                top: "16px",
                left: "10px",
                width: "24px",
                height: "24px",
              }}
            />
          </div>
          <Link to="forget-password" className="text-primary-color underline">
            Forget password?
          </Link>
          <h4>
            Do not have an account?
            <Link to="/register" className="text-primary-color underline">
              Sign up
            </Link>
          </h4>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
