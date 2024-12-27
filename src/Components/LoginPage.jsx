// // import React, { useState } from 'react';

// // const LoginPage = () => {
// //   const [formData, setFormData] = useState({ email: '', password: '' });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Login Data:', formData);

// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email: </label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password: </label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginPage;
// import React, { useState } from "react";
// import axios from "axios";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({ email: "", password: "" });
//   const [emailVerified, setEmailVerified] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
//     if (e.target.name === "email") {
//       setEmailVerified(false); // Reset email verification state
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { email: "", password: "" };

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     } else if (!emailVerified) {
//       newErrors.email = "Email not verified. Please check.";
//       isValid = false;
//     }

//     // Validate password
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleEmailVerification = async () => {
//     if (!formData.email) {
//       setErrors({ ...errors, email: "Email is required for verification" });
//       return;
//     }
//     try {
//       const response = await axios.post(
//         "http://192.168.188.251:8080/user",
//         { email: formData.email }
//       );
//       if (response.data.exists) {
//         setEmailVerified(true);
//         alert("Email verified successfully!");
//       } else {
//         setEmailVerified(false);
//         setErrors({ ...errors, email: "Email does not exist. Please register." });
//       }
//     } catch (error) {
//       console.error("Error verifying email:", error);
//       setErrors({
//         ...errors,
//         email: "Unable to verify email. Please try again later.",
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log("Login Data:", formData);
//       // Proceed with API call or login logic here
//     } else {
//       console.log("Validation failed");
//     }
//   };

//   return (
//     <div>
//       <h2>User Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter Your Registered Email"
//           />
//           {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//           <button
//             type="button"
//             onClick={handleEmailVerification}
//             style={{
//               marginTop: "10px",
//               display: "block",
//               backgroundColor: emailVerified ? "green" : "gray",
//               color: "white",
//             }}
//           >
//             {emailVerified ? "Verified" : "Verify Email"}
//           </button>
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter Your Registered Password"
//           />
//           {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
//         </div>

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

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
        
 // Redirect to booking page
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


