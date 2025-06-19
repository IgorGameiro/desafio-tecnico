// src/screens/StartScreen.tsx

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="screen" onClick={onStart} style={{ cursor: 'pointer' }}>
      <h1>Tela Inicial</h1>
      <p>Toque para iniciar</p>
    </div>
  );
};

export default StartScreen;