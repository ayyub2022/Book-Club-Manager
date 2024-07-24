import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import CSS file for styling

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Book Club Manager</h1>
      <p>Your go-to platform for managing and discussing your favorite books.</p>
      <div className="button-container">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>
      </div>
    </div>
  );
}

export default LandingPage;
