import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const FormHook = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <header>
        <h1>Login</h1>
        <h3>Welcom back, guy</h3>
      </header>
      <>
        <Input />
        <Input />
        <h4>
          <Link to="/sign-up"></Link>
        </h4>
      </>
    </form>
  );
};

FormHook.propTypes = {};

export default FormHook;
