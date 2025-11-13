import { useState } from 'react';
import MoktarAIImageModal from './MoktarAIImageModal';
import MoktarAIVoice from './MoktarAIVoice';
import MoktarAIUpload from './MoktarAIUpload';

export default function MoktarAITools() {
  const [open, setOpen] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showVoice, setShowVoice] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const toggleTools = () => setOpen(!open);
  const openImageModal = () => {
    setShowImageModal(true);
    setOpen(false);
  };
  const toggleVoice = () => {
    setShowVoice(!showVoice);
    setOpen(false);
  };
  const toggleUpload = () => {
    setShowUpload(!showUpload);
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={toggleTools}
        style={{
          backgroundColor: '#2d3748',
          color: '#b2f5ea',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '1.5rem'
        }}
      >
        +
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '0',
          backgroundColor: '#1a202c',
          border: '1px solid #3182ce',
          borderRadius: '10px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          zIndex: 10
        }}>
          <button style={toolStyle} onClick={toggleUpload}>📤 Upload File</button>
          <button style={toolStyle} onClick={openImageModal}>🎨 Create Image</button>
          <button style={toolStyle} onClick={toggleVoice}>🎙️ Voice Input</button>
        </div>
      )}

      {showImageModal && (
        <MoktarAIImageModal onClose={() => setShowImageModal(false)} />
      )}

      {showVoice && (
        <div style={{ position: 'absolute', bottom: '-80px', left: '0', zIndex: 9 }}>
          <MoktarAIVoice />
        </div>
      )}

      {showUpload && (
        <div style={{ position: 'absolute', bottom: '-140px', left: '0', zIndex: 8 }}>
          <MoktarAIUpload />
        </div>
      )}
    </div>
  );
}

const toolStyle = {
  backgroundColor: '#2d3748',
  color: '#b2f5ea',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  textAlign: 'left'
};