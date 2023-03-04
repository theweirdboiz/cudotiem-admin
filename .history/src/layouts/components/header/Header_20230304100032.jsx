import React from "react";
import PropTypes from "prop-types";

import { Input } from "@components";
import { useForm } from "react-hook-form";

const Header = (props) => {
  const { control } = useForm();
  return (
    <header className={`w-full fixed bg-primary-color shadow-xl`}>
      <form>
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
