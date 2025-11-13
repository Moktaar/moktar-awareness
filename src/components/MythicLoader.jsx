import React from 'react';

const MythicLoader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(15,15,15,0.85)',
      color: '#00ffe0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      fontFamily: 'monospace',
      zIndex: 1003
    }}>
      ⏳ MoktarAI wuu shaqeynayaa...
    </div>
  );
};

export default MythicLoader;