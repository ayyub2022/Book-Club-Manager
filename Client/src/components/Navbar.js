import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to Home */}
        <li><Link to="/register">Register</Link></li> {/* Link to Register */}
        <li><Link to="/login">Login</Link></li> {/* Link to Login */}
        <li><Link to="/dashboard">Dashboard</Link></li> {/* Link to Dashboard */}
        <li><Link to="/books/1">Book Details</Link></li> {/* Link to Book Details - example with bookId 1 */}
        <li><Link to="/profile">User Profile</Link></li> {/* Link to User Profile */}
      </ul>
    </nav>
  );
}

export default Navbar;

