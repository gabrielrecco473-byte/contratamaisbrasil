import Hero from "@/components/Hero";
import AboutProgram from "@/components/AboutProgram";
import EventDetails from "@/components/EventDetails";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutProgram />
      <EventDetails />
      <FAQ />
      <FinalCTA />
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2025 Contrata+ Brasil • Uma iniciativa do Governo Federal
          </p>
          <p className="text-xs opacity-75 mt-2">
            Realização: ILIS, Ministério do Empreendedorismo, Sebrae, Prefeitura de Santos
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
