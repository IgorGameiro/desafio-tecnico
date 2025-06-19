// src/App.tsx - VERSÃO COM LOCAL STORAGE
import { useState } from 'react';
import './App.css';

// As importações do Firebase foram removidas

import StartScreen from './screens/StartScreen';
import CaptureScreen from './screens/CaptureScreen';
import ReviewScreen from './screens/ReviewScreen';
import FinalScreen from './screens/FinalScreen';

type ScreenName = 'start' | 'capture' | 'review' | 'final';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('start');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePictureTaken = (imageDataUrl: string) => {
    setCapturedImage(imageDataUrl);
    setCurrentScreen('review');
  };

  const handleRefetch = () => {
    setCapturedImage(null);
    setCurrentScreen('capture');
  };

  // LÓGICA DE APROVAÇÃO LOCAL
  const handleApprove = () => {
    if (!capturedImage) return;

    setIsLoading(true);

    // Simulamos um pequeno delay para que o feedback "Salvando..." seja visível
    setTimeout(() => {
      try {
        // 1. Cria uma chave (ID) única para a foto
        const photoKey = `photo_${Date.now()}`;

        // 2. Salva a imagem (que é uma string de texto longa) no localStorage
        localStorage.setItem(photoKey, capturedImage);

        // 3. Simula nosso log de participações, também no localStorage
        const participationLog = JSON.parse(localStorage.getItem('participations') || '[]');
        participationLog.push({ id: photoKey, createdAt: new Date().toISOString() });
        localStorage.setItem('participations', JSON.stringify(participationLog));

        console.log(`Foto salva localmente com a chave: ${photoKey}`);

        // 4. Navega para a tela final
        setCurrentScreen('final');

      } catch (error) {
        console.error("Erro ao salvar no localStorage:", error);
        alert("Ocorreu um erro ao salvar sua foto localmente.");
      } finally {
        setIsLoading(false);
      }
    }, 500); // Delay de 0.5 segundos para o usuário ver o feedback
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'start':
        return <StartScreen onStart={() => setCurrentScreen('capture')} />;
      case 'capture':
        return <CaptureScreen onPictureTaken={handlePictureTaken} />;
      case 'review':
        return (
          <ReviewScreen
            image={capturedImage}
            onRefetch={handleRefetch}
            onApprove={handleApprove}
            isLoading={isLoading}
          />
        );
      case 'final':
        // FinalScreen não precisa mais de nenhuma informação extra
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