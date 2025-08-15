export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Vuella
            </h3>
            <p className="text-sm text-background/80">
              Музыка, которая трогает сердце.<br />
              Украшения, которые строят стиль.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Навигация</h4>
            <nav className="space-y-2">
              <a href="#music" className="block text-sm text-background/80 hover:text-background transition-colors">
                Музыка
              </a>
              <a href="#jewelry" className="block text-sm text-background/80 hover:text-background transition-colors">
                Украшения
              </a>
              <a href="#about" className="block text-sm text-background/80 hover:text-background transition-colors">
                О Vuella
              </a>
              <a href="#connect" className="block text-sm text-background/80 hover:text-background transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Связаться</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>📧 hello@vuella.ru</p>
              <p>💬 @vuella_music</p>
              <p>📍 Санкт-Петербург, Россия</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-background/60">
            <div className="w-4 h-4 bg-gradient-lego rounded lego-brick"></div>
            <span>Создано с любовью Vuella © 2025</span>
          </div>
          
          <div className="flex space-x-6 text-background/80">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors text-xl">📺</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors text-xl">📷</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors text-xl">🎵</a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors text-xl">🌐</a>
            <a href="https://t.me/vuella_music" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors text-xl">💬</a>
          </div>
        </div>
      </div>
    </footer>
  );
};