import React from 'react';

const MythicTimestamp = ({ time }) => {
  const formatted = new Date(time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <span style={{
      color: '#00ffe0',
      fontSize: '0.8rem',
      fontFamily: 'monospace',
      marginRight: '0.5rem'
    }}>
      🕒 {formatted}
    </span>
  );
};

export default MythicTimestamp;