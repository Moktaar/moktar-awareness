export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#1e1e1e', color: '#b2f5ea', display: 'flex', justifyContent: 'space-between' }}>
      <strong>Moktarweb Academy</strong>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button style={{ background: '#3182ce', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>Learn</button>
        <button style={{ background: '#3182ce', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>Practice</button>
        <button style={{ background: '#3182ce', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>Compete</button>
        <button style={{ background: '#3182ce', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>Business</button>
        <button style={{ background: '#3182ce', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>Pricing</button>
        <button style={{ background: '#3182ce', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>MoktarAI</button>
      </div>
    </nav>
  );
}