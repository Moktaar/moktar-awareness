import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MythicMobileMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      zIndex: 1002
    }}>
      <button onClick={() => setOpen(!open)} style={{
        background: '#0f0f0f',
        color: '#00ffe0',
        border: '1px solid #00ffe0',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        ☰ Menu
      </button>

      {open && (
        <div style={{
          marginTop: '0.5rem',
          background: '#0f0f0f',
          border: '1px dashed #00ffe0',
          padding: '1rem',
          borderRadius: '6px'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={linkStyle}>🏠 Home</Link></li>
            <li><Link to="/docs" style={linkStyle}>📄 Docs</Link></li>
            <li><Link to="/admin" style={linkStyle}>🛡️ Admin</Link></li>
            <li><Link to="/awareness" style={linkStyle}>🌍 Awareness</Link></li>
            <li><Link to="/messages" style={linkStyle}>💬 Messages</Link></li>
            <li><Link to="/stats" style={linkStyle}>📊 Stats</Link></li>
            <li><Link to="/settings" style={linkStyle}>⚙️ Settings</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

const linkStyle = {
  color: '#00ffe0',
  textDecoration: 'none',
  fontFamily: 'monospace',
  display: 'block',
  marginBottom: '0.5rem'
};

export default MythicMobileMenu;