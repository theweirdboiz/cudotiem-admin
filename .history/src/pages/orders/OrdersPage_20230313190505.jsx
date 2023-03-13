import React from "react";
import PropTypes from "prop-types";

const OrdersPage = (props) => {
  return (
    <section>
      <h3>Orders</h3>
      <table class="table-auto">
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
    </section>
  );
};

OrdersPage.propTypes = {};

export default OrdersPage;
