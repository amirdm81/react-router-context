import React, { useContext } from "react";
import { UserContext } from "./UserProvider";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const context = useContext(UserContext);
  return (
    <>{context.loggedIn ? <h1>Dashboard</h1> : <Redirect to="/login" />}</>
  );
};

export default Dashboard;
