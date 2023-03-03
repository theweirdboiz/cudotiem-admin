import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@components";

const UserManagement = (props) => {
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
      <div className="">
        <div className="flex items-center justify-between border rounded-lg p-2">
          <Checkbox />
          <span>First name</span>
          <span>Last name</span>
          <span>Phone number</span>
          <span>Email</span>
          <span>Role</span>
          <span>Avatar</span>
          <span>Actions</span>
        </div>
        <UserRow></UserRow>
      </div>
    </section>
  );
};
const UserRow = () => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-2">
      <Checkbox />
      <span>First name</span>
      <span>Last name</span>
      <span>Phone number</span>
      <span>Email</span>
      <span>Role</span>
      <span>Avatar</span>
      <span>Actions</span>
    </div>
  );
};

UserManagement.propTypes = {};

export default UserManagement;
