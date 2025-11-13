import { useState } from 'react';
import { useMoktarAI } from '../context/MoktarAIContext';

export default function MoktarAISettings() {
  const { language, setLanguage, theme, setTheme } = useMoktarAI();
  const [mode, setMode] = useState('mythic');

  return (
    <div style={{
      backgroundColor: '#2d3748',
      color: '#b2f5ea',
      padding: '1rem',
      borderRadius: '10px',
      width: '300px',
      boxShadow: '0 0 10px #3182ce',
      marginTop: '2rem'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>⚙️ MoktarAI Settings</h2>

      {/* Language Toggle */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Luqadda:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={selectStyle}
        >
          <option value="so">Somali</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Theme Toggle */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={selectStyle}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>

      {/* Mode Toggle */}
      <div>
        <label>Assistant Mode:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          style={selectStyle}
        >
          <option value="mythic">Mythic</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>
    </div>
  );
}

const selectStyle = {
  width: '100%',
  padding: '0.5rem',
  backgroundColor: '#1a202c',
  color: '#b2f5ea',
  border: 'none',
  borderRadius: '5px',
  marginTop: '0.5rem'
};