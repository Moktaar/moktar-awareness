import { useState } from 'react';
import MoktarAISettings from './MoktarAISettings';
import MoktarAIProfile from './MoktarAIProfile';
import MoktarAIConsole from './MoktarAIConsole';
import MoktarAIHistory from './MoktarAIHistory';
import MoktarAIReset from './MoktarAIReset';

export default function MoktarAIDock() {
  const [active, setActive] = useState('');

  const renderPanel = () => {
    switch (active) {
      case 'settings': return <MoktarAISettings />;
      case 'profile': return <MoktarAIProfile />;
      case 'console': return <MoktarAIConsole />;
      case 'history': return <MoktarAIHistory />;
      case 'reset': return <MoktarAIReset />;
      default: return null;
    }
  };

  return (
    <div style={{
      position: 'fixed',
      right: '0',
      top: '4rem',
      width: '60px',
      height: '100%',
      backgroundColor: '#2d3748',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '1rem',
      gap: '1rem',
      zIndex: 20
    }}>
      <button style={btnStyle} onClick={() => setActive('settings')}>⚙️</button>
      <button style={btnStyle} onClick={() => setActive('profile')}>🧠</button>
      <button style={btnStyle} onClick={() => setActive('console')}>🖥️</button>
      <button style={btnStyle} onClick={() => setActive('history')}>📜</button>
      <button style={btnStyle} onClick={() => setActive('reset')}>🧹</button>

      <div style={{
        position: 'absolute',
        left: '-320px',
        top: '0',
        padding: '1rem',
        zIndex: 21
      }}>
        {renderPanel()}
      </div>
    </div>
  );
}

const btnStyle = {
  backgroundColor: '#1a202c',
  color: '#b2f5ea',
  border: 'none',
  padding: '0.5rem',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontSize: '1.2rem',
  cursor: 'pointer'
};