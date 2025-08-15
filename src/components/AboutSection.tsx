export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="section-title">О Vuella</h2>
            <p className="section-subtitle">
              Vuella — певица-автор песен с страстью к рассказыванию историй через музыку 
              и созданию уникальных украшений из деталей LEGO. Её песни сочетают душевные 
              мелодии с искренними текстами, а её украшения добавляют игривую искру вашему стилю.
            </p>
          </div>

          {/* Interactive LEGO Elements */}
          <div className="flex justify-center items-center gap-4 py-8">
            <div className="w-8 h-8 bg-primary rounded-lg lego-brick animate-bounce-soft hover:scale-110 transition-transform cursor-pointer"></div>
            <div className="w-6 h-6 bg-secondary rounded-lg lego-brick animate-float hover:scale-110 transition-transform cursor-pointer"></div>
            <div className="w-10 h-10 bg-accent rounded-lg lego-brick animate-pulse-slow hover:scale-110 transition-transform cursor-pointer"></div>
            <div className="w-8 h-8 bg-primary rounded-lg lego-brick animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-6 h-6 bg-secondary rounded-lg lego-brick animate-bounce-soft hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Stats or highlights */}
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">🎵</div>
              <h3 className="text-lg font-semibold">Искренняя музыка</h3>
              <p className="text-sm text-muted-foreground">
                Мелодии и тексты от сердца
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">🧱</div>
              <h3 className="text-lg font-semibold">Уникальные украшения</h3>
              <p className="text-sm text-muted-foreground">
                Ручная работа из деталей LEGO
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">✨</div>
              <h3 className="text-lg font-semibold">Творческий подход</h3>
              <p className="text-sm text-muted-foreground">
                Искусство, которое вдохновляет
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};