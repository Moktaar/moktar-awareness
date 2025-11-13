import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';
import { getLanguageLabel } from '../engine/languageEngine';

const MythicExportPanel = () => {
  const { messages, language } = useContext(MoktarAIContext);

  const handleExport = () => {
    alert('📦 Export function mythically activated (placeholder only).');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '8rem',
      right: '1rem',
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '1rem',
      border: '1px dashed #00ffe0',
      borderRadius: '6px',
      fontFamily: 'monospace',
      zIndex: 1001
    }}>
      <h4>📦 Mythic Export Panel</h4>
      <p><strong>Fariimo:</strong> {messages.length}</p>
      <p><strong>Luqad:</strong> {getLanguageLabel(language)}</p>
      <p><strong>Status:</strong> Ready for export ✅</p>
      <button onClick={handleExport} style={{
        marginTop: '0.5rem',
        background: '#00ffe0',
        color: '#0f0f0f',
        border: 'none',
        padding: '0.4rem 0.8rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        ⬇️ Diyaarso Awareness
      </button>
    </div>
  );
};

export default MythicExportPanel;