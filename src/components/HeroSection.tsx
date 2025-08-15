import { Button } from "@/components/ui/button";
import heroImage from "/lovable-uploads/aba9f26d-589e-4ef5-87bd-c0c3133123f6.png";
export const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 bg-primary rounded-lg animate-float lego-brick"></div>
        <div className="absolute top-1/4 right-20 w-12 h-12 bg-secondary rounded-lg animate-bounce-soft lego-brick"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-accent rounded-lg animate-pulse-slow lego-brick"></div>
        <div className="absolute bottom-10 right-10 w-14 h-14 bg-primary rounded-lg animate-float lego-brick" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="hero-title animate-lego-build">
                Откройте для себя Vuella: Музыка, которая трогает, украшения, которые строят
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Исследуйте мои песни на YouTube и покупайте уникальные серьги, подвески и брелоки из деталей LEGO.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16 lg:justify-center lg:ml-12 mx-[93px] px-[10px] py-[5px] my-[34px]">
              <Button onClick={() => document.getElementById('music')?.scrollIntoView({
              behavior: 'smooth'
            })} className="btn-hero group mx-0 px-[31px] my-0">
                🎵 Слушать мою музыку
                <span className="ml-2 transition-transform group-hover:scale-110">▶️</span>
              </Button>
              <Button onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })} className="btn-hero group my-0 px-[70px]">
                📖 Биография
                <span className="ml-2 transition-transform group-hover:scale-110">👤</span>
              </Button>
              <Button onClick={() => document.getElementById('jewelry')?.scrollIntoView({
              behavior: 'smooth'
            })} className="btn-hero-secondary group px-[20px]">
                🧱 Купить LEGO украшения
                <span className="ml-2 transition-transform group-hover:rotate-12">✨</span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-lego rounded-3xl opacity-30 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl"></div>
              <img src={heroImage} alt="Vuella - певица-автор песен с LEGO украшениями и короной" className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto transition-transform duration-500 hover:scale-105 object-cover aspect-square" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};