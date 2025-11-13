export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh', // FULL SCREEN HEIGHT
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1e1e1e',
      color: '#b2f5ea',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Anyone can learn cyber security with <span style={{ color: '#3182ce' }}>Moktarweb Academy</span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#e2e8f0' }}>
        Hands-on training through real-world scenarios. Learn, practice, and compete in your own language.
      </p>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: '0.75rem',
            width: '300px',
            borderRadius: '5px',
            border: 'none',
            marginRight: '1rem',
            backgroundColor: '#2d3748',
            color: '#b2f5ea'
          }}
        />
        <button style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3182ce',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}>
          Join for FREE
        </button>
      </div>
    </section>
  );
}