import { useState } from 'react';

export default function MoktarAIUpload() {
  const [fileName, setFileName] = useState('');

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      alert(`File la helay: "${file.name}" 😤 (laakiin lama aqrinayo, placeholder kaliya)`);
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <label style={{
        backgroundColor: '#2d3748',
        color: '#b2f5ea',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        📤 Upload File
        <input
          type="file"
          onChange={handleUpload}
          style={{ display: 'none' }}
        />
      </label>
      {fileName && (
        <p style={{ marginTop: '0.5rem', color: '#b2f5ea' }}>
          File la doortay: {fileName}
        </p>
      )}
    </div>
  );
}