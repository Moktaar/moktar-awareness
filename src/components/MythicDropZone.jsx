import React, { useState } from 'react';

const MythicDropZone = () => {
  const [dropped, setDropped] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDropped(true);
    alert('📥 Awareness file mythically dropped (placeholder only).');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        position: 'fixed',
        bottom: '12rem',
        right: '1rem',
        width: '200px',
        height: '100px',
        background: dropped ? '#00ffe0' : '#0f0f0f',
        color: dropped ? '#0f0f0f' : '#00ffe0',
        border: '2px dashed #00ffe0',
        borderRadius: '6px',
        fontFamily: 'monospace',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001,
        transition: 'all 0.3s ease'
      }}
    >
      {dropped ? '✅ File dropped' : '📂 Drop awareness file here'}
    </div>
  );
};

export default MythicDropZone;