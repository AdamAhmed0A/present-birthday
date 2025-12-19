import { useEffect, useState } from "react";
import { Confetti } from "@/components/Confetti";
import { Sparkles } from "@/components/Sparkles";
import { FloatingBalloons } from "@/components/FloatingBalloons";
import { HeroSection } from "@/components/HeroSection";
import { MessageSection } from "@/components/MessageSection";
import { WishesSection } from "@/components/WishesSection";
import { FinalSection } from "@/components/FinalSection";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop confetti after 10 seconds
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      {/* Background effects */}
      {showConfetti && <Confetti />}
      <Sparkles />
      <FloatingBalloons />

      {/* Content sections */}
      <HeroSection />
      <MessageSection />
      <WishesSection />
      <FinalSection />
    </main>
  );
};

export default Index;
