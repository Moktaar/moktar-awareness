import React, { useEffect, useState } from 'react';

const MythicSessionTracker = () => {
  const [startTime] = useState(Date.now());
  const [duration, setDuration] = useState('00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.floor((now - startTime) / 1000);
      const minutes = String(Math.floor(diff / 60)).padStart(2, '0');
      const seconds = String(diff % 60).padStart(2, '0');
      setDuration(`${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div style={{
      position: 'fixed',
      top: '6rem',
      left: '1rem',
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '0.75rem 1rem',
      border: '1px solid #00ffe0',
      borderRadius: '6px',
      fontFamily: 'monospace',
      fontSize: '0.85rem',
      zIndex: 1001
    }}>
      <h4>⏱️ Session Tracker</h4>
      <p><strong>Bilow:</strong> {new Date(startTime).toLocaleTimeString()}</p>
      <p><strong>Muddada:</strong> {duration}</p>
      <p><strong>Status:</strong> Assistant-ka wuu socdaa ✅</p>
    </div>
  );
};

export default MythicSessionTracker;