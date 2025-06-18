// src/App.tsx
import { useState } from 'react';
import './App.css';

// Importa os componentes de tela que criamos
import StartScreen from './screens/StartScreen';
import CaptureScreen from './screens/CaptureScreen';
import ReviewScreen from './screens/ReviewScreen';
import FinalScreen from './screens/FinalScreen';

// Define os nomes das nossas telas para evitar erros de digitação
type ScreenName = 'start' | 'capture' | 'review' | 'final';

function App() {
  // Este 'estado' controla qual tela está sendo exibida no momento.
  // Começamos na tela 'start'.
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('start');

  // Função para renderizar o componente de tela correto
  const renderScreen = () => {
    switch (currentScreen) {
      case 'start':
        // Passamos a função 'setCurrentScreen' como propriedade para a StartScreen
        // para que ela possa nos dizer quando mudar para a próxima tela.
        return <StartScreen onStart={() => setCurrentScreen('capture')} />;
      case 'capture':
        return <CaptureScreen />;
      case 'review':
        return <ReviewScreen />;
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