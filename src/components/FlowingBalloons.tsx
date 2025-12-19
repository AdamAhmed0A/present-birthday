import { useEffect, useState } from "react";

interface Balloon {
  id: number;
  x: number;
  hue: number;
  size: number;
  duration: number;
  delay: number;
  swayOffset: number;
}

export const FlowingBalloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const createBalloon = (id: number): Balloon => ({
      id,
      x: Math.random() * 100,
      hue: Math.random() * 360,
      size: 40 + Math.random() * 30,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 8,
      swayOffset: Math.random() * 2,
    });

    // Initial balloons
    const initial: Balloon[] = [];
    for (let i = 0; i < 15; i++) {
      initial.push(createBalloon(i));
    }
    setBalloons(initial);

    // Continuously add new balloons
    let counter = 15;
    const interval = setInterval(() => {
      setBalloons(prev => {
        const newBalloons = [...prev, createBalloon(counter++)];
        // Keep only last 25 balloons to avoid memory issues
        if (newBalloons.length > 25) {
          return newBalloons.slice(-25);
        }
        return newBalloons;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-balloon-rise"
          style={{
            left: `${balloon.x}%`,
            animationDuration: `${balloon.duration}s`,
            animationDelay: `${balloon.delay}s`,
            '--duration': `${balloon.duration}s`,
          } as React.CSSProperties}
        >
          <div 
            className="animate-balloon-sway"
            style={{ animationDelay: `${balloon.swayOffset}s` }}
          >
            <svg
              width={balloon.size}
              height={balloon.size * 1.4}
              viewBox="0 0 60 84"
              className="drop-shadow-lg"
            >
              {/* Balloon body with dynamic hue */}
              <defs>
                <radialGradient id={`grad-${balloon.id}`} cx="30%" cy="30%">
                  <stop offset="0%" stopColor={`hsl(${balloon.hue}, 70%, 75%)`} />
                  <stop offset="100%" stopColor={`hsl(${balloon.hue}, 70%, 55%)`} />
                </radialGradient>
              </defs>
              <ellipse
                cx="30"
                cy="28"
                rx="28"
                ry="28"
                fill={`url(#grad-${balloon.id})`}
              />
              {/* Highlight */}
              <ellipse
                cx="20"
                cy="18"
                rx="8"
                ry="10"
                fill="white"
                opacity="0.4"
              />
              {/* Knot */}
              <path
                d="M27 56L30 60L33 56"
                stroke={`hsl(${balloon.hue}, 60%, 45%)`}
                strokeWidth="3"
                fill="none"
              />
              {/* String */}
              <path
                d="M30 60Q32 70 28 84"
                stroke="hsl(30, 15%, 50%)"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};
