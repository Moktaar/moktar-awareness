import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';
import { getLanguageLabel } from '../engine/languageEngine';

const MythicLanguageLabel = () => {
  const { language } = useContext(MoktarAIContext);

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      left: '1rem',
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '0.5rem 1rem',
      border: '1px solid #00ffe0',
      borderRadius: '4px',
      fontFamily: 'monospace',
      zIndex: 1001
    }}>
      🌐 Luqadda: {getLanguageLabel(language)}
    </div>
  );
};

export default MythicLanguageLabel;