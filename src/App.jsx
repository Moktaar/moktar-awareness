import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <h1>
        Moktar Awareness Academy <span role="img" aria-label="power">??</span>
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Welcome to the mythic drop of justice, protection, and digital impact.
      </p>
      <button
        style={{ marginTop: "2rem", padding: "0.5rem 1rem", fontSize: "1rem" }}
        onClick={() => setCount(count + 1)}
      >
        Mythic Clicks: {count}
      </button>
    </main>
  );
}
