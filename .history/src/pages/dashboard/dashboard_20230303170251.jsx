import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchUsers } from "@services/usersService";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Dashboard = (props) => {
  const [users, setUsers] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response?.data);
  };
  const query = useQuery(["users"], fetchApi);
  console.log(query);

  useEffect(() => {
    fetchApi();
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
