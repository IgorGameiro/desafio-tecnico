// src/App.tsx
import { useState } from 'react';
import './App.css';

import StartScreen from './screens/StartScreen';
import CaptureScreen from './screens/CaptureScreen';
import ReviewScreen from './screens/ReviewScreen';
import FinalScreen from './screens/FinalScreen';

type ScreenName = 'start' | 'capture' | 'review' | 'final';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('start');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handlePictureTaken = (imageDataUrl: string) => {
    setCapturedImage(imageDataUrl);
    setCurrentScreen('review');
  };

  // NOVA FUNÇÃO: para lidar com o botão "Refazer"
  const handleRefetch = () => {
    setCapturedImage(null); // Limpa a imagem antiga
    setCurrentScreen('capture'); // Volta para a tela de captura
  };

  // NOVA FUNÇÃO: para lidar com o botão "Aprovar"
  const handleApprove = () => {
    // No futuro, aqui salvaremos a foto no Firebase
    // Por enquanto, apenas avançamos para a tela final
    setCurrentScreen('final');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'start':
        return <StartScreen onStart={() => setCurrentScreen('capture')} />;
      case 'capture':
        return <CaptureScreen onPictureTaken={handlePictureTaken} />;
      case 'review':
        // Agora passamos as funções para o ReviewScreen
        return (
          <ReviewScreen
            image={capturedImage}
            onRefetch={handleRefetch}
            onApprove={handleApprove}
          />
        );
      case 'final':
        return <FinalScreen />;
      default:
        return <StartScreen onStart={() => setCurrentScreen('capture')} />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
    </div>
  );
}

export default App;