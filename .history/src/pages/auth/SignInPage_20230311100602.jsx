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
  email: yup
    .string()
    .email("Invalid email format")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});

const SignInPage = (props) => {
  /* Destructuring the useForm hook. */
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  /* Const onSubmit = (data) =&gt; console.log(data) */
  const onSubmit = async (data) => {
    console.log(data);
    setIsLogged(true);
  };

  /* handle toggle password */
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleVale();

  const [isLogged, setIsLogged] = useState(false);

  return isLogged ? (
    "logged"
  ) : (
    <>
      <p className="text-center lg:text-sm text-xs font-normal text-text-3 lg:mb-8">
        Dont have an acccount?{" "}
        <Link className="text-primary font-medium underline" to="/auth/sign-up">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text={"Sign in with google"}></ButtonGoogle>

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
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="inline-block text-sm font-medium text-primary"
            >
              Forgot password
            </Link>
          </div>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          Sign in
        </Button>
      </form>
    </>
  );
};

SignInPage.propTypes = {};

export default SignInPage;
