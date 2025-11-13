import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';
import MythicTimestamp from './MythicTimestamp.jsx';

const MoktarAIHistoryPanel = () => {
  const { messages } = useContext(MoktarAIContext);

  return (
    <div style={{
      position: 'fixed',
      top: '4rem',
      left: '200px',
      width: 'calc(100% - 500px)',
      height: '25vh',
      overflowY: 'auto',
      background: '#0f0f0f',
      color: '#b2f5ea',
      padding: '1rem',
      fontFamily: 'monospace',
      borderBottom: '1px dashed #00ffe0',
      zIndex: 998
    }}>
      <strong>📚 Taariikhda Assistant-ka</strong>
      {messages.length === 0 ? (
        <p>Wali lama helin wax taariikh ah...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
          {messages.map((msg, i) => (
            <li key={i} style={{ marginBottom: '0.25rem' }}>
              <MythicTimestamp time={Date.now()} />
              {msg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoktarAIHistoryPanel;