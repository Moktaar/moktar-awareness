import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';

const MythicMemoryToggle = () => {
  const { memoryEnabled, setMemoryEnabled } = useContext(MoktarAIContext);

  const toggleMemory = () => {
    setMemoryEnabled(!memoryEnabled);
    alert(`🧠 Memory ${!memoryEnabled ? 'activated ✅' : 'disabled ❌'}`);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '22rem',
      right: '1rem',
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '0.75rem 1rem',
      border: '1px solid #00ffe0',
      borderRadius: '6px',
      fontFamily: 'monospace',
      fontSize: '0.85rem',
      zIndex: 1001
    }}>
      <h4>🧠 Memory Toggle</h4>
      <p><strong>Status:</strong> {memoryEnabled ? 'Active ✅' : 'Inactive ❌'}</p>
      <button onClick={toggleMemory} style={{
        marginTop: '0.5rem',
        background: '#00ffe0',
        color: '#0f0f0f',
        border: 'none',
        padding: '0.4rem 0.8rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        {memoryEnabled ? 'Disable' : 'Activate'}
      </button>
    </div>
  );
};

export default MythicMemoryToggle;