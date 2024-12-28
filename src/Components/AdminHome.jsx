import React from "react";

const AdminHome = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "#4CAF50" }}>Welcome to Ticket Booking!</h1>
      <p style={{ fontSize: "18px", color: "#555" }}>
        Manage user bookings, view analytics, and oversee all admin activities here.
      </p>
      <div style={{ marginTop: "20px" }}>
        <button 
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Manage Bookings clicked")}
        >
          Manage Bookings
        </button>
        <button 
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("View Reports clicked")}
        >
          View Reports
        </button>
        <button 
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Logout clicked")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
