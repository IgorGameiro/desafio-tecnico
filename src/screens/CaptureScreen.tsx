// src/screens/CaptureScreen.tsx
import { useState, useRef, useEffect } from 'react';

interface CaptureScreenProps {
  onPictureTaken: (imageDataUrl: string) => void;
}

const CaptureScreen: React.FC<CaptureScreenProps> = ({ onPictureTaken }) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // A LINHA CORRETA E MAIS MODERNA (RECOMENDADA)
const countdownIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Função para ligar a câmera (a mesma de antes)
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', aspectRatio: 9 / 16 },
        audio: false,
      });
      setStream(mediaStream);
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
      alert("Não foi possível acessar a câmera. Verifique as permissões.");
    }
  };

  // Liga a câmera assim que o componente é montado
  useEffect(() => {
    startCamera();
  }, []);

  // Conecta o stream de vídeo da câmera ao elemento <video>
  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  // Função principal para capturar a foto
  const handleCapture = () => {
    // Inicia a contagem em 3
    setCountdown(3);

    // A cada segundo, diminui a contagem
    countdownIntervalRef.current = setInterval(() => {
      setCountdown(prev => (prev !== null ? prev - 1 : null));
    }, 1000);
  };

  // Este useEffect observa a contagem regressiva
  useEffect(() => {
    // Quando a contagem chegar a 0...
    if (countdown === 0) {
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas) {
        // Desenha a imagem do vídeo no canvas "escondido"
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

        // Converte o canvas para uma imagem (em formato base64)
        const imageDataUrl = canvas.toDataURL('image/jpeg');

        // Envia a imagem para o App.tsx e avança para a próxima tela
        onPictureTaken(imageDataUrl);
      }
    }
  }, [countdown, onPictureTaken]);


  return (
    <div className="screen" style={{ position: 'relative', padding: 0 }}>
      {/* O vídeo da câmera fica no fundo */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Canvas escondido que vamos usar para tirar a foto */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Overlay para a contagem regressiva e o botão */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '50px' }}>
        {/* Se estiver em contagem, mostra o número. Se não, mostra o botão. */}
        {countdown !== null ? (
          <h1 style={{ fontSize: '10em', color: 'white', textShadow: '0 0 10px black' }}>{countdown > 0 ? countdown : ''}</h1>
        ) : (
          <button onClick={handleCapture} className="start-button">
            Capturar
          </button>
        )}
      </div>
    </div>
  );
};

export default CaptureScreen;