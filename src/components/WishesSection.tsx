import { useEffect, useRef, useState } from "react";
import { Cake, Gift, GraduationCap, Heart, Plane, Sparkles, Star } from "lucide-react";

const wishes = [
  {
    icon: Heart,
    title: "Love",
    message: "May love surround you in every moment",
    color: "text-rose-dark",
  },
  {
    icon: Star,
    title: "Success",
    message: "May you achieve everything you dream of",
    color: "text-gold",
  },
  {
    icon: Sparkles,
    title: "Joy",
    message: "May your days be filled with happiness",
    color: "text-gold",
  },
  {
    icon: GraduationCap,
    title: "Wisdom",
    message: "May knowledge guide your path forward",
    color: "text-foreground",
  },
  {
    icon: Plane,
    title: "Adventure",
    message: "May life take you to amazing places",
    color: "text-gold",
  },
  {
    icon: Gift,
    title: "Blessings",
    message: "May blessings find you every day",
    color: "text-rose-dark",
  },
];

export const WishesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-background"
    >
      {/* Section header */}
      <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-script text-5xl md:text-6xl text-gradient-gold mb-4">
          Birthday Wishes
        </h2>
        <p className="font-elegant text-xl text-muted-foreground">
          Wishing you all the best on your special day
        </p>
      </div>

      {/* Wishes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {wishes.map((wish, index) => (
          <div
            key={wish.title}
            className={`group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-champagne mb-6 group-hover:scale-110 transition-transform duration-300">
                <wish.icon className={`w-8 h-8 ${wish.color}`} />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {wish.title}
              </h3>
              <p className="font-elegant text-lg text-muted-foreground">
                {wish.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cake decoration */}
      <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse" />
          <Cake className="relative w-20 h-20 text-gold animate-bounce-soft" />
        </div>
      </div>
    </section>
  );
};
