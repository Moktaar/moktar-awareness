import React, { useContext } from 'react';
import { MoktarAIContext } from '../context/MoktarAIContext.jsx';

const MythicResetButton = () => {
  const { clearMessages } = useContext(MoktarAIContext);

  const handleReset = () => {
    if (window.confirm('Ma hubtaa inaad nadiifiso dhammaan fariimaha assistant-ka?')) {
      clearMessages();
    }
  };

  return (
    <button onClick={handleReset} style={{
      position: 'fixed',
      bottom: '6rem',
      right: '1rem',
      background: '#ff0040',
      color: '#fff',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      zIndex: 1001
    }}>
      🔄 Nadiifi Assistant-ka
    </button>
  );
};

export default MythicResetButton;