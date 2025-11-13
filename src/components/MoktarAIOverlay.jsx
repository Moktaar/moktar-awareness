import React from 'react';
import LanguageToggle from './languageToggle';

const MoktarAIOverlay = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      background: '#0f0f0f',
      color: '#b2f5ea',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 0 10px #00ffe0',
      zIndex: 1000,
      maxWidth: '300px'
    }}>
      <h3>MoktarAI Assistant</h3>
      <p>💬 Wuxuu diyaar u yahay inuu kaa caawiyo OPSEC, awareness, iyo mythic guidance.</p>
      <LanguageToggle />
    </div>
  );
};

export default MoktarAIOverlay;