import React, { useContext, useState } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';
import LanguageToggle from './languageToggle';

const MoktarAIOverlayV2 = () => {
  const { messages, addMessage } = useContext(MoktarAIContext);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      addMessage(input);
      setInput('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#0f0f0f',
      borderTop: '1px solid #00ffe0',
      padding: '1rem',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ku qor fariintaada MoktarAI..."
        style={{
          flex: 1,
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          border: '1px solid #00ffe0',
          background: '#1e1e1e',
          color: '#b2f5ea'
        }}
      />
      <button onClick={handleSend} style={{
        background: '#00ffe0',
        color: '#0f0f0f',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Dir
      </button>
      <LanguageToggle />
    </div>
  );
};

export default MoktarAIOverlayV2;