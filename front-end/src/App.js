import React, { useState } from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';
import FeedbackPanel from './components/FeedbackPanel';

function App() {
  const [feedback, setFeedback] = useState(null); // eslint-disable-line no-unused-vars

  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Mentor</h1>
      </header>
      <main>
        <CodeEditor />
        <FeedbackPanel />
      </main>
    </div>
  );
}

export default App;
