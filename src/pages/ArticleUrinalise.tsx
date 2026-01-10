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
              Um exame simples que revela MUITO: por que a urinálise deve estar no check-up do seu pet
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Se existisse um "relatório secreto" do corpo do seu cão ou gato, ele provavelmente começaria assim:
                urina.
              </p>

              <p>
                A urinálise é um daqueles exames que a gente só valoriza de verdade quando entende a quantidade de
                pistas que ela entrega — não só sobre bexiga e rins, mas também sobre pâncreas, fígado e até músculos.
              </p>

              <p>
                E aqui vai o ponto principal deste texto (pra você já sair com uma ideia clara): Inserir a urinálise na
                rotina de check-up é uma das maneiras de "pegar cedo" alterações que, mais tarde, custam caro — em
                saúde, em tempo e em preocupação.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                O que é urinálise (e por que ela é tão poderosa)?
              </h2>

              <p>
                A urina é composta por muita água e uma parte menor de substâncias orgânicas e inorgânicas. É exatamente
                essa "parte menor" que carrega informação clínica valiosa.
              </p>

              <p>Em uma urinálise, normalmente ocorre:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Avaliação física (cor, odor, aspecto e densidade urinária)</li>
                <li>Avaliação química (pH, proteínas, glicose, cetonas, sangue oculto, bilirrubina, etc.)</li>
                <li>Sedimentoscopia (avaliação microscópica: células, bactérias, cristais, cilindros…)</li>
              </ul>

              <p>Pense na urinálise como um "painel" que relata uma conversa com vários sistemas do corpo.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                "Mas meu pet está ótimo." É aí que mora o perigo (e a vantagem do check-up)
              </h2>

              <p>
                Muitos responsáveis esperam sinais clínicos para investigar se há algo errado com o pet. Só que, em
                vários problemas urinários, o corpo compensa alguns desequilíbrios por bastante tempo, sem alertas
                importantes. Ou seja: o pet parece normal, enquanto pequenas alterações já estão acontecendo, de maneira
                silenciosa.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Então lá vai! 7 coisas que a urinálise consegue revelar (às vezes antes de qualquer sinal clínico)
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                1) Como está a hidratação e a capacidade do rim de "concentrar" a urina
              </h3>
              <p>
                A densidade urinária diz muito sobre hidratação e função renal. Preferencialmente, devemos coletar a
                primeira urina da manhã, por refletir melhor a capacidade renal de concentração desta.
              </p>
              <p>
                Mas se isso não for possível, não há motivos para grandes preocupações. é possível analisar densidade
                urinária de urinas coletadas em outros momentos do dia.
              </p>
              <p className="italic">
                Atenção: cães e gatos têm faixas de valores de referência diferentes sobre a densidade urinária.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                2) O "clima" do organismo: pH urinário
              </h3>
              <p>O pH urinário de cães e gatos pode variar devido à dietas, medicações ou outros fatores.</p>
              <p>
                Por exemplo: Dietas com maior teor proteico animal tendem a acidificar o PH urinário, enquanto
                componentes vegetais e algumas dietas terapêuticas podem alcalinizar o PH.
              </p>
              <p>
                Por isso, é importante padronizar o horário da coleta. Sempre em jejum? Sempre sem jejum? Sempre pela
                manhã? Sempre no início da tarde?
              </p>
              <p>
                O pH não é "só um número": ele conversa com inflamação, tempo de armazenamento da amostra, retenção
                urinária e até infecções específicas (algumas bactérias produzem amônia e alcalinizam a urina).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                3) Proteína na urina (um alerta que merece respeito)
              </h3>
              <p>
                A fita reagente do exame pode detectar a presença de proteínas na urina. Chamamos este evento de
                proteinúria.
              </p>
              <p>
                Mas calma! Nem toda proteinúria é patológica. Ou seja, nem toda proteinúria significa presença de
                doença.
              </p>
              <p>
                Quando a proteína aparece, pode ser desde algo funcional ou transitório, até sinal de que precisamos
                investigar a situação com mais profundidade, somando uma avaliação clínica completa com exames mais
                específicos.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                4) Glicose na urina: pistas do pâncreas e do metabolismo
              </h3>
              <p>
                Glicose na urina pode aparecer por hiperglicemia (como no diabetes) ou por alterações na capacidade
                renal de absorver este elemento.
              </p>
              <p>
                E, em alguns casos, pode vir junto com cetonas — um combo que acende luz amarela (e às vezes vermelha)
                dependendo do quadro do paciente.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                5) Cetonas: quando o corpo está "queimando gordura" de um jeito que não deveria
              </h3>
              <p>
                As cetonas se relacionam ao metabolismo de lipídeos e podem aparecer em situações como jejum prolongado,
                diabetes, febre persistente, vômitos/diarreia crônica, sepse, entre outras.
              </p>
              <p>É um alerta importante que precisa ser investigado.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                6) Bilirrubina e sangue oculto: sinais que podem apontar além do trato urinário
              </h3>
              <p>
                A presença de bilirrubina na urina pode indicar que o fígado não deve estar funcionando tão bem ou que
                existe alguma dificuldade na "passagem" da bile — como se fosse um caminho entupido. Às vezes, isso
                também acontece quando o corpo está destruindo glóbulos vermelhos do sangue mais do que deveria.
              </p>
              <p>
                Já quando o resultado vem como "sangue oculto", não quer dizer necessariamente que a urina está cheia de
                sangue.
              </p>
              <p>Isso pode acontecer por alguns motivos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Pode haver sangramento leve no sistema urinário, como em inflamações, presença de cálculos ou
                  irritação
                </li>
                <li>
                  Pode estar havendo lesão muscular importante, quando o músculo libera uma substância que engana o
                  teste e parece "sangue", mas é a mioglobina
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                7) O "microscópio da verdade": sedimentoscopia
              </h3>
              <p>Na sedimentoscopia podem aparecer:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Células (escamosas, transição, e as tubulares renais — estas têm alta relevância quando em maior
                  quantidade)
                </li>
                <li>Bactérias, leveduras, parasitos</li>
                <li>
                  Cristais (muitos são sem grande importância clínica, mas persistência pode favorecer cálculos/plugs)
                </li>
                <li>Cilindros (e aqui é crucial: cilindros têm relação com os rins, e merecem atenção)</li>
              </ul>

              <p>
                Se o veterinário pedir para você coletar a urina em casa, seguem algumas dicas que podem te ajudar (e
                reduzir as chances de erros no laudo)
              </p>
              <p className="font-semibold">Esse bloco aqui vale ouro. Salva para consultar quando precisar!</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Recomendação de coleta:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Em jejum: se possível</li>
                <li>Primeira urina da manhã: melhor para avaliar densidade</li>
                <li>
                  Se for preciso realizar urocultura, é importante conversar com o veterinário para realizar a coleta na
                  clínica, por meios específicos, para evitar contaminação da amostra.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">⏱ Tempo é tudo</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Idealmente, a urina deve ser analisada fresca. Converse com o veterinário para saber em quanto tempo
                  essa amostra deve chegar ao laboratório.
                </li>
                <li>Não deixe o tubo aberto: isso pode influenciar nos resultados do exame.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                "Então quando eu devo pedir urinálise no check-up?"
              </h2>
              <p>Se você quer um hábito simples e poderoso: não faça check-up só com sangue.</p>
              <p>Converse com o seu veterinário para incluir urinálise + avaliação clínica — principalmente se:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>seu pet está entrando na fase adulta/sênior</li>
                <li>tem histórico de cálculo, cistite, obstrução, diabetes, doença renal</li>
                <li>bebe muita água, faz muito xixi, emagrece, fica mais quieto, muda apetite (mesmo que "de leve")</li>
              </ul>

              <p>Curtiu? É um exame acessível, rápido e extremamente informativo.</p>
              <p>
                Se você chegou até aqui, compartilhe esse texto com alguém que ama um cão ou um gato. Um check-up bem
                feito muda histórias — e a urinálise costuma ser uma parte "simples" que entrega muita informação
                importante.
              </p>
              <p className="font-semibold mt-8 pt-6 border-t border-border">
                Segue a gente para mais dicas sobre a saúde do sistema urinário do seu pet: @nnuver.vet
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
