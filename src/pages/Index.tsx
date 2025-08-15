import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MusicSection } from "@/components/MusicSection";
import { JewelrySection } from "@/components/JewelrySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <JewelrySection />
      <Footer />
    </div>
  );
};

export default Index;
