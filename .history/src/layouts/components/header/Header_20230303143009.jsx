import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const flexJustify = "flex justify-spacebetween items-center";
  return (
    <header className="w-full fixed bg-primary-color">
      <div className="flex">
        <div className="">
          <button>left</button>
          <h3>Cụ Đồ Tiễm Store</h3>
        </div>
        <div className="">
          <figure className="w-12 h-12 rounded-full overflow-hidden">
            <img src="https://source.unsplash.com/random" alt="" />
          </figure>
          <span>
            Hi, <strong>KieensThucws</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
