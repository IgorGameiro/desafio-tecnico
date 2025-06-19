// src/screens/ReviewScreen.tsx

// Definimos que este componente receberá as novas funções
interface ReviewScreenProps {
  image: string | null;
  onRefetch: () => void;
  onApprove: () => void;
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({ image, onRefetch, onApprove }) => {
  if (!image) {
    return <div className="screen">Carregando imagem...</div>;
  }

  return (
    <div className="screen" style={{ padding: 0, position: 'relative', justifyContent: 'center' }}>
      <img src={image} alt="Foto Capturada" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />

      {/* Botões agora chamam as funções recebidas */}
      <div style={{ position: 'absolute', bottom: '50px', display: 'flex', gap: '20px' }}>
        <button onClick={onRefetch} className="start-button" style={{ backgroundColor: '#e0e0e0', color: 'black' }}>
          Refazer
        </button>
        <button onClick={onApprove} className="start-button">
          Aprovar
        </button>
      </div>
    </div>
  );
};

export default ReviewScreen;