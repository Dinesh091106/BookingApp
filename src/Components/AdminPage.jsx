import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Admin Page</h2>
      <button onClick={() => navigate("/admin/login")} style={{ margin: "10px" }}>
        Admin Login
      </button>
      <button onClick={() => navigate("/admin/signup")} style={{ margin: "10px" }}>
        Admin Signup
      </button>
    </div>
  );
};

export default AdminPage;