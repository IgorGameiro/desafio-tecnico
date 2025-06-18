// src/screens/CaptureScreen.tsx
import { useState, useRef, useEffect } from 'react';

const CaptureScreen = () => {
  // 'stream' vai guardar o vídeo da câmera quando ele estiver ativo.
  const [stream, setStream] = useState<MediaStream | null>(null);
  // 'videoRef' é uma "ponte" para o nosso elemento <video> no HTML.
  const videoRef = useRef<HTMLVideoElement>(null);

  // Esta função é chamada quando o botão é clicado.
  const handleOpenCamera = async () => {
    try {
      // Pedimos permissão para o navegador.
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'user', // 'user' pede a câmera frontal (selfie)
          aspectRatio: 9 / 16,
        },
        audio: false, // Não precisamos de áudio
      });

      // Se o usuário deu permissão, guardamos o stream de vídeo no nosso estado.
      setStream(mediaStream);

    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
      alert("Não foi possível acessar a câmera. Verifique as permissões no seu navegador.");
    }
  };

  // Este 'useEffect' roda sempre que o nosso 'stream' muda.
  useEffect(() => {
    if (stream && videoRef.current) {
      // Se temos um stream e o elemento de vídeo existe,
      // nós conectamos o stream de vídeo da câmera ao elemento na tela.
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="screen">
      {/* Usamos uma condição: */}
      {stream ? (
        // Se o stream EXISTE, mostramos o vídeo.
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        // Se o stream NÃO EXISTE, mostramos o botão.
        <button className="start-button" onClick={handleOpenCamera}>
          Abrir Câmera
        </button>
      )}
    </div>
  );
};

export default CaptureScreen;