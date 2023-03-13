import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Dashboard = (props) => {
  return (
    <section className="container">
      <h3 className="text-2xl font-semibold mb-3">Dashboard</h3>
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
