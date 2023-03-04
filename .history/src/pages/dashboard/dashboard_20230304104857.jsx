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

  return (
    <section className="container">
      <h3 className="text-2xl font-semibold mb-3">Dashboard</h3>
      <div className="grid grid-cols-3 gap-x-3 my-5">
        <div className="flex items-center gap-x-5 bg-white rounded-lg p-4 shadow-md">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <div className="font-semibold text-[14px]">
            <h5>Total sales</h5>
            <span className="text-[16px] font-bold">129.000 VNĐ</span>
          </div>
        </div>
        <div className="flex items-center gap-x-5 bg-white rounded-lg p-4 shadow-md">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <div className="font-semibold text-[14px]">
            <h5>Total sales</h5>
            <span className="text-[16px] font-bold">129.000 VNĐ</span>
          </div>
        </div>
        <div className="flex items-center gap-x-5 bg-white rounded-lg p-4 shadow-md">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <div className="font-semibold text-[14px]">
            <h5>Total sales</h5>
            <span className="text-[16px] font-bold">129.000 VNĐ</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4">
        <h3 className="font-semibold mb-5 text-xl">Lastest orders</h3>
        {/* map here */}
        <div className="grid grid-cols-7 border-b border-light-gray-border py-3 text-gray font-medium">
          <span>2232</span>
          <span>
            <strong>Leovans aSvas</strong>
          </span>
          <span>123@gmail.com</span>
          <span>123 VND</span>
          <div className="">
            <span>Delivery</span>
          </div>
          <span>13:27:22 10/03/2002</span>
          <span>...</span>
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

const Status = ({ text, statusId }) => {
  let color;
  if (statusId === 0) {
    color = "#DF2E38";
  }
  if (statusId === 1) {
    color = "#38E54D";
  } else {
    color = "#F7C04A";
  }
  return (
    <div className={`rounded-2xl p-1 text-[${color}] bg-current`}>
      <span>text</span>
    </div>
  );
};
Dashboard.propTypes = {};

export default Dashboard;
