import React from "react";
import PropTypes from "prop-types";

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
    </section>
  );
};

UserManagement.propTypes = {};

export default UserManagement;
