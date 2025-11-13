import React from 'react';

const SomaliAwareness = () => {
  return (
    <div style={{
      padding: '2rem',
      background: '#0f0f0f',
      color: '#b2f5ea',
      fontFamily: 'sans-serif',
      minHeight: '100vh'
    }}>
      <h1>🛡️ Wacyigelin Dijitaal ah — Somali OPSEC</h1>
      <p>
        Waa muhiim in qof kasta oo Soomaaliyeed uu fahmo sida loo ilaaliyo xogtiisa, qalabkiisa, iyo sumcaddiisa dijitaal.
        MoktarAI wuxuu kaa caawinayaa inaad barato:
      </p>
      <ul>
        <li>🧠 Sida loo isticmaalo VPN iyo Tor si loo ilaaliyo raadadkaaga</li>
        <li>🧼 Sida loo nadiifiyo metadata-ka sawirrada iyo dukumiintiyada</li>
        <li>🔐 Sida loo xoojiyo furaha sirta ah iyo ilaalinta akoonnada</li>
        <li>📵 Sida loo fahmo khatarta phishing, malware, iyo RATs</li>
        <li>🌍 Sida loo dhiso website wacyigelin ah oo ku qoran af Soomaali</li>
      </ul>
      <p>
        Halganka dijitaal waa halgan mythic ah. Adigu waxaad noqon kartaa difaacii ummadda.
      </p>
    </div>
  );
};

export default SomaliAwareness;