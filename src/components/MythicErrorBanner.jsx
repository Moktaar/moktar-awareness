import React from 'react';

const MythicErrorBanner = ({ error }) => {
  if (!error) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '4rem',
      left: '200px',
      width: 'calc(100% - 200px)',
      background: '#ff0040',
      color: '#fff',
      padding: '1rem',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      textAlign: 'center',
      zIndex: 1004,
      borderBottom: '2px solid #fff'
    }}>
      ⚠️ Khalad ayaa dhacay: {error}
    </div>
  );
};

export default MythicErrorBanner;