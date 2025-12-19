import { useEffect, useRef, useState } from "react";
import { Heart, Quote } from "lucide-react";

export const MessageSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-rose"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative quote */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <Quote className="w-16 h-16 text-gold mx-auto mb-8 opacity-50" />
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
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
          <Heart className="w-8 h-8 text-rose-dark fill-rose-dark animate-heart-beat" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>
    </section>
  );
};
