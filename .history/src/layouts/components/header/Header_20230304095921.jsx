import React from "react";
import PropTypes from "prop-types";

import { Input } from "@components";

const Header = (props) => {
  return (
    <header className={`w-full fixed bg-primary-color shadow-xl`}>
      <form>
        <Input />
      </form>
    </header>
  );
};

Header.propTypes = {};

export default Header;
