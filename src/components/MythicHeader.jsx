import React from 'react';

const MythicHeader = () => {
  return (
    <header style={{
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '1rem 2rem',
      borderBottom: '1px solid #00ffe0',
      fontFamily: 'sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1002
    }}>
      <h1 style={{ margin: 0 }}>🛡️ Moktarweb Academy</h1>
      <span style={{ fontWeight: 'bold' }}>Mythic Mode: Active</span>
    </header>
  );
};

export default MythicHeader;