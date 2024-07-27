

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Book Club Manager</h1>
      <p>Your go-to platform for managing and discussing your favorite books.</p>
      <div className="button-container">
        <Link to="/home" className="button">Get Started</Link>
      </div>
    </div>
  );
}

export default LandingPage;





