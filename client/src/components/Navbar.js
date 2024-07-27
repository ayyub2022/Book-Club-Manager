import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for styling

function Navbar() {
  const isAuthenticated = Boolean(localStorage.getItem("jwt_token")); // Replace with actual auth check
  const  navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    navigate("/home")
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={`${process.env.PUBLIC_URL}/images/book_club.jpg`}
          alt="Book Club Icon"
          className="navbar-icon"
        />
        <span className="navbar-title">Book Club Manager</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/reading-planner">Reading Planner</Link>
            </li>
            <li>
              <Link className="logout" to={"/home"} onClick={handleLogout}>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
