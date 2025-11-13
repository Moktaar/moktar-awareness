import React, { useState, useEffect } from 'react';

const MythicNotificationBell = () => {
  const [hasAlert, setHasAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAlert(true); // simulate alert after 5 seconds
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    alert('📣 Mythic update: Assistant-ka wuu firfircoon yahay. Awareness drop ayaa la diyaariyay.');
    setHasAlert(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      zIndex: 1001
    }}>
      <button onClick={handleClick} style={{
        background: hasAlert ? '#ff0040' : '#0f0f0f',
        color: '#00ffe0',
        border: '1px solid #00ffe0',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        boxShadow: hasAlert ? '0 0 10px #ff0040' : 'none'
      }}>
        🔔
      </button>
    </div>
  );
};

export default MythicNotificationBell;