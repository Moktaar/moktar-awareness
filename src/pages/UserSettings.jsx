import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';
import { getLanguageLabel, getNextLanguage } from '../engine/languageEngine';

const UserSettings = () => {
  const { language, setLanguage, clearMessages } = useContext(MoktarAIContext);

  const handleLanguageChange = () => {
    const next = getNextLanguage(language);
    setLanguage(next);
  };

  const handleClear = () => {
    clearMessages();
  };

  return (
    <div style={{
      padding: '2rem',
      background: '#0f0f0f',
      color: '#b2f5ea',
      fontFamily: 'sans-serif',
      minHeight: '100vh'
    }}>
      <h1>⚙️ Dejinta Isticmaalaha</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🌐 Luqadda Default</h2>
        <p>Luqadda hadda: <strong>{getLanguageLabel(language)}</strong></p>
        <button onClick={handleLanguageChange} style={buttonStyle}>
          Bedel Luqadda
        </button>
      </section>

      <section>
        <h2>🧹 Nadiifi Fariimaha</h2>
        <p>Fariimaha assistant-ka oo dhan waad tirtiri kartaa.</p>
        <button onClick={handleClear} style={buttonStyle}>
          Tirtir Dhammaan Fariimaha
        </button>
      </section>
    </div>
  );
};

const buttonStyle = {
  background: '#00ffe0',
  color: '#0f0f0f',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '1rem'
};

export default UserSettings;