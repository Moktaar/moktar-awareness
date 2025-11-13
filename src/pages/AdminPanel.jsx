import React from 'react';

const AdminPanel = () => {
  return (
    <div style={{
      padding: '2rem',
      background: '#121212',
      color: '#b2f5ea',
      minHeight: '100vh'
    }}>
      <h1>⚙️ Admin Dashboard</h1>
      <section>
        <h2>👥 Users</h2>
        <ul>
          <li>user001 — Somali</li>
          <li>user002 — English</li>
        </ul>
      </section>
      <section>
        <h2>🧠 Assistant Config</h2>
        <p>Default Language: Somali</p>
        <p>Overlay: ✅ Visible</p>
      </section>
      <section>
        <h2>📜 Mythic Logs</h2>
        <pre>
{`[11:58] MoktarAI initialized
[11:59] Language toggled to Arabic
[12:00] Message history cleared`}
        </pre>
      </section>
    </div>
  );
};

export default AdminPanel;