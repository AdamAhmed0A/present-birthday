import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hueShift, setHueShift] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHueShift(prev => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 bg-gradient-hero overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at center, hsl(${hueShift}, 60%, 85%) 0%, transparent 70%)`,
        }}
      />

      {/* Decorative elements with hue rotation */}
      <div className="absolute top-20 left-10 animate-float opacity-60 animate-hue-rotate">
        <Star className="w-8 h-8 text-gold fill-gold" />
      </div>
      <div className="absolute top-40 right-16 animate-float-slow opacity-60" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6 text-gold fill-gold animate-color-cycle" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-50 animate-hue-rotate" style={{ animationDelay: '2s' }}>
        <Heart className="w-6 h-6 text-rose-dark fill-rose-dark" />
      </div>
      <div className="absolute bottom-32 right-24 animate-float-slow opacity-50 animate-color-cycle">
        <Heart className="w-8 h-8 text-rose-dark fill-rose-dark" />
      </div>
      <div className="absolute top-1/3 left-8 animate-wiggle">
        <Sparkles className="w-10 h-10 text-gold animate-color-cycle" />
      </div>
      <div className="absolute top-1/4 right-12 animate-wiggle" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="w-8 h-8 text-gold animate-hue-rotate" />
      </div>

      {/* Main content */}
      <div className={`text-center transition-all duration-1000 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Pre-title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold animate-color-cycle" />
          <span className="font-elegant text-lg tracking-[0.3em] text-muted-foreground uppercase">
            Celebrating
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold animate-color-cycle" />
        </div>

        {/* Name with rainbow effect */}
        <h1 className="font-script text-7xl md:text-9xl mb-4 animate-pulse-glow cursor-default hover:scale-105 transition-transform duration-300">
          <span className="text-gradient-rainbow">Rawan</span>
        </h1>

        {/* Age badge */}
        <div className={`relative inline-block my-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="relative group cursor-pointer">
            <div 
              className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse transition-all duration-300 group-hover:opacity-70"
              style={{ background: `hsl(${hueShift}, 70%, 50%)` }}
            />
            <div 
              className="relative rounded-full w-40 h-40 md:w-52 md:h-52 flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-110 animate-color-cycle"
              style={{ background: 'var(--gradient-gold)' }}
            >
              <div className="text-center">
                <span className="font-display text-6xl md:text-8xl font-bold text-primary-foreground drop-shadow-lg">
                  18
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 animate-bounce-gentle">
            <Sparkles className="w-8 h-8 text-gold fill-gold animate-hue-rotate" />
          </div>
          <div className="absolute -bottom-2 -left-2 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="w-6 h-6 text-gold fill-gold animate-color-cycle" />
          </div>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="font-display text-2xl md:text-4xl text-foreground mb-2 italic">
            Happy Birthday
          </p>
          <p className="font-elegant text-lg md:text-xl text-muted-foreground tracking-wide">
            A milestone worth celebrating
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 animate-bounce-gentle">
          <span className="font-elegant text-sm text-muted-foreground">Scroll to discover</span>
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
