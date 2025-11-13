import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';

const MoktarAIConsole = () => {
  const { messages } = useContext(MoktarAIContext);

  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: '4rem',
      width: '300px',
      height: 'calc(100vh - 6rem)',
      background: '#111',
      color: '#b2f5ea',
      padding: '1rem',
      overflowY: 'auto',
      fontFamily: 'monospace',
      borderLeft: '1px solid #00ffe0',
      zIndex: 999
    }}>
      <h4>🖥️ MoktarAI Console</h4>
      {messages.length === 0 ? (
        <p>Wali lama helin wax falcelin ah...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {messages.map((msg, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#00ffe0' }}>#</span> {msg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoktarAIConsole;