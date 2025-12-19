import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float opacity-60">
        <Star className="w-8 h-8 text-gold fill-gold" />
      </div>
      <div className="absolute top-40 right-16 animate-float-delayed opacity-60">
        <Star className="w-6 h-6 text-gold fill-gold" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-50">
        <Heart className="w-6 h-6 text-rose-dark fill-rose-dark" />
      </div>
      <div className="absolute bottom-32 right-24 animate-float-delayed opacity-50">
        <Heart className="w-8 h-8 text-rose-dark fill-rose-dark" />
      </div>

      {/* Main content */}
      <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Pre-title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <span className="font-elegant text-lg tracking-[0.3em] text-muted-foreground uppercase">
            Celebrating
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Name */}
        <h1 className="font-script text-7xl md:text-9xl text-gradient-gold mb-4 animate-glow-pulse">
          Rawan
        </h1>

        {/* Age badge */}
        <div className={`relative inline-block my-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-gold rounded-full blur-xl opacity-40 animate-pulse" />
            <div className="relative bg-gradient-gold rounded-full w-40 h-40 md:w-52 md:h-52 flex items-center justify-center shadow-gold">
              <div className="text-center">
                <span className="font-display text-6xl md:text-8xl font-bold text-primary-foreground">
                  18
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 animate-bounce-soft">
            <Sparkles className="w-8 h-8 text-gold fill-gold" />
          </div>
          <div className="absolute -bottom-2 -left-2 animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="w-6 h-6 text-gold fill-gold" />
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
        <div className="flex flex-col items-center gap-2 animate-bounce-soft">
          <span className="font-elegant text-sm text-muted-foreground">Scroll to discover</span>
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
