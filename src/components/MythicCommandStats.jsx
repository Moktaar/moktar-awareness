import React, { useState, useEffect } from 'react';

const MythicCommandStats = () => {
  const [stats, setStats] = useState({
    total: 0,
    success: 0,
    error: 0,
    retry: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        total: prev.total + 1,
        success: prev.success + 1,
        error: prev.error + (Math.random() < 0.2 ? 1 : 0),
        retry: prev.retry + (Math.random() < 0.1 ? 1 : 0)
      }));
    }, 8000); // simulate every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '14rem',
      right: '1rem',
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '1rem',
      border: '1px dashed #00ffe0',
      borderRadius: '6px',
      fontFamily: 'monospace',
      fontSize: '0.85rem',
      zIndex: 1001
    }}>
      <h4>📊 Command Stats</h4>
      <p><strong>Guud ahaan:</strong> {stats.total}</p>
      <p><strong>Guuleystay:</strong> ✅ {stats.success}</p>
      <p><strong>Khaldamay:</strong> ❌ {stats.error}</p>
      <p><strong>La celiyay:</strong> 🔁 {stats.retry}</p>
    </div>
  );
};

export default MythicCommandStats;