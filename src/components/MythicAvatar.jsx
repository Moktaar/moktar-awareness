import React from 'react';

const MythicAvatar = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: '#00ffe0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#0f0f0f',
      fontFamily: 'monospace',
      boxShadow: '0 0 10px #00ffe0',
      zIndex: 1001
    }}>
      🧠
    </div>
  );
};

export default MythicAvatar;