import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';
import { getLanguageLabel, getNextLanguage } from '../engine/languageEngine';

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(MoktarAIContext);

  const handleToggle = () => {
    const next = getNextLanguage(language);
    setLanguage(next);
  };

  return (
    <button onClick={handleToggle} style={{
      background: '#00ffe0',
      color: '#0f0f0f',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '1rem'
    }}>
      Luqadda: {getLanguageLabel(language)}
    </button>
  );
};

export default LanguageToggle;