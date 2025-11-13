import { useState } from 'react';

export default function MoktarAIImageModal({ onClose }) {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    alert(`Sawir mythic ah oo ku saleysan: "${prompt}" waa la abuuri lahaa 😤`);
    setPrompt('');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 100
    }}>
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '2rem',
        borderRadius: '10px',
        width: '400px',
        color: '#b2f5ea',
        boxShadow: '0 0 20px #3182ce'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Abuur Sawir Mythic ah</h2>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Tusaale: hacker Somali ah oo ku jira VM"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#2d3748',
            color: '#b2f5ea',
            border: 'none',
            borderRadius: '5px',
            marginBottom: '1rem'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleGenerate} style={btnStyle}>Generate</button>
          <button onClick={onClose} style={btnStyle}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  backgroundColor: '#3182ce',
  color: '#fff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '5px'
};