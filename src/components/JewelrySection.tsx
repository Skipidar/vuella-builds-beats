import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import redEarrings from "@/assets/red-earrings.jpg";
import bluePendant from "@/assets/blue-pendant.jpg";
import yellowKeychain from "@/assets/yellow-keychain.jpg";
import jewelryCollection from "@/assets/lego-jewelry-collection.jpg";

const products = [
  {
    id: 1,
    name: "Красные серьги LEGO",
    price: "1 500 ₽",
    image: redEarrings,
    description: "Яркие красные серьги из оригинальных деталей LEGO",
    color: "bg-primary"
  },
  {
    id: 2,
    name: "Синяя подвеска LEGO",
    price: "2 000 ₽",
    image: bluePendant,
    description: "Стильная подвеска с синими LEGO кубиками",
    color: "bg-secondary"
  },
  {
    id: 3,
    name: "Жёлтый брелок LEGO",
    price: "800 ₽",
    image: yellowKeychain,
    description: "Весёлый брелок из жёлтых деталей LEGO",
    color: "bg-accent"
  },
  {
    id: 4,
    name: "Набор украшений",
    price: "3 500 ₽",
    image: jewelryCollection,
    description: "Комплект из серёг, подвески и брелока",
    color: "bg-gradient-lego"
  }
];

export const JewelrySection = () => {
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

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={product.id} className="product-card group" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${product.color} rounded-lg`}></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-xs">❤️</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="btn-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    Купить
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-card rounded-2xl p-8 shadow-lego border border-border/20 max-w-2xl mx-auto mb-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-1 text-accent text-xl">
              ⭐⭐⭐⭐⭐
            </div>
            <blockquote className="text-lg italic text-muted-foreground">
              "Эти LEGO серьги такие уникальные! Обожаю стиль Vuella!"
            </blockquote>
            <cite className="text-sm font-medium text-foreground">
              — Анна К., счастливая покупательница
            </cite>
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