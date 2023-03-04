import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Input } from "@components";
import { Link } from "react-router-dom";

import { TbLock } from "react-icons/tb";
import { FiUser } from "react-icons/fi";

const ForgetPassword = (props) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="rounded-xl bg-white px-5 py-8 w-[20rem] -translate-y-1/4">
        <header className="text-center mb-3">
          <h1 className="text-[2rem] font-bold">Forget password</h1>
          <h3 className="text-xl font-semibold">Oops!, don't worry</h3>
        </header>
        <div className="relative">
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
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
        <Link to="/login" className="text-primary-color underline">
          Sign in
        </Link>
        <button className="p-2 w-full rounded-lg bg-btn-primary-hover text-white font-semibold uppercase my-3">
          Login
        </button>
        <h4 className="flex gap-x-1">
          Do not have an account?
          <Link to="/register" className="text-primary-color underline">
            Sign up
          </Link>
        </h4>
      </div>
    </form>
  );
};

ForgetPassword.propTypes = {};

export default ForgetPassword;
