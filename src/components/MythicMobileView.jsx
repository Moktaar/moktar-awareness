import React, { useEffect, useState } from 'react';

const MythicMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      bottom: 0,
      left: 0,
      width: '100%',
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '0.75rem',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      fontSize: '0.9rem',
      borderTop: '1px solid #00ffe0',
      zIndex: 1005
    }}>
      📱 Mobile View Active — Moktarweb layout optimized for small screens.
    </div>
  );
};

export default MythicMobileView;