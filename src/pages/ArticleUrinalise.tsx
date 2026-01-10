import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ArticleUrinalise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article className="py-20 md:py-32">
          <div className="container max-w-4xl">
            <Link
              to="/conhecimento"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Centro de Conhecimento
            </Link>

            <div className="mb-8">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Nefrologia e Urologia
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              O exame simples que revela MUITO: por que a urinálise deveria estar em todo check-up do seu pet
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Quando o assunto é saúde preventiva, a urinálise nem sempre recebe a atenção que merece. Mas você sabia 
                que ela pode revelar problemas nos rins, bexiga, pâncreas e fígado – muitas vezes antes de qualquer outro 
                sinal clínico aparecer?
              </p>

              <p>
                Esse exame simples e não invasivo avalia a composição química, física e microscópica da urina, oferecendo 
                informações valiosas sobre o funcionamento de órgãos essenciais e ajudando a detectar doenças em fases iniciais.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Quando a urinálise é indicada?</h2>

              <p>
                Além de fazer parte do check-up de rotina, a urinálise é fundamental na investigação de animais com sintomas 
                como aumento de sede e urina, dificuldade para urinar, urina com alteração de cor ou odor, entre outros.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Afinal, o que a urinálise pode detectar?
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Alterações nos Rins</h3>
              <p>
                Alterações como proteína na urina (proteinúria), baixa capacidade de concentração urinária, cilindros e 
                sangue podem indicar desde doença renal crônica até lesões agudas.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Doenças da Bexiga</h3>
              <p>
                Inflamação, infecção e cálculos urinários costumam alterar a cor, o odor e a composição da urina. A presença 
                de bactérias, sangue e cristais são sinais importantes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Problemas no Fígado</h3>
              <p>
                Alterações como bilirrubinúria intensa e cristais de bilirrubina podem indicar disfunção hepática.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Diabetes Mellitus</h3>
              <p>
                A presença de glicose na urina (glicosúria) é um sinal clássico de diabetes e exige atenção imediata.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Como a coleta deve ser feita?</h2>

              <p>
                A forma ideal de coleta varia com o objetivo do exame. A cistocentese (punção direta da bexiga) é o 
                padrão-ouro para cultura urinária. Já a micção espontânea pode ser útil para triagens iniciais, desde que 
                haja cuidado com a contaminação.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>

              <p>
                A urinálise é simples, acessível e extremamente informativa. Incluí-la no check-up do seu pet pode fazer 
                toda a diferença para identificar problemas cedo — quando ainda há mais tempo para agir.
              </p>

              <p className="text-base italic mt-8 pt-6 border-t border-border">
                Se o seu amigo peludo ainda não fez uma urinálise recentemente, converse com o veterinário!
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleUrinalise;
