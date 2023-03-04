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
    return response?.data;
  };
  const { isError, isLoading, data } = useQuery(["users"], fetchApi, {
    retry: 2,
    retryDelay: 1000,
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
    <section className="container">
      <h3 className="text-2xl font-semibold mb-3">Dashboard</h3>
      <div className="grid grid-cols-3 gap-x-3">
        <div className="flex items-center gap-x-3">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="">
            <h5>Total sales</h5>
            <span>129.000 VNĐ</span>
          </div>
        </div>
      </div>
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
