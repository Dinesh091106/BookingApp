import React, { useState } from "react";
import axios from "axios";




const LoginPage = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { userEmail, userPassword } = formData;
    if (!userEmail || !userPassword) {
      alert("Email and Password are required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://192.168.188.251:8080/user/userLogin?userEmail=${formData.userEmail}&userPassword=${formData.userPassword}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Login successful!");
        console.log(formData);
        window.open("/booking", "_blank");
        

      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message || "Login failed. Please try again."
        );
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Login"}
        </button>
      </form>
      {error && <div style={{ marginTop: "20px", color: "red" }}>{error}</div>}
    </div>
  );
};

export default LoginPage;


