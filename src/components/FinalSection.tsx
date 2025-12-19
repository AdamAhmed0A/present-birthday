import { useEffect, useRef, useState } from "react";
import { Heart, PartyPopper, Sparkles } from "lucide-react";

export const FinalSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleHeartClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--champagne)) 50%, hsl(var(--rose)) 100%)'
      }}
    >
      {/* Decorative sparkles */}
      <div className="absolute top-20 left-1/4 animate-sparkle">
        <Sparkles className="w-8 h-8 text-gold animate-hue-rotate" />
      </div>
      <div className="absolute top-40 right-1/4 animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-6 h-6 text-gold animate-color-cycle" />
      </div>
      <div className="absolute bottom-40 left-1/3 animate-sparkle" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-10 h-10 text-gold animate-hue-rotate" />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Party poppers */}
        <div className={`flex justify-center gap-8 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <PartyPopper className="w-12 h-12 text-gold rotate-[-30deg] animate-wiggle" />
          <PartyPopper className="w-12 h-12 text-rose-dark rotate-[30deg] animate-wiggle" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Main text */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-script text-6xl md:text-8xl text-gradient-rainbow mb-6 cursor-default hover:scale-105 transition-transform duration-300">
            Cheers to 18!
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-2xl md:text-3xl text-foreground mb-4 italic">
            May this year bring you everything your heart desires
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-elegant text-xl text-muted-foreground mb-12">
            Wishing you a birthday as wonderful as you are
          </p>
        </div>

        {/* Interactive signature */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div 
            className="inline-flex items-center gap-3 px-8 py-4 bg-card/80 backdrop-blur-sm rounded-full border border-gold/30 shadow-gold cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={handleHeartClick}
          >
            <Heart 
              className={`w-6 h-6 text-rose-dark fill-rose-dark animate-heart-beat transition-transform ${clickCount > 0 ? 'scale-125' : ''}`}
              style={{ animationDelay: '0s' }}
            />
            <span className="font-script text-3xl text-gradient-gold">
              With Love
            </span>
            <Heart 
              className={`w-6 h-6 text-rose-dark fill-rose-dark animate-heart-beat transition-transform ${clickCount > 0 ? 'scale-125' : ''}`}
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          {clickCount > 0 && (
            <p className="mt-4 font-elegant text-muted-foreground animate-scale-in">
              💕 {clickCount} {clickCount === 1 ? 'heart' : 'hearts'} sent with love!
            </p>
          )}
        </div>

        {/* Year badge */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block animate-color-cycle">
            <div className="font-display text-6xl md:text-7xl font-bold text-gold/20 hover:text-gold/40 transition-colors cursor-default">
              2025
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose/50 to-transparent" />
    </section>
  );
};
