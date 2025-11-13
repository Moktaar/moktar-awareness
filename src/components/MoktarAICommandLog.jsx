import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';

const MoktarAICommandLog = () => {
  const { messages } = useContext(MoktarAIContext);

  return (
    <div style={{
      position: 'fixed',
      bottom: '4.5rem',
      left: '200px',
      width: 'calc(100% - 500px)',
      maxHeight: '20vh',
      overflowY: 'auto',
      background: '#0a0a0a',
      color: '#00ffe0',
      padding: '0.5rem 1rem',
      fontFamily: 'monospace',
      borderTop: '1px dashed #00ffe0',
      zIndex: 998
    }}>
      <strong>📜 Command Log</strong>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
        {messages.slice(-10).map((msg, i) => (
          <li key={i} style={{ marginBottom: '0.25rem' }}>
            <span style={{ color: '#888' }}>{i + 1}.</span> {msg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoktarAICommandLog;