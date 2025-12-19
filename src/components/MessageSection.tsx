import { useEffect, useRef, useState } from "react";
import { Heart, Quote } from "lucide-react";

export const MessageSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hue, setHue] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setHue(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(${350 + hue * 0.1}, 60%, 90%) 0%, hsl(${350 + hue * 0.05}, 60%, 85%) 100%)`
      }}
    >
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-dark/20 fill-rose-dark/20 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 30 + i * 5,
              height: 30 + i * 5,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Decorative quote */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <Quote className="w-16 h-16 text-gold mx-auto mb-8 opacity-50 animate-color-cycle" />
        </div>

        {/* Main message */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8 leading-relaxed">
            On this special day, may all your dreams take flight
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-elegant text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            Dear Rawan, turning 18 is more than just a number – it's the beginning of an incredible 
            journey filled with endless possibilities. May this new chapter bring you joy beyond measure, 
            adventures that take your breath away, and moments that become beautiful memories.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-elegant text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            You are a light in the lives of everyone who knows you. Your kindness, your smile, 
            and your spirit make the world a more beautiful place. Here's to you – may your 18th year 
            be as extraordinary as you are.
          </p>
        </div>

        {/* Heart decoration */}
        <div className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold animate-color-cycle" />
          <Heart className="w-8 h-8 text-rose-dark fill-rose-dark animate-heart-beat cursor-pointer hover:scale-125 transition-transform" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold animate-color-cycle" />
        </div>
      </div>
    </section>
  );
};
