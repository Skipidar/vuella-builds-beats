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
                    Последняя песня Vuella
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Нажмите для просмотра на YouTube
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Thumbnails Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Первая песня", duration: "3:24" },
              { title: "Акустическая версия", duration: "4:12" },
              { title: "За кулисами", duration: "2:45" },
              { title: "Живое выступление", duration: "5:18" }
            ].map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video bg-card rounded-lg shadow-md overflow-hidden border border-border/20 group-hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white">▶️</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-center group-hover:text-primary transition-colors">
                  {video.title}
                </p>
              </div>
            ))}
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