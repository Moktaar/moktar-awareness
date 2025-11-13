import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MythicRouteLogger = () => {
  const location = useLocation();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `${timestamp} → ${location.pathname}`]);
  }, [location]);

  return (
    <div style={{
      position: 'fixed',
      top: '18rem',
      right: '1rem',
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '1rem',
      border: '1px solid #00ffe0',
      borderRadius: '6px',
      fontFamily: 'monospace',
      fontSize: '0.75rem',
      maxHeight: '150px',
      overflowY: 'auto',
      zIndex: 1001
    }}>
      <h4>🧭 Route Logger</h4>
      <ul style={{ paddingLeft: '1rem' }}>
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default MythicRouteLogger;