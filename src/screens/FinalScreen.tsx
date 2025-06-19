// src/screens/FinalScreen.tsx
import QRCode from "react-qr-code"; // Já deve estar importado
import './FinalScreen.css'; // Importe o novo CSS que acabamos de criar

interface FinalScreenProps {
  imageUrl?: string | null; // imageUrl é opcional e pode ser null
}

const FinalScreen: React.FC<FinalScreenProps> = ({ imageUrl }) => {
  // Se não houver imageUrl, o QR Code vai apontar para a página inicial do GitHub como fallback.
  // Se você estiver salvando as fotos no Firebase, a imageUrl virá do App.tsx.
  // Caso contrário, usaremos um URL de exemplo para simular a funcionalidade.
  const qrCodeValue = imageUrl || "https://github.com/igorgameiro"; // Link para a página inicial do GitHub

  return (
    // Adicionamos a nova classe para o fundo e a animação
    <div className="screen final-screen-modern">
      <div className="final-screen-content">
        <h1 className="final-title-text">Obrigado!</h1>
        <p className="final-subtitle-text">
          Aponte a câmera do seu celular para o QR code abaixo para visitar meu github.
        </p>
        
        {/* O componente de QR Code. Ele precisa de um fundo branco para funcionar bem */}
        <div style={{ background: 'white', padding: '16px', borderRadius: '8px' }}>
          <QRCode value={qrCodeValue} size={180} /> {/* Definido um tamanho fixo para o QR code */}
        </div>

        {/* Você pode adicionar um botão para voltar ao início aqui, se desejar */}
      </div>
    </div>
  );
};

export default FinalScreen;