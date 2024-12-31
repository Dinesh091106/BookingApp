// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import LoginPage from "./Components/LoginPage";
// import AdminSignupPage from "./Components/AdminSignupPage";
// import AdminLoginPage from "./Components/AdminLoginPage";
// import SignupPage from "./Components/SignUpPage";
// import AdminHome from "./Components/AdminHome";
// import './index.css'
// import './Signup.css'
// const App = () => {
//   return (
//     <div className="App">
//       <nav>
//         <Link to="/login">User Login</Link> | 
//         <Link to="/signup">User Signup</Link> | 
//         <Link to="/admin/login">Admin Login</Link> | 
//         <Link to="/admin/signup">Admin Signup</Link>
//       </nav>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />

//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/signup" element={<AdminSignupPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

import AdminLoginPage from "./Components/AdminLoginPage";
import AdminSignupPage from "./Components/AdminSignupPage";
import './index.css';
import "../src/css/App.css";
import AddTheaters from "./Components/AddTheaters";
import BookingPage from "./Components/BookingPage";
import AdminHome from "./Components/AdminHome";
import AddMovie from "./Components/AddMovie";
import MovieShow from "./Components/MovieShow";
import TheaterHome from "./Components/TheaterHome";
import Screen from "./Components/Screen";
import UserPage from "./Components/UserPage";
import AdminPage from "./Components/AdminPage";
import SignupPage from "./Components/SignUpPage";

const App = () => {
  const location = useLocation();
  
  const hideNavRoutes = ["/login", "/signup", "/admin/login", "/admin/signup", "/booking","/add-theaters","/adminhome","/add-movie","/theater-home","/movie-show","/screen","/user-home","/admin-home"];

  const shouldHideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideNav && (
        <div id="land">
          <h2>Ticket Booking App</h2>
          <nav>
            <div className="links">
              <Link className="lin" to="/admin-home">
                Admin
            </Link>
            </div>
            <div className="links">
            <Link className="lin" to="/user-home">
                User 
            </Link>
            </div>
          </nav>
        </div>
      )}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/signup" element={<AdminSignupPage />} />
        <Route path="/add-theaters" element={<AddTheaters />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/screen" element={<Screen/>}/>
        <Route path="/movie-show" element={<MovieShow/>}/>
        <Route path="/theater-home" element={<TheaterHome/>}/>
        <Route path="/user-home" element={<UserPage/>}/>
        <Route path="/admin-home" element={<AdminPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
