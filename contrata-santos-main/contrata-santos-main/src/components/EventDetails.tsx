import { Building2, Users2, Award, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventDetails = () => {
  const organizers = [
    { name: "ILIS", icon: Building2 },
    { name: "Ministério do Empreendedorismo", icon: Award },
    { name: "Sebrae", icon: Handshake },
    { name: "Prefeitura de Santos", icon: Users2 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Detalhes do Evento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venha conhecer pessoalmente como o Contrata+ Brasil pode transformar seu negócio e conectar você a novas oportunidades.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                      Data e Horário
                    </h3>
                    <p className="text-2xl font-bold text-foreground">29 de Novembro, 2025</p>
                    <p className="text-xl text-muted-foreground">14h às 17h</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                      Local
                    </h3>
                    <p className="text-xl font-bold text-foreground">Parque Tecnológico de Santos</p>
                    <p className="text-muted-foreground">Santos - SP</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                    O que você vai encontrar
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Apresentação completa da plataforma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Orientação para cadastro no Contrata+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Networking com gestores públicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Esclarecimento de dúvidas ao vivo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-8">Realização</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {organizers.map((org, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <org.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-medium text-sm text-foreground">{org.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
