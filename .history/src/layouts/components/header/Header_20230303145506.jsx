import React from "react";
import PropTypes from "prop-types";

import { BsArrowLeftShort } from "react-icons/bs";

const Header = (props) => {
  const fcb = "flex justify-between items-center";
  return (
    <header className={`w-full fixed bg-primary-color`}>
      <div className={`${fcb} px-4 min-h-[64px]`}>
        <div className={`${fcb}`}>
          <button className="mx-5">
            <BsArrowLeftShort size={40} color="white" />
          </button>
          <h3 className="font-bold text-white text-xl">Cụ Đồ Tiễm Store</h3>
        </div>
        <div className={`${fcb} gap-x-4`}>
          <figure className="w-12 h-12 rounded-full overflow-hidden">
            <img src="https://source.unsplash.com/random" alt="" />
          </figure>
          <span>
            Hi, <strong className="underline">KieensThucws</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
