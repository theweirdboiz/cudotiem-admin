import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Dashboard = (props) => {
  return (
    <section className="container">
      <h3 className="text-2xl font-semibold mb-3">Dashboard</h3>
      {/* <div className="grid grid-cols-3 gap-x-3 my-5">
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
      <div className="bg-white rounded-lg p-4 my-5">
        <h3 className="font-semibold mb-5 text-xl">Lastest orders</h3>
  
        <div className="grid grid-cols-7 border-b border-light-gray-border py-3 text-gray font-medium">
          <span>2232</span>
          <span>
            <strong>Leovans aSvas</strong>
          </span>
          <span>123@gmail.com</span>
          <span>123 VND</span>
          <Status statusId={1} text="delivered" />
          <span>13:27:22 10/03/2002</span>
          <span>...</span>
        </div>
      </div> */}
    </section>
  );
};

// const Status = ({ text, statusId }) => {
//   const color = `text-${text}`;
//   return (
//     <div className={`rounded-2xl p-1 ${color} bg-current`}>
//       <span>{text}</span>
//     </div>
//   );
// };
Dashboard.propTypes = {};

export default Dashboard;
