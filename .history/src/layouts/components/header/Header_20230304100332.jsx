import React from "react";
import PropTypes from "prop-types";

import { Input } from "@components";
import { useForm } from "react-hook-form";

const Header = (props) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <header className={`w-full fixed shadow-xl`}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[24rem]px-5">
        <Input
          type="text"
          id="Search"
          name="Search"
          placeholder="Search"
          control={control}
        />
      </form>
    </header>
  );
};

Header.propTypes = {};

export default Header;
