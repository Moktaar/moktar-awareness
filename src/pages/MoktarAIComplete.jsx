import MoktarAIIntro from '../components/MoktarAIIntro';
import MoktarAIProfile from '../components/MoktarAIProfile';
import MoktarAIConsole from '../components/MoktarAIConsole';
import MoktarAIHistory from '../components/MoktarAIHistory';
import MoktarAIManifesto from '../components/MoktarAIManifesto';
import MoktarAIReveal from '../components/MoktarAIReveal';
import MoktarAISettings from '../components/MoktarAISettings';
import MoktarAIStats from '../components/MoktarAIStats';
import MoktarAIReset from '../components/MoktarAIReset';
import MoktarAIEngineTest from '../components/MoktarAIEngineTest';
import MoktarAIOverlay from '../components/MoktarAIOverlay';
import MoktarAIDock from '../components/MoktarAIDock';

export default function MoktarAIComplete() {
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      color: '#b2f5ea',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
        🧠 MoktarAI Mythic Dashboard
      </h1>

      <MoktarAIIntro />
      <MoktarAIProfile />
      <MoktarAIStats />
      <MoktarAIConsole />
      <MoktarAIHistory />
      <MoktarAIReset />
      <MoktarAISettings />
      <MoktarAIEngineTest />
      <MoktarAIReveal />
      <MoktarAIManifesto />
      <MoktarAIOverlay />
      <MoktarAIDock />
    </div>
  );
}