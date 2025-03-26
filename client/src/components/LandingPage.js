import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>AI Viva-Voce Simulator</h1>
      <p>AI-driven assessment of content, confidence, and clarity.</p>
      <Link to="/input">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage; 