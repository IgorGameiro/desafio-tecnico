// src/screens/StartScreen.tsx
import './StartScreen.css'; // Vamos criar este arquivo para as animações

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    // Adicionamos uma classe nova para o fundo e a animação
    <div className="screen start-screen-modern" onClick={onStart}>
      <div className="start-screen-content">
        <h1 className="start-title">Photo Opp</h1>
        <p className="start-subtitle">Toque para iniciar</p>
      </div>
    </div>
  );
};

export default StartScreen;