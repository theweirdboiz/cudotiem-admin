import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header className="w-full fixed bg-primary-color">
      <div className="flex">
        <div className="">
          <button>left</button>
          <h3>Cụ Đồ Tiễm Store</h3>
        </div>
        <div className=""></div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
