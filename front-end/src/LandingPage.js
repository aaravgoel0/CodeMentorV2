// filepath: /Users/sachin/Downloads/CodeMentorV2-main/front-end/src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Welcome to CodeMentor</h1>
        <button onClick={() => navigate('/app')}>Use CodeMentor</button>
      </header>
    </div>
  );
};

export default LandingPage;