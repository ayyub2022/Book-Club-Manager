import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={`${process.env.PUBLIC_URL}/images/book_club.jpg`} alt="Book Club Icon" className="navbar-icon" />
        <span className="navbar-title">Book Club Manager</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
        <li><Link to="/reading-planner">Reading Planner</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/books/1">Book Details</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

