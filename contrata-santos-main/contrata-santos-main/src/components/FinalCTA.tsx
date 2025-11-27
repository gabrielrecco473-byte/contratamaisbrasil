import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const handleCTA = () => {
    window.open("https://www.sympla.com.br", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Vagas Limitadas</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Não perca esta oportunidade única!
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
            Esta é a sua chance de ser um dos primeiros MEIs de Santos a conhecer e aproveitar as oportunidades do Contrata+ Brasil.
          </p>

          <p className="text-base text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Conecte-se com o poder público, expanda seus horizontes e leve seu negócio para o próximo nível. Seu futuro profissional começa aqui!
          </p>

          <Button 
            onClick={handleCTA}
            size="lg"
            variant="cta"
            className="text-lg px-10 py-6 group animate-scale-in"
          >
            Garantir minha vaga agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-primary-foreground/70 mt-6">
            Evento 100% gratuito • Certificado de participação
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
