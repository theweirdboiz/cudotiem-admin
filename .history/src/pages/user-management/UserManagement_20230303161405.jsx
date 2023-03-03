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
      <div className="">
        <h3>Users</h3>
        <div className="flex">
          <button>new</button>
          <button>export csv</button>
          <button>export pdf</button>
        </div>
      </div>
      <div className="border rounded-md">
        <div className="flex items-center justify-between p-2 border-b">
          <Checkbox />
          <span>First name</span>
          <span>Last name</span>
          <span>Phone number</span>
          <span>Email</span>
          <span>Role</span>
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
    <div className="flex items-center justify-between p-2 border-b last:border-b-0 hover:bg-gray hover:bg-opacity-25">
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
