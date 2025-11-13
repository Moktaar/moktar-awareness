import { useMoktarAI } from '../context/MoktarAIContext';

export default function MoktarAIHistory() {
  const { messages } = useMoktarAI();

  return (
    <div style={{
      backgroundColor: '#2d3748',
      color: '#b2f5ea',
      padding: '1rem',
      borderRadius: '10px',
      marginTop: '2rem',
      maxHeight: '300px',
      overflowY: 'auto',
      boxShadow: '0 0 10px #3182ce'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>📜 Taariikhda MoktarAI</h2>
      {messages.length === 0 ? (
        <p>Taariikh lama hayo 😶</p>
      ) : (
        messages.map((msg, i) => (
          <div key={i} style={{
            marginBottom: '0.75rem',
            backgroundColor: msg.sender === 'user' ? '#1a202c' : '#3182ce',
            padding: '0.5rem',
            borderRadius: '5px'
          }}>
            <strong>{msg.sender === 'user' ? 'User' : 'MoktarAI'}:</strong> {msg.text}
            <div style={{ fontSize: '0.75rem', color: '#a0aec0', marginTop: '0.25rem' }}>
              {new Date().toLocaleString()}
            </div>
          </div>
        ))
      )}
    </div>
  );
}