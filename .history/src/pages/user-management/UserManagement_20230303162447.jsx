import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@components";
import { SlOptionsVertical } from "react-icons/sl";
const UserManagement = (props) => {
  const userInf = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    role: "",
    imgLink: "",
  };

  return (
    <section>
      <div className="mt-10">
        <h3 className="h-[40px] font-bold text-xl mb-10">Users</h3>
        <div className="flex mb-5 gap-x-5 text-[14px]">
          <button className="bg-btn-primary px-4 py-2 rounded-md font-semibold text-white uppercase">
            new
          </button>
          <button className="bg-btn-primary px-4 py-2 rounded-md font-semibold text-white uppercase">
            export csv
          </button>
          <button className="bg-btn-primary px-4 py-2 rounded-md font-semibold text-white uppercase">
            export pdf
          </button>
        </div>
      </div>
      <div className="border rounded-md">
        <div className="flex items-center justify-between p-4 border-b font-semibold">
          <Checkbox />
          <span className="cursor-pointer">First name</span>
          <span className="cursor-pointer">Last name</span>
          <span className="cursor-pointer">Phone number</span>
          <span className="cursor-pointer">Email</span>
          <span className="cursor-pointer">Role</span>
          <span>Avatar</span>
          <span>Actions</span>
        </div>
        <UserRow userInf={userInf}></UserRow>
        <UserRow userInf={userInf}></UserRow>
        <UserRow userInf={userInf}></UserRow>
      </div>
    </section>
  );
};
const UserRow = ({ userInf }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray hover:bg-opacity-25">
      <Checkbox />
      <span>{userInf.firstName}</span>
      <span>{userInf.lastName}</span>
      <span>{userInf.phoneNumber}</span>
      <span>{userInf.email}</span>
      <span>{userInf.role}</span>
      <span>
        <img src={userInf.imgLink} alt="" />
      </span>
      <span>
        <SlOptionsVertical />
      </span>
    </div>
  );
};

UserManagement.propTypes = {};

export default UserManagement;
