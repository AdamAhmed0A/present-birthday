import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  hue: number;
  size: number;
  rotation: number;
  shape: 'circle' | 'square' | 'triangle';
}

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 60; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        hue: Math.random() * 360,
        size: 8 + Math.random() * 12,
        rotation: Math.random() * 360,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      });
    }
    setPieces(newPieces);
  }, []);

  const getShape = (piece: ConfettiPiece) => {
    const color = `hsl(${piece.hue}, 70%, 60%)`;
    
    switch (piece.shape) {
      case 'circle':
        return (
          <div
            style={{
              width: piece.size,
              height: piece.size,
              backgroundColor: color,
              borderRadius: '50%',
            }}
          />
        );
      case 'square':
        return (
          <div
            style={{
              width: piece.size,
              height: piece.size,
              backgroundColor: color,
              borderRadius: '2px',
              transform: `rotate(${piece.rotation}deg)`,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${piece.size / 2}px solid transparent`,
              borderRight: `${piece.size / 2}px solid transparent`,
              borderBottom: `${piece.size}px solid ${color}`,
              transform: `rotate(${piece.rotation}deg)`,
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          {getShape(piece)}
        </div>
      ))}
    </div>
  );
};
