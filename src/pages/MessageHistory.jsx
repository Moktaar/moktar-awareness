import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';

const MessageHistory = () => {
  const { messages } = useContext(MoktarAIContext);

  return (
    <div style={{
      padding: '2rem',
      background: '#0f0f0f',
      color: '#b2f5ea',
      fontFamily: 'monospace',
      minHeight: '100vh'
    }}>
      <h1>🗂️ Taariikhda Fariimaha MoktarAI</h1>
      {messages.length === 0 ? (
        <p>Fariimo lama hayo. La hadal MoktarAI si aad u bilowdo!</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <strong>#{index + 1}</strong>: {msg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageHistory;