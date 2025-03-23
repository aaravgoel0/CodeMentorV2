// filepath: /Users/sachin/Downloads/CodeMentorV2-main/front-end/src/components/CodeEditor.js
import React, { useState } from 'react';
import { loader, Editor } from '@monaco-editor/react';
import FeedbackPanel from './FeedbackPanel';

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.40.0/min/vs',
  },
});

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here...');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [chatMessage, setChatMessage] = useState('');
  const [showChat, setShowChat] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResponse('');
    setShowChat(false);
    try {
      const res = await fetch('http://127.0.0.1:4000/api/analyze_code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code }),
      });

      const data = await res.json();

      if (data.response) {
        setResponse(data.response);
        setChatHistory(data.chat_history || []);
      } else if (data.error) {
        setResponse(`Error: ${data.error}`);
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  const handleChat = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:4000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: chatMessage, chat_history: chatHistory }),
      });

      const data = await res.json();

      if (data.response) {
        setChatHistory(data.chat_history || []);
        setChatMessage('');
      } else if (data.error) {
        setResponse(`Error: ${data.error}`);
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
    setLoading(false);
  };

    return (
      <div className="CodeEditor-container">
        <h2 className="text-lg font-bold mb-4">Code Editor</h2>
        <Editor
          height="500px"
          width="100%"
          defaultLanguage="python"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || '')}
          onMount={(editor, monaco) => {
            console.log('Monaco Editor loaded successfully.');
          }}
          onError={(error) => {
            console.error('Monaco initialization error:', error);
          }}
        />
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? <div className="loader"></div> : 'Submit Code'}
        </button>
  
        <FeedbackPanel feedback={response} />
  
        {response && (
          <button
            onClick={() => setShowChat(true)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Have Questions? Chat with the LLM
          </button>
        )}
  
        {showChat && (
          <div className="Chat-container mt-4">
            <h3 className="text-lg font-bold mb-2">Chat with the LLM</h3>
            <div className="Chat-history mb-2">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`Chat-message ${chat.role}`}>
                  <strong>{chat.role === 'user' ? 'You' : 'LLM'}:</strong> {chat.message}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="border p-2 w-full mb-2"
              placeholder="Ask a question..."
            />
            <button
              onClick={handleChat}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? <div className="loader"></div> : 'Send'}
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default CodeEditor;
