import { useState } from 'react';
import { getMoktarAIReply } from '../engine/MoktarAIReplyEngine';
import { useMoktarAI } from '../context/MoktarAIContext';

export default function MoktarAIEngineTest() {
  const { language } = useMoktarAI();
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const reply = await getMoktarAIReply(input, language);
    setResponse(reply);
    setLoading(false);
  };

  return (
    <div style={{
      backgroundColor: '#2d3748',
      color: '#b2f5ea',
      padding: '2rem',
      borderRadius: '10px',
      marginTop: '2rem',
      boxShadow: '0 0 10px #3182ce',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>🧪 MoktarAI Engine Test</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tijaabi su’aal ama amar..."
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#1a202c',
          color: '#b2f5ea',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '1rem'
        }}
      />
      <button
        onClick={handleTest}
        style={{
          backgroundColor: '#3182ce',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          marginBottom: '1rem'
        }}
      >
        Tijaabi Engine-ka
      </button>
      {loading ? (
        <p>⏳ MoktarAI wuu ka fikirayaa...</p>
      ) : (
        response && <div style={{
          backgroundColor: '#1a202c',
          padding: '1rem',
          borderRadius: '5px',
          marginTop: '1rem'
        }}>{response}</div>
      )}
    </div>
  );
}