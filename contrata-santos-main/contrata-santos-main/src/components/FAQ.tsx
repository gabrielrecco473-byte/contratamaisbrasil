import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é o Contrata+ Brasil?",
      answer: "O Contrata+ Brasil é uma plataforma digital gratuita criada pelo governo federal para facilitar a conexão entre microempreendedores individuais (MEIs) e órgãos públicos. A plataforma permite que o poder público contrate serviços de MEIs de forma simplificada, sem necessidade de licitação para valores até R$ 12.545,11, reduzindo a burocracia e ampliando oportunidades para pequenos empreendedores.",
    },
    {
      question: "Quem pode participar do programa?",
      answer: "Podem participar todos os Microempreendedores Individuais (MEIs) regularmente cadastrados e ativos. É necessário ter CNPJ ativo, estar em dia com as obrigações tributárias e ter os documentos da empresa regularizados. O programa é voltado especialmente para MEIs que oferecem serviços que podem ser contratados pelo poder público em diversas áreas.",
    },
    {
      question: "Como faço para me inscrever e participar do evento?",
      answer: "Para participar do evento de lançamento, basta clicar no botão 'Garanta sua vaga' nesta página e completar seu cadastro no Sympla. O evento é totalmente gratuito e acontecerá no dia 29 de novembro de 2025, das 14h às 17h, no Parque Tecnológico de Santos. As vagas são limitadas, então recomendamos fazer sua inscrição o quanto antes.",
    },
    {
      question: "O evento é gratuito?",
      answer: "Sim! O evento é 100% gratuito. Nossa missão é democratizar o acesso às oportunidades do mercado público, e isso começa oferecendo um evento acessível a todos os MEIs interessados. Você terá acesso a todas as informações sobre a plataforma, orientações para cadastro e oportunidade de networking sem nenhum custo.",
    },
    {
      question: "Quais são os benefícios de participar?",
      answer: "Ao participar do evento, você terá acesso em primeira mão à plataforma Contrata+ Brasil, aprenderá como se cadastrar e como encontrar oportunidades. Além disso, poderá fazer networking com gestores públicos e outros empreendedores, esclarecer dúvidas diretamente com especialistas e descobrir como expandir seu negócio através de contratos com o setor público, tudo isso sem precisar enfrentar processos burocráticos complexos.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o programa e o evento
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
