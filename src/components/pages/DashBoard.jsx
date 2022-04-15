import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  let data = {
    status: "successful",
  };
  return (
    <>
      <div>DashBoard</div>
      <button onClick={() => navigate("/logout", { state: data })}>Exit</button>
    </>
  );
};

export default DashBoard;
