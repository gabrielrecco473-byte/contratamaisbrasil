import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const Hero = () => {
  const handleCTA = () => {
    window.open("https://www.sympla.com.br", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(214 84% 42% / 0.95) 0%, hsl(214 84% 42% / 0.85) 50%, hsl(45 93% 58% / 0.3) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Lançamento Contrata+ Brasil
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-4 font-medium">
            Oportunidades para MEIs em Santos
          </p>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl">
            Descubra como a nova plataforma do governo federal vai conectar microempreendedores individuais a oportunidades reais no mercado público.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-primary-foreground/90 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">29 de Novembro, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-medium">14h às 17h</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Parque Tecnológico de Santos</span>
            </div>
          </div>

          <Button 
            onClick={handleCTA}
            size="lg" 
            variant="cta"
            className="text-lg px-8 py-6 animate-scale-in"
          >
            Garanta sua vaga gratuitamente
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
