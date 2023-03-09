import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Label,
  Input,
  FormGroup,
  Button,
  IconEyeToggle,
  ButtonGoogle,
} from "@components";

import { useToggleVale } from "@hooks";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* A validation schema for the form. */
const schema = yup.object().shape({
  email: yup.string().email("").required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});

const ForgotPassowrdPage = (props) => {
  /* Destructuring the useForm hook. */
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  /* Const onSubmit = (data) =&gt; console.log(data) */
  const onSubmit = (data) => console.log(data);

  /* handle toggle password */
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleVale();

  return (
    <>
      <p className="text-center lg:text-sm text-xs font-normal text-text-3 lg:mb-8">
        Enter the email address associated with your account and we'll send you
        a link to reset your password
      </p>
      <form action="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            name="email"
            control={control}
            placeholder="johnnyKlame12@gmail.com"
            error={errors?.email?.message}
          ></Input>
        </FormGroup>
        <p className="text-center lg:text-sm text-xs font-normal text-text-3 lg:mb-8">
          Dont have an acccount?{" "}
          <Link
            className="text-primary font-medium underline"
            to="/auth/sign-up"
          >
            Sign up
          </Link>
        </p>
        <Button className="w-full bg-primary" type="submit">
          Continute
        </Button>
      </form>
    </>
  );
};

ForgotPassowrdPage.propTypes = {};

export default ForgotPassowrdPage;
