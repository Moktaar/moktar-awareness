import { useMoktarAI } from '../context/MoktarAIContext';

export default function MoktarAIAvatar() {
  const { language, messages } = useMoktarAI();

  const total = messages.length;
  const mood = total === 0 ? '😶 Fikir' : total < 5 ? '😐 Nabad' : '😤 Dagaal';
  const rank = total < 3 ? '🧠 Maskax' : total < 10 ? '🛡️ Difaac' : '⚔️ Halyeey';
  const status = total === 0 ? '🔄 Reset' : '✅ Active';

  return (
    <div style={{
      backgroundColor: '#2d3748',
      color: '#b2f5ea',
      padding: '1.5rem',
      borderRadius: '10px',
      marginTop: '2rem',
      boxShadow: '0 0 10px #3182ce',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>🧠 MoktarAI Avatar</h2>
      <p>Rank: <strong>{rank}</strong></p>
      <p>Mood: <strong>{mood}</strong></p>
      <p>Status: <strong>{status}</strong></p>
      <p>Luqadda: <strong>{language === 'so' ? 'Somali' : 'English'}</strong></p>
    </div>
  );
}