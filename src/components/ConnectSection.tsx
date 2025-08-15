import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export const ConnectSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Спасибо!",
      description: "Вы успешно подписались на обновления Vuella!",
    });
    
    setEmail("");
    setName("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="space-y-4 mb-12">
            <h2 className="section-title">Присоединяйтесь к творческому сообществу Vuella</h2>
            <p className="section-subtitle">
              Получайте первыми новости о новых песнях, украшениях и эксклюзивных предложениях
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lego border-2 border-primary/20 mb-12 max-w-md mx-auto lego-brick">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary transition-colors"
                />
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary transition-colors"
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full group">
                Подписаться на обновления
                <span className="ml-2 transition-transform group-hover:scale-125">📧</span>
              </Button>
            </form>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Следите за Vuella в социальных сетях</h3>
            <div className="flex justify-center space-x-6">
              {[
                { platform: "YouTube", emoji: "📺", color: "hover:text-red-500", url: "https://youtube.com" },
                { platform: "Instagram", emoji: "📷", color: "hover:text-pink-500", url: "https://instagram.com" },
                { platform: "TikTok", emoji: "🎵", color: "hover:text-black", url: "https://tiktok.com" },
                { platform: "VK", emoji: "🎶", color: "hover:text-blue-500", url: "https://vk.com" }
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                >
                  <div className="text-4xl group-hover:animate-bounce-soft">
                    {social.emoji}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                    {social.platform}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Animated LEGO elements */}
          <div className="flex justify-center items-center gap-3 mt-12 opacity-30">
            <div className="w-4 h-4 bg-primary rounded animate-pulse-slow lego-brick"></div>
            <div className="w-6 h-6 bg-secondary rounded animate-bounce-soft lego-brick"></div>
            <div className="w-5 h-5 bg-accent rounded animate-float lego-brick"></div>
            <div className="w-4 h-4 bg-primary rounded animate-bounce-soft lego-brick" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};