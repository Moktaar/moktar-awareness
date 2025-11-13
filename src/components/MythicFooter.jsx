import React from 'react';
import { Link } from 'react-router-dom';

const MythicFooter = () => {
  return (
    <footer style={{
      background: '#0f0f0f',
      color: '#b2f5ea',
      padding: '2rem',
      textAlign: 'center',
      borderTop: '1px solid #00ffe0',
      fontFamily: 'sans-serif'
    }}>
      <p>© 2025 Moktarweb Academy — Halganka Dijitaalka ah</p>
      <nav style={{ marginTop: '1rem' }}>
        <Link to="/awareness" style={{ margin: '0 1rem', color: '#00ffe0' }}>Wacyigelin</Link>
        <Link to="/messages" style={{ margin: '0 1rem', color: '#00ffe0' }}>Fariimo</Link>
        <Link to="/stats" style={{ margin: '0 1rem', color: '#00ffe0' }}>Xogta Assistant-ka</Link>
        <Link to="/admin" style={{ margin: '0 1rem', color: '#00ffe0' }}>Admin</Link>
      </nav>
    </footer>
  );
};

export default MythicFooter;