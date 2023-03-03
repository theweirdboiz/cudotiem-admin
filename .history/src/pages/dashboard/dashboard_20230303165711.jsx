import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchUsers } from "@services/usersService";

const Dashboard = (props) => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    setUser(async () => await fetchUsers());
  }, []);

  return (
    <section>
      <h3>Tổng user: {users.length}</h3>
      <div className="">
        {users?.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </section>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
