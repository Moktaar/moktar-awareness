import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';

const MoktarAIResponseBox = () => {
  const { messages } = useContext(MoktarAIContext);

  return (
    <div style={{
      position: 'fixed',
      bottom: '4.5rem',
      left: 0,
      width: '100%',
      maxHeight: '30vh',
      overflowY: 'auto',
      background: '#1a1a1a',
      color: '#b2f5ea',
      padding: '1rem',
      fontFamily: 'monospace',
      borderTop: '1px solid #00ffe0',
      borderBottom: '1px solid #00ffe0',
      zIndex: 999
    }}>
      <h4>🧠 Jawaabaha MoktarAI:</h4>
      {messages.length === 0 ? (
        <p>Assistant-ku wali lama hadlin...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {messages.slice(-5).map((msg, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: '#00ffe0' }}>➤</span> {msg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoktarAIResponseBox;