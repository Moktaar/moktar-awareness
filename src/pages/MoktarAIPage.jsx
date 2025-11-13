import { useState } from 'react';
import { getMoktarAIReply } from '../engine/MoktarAIReplyEngine';
import MoktarAITools from '../components/MoktarAITools';

export default function MoktarAIPage() {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Assalamu caleykum' },
    { sender: 'ai', text: 'Caleykuma salaam 🤝, yaan kuugu adeegaa?' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    const aiReply = await getMoktarAIReply(input);
    setMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      color: '#b2f5ea',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <header style={{
        padding: '1rem 2rem',
        borderBottom: '1px solid #2d3748',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem' }}>MoktarAI</h1>
        <button style={{
          background: 'none',
          border: '1px solid #b2f5ea',
          color: '#b2f5ea',
          padding: '0.5rem 1rem',
          borderRadius: '5px'
        }}>otropiet</button>
      </header>

      <aside style={{
        position: 'fixed',
        top: '4rem',
        left: '0',
        width: '60px',
        height: '100%',
        backgroundColor: '#2d3748',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '1rem',
        gap: '1rem'
      }}>
        <div>🤖</div>
        <div>📂</div>
        <div>🏠</div>
      </aside>

      <main style={{
        marginLeft: '60px',
        flex: 1,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#3182ce' : '#2d3748',
            color: '#fff',
            padding: '0.75rem 1rem',
            borderRadius: '10px',
            maxWidth: '60%'
          }}>
            {msg.text}
          </div>
        ))}
      </main>

      <footer style={{
        marginLeft: '60px',
        padding: '1rem 2rem',
        borderTop: '1px solid #2d3748',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <MoktarAITools />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          style={{
            flex: 1,
            padding: '0.75rem',
            backgroundColor: '#2d3748',
            color: '#b2f5ea',
            border: 'none',
            borderRadius: '5px'
          }}
        />
        <button onClick={handleSubmit} style={{
          backgroundColor: '#3182ce',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px'
        }}>
          Submit message ↑
        </button>
      </footer>
    </div>
  );
}