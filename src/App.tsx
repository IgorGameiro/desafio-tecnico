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
  // NOVO ESTADO: para guardar a imagem que capturamos
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  // NOVA FUNÇÃO: chamada pela CaptureScreen quando a foto é tirada
  const handlePictureTaken = (imageDataUrl: string) => {
    setCapturedImage(imageDataUrl); // Guarda a imagem
    setCurrentScreen('review');   // Muda para a tela de revisão
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'start':
        return <StartScreen onStart={() => setCurrentScreen('capture')} />;
      case 'capture':
        // Passamos a nova função para a CaptureScreen
        return <CaptureScreen onPictureTaken={handlePictureTaken} />;
      case 'review':
        // A tela de revisão precisa da imagem para mostrá-la
        return <ReviewScreen image={capturedImage} />;
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