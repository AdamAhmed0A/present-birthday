interface Balloon {
  id: number;
  color: string;
  left: number;
  delay: number;
  size: number;
}

const balloonColors = [
  "hsl(43, 74%, 49%)", // gold
  "hsl(350, 60%, 85%)", // rose
  "hsl(350, 45%, 60%)", // rose medium
  "hsl(43, 80%, 70%)", // gold light
];

const balloons: Balloon[] = [
  { id: 1, color: balloonColors[0], left: 5, delay: 0, size: 60 },
  { id: 2, color: balloonColors[1], left: 15, delay: 0.5, size: 50 },
  { id: 3, color: balloonColors[2], left: 85, delay: 0.3, size: 55 },
  { id: 4, color: balloonColors[3], left: 92, delay: 0.8, size: 45 },
  { id: 5, color: balloonColors[0], left: 8, delay: 1.2, size: 40 },
  { id: 6, color: balloonColors[1], left: 88, delay: 1, size: 52 },
];

export const FloatingBalloons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 animate-float"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${4 + balloon.delay}s`,
          }}
        >
          <svg
            width={balloon.size}
            height={balloon.size * 1.4}
            viewBox="0 0 60 84"
            fill="none"
          >
            {/* Balloon body */}
            <ellipse
              cx="30"
              cy="28"
              rx="28"
              ry="28"
              fill={balloon.color}
              opacity="0.9"
            />
            {/* Highlight */}
            <ellipse
              cx="20"
              cy="18"
              rx="8"
              ry="10"
              fill="white"
              opacity="0.3"
            />
            {/* Knot */}
            <path
              d="M27 56L30 60L33 56"
              stroke={balloon.color}
              strokeWidth="3"
              fill="none"
            />
            {/* String */}
            <path
              d="M30 60Q32 70 28 84"
              stroke="hsl(30, 15%, 50%)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
