import React from "react";

export default function Tryhackme2Layout() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Moktarweb Academy 😤</h1>
      <p>Welcome to the mythic awareness platform. Click below to begin your journey.</p>
      <button onClick={() => alert("Mythic Click!")}>Click Me</button>
    </div>
  );
}