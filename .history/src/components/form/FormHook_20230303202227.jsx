import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const FormHook = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return <form></form>;
};

FormHook.propTypes = {};

export default FormHook;
