// TerminalLoader.jsx
import React from 'react';
import './TerminalLoader.css';

const TerminalLoader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    )
  );
};

export default TerminalLoader;
