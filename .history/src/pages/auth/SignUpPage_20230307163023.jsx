import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconGoogle from "@assets/icon-google.svg";
import { useForm } from "react-hook-form";

import {
  Label,
  Input,
  FormGroup,
  Button,
  Checkbox,
  IconEyeToggle,
  ButtonGoogle,
} from "@components";

import { useToggleVale } from "@hooks";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* A validation schema for the form. */
const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
  email: yup
    .string()
    .required("This field is required")
    .email("Invalid email address"),
});

const SignUpPage = (props) => {
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
        Already have an acccount?{" "}
        <Link className="text-primary font-medium underline" to="/auth/sign-in">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google" />
      <p className="text-center text-xs lg:text-sm font-normal mb-5 lg:mb-8 dark:text-white">
        Or sign up with email
      </p>
      <form action="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormGroup>
          <Label htmlFor="name">Fullname *</Label>
          <Input
            name="name"
            control={control}
            placeholder={"Jonny Klame"}
            error={errors?.name?.message}
          ></Input>
        </FormGroup>
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
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox isChecked name="term">
            <p className="flex-1 text-xs lg:text-sm font-normal text-text-2 dark:text-text-3">
              I agree to the{" "}
              <span className="text-secondary">Tearms of Use</span> and have
              read and understand the{" "}
              <span className="text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button className="w-full bg-primary" type="submit">
          Create my account
        </Button>
      </form>
    </>
  );
};

SignUpPage.propTypes = {};

export default SignUpPage;
