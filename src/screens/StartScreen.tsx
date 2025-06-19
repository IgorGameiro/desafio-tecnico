// src/screens/StartScreen.tsx
import './StartScreen.css'; // Importe este arquivo CSS

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    // Adicionamos uma classe nova para o fundo e a animação
    <div className="screen start-screen-modern" onClick={onStart}>
      <div className="start-screen-content">
        <h1 className="start-title">Photo Opp</h1> {/* Usando a classe 'start-title' */}
        <p className="start-subtitle">Toque para iniciar</p> {/* Usando a classe 'start-subtitle' */}
      </div>
    </div>
  );
};

export default StartScreen;