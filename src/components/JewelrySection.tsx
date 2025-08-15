import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import redEarrings from "@/assets/red-earrings.jpg";
import bluePendant from "@/assets/blue-pendant.jpg";
import yellowKeychain from "@/assets/yellow-keychain.jpg";
import jewelryCollection from "@/assets/lego-jewelry-collection.jpg";

const categories = [
  {
    id: 1,
    name: "Серьги",
    image: redEarrings,
    description: "Стильные серьги из LEGO деталей",
    color: "bg-primary",
    itemCount: 12
  },
  {
    id: 2,
    name: "Подвески",
    image: bluePendant,
    description: "Уникальные подвески с LEGO элементами",
    color: "bg-secondary",
    itemCount: 8
  },
  {
    id: 3,
    name: "Браслеты",
    image: jewelryCollection,
    description: "Креативные браслеты из LEGO кубиков",
    color: "bg-accent",
    itemCount: 6
  },
  {
    id: 4,
    name: "Брелоки",
    image: yellowKeychain,
    description: "Весёлые брелоки из цветных деталей",
    color: "bg-gradient-lego",
    itemCount: 15
  }
];

const testimonials = [
  {
    id: 1,
    text: "Эти LEGO серьги такие уникальные! Обожаю стиль Vuella!",
    author: "Анна К.",
    rating: 5
  },
  {
    id: 2,
    text: "Подвеска просто невероятная! Очень качественная работа!",
    author: "Мария П.",
    rating: 5
  },
  {
    id: 3,
    text: "Браслет получился даже красивее, чем на фото! Спасибо!",
    author: "Елена С.",
    rating: 5
  },
  {
    id: 4,
    text: "Заказала набор - все в восторге! Необычно и стильно!",
    author: "Дарья В.",
    rating: 5
  }
];

export const JewelrySection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="jewelry" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="section-title">Создайте свой стиль с LEGO украшениями Vuella</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Каждое украшение создано вручную с любовью и вниманием к деталям. 
            Уникальные дизайны, которые выражают вашу индивидуальность.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card key={category.id} className="product-card group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Category Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${category.color} rounded-lg`}></div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                />
                <div className="absolute top-3 right-3 bg-white/90 text-foreground px-2 py-1 rounded-full text-xs font-semibold">
                  {category.itemCount} шт.
                </div>
              </div>

              {/* Category Info */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                <Button 
                  className="btn-accent w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  Смотреть все
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-card rounded-2xl p-8 shadow-lego border border-border/20 max-w-2xl mx-auto mb-8 relative">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-1 text-accent text-xl">
              {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <blockquote className="text-lg italic text-muted-foreground">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <cite className="text-sm font-medium text-foreground">
              — {testimonials[currentTestimonial].author}, счастливая покупательница
            </cite>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="text-primary">←</span>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="text-primary">→</span>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-hero group">
            Купить сейчас
            <span className="ml-2 transition-transform group-hover:rotate-12">🧱</span>
          </Button>
        </div>
      </div>
    </section>
  );
};