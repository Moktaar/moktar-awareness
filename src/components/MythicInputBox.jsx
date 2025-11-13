import React, { useState, useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';

const MythicInputBox = () => {
  const [input, setInput] = useState('');
  const { addMessage } = useContext(MoktarAIContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addMessage(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      position: 'fixed',
      bottom: '1rem',
      right: '4.5rem',
      width: 'calc(100% - 500px)',
      background: '#0f0f0f',
      border: '1px solid #00ffe0',
      borderRadius: '6px',
      padding: '0.5rem',
      zIndex: 1001,
      display: 'flex',
      alignItems: 'center'
    }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Qor amarkaaga mythic ah..."
        style={{
          flex: 1,
          background: 'transparent',
          border: 'none',
          color: '#b2f5ea',
          fontSize: '1rem',
          fontFamily: 'monospace',
          outline: 'none'
        }}
      />
      <button type="submit" style={{
        background: '#00ffe0',
        color: '#0f0f0f',
        border: 'none',
        padding: '0.4rem 1rem',
        marginLeft: '0.5rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        Dir
      </button>
    </form>
  );
};

export default MythicInputBox;