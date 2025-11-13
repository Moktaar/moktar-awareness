import { useMoktarAI } from '../context/MoktarAIContext';

export default function MoktarAIStats() {
  const { messages, language } = useMoktarAI();

  const total = messages.length;
  const somaliCount = messages.filter(m => m.language === 'so').length;
  const englishCount = messages.filter(m => m.language === 'en').length;

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
      <h2 style={{ marginBottom: '1rem' }}>📊 MoktarAI Stats</h2>
      <p>Su’aalo la weydiiyay: <strong>{total}</strong></p>
      <p>Jawaabo Somali ah: <strong>{somaliCount}</strong></p>
      <p>Jawaabo English ah: <strong>{englishCount}</strong></p>
      <p>Luqadda hadda: <strong>{language === 'so' ? 'Somali' : 'English'}</strong></p>
    </div>
  );
}