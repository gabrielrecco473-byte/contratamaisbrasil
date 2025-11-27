import { CheckCircle, Users, TrendingUp, FileCheck } from "lucide-react";
import programImage from "@/assets/program-illustration.jpg";

const AboutProgram = () => {
  const benefits = [
    {
      icon: Users,
      title: "Conexão Direta",
      description: "Plataforma gratuita que conecta MEIs diretamente a órgãos públicos",
    },
    {
      icon: FileCheck,
      title: "Sem Burocracia",
      description: "Contratação simplificada sem editais para serviços até R$ 12.545,11",
    },
    {
      icon: TrendingUp,
      title: "Mais Oportunidades",
      description: "Aumente sua renda participando do mercado público",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              O que é o Contrata+ Brasil?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O <strong>Contrata+ Brasil</strong> é uma iniciativa revolucionária do governo federal que simplifica a contratação de microempreendedores individuais (MEIs) pelo poder público.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A plataforma elimina barreiras burocráticas, permitindo que órgãos governamentais contratem serviços de MEIs de forma ágil e transparente, sem necessidade de processos licitatórios complexos para valores até R$ 12.545,11.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 bg-background rounded-lg transition-all duration-300 hover:shadow-md border border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={programImage} 
                alt="Ilustração do programa Contrata+ Brasil" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
