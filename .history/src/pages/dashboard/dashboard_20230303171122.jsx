import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchUsers } from "@services/usersService";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Dashboard = (props) => {
  const [users, setUsers] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/user222s"
    );
    return response?.data;
  };
  const { isError, isLoading, data } = useQuery(["users"], fetchApi, {
    retry: 1,
  });

  if (isLoading) {
    return <h1>loading ....</h1>;
  }
  if (isError) {
    return <h1>error...</h1>;
  }
  // console.log(query);

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  return (
    <section>
      <h3>Tổng user: {data.length}</h3>
      <div className="">
        {data?.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </section>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
