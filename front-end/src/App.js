// filepath: /Users/sachin/Downloads/CodeMentorV2-main/front-end/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainApp from './MainApp'; // Rename your current App component to MainApp

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<MainApp />} />
      </Routes>
    </Router>
  );
};

export default App;