// import React, { useState } from 'react';
// import axios from 'axios';
// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     console.log('Signup Data:', formData);
    

//   };


//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name: </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Contact: </label>
//           <input
//             type="text"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password: </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit"  >Signup</button>
//       </form>
//     </div>
//   );
// };
//2
// export default SignupPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     userName: "",
//     userEmail: "",
//     userContact: "",
//     userPassword: "",
//     confirmuserPassword: "",
//   });

//   const [loading, setLoading] = useState(false); // Loader state
//   const [fetchData, setFetchData] = useState(false); // State to trigger data fetch

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     console.log("Form Data Updated:", {
//       ...formData,
//       [e.target.name]: e.target.value,
//     }); // Debug log
//   };

//   // Validate form fields
//   const validateForm = () => {
//     const {
//       userName,
//       userEmail,
//       userContact,
//       userPassword,
//       confirmuserPassword,
//     } = formData;

//     if (
//       !userName ||
//       !userEmail ||
//       !userContact ||
//       !userPassword ||
//       !confirmuserPassword
//     ) {
//       alert("All fields are required");
//       return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(userEmail)) {
//       alert("Please enter a valid email address");
//       return false;
//     }

//     const contactRegex = /^[0-9]{10}$/;
//     if (!contactRegex.test(userContact)) {
//       alert("Contact number must be a valid 10-digit number");
//       return false;
//     }

//     if (userPassword !== confirmuserPassword) {
//       alert("Passwords do not match");
//       return false;
//     }

//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true); // Show loader
//     try {
//       console.log("Submitting Form Data:", formData); // Debug log before submission
//       const response = await axios.post(
//         "http://192.168.140.109:8090/user",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       alert("Signup successful!");
//       console.log("Server Response:", response.data);
//       setFetchData(true); // Trigger fetching data after successful submission
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message || "Signup failed. Please try again.";
//       console.error("Error during signup:", error);
//       alert(errorMessage);
//     } finally {
//       setLoading(false); // Hide loader
//     }
//   };


//   return (
//     <div
//       className="signup-container"
//       style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
//     >
//       <h2>User Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name: </label>
//           <input
//             type="text"
//             name="userName"
//             value={formData.userName}
//             onChange={handleChange}
//             placeholder="Enter Your Name"
//             required
//           />
//         </div>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="userEmail"
//             value={formData.userEmail}
//             onChange={handleChange}
//             placeholder="Enter Your Email"
//             required
//           />
//         </div>
//         <div>
//           <label>Contact: </label>
//           <input
//             type="text"
//             name="userContact"
//             value={formData.userContact}
//             onChange={handleChange}
//             placeholder="Enter Your Contact Number"
//             required
//           />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             name="userPassword"
//             value={formData.userPassword}
//             onChange={handleChange}
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password: </label>
//           <input
//             type="password"
//             name="confirmuserPassword"
//             value={formData.confirmuserPassword}
//             onChange={handleChange}
//             placeholder="Re-Enter Your Password"
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Wait" : "Signup"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;
import React, { useEffect, useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userContact: "",
    userPassword: "",
    confirmuserPassword: "",
  });

  const [loading, setLoading] = useState(false); // Loader state
  const [fetchData, setFetchData] = useState(false); // State to trigger data fetch
  const [fetchedUserData, setFetchedUserData] = useState(null); // Store fetched data

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Form Data Updated:", {
      ...formData,
      [e.target.name]: e.target.value,
    }); // Debug log
  };

  // Validate form fields
  const validateForm = () => {
    const {
      userName,
      userEmail,
      userContact,
      userPassword,
      confirmuserPassword,
    } = formData;

    if (
      !userName ||
      !userEmail ||
      !userContact ||
      !userPassword ||
      !confirmuserPassword
    ) {
      alert("All fields are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert("Please enter a valid email address");
      return false;
    }

    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(userContact)) {
      alert("Contact number must be a valid 10-digit number");
      return false;
    }

    if (userPassword !== confirmuserPassword) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true); // Show loader
    try {
      console.log("Submitting Form Data:", formData); // Debug log before submission
      const response = await axios.post(
        "http://192.168.188.251:8080/user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Signup successful!");
      console.log("Server Response:", response.data);
      setFetchData(true); // Trigger fetching data after successful submission
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Signup failed. Please try again.";
      console.error("Error during signup:", error);
      alert(errorMessage);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  //Fetch data after successful signup
  useEffect(() => {
    if (fetchData) {
      console.log("Fetching user data...");
      fetch("http://192.168.188.251:8080/user/findAllUser")
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched Data:", data);
          setFetchedUserData(data);
        })
        .catch((err) => console.error("Error fetching data:", err))
        .finally(() => setFetchData(false)); // Reset fetchData state
    }
  }, [fetchData]);

  return (
    <div
      className="signup-container"
      style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
    >
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </div>
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
          <label>Contact: </label>
          <input
            type="text"
            name="userContact"
            value={formData.userContact}
            onChange={handleChange}
            placeholder="Enter Your Contact Number"
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
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmuserPassword"
            value={formData.confirmuserPassword}
            onChange={handleChange}
            placeholder="Re-Enter Your Password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Wait" : "Signup"}
        </button>
      </form>
      {/* {fetchedUserData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Fetched User Data:</h3>
          <pre>{JSON.stringify(fetchedUserData, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

export default SignupPage;
