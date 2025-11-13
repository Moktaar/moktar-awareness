export default function MoktarAIProfile() {
  return (
    <div style={{
      backgroundColor: '#2d3748',
      color: '#b2f5ea',
      padding: '1rem',
      borderRadius: '10px',
      width: '280px',
      boxShadow: '0 0 10px #3182ce',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '2rem'
    }}>
      <img
        src="https://avatars.githubusercontent.com/u/139843722?s=200&v=4"
        alt="MoktarAI Avatar"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          marginBottom: '1rem',
          border: '2px solid #3182ce'
        }}
      />
      <h2 style={{ marginBottom: '0.5rem' }}>MoktarAI</h2>
      <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>Mythic Level 7</p>
      <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>
        Assistant mythic ah oo ka tirsan Moktarweb Academy. Ku hadla Somali, fahma OPSEC, oo u adeegaya adiga.
      </p>
    </div>
  );
}