import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminSignupPage = () => {
  const [formData, setFormData] = useState({
    adminName: "",
    adminEmail: "",
    adminContact: "",
    adminPassword: "",
    confirmAdminPassword: "",
  });

  const [loading, setLoading] = useState(false); 
  const [fetchData, setFetchData] = useState(false); 
  const [fetchedAdminData, setFetchedAdminData] = useState(null); 

  const [validationErrors, setValidationErrors] = useState({
    contactError: "Contact number is required and should start with 6, 7, 8, or 9.",
    passwordError:
      "Password must be between 8 to 20 characters, contain at least one uppercase letter, one number, and one special character.",
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const validateForm = () => {
    const {
      adminName,
      adminEmail,
      adminContact,
      adminPassword,
      confirmAdminPassword,
    } = formData;

    let errors = {
      contactError: "",
      passwordError: "",
    };

    if (!adminName || !adminEmail || !adminContact || !adminPassword || !confirmAdminPassword) {
      errors.contactError = "All fields are required.";
      setValidationErrors(errors);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(adminEmail)) {
      errors.contactError = "Please enter a valid email address.";
    }

    const contactRegex = /^[6-9][0-9]{9}$/; 
    if (!contactRegex.test(adminContact)) {
      errors.contactError = "Contact number must be a valid 10-digit number starting with 6, 7, 8, or 9";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!passwordRegex.test(adminPassword)) {
      errors.passwordError =
        "Password must be between 8 to 20 characters, contain at least one uppercase letter, one number, and one special character.";
    }

    if (adminPassword !== confirmAdminPassword) {
      errors.passwordError = "Passwords do not match.";
    }

    setValidationErrors(errors);

    return !errors.contactError && !errors.passwordError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true); 
    try {
      console.log("Submitting Form Data:", formData); 
      const response = await axios.post(
        "http://192.168.188.251:8080/admin", 
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Admin signup successful!");
      console.log("Server Response:", response.data);
      setFetchData(true); 
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Signup failed. Please try again.";
      console.error("Error during signup:", error);
      alert(errorMessage);
    } finally {
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    if (fetchData) {
      console.log("Fetching admin data...");
      fetch("http://192.168.188.251:8080/admin/findAllAdmin")
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched Data:", data);
          setFetchedAdminData(data);
        })
        .catch((err) => console.error("Error fetching data:", err))
        .finally(() => setFetchData(false)); 
    }
  }, [fetchData]);

  return (
    <div
      className="signup-container"
      style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
    >
      <h2>Admin Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="adminName"
            value={formData.adminName}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="adminEmail"
            value={formData.adminEmail}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label>Contact: </label>
          <input
            type="text"
            name="adminContact"
            value={formData.adminContact}
            onChange={handleChange}
            placeholder="Enter Your Contact Number"
            required
          />
          {validationErrors.contactError && (
            <p style={{ color: "red", fontSize: "12px" }}>{validationErrors.contactError}</p>
          )}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="adminPassword"
            value={formData.adminPassword}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
          {validationErrors.passwordError && (
            <p style={{ color: "red", fontSize: "12px" }}>{validationErrors.passwordError}</p>
          )}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmAdminPassword"
            value={formData.confirmAdminPassword}
            onChange={handleChange}
            placeholder="Re-Enter Your Password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Wait" : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default AdminSignupPage;
