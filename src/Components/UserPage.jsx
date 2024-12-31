import React from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>User Page</h2>
      <button onClick={() => navigate("/login")} style={{ margin: "10px" }}>
        User Login
      </button>
      <button onClick={() => navigate("/signup")} style={{ margin: "10px" }}>
        User Signup
      </button>
    </div>
  );
};

export default UserPage;