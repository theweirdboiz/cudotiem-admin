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
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
  "confirm-password": yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});

const ResetPasswordPage = (props) => {
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
  const {
    value: showConfirmPassword,
    handleToggleValue: handleToggleConfirmPassword,
  } = useToggleVale();

  return (
    <>
      <p className="text-center lg:text-sm text-xs font-normal text-text-3 lg:mb-8">
        Your new password must be different from previous used passwords.
      </p>
      <form action="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            control={control}
            placeholder="Create a password"
            error={errors?.password?.message}
          >
            <span className="dark:text-text-2">
              <IconEyeToggle
                toggle={showPassword}
                onClick={handleTogglePassword}
              ></IconEyeToggle>
            </span>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirm-password">Password *</Label>
          <Input
            type={`${showConfirmPassword ? "text" : "password"}`}
            name="confirm-password"
            control={control}
            placeholder="Confirm password"
            error={errors?.["confirm-password"]?.message}
          >
            <span className="dark:text-text-2">
              <IconEyeToggle
                toggle={showConfirmPassword}
                onClick={handleToggleConfirmPassword}
              ></IconEyeToggle>
            </span>
          </Input>
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
          Confirm
        </Button>
      </form>
    </>
  );
};

ResetPasswordPage.propTypes = {};

export default ResetPasswordPage;
