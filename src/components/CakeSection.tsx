import { useEffect, useRef, useState } from "react";
import { BirthdayCake } from "./BirthdayCake";
import { PartyPopper } from "lucide-react";

export const CakeSection = () => {
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
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--champagne)) 50%, hsl(var(--rose)) 100%)'
      }}
    >
      {/* Section header */}
      <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center gap-4 mb-4">
          <PartyPopper className="w-10 h-10 text-gold rotate-[-15deg] animate-wiggle" />
          <PartyPopper className="w-10 h-10 text-rose-dark rotate-[15deg] animate-wiggle" style={{ animationDelay: '0.3s' }} />
        </div>
        <h2 className="font-script text-5xl md:text-6xl text-gradient-gold mb-4">
          Time to Celebrate!
        </h2>
        <p className="font-elegant text-xl text-muted-foreground">
          Make a wish and blow out the candles
        </p>
      </div>

      {/* Birthday Cake */}
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <BirthdayCake />
      </div>
    </section>
  );
};
