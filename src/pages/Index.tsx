import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MusicSection } from "@/components/MusicSection";
import { JewelrySection } from "@/components/JewelrySection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <JewelrySection />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default Index;
