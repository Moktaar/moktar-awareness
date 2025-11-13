import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';
import { getLanguageLabel } from '../engine/languageEngine';

const MoktarAIStatsBox = () => {
  const { messages, language } = useContext(MoktarAIContext);

  return (
    <div style={{
      position: 'fixed',
      top: '4rem',
      right: '1rem',
      background: '#0f0f0f',
      color: '#b2f5ea',
      padding: '1rem',
      border: '1px solid #00ffe0',
      borderRadius: '6px',
      fontFamily: 'monospace',
      zIndex: 1001
    }}>
      <h4>📊 Assistant Stats</h4>
      <p><strong>Fariimo:</strong> {messages.length}</p>
      <p><strong>Luqad:</strong> {getLanguageLabel(language)}</p>
      <p><strong>Xaalad:</strong> Mythic Mode ✅</p>
    </div>
  );
};

export default MoktarAIStatsBox;