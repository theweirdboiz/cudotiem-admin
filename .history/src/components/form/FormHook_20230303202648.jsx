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

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};

FormHook.propTypes = {};

export default FormHook;
