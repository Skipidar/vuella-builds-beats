import { Button } from "@/components/ui/button";

export const MusicSection = () => {
  return (
    <section id="music" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="section-title">Почувствуйте ритм музыки Vuella</h2>
            <p className="section-subtitle">
              Погрузитесь в мир искренних мелодий и душевных историй
            </p>
          </div>

          {/* Main Video Player */}
          <div className="mb-12">
            <div className="aspect-video bg-card rounded-2xl shadow-lego overflow-hidden border border-border/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer shadow-lego">
                    <span className="text-3xl text-primary-foreground">▶️</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    Последний релиз Vuella
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Нажмите для просмотра на YouTube
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Live Stream Info */}
          <div className="bg-card rounded-xl p-6 shadow-lego border border-border/20 mb-8 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 text-primary">
                <span className="text-2xl">📺</span>
                <h3 className="text-xl font-bold">Прямые эфиры</h3>
                <span className="text-2xl">🎵</span>
              </div>
              <p className="text-lg text-foreground font-semibold">
                Каждый день с понедельника по пятницу
              </p>
              <p className="text-2xl font-bold text-primary">
                19:30 МСК
              </p>
              <p className="text-sm text-muted-foreground">
                Новые песни, живое общение и музыкальные импровизации
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => window.open('https://youtube.com', '_blank')}
              className="btn-accent group"
            >
              Смотреть больше на YouTube
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>

          {/* Animated Musical Elements */}
          <div className="absolute left-4 top-1/2 opacity-20">
            <div className="animate-bounce-soft text-2xl">🎵</div>
          </div>
          <div className="absolute right-4 top-1/3 opacity-20">
            <div className="animate-float text-2xl" style={{ animationDelay: '1s' }}>🎶</div>
          </div>
        </div>
      </div>
    </section>
  );
};