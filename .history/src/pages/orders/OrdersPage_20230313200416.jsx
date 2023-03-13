import React from "react";
import PropTypes from "prop-types";
import { Button, Search } from "@components";

const OrdersPage = (props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Orders</h3>
        <Button className="inline-flex">Create new</Button>
      </div>
      <div className="flex items-center"></div>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Malcolm Lockyer</td>
            <td>kiasxz@gmail.com</td>
            <td>$123.391</td>
            <td>Pending</td>
            <td>12.01.2019</td>
            <td>Action</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

OrdersPage.propTypes = {};

export default OrdersPage;
