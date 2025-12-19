import { useEffect, useState } from "react";
import { Confetti } from "@/components/Confetti";
import { InteractiveSparkles } from "@/components/InteractiveSparkles";
import { FlowingBalloons } from "@/components/FlowingBalloons";
import { HeroSection } from "@/components/HeroSection";
import { MessageSection } from "@/components/MessageSection";
import { CakeSection } from "@/components/CakeSection";
import { FinalSection } from "@/components/FinalSection";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop confetti after 12 seconds
    const timer = setTimeout(() => setShowConfetti(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      {/* Background effects */}
      {showConfetti && <Confetti />}
      <InteractiveSparkles />
      <FlowingBalloons />

      {/* Content sections */}
      <HeroSection />
      <MessageSection />
      <CakeSection />
      <FinalSection />
    </main>
  );
};

export default Index;
