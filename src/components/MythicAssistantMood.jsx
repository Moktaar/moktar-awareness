import React, { useState, useEffect } from 'react';

const moods = ['😌 Calm', '⚡ Alert', '🎯 Focused', '🔥 Energized'];

const MythicAssistantMood = () => {
  const [mood, setMood] = useState(moods[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = moods[Math.floor(Math.random() * moods.length)];
      setMood(next);
    }, 10000); // update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10rem',
      right: '1rem',
      background: '#0f0f0f',
      color: '#00ffe0',
      padding: '0.75rem 1rem',
      border: '1px solid #00ffe0',
      borderRadius: '6px',
      fontFamily: 'monospace',
      fontSize: '0.85rem',
      zIndex: 1001
    }}>
      <h4>🧠 Assistant Mood</h4>
      <p><strong>Xaalad:</strong> {mood}</p>
    </div>
  );
};

export default MythicAssistantMood;