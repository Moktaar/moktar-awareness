import { useMoktarAI } from '../context/MoktarAIContext';

export default function MoktarAIReset() {
  const { clearMessages } = useMoktarAI();

  const handleReset = () => {
    const confirmReset = window.confirm('Ma hubtaa in aad nadiifin rabto taariikhda MoktarAI? 😶');
    if (confirmReset) {
      clearMessages();
      alert('Taariikhda MoktarAI waa la nadiifiyay 😤');
    }
  };

  return (
    <button
      onClick={handleReset}
      style={{
        backgroundColor: '#e53e3e',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        marginTop: '1rem',
        boxShadow: '0 0 5px #e53e3e'
      }}
    >
      🧹 Nadiifi MoktarAI
    </button>
  );
}