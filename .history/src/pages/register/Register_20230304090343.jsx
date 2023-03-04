import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Input } from "@components";
import { Link } from "react-router-dom";

import { TbLock } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
const Register = (props) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="rounded-xl bg-white px-5 py-8 w-[25rem] -translate-y-1/4 text-lg">
        <header className="text-center mb-3">
          <h1 className="text-[2rem] font-bold">Register</h1>
          <h3 className="text-xl font-semibold">Let's join with us</h3>
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
        <div className="relative">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            control={control}
          />
          <RiMailSendLine
            style={{
              position: "absolute",
              top: "16px",
              left: "10px",
              width: "24px",
              height: "24px",
            }}
          />
        </div>
        <p className="text-light-gray text-center text-base font-medium">
          By signing up, you confirm that you're read and accepted our{" "}
          <Link className="text-primary-color">User notice</Link> and{" "}
          <Link className="text-primary-color">Privacy Policy</Link>
        </p>
        <button className="p-2 w-full rounded-lg bg-btn-primary-hover text-white font-semibold uppercase my-3">
          Sign up
        </button>
        <h4 className="flex gap-x-1 text-gray">
          Already have an account?
          <Link to="/login" className="text-primary-color underline">
            Sign in
          </Link>
        </h4>
      </div>
    </form>
  );
};

Register.propTypes = {};

export default Register;
