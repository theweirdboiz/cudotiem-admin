import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@components";

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
      <div className="shadow-md rounded-lg p-2">
        <h3>Users</h3>
        <div className="flex">
          <button>new</button>
          <button>export csv</button>
          <button>export pdf</button>
        </div>
      </div>
      <div className="border rounded-md">
        <div className="flex items-center justify-between p-2">
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
      </div>
    </section>
  );
};
const UserRow = ({ userInf }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <Checkbox />
      <span>{userInf.firstName}</span>
      <span>{userInf.lastName}</span>
      <span>{userInf.phoneNumber}</span>
      <span>{userInf.email}</span>
      <span>{userInf.role}</span>
      <span>
        <img src={userInf.imgLink} alt="" />
      </span>
      <span>Actions</span>
    </div>
  );
};

UserManagement.propTypes = {};

export default UserManagement;
