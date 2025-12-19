import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  delay: number;
}

export const InteractiveSparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [clickSparkles, setClickSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    // Background sparkles
    const initial: Sparkle[] = [];
    for (let i = 0; i < 40; i++) {
      initial.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 6 + Math.random() * 12,
        hue: Math.random() * 60 + 30, // Gold to orange range
        delay: Math.random() * 4,
      });
    }
    setSparkles(initial);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      const newSparkle = { id, x: e.clientX, y: e.clientY };
      setClickSparkles(prev => [...prev, newSparkle]);
      
      // Remove after animation
      setTimeout(() => {
        setClickSparkles(prev => prev.filter(s => s.id !== id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {/* Background sparkles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-sparkle"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${2 + Math.random()}s`,
            }}
          >
            <svg
              width={sparkle.size}
              height={sparkle.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ filter: `hue-rotate(${sparkle.hue}deg)` }}
            >
              <path
                d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                fill="hsl(43, 80%, 60%)"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Click sparkles burst */}
      {clickSparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-50"
          style={{ left: sparkle.x, top: sparkle.y }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: `hsl(${Math.random() * 60 + 30}, 80%, 60%)`,
                animation: 'sparkle-burst 0.6s ease-out forwards',
                transform: `rotate(${i * 45}deg) translateY(-20px)`,
              }}
            />
          ))}
        </div>
      ))}

      <style>{`
        @keyframes sparkle-burst {
          0% { 
            opacity: 1;
            transform: rotate(var(--rotation)) translateY(0);
          }
          100% { 
            opacity: 0;
            transform: rotate(var(--rotation)) translateY(-50px);
          }
        }
      `}</style>
    </>
  );
};
