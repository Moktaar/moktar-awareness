import MoktarAIComplete from './pages/MoktarAIComplete';
import { MoktarAIProvider } from './context/MoktarAIContext';

export default function MoktarAIApp() {
  return (
    <MoktarAIProvider>
      <MoktarAIComplete />
    </MoktarAIProvider>
  );
}