import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchUsers } from "@services/usersService";
import axios from "axios";

const Dashboard = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response);
  };

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
