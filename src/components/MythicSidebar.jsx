import React from 'react';
import { Link } from 'react-router-dom';

const MythicSidebar = () => {
  return (
    <aside style={{
      position: 'fixed',
      top: '4rem',
      left: 0,
      width: '200px',
      height: 'calc(100vh - 4rem)',
      background: '#0f0f0f',
      color: '#b2f5ea',
      padding: '1rem',
      borderRight: '1px solid #00ffe0',
      fontFamily: 'sans-serif',
      zIndex: 998
    }}>
      <h3>📂 Mythic Menu</h3>
      <nav style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link to="/awareness" style={linkStyle}>Wacyigelin</Link>
        <Link to="/messages" style={linkStyle}>Fariimo</Link>
        <Link to="/stats" style={linkStyle}>Xogta Assistant-ka</Link>
        <Link to="/settings" style={linkStyle}>Dejinta</Link>
        <Link to="/admin" style={linkStyle}>Admin</Link>
      </nav>
    </aside>
  );
};

const linkStyle = {
  color: '#00ffe0',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default MythicSidebar;