import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "./UserProvider";

const Login = () => {
  const context = useContext(UserContext);
  return (
    <>
      {!context.loggedIn ? (
        <>
          <h1 className="text-center">Login</h1>
          <button
            className="btn btn-success btn-block mt-2"
            onClick={() => context.login()}
          >
            Login
          </button>
        </>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </>
  );
};

export default Login;
