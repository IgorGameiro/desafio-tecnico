// src/screens/ReviewScreen.tsx

interface ReviewScreenProps {
  image: string | null;
  onRefetch: () => void;
  onApprove: () => void;
  isLoading: boolean; // 1. Adicionamos a propriedade que faltava aqui
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({ image, onRefetch, onApprove, isLoading }) => {
  if (!image) {
    return <div className="screen">Carregando imagem...</div>;
  }

  return (
    <div className="screen" style={{ justifyContent: 'space-between', padding: '20px', boxSizing: 'border-box' }}>
      
      {/* Espaço para o cabeçalho (se quisermos adicionar depois) */}
      <div style={{width: '100%', height: '50px'}}></div>

      <img 
        src={image} 
        alt="Foto Capturada" 
        style={{ 
          width: '100%', 
          maxHeight: '70%', 
          objectFit: 'contain' 
        }} 
      />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%' }}>
        {/* 2. Usamos 'isLoading' para desativar os botões durante o salvamento */}
        <button onClick={onRefetch} className="start-button" disabled={isLoading} style={{ backgroundColor: '#e0e0e0', color: 'black' }}>
          Refazer
        </button>
        <button onClick={onApprove} className="start-button" disabled={isLoading}>
          {/* 3. E também para mudar o texto do botão para dar feedback */}
          {isLoading ? 'Salvando...' : 'Aprovar'}
        </button>
      </div>
    </div>
  );
};

export default ReviewScreen;