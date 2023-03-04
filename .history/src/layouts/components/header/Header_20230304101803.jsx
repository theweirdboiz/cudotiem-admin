import React from "react";
import PropTypes from "prop-types";

import { Input } from "@components";
import { useForm } from "react-hook-form";
import { IoNotifications, IoSearchOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = (props) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <header
      className={`fixed shadow-xl px-8 flex items-center justify-between left-0 right-0`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-[24rem] relative">
        <Input
          type="text"
          id="Search"
          name="Search"
          placeholder="Search"
          control={control}
          style="border-transparent"
        />
        <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray">
          <IoSearchOutline />
        </button>
      </form>
      <div className="flex items-center gap-x-4">
        <button>
          <BsSun />
        </button>
        <button>
          <IoMdNotificationsOutline />
        </button>
        <div className="flex gap-x-1">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <button>
            <BiChevronDown />
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
