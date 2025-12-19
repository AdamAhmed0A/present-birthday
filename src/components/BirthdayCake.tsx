import { useState } from "react";
import { Sparkles } from "lucide-react";

interface Candle {
  id: number;
  lit: boolean;
  x: number;
}

export const BirthdayCake = () => {
  const [candles, setCandles] = useState<Candle[]>([
    { id: 1, lit: true, x: 15 },
    { id: 2, lit: true, x: 25 },
    { id: 3, lit: true, x: 35 },
    { id: 4, lit: true, x: 45 },
    { id: 5, lit: true, x: 55 },
    { id: 6, lit: true, x: 65 },
    { id: 7, lit: true, x: 75 },
    { id: 8, lit: true, x: 85 },
  ]);
  const [allBlown, setAllBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const blowCandle = (id: number) => {
    setCandles(prev => {
      const updated = prev.map(c => c.id === id ? { ...c, lit: false } : c);
      const allOut = updated.every(c => !c.lit);
      if (allOut && !allBlown) {
        setAllBlown(true);
        setTimeout(() => setShowWish(true), 500);
      }
      return updated;
    });
  };

  const relightCandles = () => {
    setCandles(prev => prev.map(c => ({ ...c, lit: true })));
    setAllBlown(false);
    setShowWish(false);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Instruction */}
      <p className="font-elegant text-lg text-muted-foreground mb-4 animate-bounce-gentle">
        {allBlown ? "Click the cake to relight!" : "Click the flames to blow out the candles!"}
      </p>

      {/* Wish reveal */}
      {showWish && (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-20 animate-scale-in">
          <div className="flex items-center gap-2 px-6 py-3 bg-gradient-gold rounded-full shadow-gold">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
            <span className="font-script text-2xl text-primary-foreground">Make a Wish!</span>
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      )}

      {/* Cake SVG */}
      <svg
        width="300"
        height="250"
        viewBox="0 0 300 250"
        className={`cursor-pointer transition-transform duration-300 ${allBlown ? 'hover:scale-105' : ''}`}
        onClick={allBlown ? relightCandles : undefined}
      >
        <defs>
          {/* Cake gradients */}
          <linearGradient id="frostingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(350, 80%, 85%)" />
            <stop offset="100%" stopColor="hsl(350, 70%, 75%)" />
          </linearGradient>
          <linearGradient id="cakeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(30, 60%, 65%)" />
            <stop offset="100%" stopColor="hsl(25, 50%, 50%)" />
          </linearGradient>
          <linearGradient id="cakeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(43, 70%, 70%)" />
            <stop offset="100%" stopColor="hsl(35, 60%, 55%)" />
          </linearGradient>
          <linearGradient id="cakeGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(350, 60%, 80%)" />
            <stop offset="100%" stopColor="hsl(350, 50%, 65%)" />
          </linearGradient>
          <linearGradient id="plateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 0%, 95%)" />
            <stop offset="100%" stopColor="hsl(0, 0%, 85%)" />
          </linearGradient>
        </defs>

        {/* Plate */}
        <ellipse cx="150" cy="235" rx="140" ry="15" fill="url(#plateGrad)" />

        {/* Bottom tier */}
        <rect x="30" y="170" width="240" height="60" rx="5" fill="url(#cakeGrad1)" />
        <path d="M30 170 Q150 150 270 170" fill="url(#frostingGrad)" />
        
        {/* Middle tier */}
        <rect x="55" y="115" width="190" height="55" rx="5" fill="url(#cakeGrad2)" />
        <path d="M55 115 Q150 95 245 115" fill="url(#frostingGrad)" />

        {/* Top tier */}
        <rect x="80" y="70" width="140" height="45" rx="5" fill="url(#cakeGrad3)" />
        <path d="M80 70 Q150 50 220 70" fill="url(#frostingGrad)" />

        {/* Decorative dots */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <circle
            key={`dot-${i}`}
            cx={50 + i * 30}
            cy="195"
            r="4"
            fill="hsl(43, 80%, 60%)"
            className="animate-color-cycle"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}

        {/* "18" on cake */}
        <text
          x="150"
          y="150"
          textAnchor="middle"
          className="font-display"
          fontSize="28"
          fontWeight="bold"
          fill="hsl(43, 80%, 50%)"
        >
          18
        </text>

        {/* Candles */}
        {candles.map((candle) => {
          const xPos = 80 + (candle.x / 100) * 140;
          return (
            <g key={candle.id}>
              {/* Candle stick */}
              <rect
                x={xPos - 4}
                y="35"
                width="8"
                height="35"
                fill={`hsl(${candle.id * 45}, 70%, 65%)`}
                rx="2"
              />
              {/* Wick */}
              <line
                x1={xPos}
                y1="35"
                x2={xPos}
                y2="28"
                stroke="hsl(30, 20%, 30%)"
                strokeWidth="2"
              />
              {/* Flame */}
              {candle.lit && (
                <g
                  className="cursor-pointer animate-candle-flicker"
                  onClick={(e) => {
                    e.stopPropagation();
                    blowCandle(candle.id);
                  }}
                  style={{ transformOrigin: `${xPos}px 20px` }}
                >
                  <ellipse
                    cx={xPos}
                    cy="20"
                    rx="6"
                    ry="12"
                    fill="hsl(43, 100%, 60%)"
                    className="animate-glow-pulse"
                  />
                  <ellipse
                    cx={xPos}
                    cy="22"
                    rx="3"
                    ry="6"
                    fill="hsl(30, 100%, 50%)"
                  />
                  <ellipse
                    cx={xPos}
                    cy="24"
                    rx="1.5"
                    ry="3"
                    fill="hsl(200, 80%, 70%)"
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};
