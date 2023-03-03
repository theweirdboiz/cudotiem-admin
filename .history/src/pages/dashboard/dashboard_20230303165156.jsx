import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { fetchUsers } from "@services/usersService";

const Dashboard = (props) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return <section></section>;
};

Dashboard.propTypes = {};

export default Dashboard;
