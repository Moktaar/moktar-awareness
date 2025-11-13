import { useState } from 'react';

export default function MoktarAIVoice() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const toggleMic = () => {
    if (!listening) {
      setListening(true);
      setTranscript('Mic activated... codkaaga waa la sugayaa 😤');
    } else {
      setListening(false);
      setTranscript('Mic xirmay. Codka waa la qabtay.');
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button
        onClick={toggleMic}
        style={{
          backgroundColor: listening ? '#e53e3e' : '#3182ce',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px'
        }}
      >
        {listening ? '🎙️ Stop Voice' : '🎙️ Start Voice'}
      </button>
      {transcript && (
        <p style={{ marginTop: '0.5rem', color: '#b2f5ea' }}>{transcript}</p>
      )}
    </div>
  );
}