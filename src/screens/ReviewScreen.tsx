// src/screens/ReviewScreen.tsx

interface ReviewScreenProps {
  image: string | null; // A imagem vem como uma propriedade
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({ image }) => {
  if (!image) {
    return <div className="screen">Carregando imagem...</div>;
  }

  return (
    <div className="screen" style={{ padding: 0, position: 'relative' }}>
      {/* Mostra a imagem capturada ocupando todo o espaço */}
      <img src={image} alt="Foto Capturada" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      {/* Aqui adicionaremos a moldura e os botões "Refazer" e "Aprovar" no próximo passo */}
      <div style={{ position: 'absolute', bottom: '50px', display: 'flex', gap: '20px' }}>
        <button className="start-button">Refazer</button>
        <button className="start-button">Aprovar</button>
      </div>
    </div>
  );
};

export default ReviewScreen;