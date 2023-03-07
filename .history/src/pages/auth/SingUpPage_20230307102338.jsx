import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import iconGoogle from "@assets/icon-google.svg";
import { useForm } from "react-hook-form";

import { Label, Input, FormGroup } from "@components";

const SideUpPage = (props) => {
  // form hook
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h3 className="font-semibold text-3xl text-center mb-5">Sign Up</h3>
      <p className="text-center lg:text-sm text-xs font-normal text-text-3 lg:mb-8">
        Already have an acccount?{" "}
        <Link className="text-primary font-medium underline" to="/auth/sign-in">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center py-3 gap-x-3 w-full border border-strock rounded-xl text-text-2 text-base font-semibold mb-5">
        <img src={iconGoogle} alt="" />
        <span>Sign up with google</span>
      </button>
      <p className="text-center text-xs lg:text-sm font-normal mb-5 lg:mb-8">
        Or sign up with email
      </p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Fullname *</Label>
          <Input
            type="text"
            name="fullname"
            control={control}
            placeholder="Your name"
          ></Input>
        </FormGroup>
      </form>
    </>
  );
};

SideUpPage.propTypes = {};

export default SideUpPage;
