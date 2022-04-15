import React from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const getDataFromLogin = useLocation();

  return (
    <>
      <div>Login</div>
      <div>User Status : {getDataFromLogin.state.status}</div>
    </>
  );
};

export default Login;
