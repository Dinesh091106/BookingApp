import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import AdminSignupPage from "./Components/AdminSignupPage";
import AdminLoginPage from "./Components/AdminLoginPage";
import SignupPage from "./Components/SignUpPage";
import AdminHome from "./Components/AdminHome";
import './index.css'
import './Signup.css'
const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/login">User Login</Link> | 
        <Link to="/signup">User Signup</Link> | 
        <Link to="/admin/login">Admin Login</Link> | 
        <Link to="/admin/signup">Admin Signup</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/signup" element={<AdminSignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
