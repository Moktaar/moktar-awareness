import React from 'react';

const Awareness = () => {
  return (
    <main
      role="main"
      aria-labelledby="awareness-title"
      style={{
        padding: '2rem',
        fontFamily: 'monospace',
        color: '#00c4ff',
        backgroundColor: '#0f0f0f',
        minHeight: '100vh',
        lineHeight: '1.8',
      }}
    >
      <header>
        <h1 id="awareness-title">🛡️ Wacyi-gelin & Difaac Digital</h1>
      </header>

      <section aria-label="Awareness content">
        <p>
          Moktarweb Academy waa madal mythic ah oo loogu talagalay in lagu baro OPSEC, hacking-ethical, iyo difaaca xogta si loo ilaaliyo bulshada Soomaaliyeed.
        </p>

        <ul style={{ marginTop: '1rem' }}>
          <li tabIndex="0" aria-label="OPSEC: Sirta hawlgalka iyo ilaalinta xogta">
            💡 OPSEC: Sirta hawlgalka iyo ilaalinta xogta
          </li>
          <li tabIndex="0" aria-label="Awareness: Wacyi-gelin ku qoran Af-Soomaali">
            💡 Awareness: Wacyi-gelin ku qoran Af-Soomaali
          </li>
          <li tabIndex="0" aria-label="Tools: Qalab lagu difaaco naftaada iyo nidaamkaaga">
            💡 Tools: Qalab lagu difaaco naftaada iyo nidaamkaaga
          </li>
        </ul>
      </section>

      <footer role="contentinfo" aria-label="Footer mythic" style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>
          © 2025 Moktarweb Academy – Somali Digital Defense
        </p>
      </footer>
    </main>
  );
};

export default Awareness;