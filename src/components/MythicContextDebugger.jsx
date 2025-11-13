import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';

const MythicContextDebugger = () => {
  const { messages, language, memoryEnabled } = useContext(MoktarAIContext);

  return (
    <div style={{
      position: 'fixed',
      top: '6rem',
      right: '1rem',
      background: '#0f0f0f',
      color: '#ffdd57',
      padding: '1rem',
      border: '1px solid #ffdd57',
      borderRadius: '6px',
      fontFamily: 'monospace',
      fontSize: '0.85rem',
      zIndex: 1001
    }}>
      <h4>🧪 Mythic Context Debugger</h4>
      <p><strong>Fariimo:</strong> {messages.length}</p>
      <p><strong>Luqad:</strong> {language}</p>
      <p><strong>Memory:</strong> {memoryEnabled ? 'Active ✅' : 'Inactive ❌'}</p>
      <p><strong>Status:</strong> MoktarAI wuu firfircoon yahay</p>
    </div>
  );
};

export default MythicContextDebugger;