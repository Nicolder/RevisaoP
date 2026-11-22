import type { GlossaryTerm, Module } from '../types/content.ts';

export const workGlossary: GlossaryTerm[] = [
  {
    id: 'organizacao-cientifica-trabalho',
    term: 'Organização Científica do Trabalho',
    definition:
      'Sistema formulado por Frederick W. Taylor no início do século XX que fragmenta tarefas, separa concepção e execução e estabelece o tempo-padrão como norma de produtividade.',
    discipline: 'trabalho',
    sourceNote: 'Taylor (1911/1990), Princípios de Administração Científica.',
  },
  {
    id: 'separacao-concepcao-execucao',
    term: 'Separação entre concepção e execução',
    definition:
      'Divisão técnica pela qual a gerência concentra o planejamento, os métodos e o saber produtivo, restando ao operário a repetição estrita de gestos prescritos.',
    discipline: 'trabalho',
    sourceNote: 'Taylor (1911/1990), cap. 2.',
  },
  {
    id: 'linha-de-montagem',
    term: 'Linha de montagem semiautomática',
    definition:
      'Dispositivo produtivo consolidado por Henry Ford em que a esteira conduz o objeto de trabalho até o trabalhador estacionário, impondo ritmo coletivo e contínuo.',
    discipline: 'trabalho',
    sourceNote: 'Ford (1922/1924), Minha Vida e Minha Obra.',
  },
  {
    id: 'subjetividade-historica',
    term: 'Subjetividade histórica',
    definition:
      'Modo de sentir, agir e atribuir sentido constituído na interação concreta com relações materiais de trabalho, raça, gênero e classe em determinado período.',
    discipline: 'transversal',
    sourceNote: 'Conceito transversal às duas trilhas curriculares.',
  },
  {
    id: 'toyotismo',
    term: 'Toyotismo',
    definition:
      'Modelo produtivo desenvolvido na Toyota entre os anos 1950 e 1970 e sistematizado por Taiichi Ohno, baseado em produção enxuta, polivalência operária, trabalho em equipes e eliminação de desperdícios.',
    discipline: 'trabalho',
    sourceNote: 'Ohno (1988/1997), O Sistema Toyota de Produção.',
  },
  {
    id: 'acumulacao-flexivel',
    term: 'Acumulação flexível',
    definition:
      'Regime econômico analisado por David Harvey após a crise fordista dos anos 1970, marcado por flexibilidade dos processos produtivos, contratos atípicos, terceirização e mercados fragmentados.',
    discipline: 'trabalho',
    sourceNote: 'Harvey (1989/1992), Condição Pós-Moderna, Parte II.',
  },
  {
    id: 'just-in-time-kanban',
    term: 'Just-in-time e kanban',
    definition:
      'Princípios toyotistas de produção puxada pela demanda com estoque mínimo (just-in-time) e controle visual de fluxo por cartões de reposição (kanban), intensificando o ritmo sem folgas.',
    discipline: 'trabalho',
    sourceNote: 'Ohno (1988/1997), caps. 1 e 2.',
  },
  {
    id: 'liofilizacao-organizacional',
    term: 'Liofilização organizacional',
    definition:
      'Processo descrito por Ricardo Antunes de enxugamento da força de trabalho viva, terceirização periférica e captura da subjetividade por metas de qualidade total.',
    discipline: 'trabalho',
    sourceNote: 'Antunes (1995), Adeus ao Trabalho?; (1999), Os Sentidos do Trabalho.',
  },
  {
    id: 'uberizacao',
    term: 'Uberização do trabalho',
    definition:
      'Tendência contemporânea de informalização e transferência de riscos e custos ao trabalhador, mediada por plataformas digitais e organizada pela disponibilidade contínua sob demanda.',
    discipline: 'trabalho',
    sourceNote: 'Abílio (2020), Estudos Avançados, v. 34, n. 98.',
  },
  {
    id: 'gerenciamento-algoritmico',
    term: 'Gerenciamento algorítmico',
    definition:
      'Forma de controle e subordinação em que softwares definem tarifas, distribuição de tarefas, ranqueamentos, bloqueios e metas sem reconhecimento de vínculo empregatício.',
    discipline: 'trabalho',
    sourceNote: 'Abílio (2020); Antunes (2020).',
  },
  {
    id: 'autogerente-subordinado',
    term: 'Autogerente subordinado',
    definition:
      'Condição paradoxal do trabalhador plataformizado que arca com os custos da própria reprodução e gerencia horários, mas segue subordinado às regras opacas e metas da plataforma.',
    discipline: 'trabalho',
    sourceNote: 'Abílio (2020), p. 111-126.',
  },
  {
    id: 'trabalho-prescrito',
    term: 'Trabalho prescrito (tarefa)',
    definition:
      'Conjunto de normas, procedimentos operacionais, metas e tempos estabelecidos pela organização antes da execução concreta, formulado inicialmente na Ergonomia da Atividade francófona.',
    discipline: 'trabalho',
    sourceNote: 'Wisner (1987); Daniellou (2004); Dejours (1980/1987).',
  },
  {
    id: 'trabalho-real',
    term: 'Trabalho real (atividade)',
    definition:
      'Aquilo que o trabalhador efetivamente mobiliza com corpo, afeto e saber prático para dar conta dos imprevistos, variabilidades e lacunas da prescrição.',
    discipline: 'trabalho',
    sourceNote: 'Wisner (1987); Guérin et al. (2001); Dejours (1980/1987).',
  },
  {
    id: 'inteligencia-pratica',
    term: 'Inteligência prática (métis)',
    definition:
      'Sabedoria astuciosa e engenhosidade corporal desenvolvida no contato direto com o real do trabalho para contornar incidentes que os manuais técnicos não preveem.',
    discipline: 'trabalho',
    sourceNote: 'Dejours, Abdoucheli e Jayet (1994); Dejours (1998/1999).',
  },
  {
    id: 'sofrimento-criativo',
    term: 'Sofrimento criativo',
    definition:
      'Vivência de tensão diante do real do trabalho que, encontrando margem de autonomia e negociação, impulsiona inventividade, cooperação e saúde psíquica.',
    discipline: 'trabalho',
    sourceNote: 'Dejours, Abdoucheli e Jayet (1994).',
  },
  {
    id: 'sofrimento-patogenico',
    term: 'Sofrimento patogênico',
    definition:
      'Sofrimento residual que se instala quando a organização do trabalho bloqueia toda margem de adaptação e reconhecimento, conduzindo ao desgaste e ao adoecimento.',
    discipline: 'trabalho',
    sourceNote: 'Dejours, Abdoucheli e Jayet (1994).',
  },
  {
    id: 'estrategias-de-defesa',
    term: 'Estratégias coletivas de defesa',
    definition:
      'Mecanismos simbólicos construídos pelos coletivos de trabalho para suportar o medo, o risco ou a penosidade e manter a normalidade psíquica, sem alterar as causas reais do sofrimento.',
    discipline: 'trabalho',
    sourceNote: 'Dejours (1980/1987); Dejours, Abdoucheli e Jayet (1994).',
  },
  {
    id: 'normalidade-sofrente',
    term: 'Normalidade sofrente',
    definition:
      'Equilíbrio dinâmico e custoso entre sofrimento imposto pela organização e defesas individuais ou coletivas que evita a descompensação clínica, mas pode gerar alienação.',
    discipline: 'trabalho',
    sourceNote: 'Dejours (1998/1999), A Banalização da Injustiça Social.',
  },
  {
    id: 'reconhecimento-no-trabalho',
    term: 'Reconhecimento no trabalho',
    definition:
      'Retribuição simbólica central na Psicodinâmica que valida a contribuição do trabalhador pelo fazer, convertendo sofrimento em prazer e consolidando a identidade.',
    discipline: 'trabalho',
    sourceNote: 'Dejours, Abdoucheli e Jayet (1994).',
  },
  {
    id: 'julgamento-de-utilidade',
    term: 'Julgamento de utilidade',
    definition:
      'Avaliação proferida por chefias, subordinados ou clientes sobre a relevância técnica, econômica ou social da atividade realizada pelo trabalhador.',
    discipline: 'trabalho',
    sourceNote: 'Dejours, Abdoucheli e Jayet (1994).',
  },
  {
    id: 'julgamento-de-beleza',
    term: 'Julgamento de beleza',
    definition:
      'Avaliação realizada pelos pares do mesmo ofício sobre a conformidade às regras da arte, qualidade técnica e estilo singular do fazer profissional.',
    discipline: 'trabalho',
    sourceNote: 'Dejours, Abdoucheli e Jayet (1994); Dejours (1998/1999).',
  },
  {
    id: 'sublimacao-no-trabalho',
    term: 'Sublimação no trabalho',
    definition:
      'Destino pulsional pelo qual o sujeito canaliza desejos e conflitos psíquicos para uma atividade socialmente valorizada e reconhecida no campo do trabalho.',
    discipline: 'trabalho',
    sourceNote: 'Dejours (1980/1987); Dejours, Abdoucheli e Jayet (1994).',
  },
  {
    id: 'sindrome-de-burnout',
    term: 'Síndrome de Burnout',
    definition:
      'Síndrome resultante de estresse ocupacional crônico mal administrado, caracterizada por exaustão emocional, cinismo ou despersonalização e baixa realização profissional.',
    discipline: 'trabalho',
    sourceNote: 'Maslach e Leiter (1997/1999); Wanderley Codo (1999).',
  },
  {
    id: 'fenomeno-ocupacional-qd85',
    term: 'Fenômeno ocupacional (CID-11 QD85)',
    definition:
      'Classificação da Organização Mundial da Saúde vigente desde 2022 que enquadra o burnout especificamente como fenômeno ligado ao contexto de trabalho, e não como doença individual isolada.',
    discipline: 'trabalho',
    sourceNote: 'OMS CID-11 (2022), código QD85; Portaria GM/MS nº 1.999/2023.',
  },
  {
    id: 'assedio-moral-trabalho',
    term: 'Assédio moral no trabalho',
    definition:
      'Exposição repetitiva e prolongada do trabalhador a condutas abusivas, humilhações e constrangimentos que degradam o ambiente laboral e atentam contra a dignidade e a saúde.',
    discipline: 'trabalho',
    sourceNote: 'Hirigoyen (1998/2000; 2001/2002); Barreto (2003).',
  },
  {
    id: 'assedio-moral-organizacional',
    term: 'Assédio moral organizacional',
    definition:
      'Violência psicológica incorporada às estratégias gerenciais da empresa, mediante metas abusivas, punições públicas e humilhações sistemáticas para elevar a produtividade pelo medo.',
    discipline: 'trabalho',
    sourceNote: 'Barreto (2003), Violência, saúde e trabalho; Hirigoyen (2001/2002).',
  },
  {
    id: 'ntep',
    term: 'Nexo Técnico Epidemiológico Previdenciário (NTEP)',
    definition:
      'Mecanismo instituído pela Lei nº 11.430/2006 e regulamentado pelo Decreto nº 6.042/2007 (Lista C) que permite ao INSS presumir nexo ocupacional pelo cruzamento CNAE x CID sem depender da CAT.',
    discipline: 'trabalho',
    sourceNote: 'Lei nº 11.430/2006; Decreto nº 6.042/2007.',
  },
  {
    id: 'ldrt',
    term: 'Lista de Doenças Relacionadas ao Trabalho (LDRT)',
    definition:
      'Rol oficial do Ministério da Saúde para vigilância e atenção no SUS, instituído pela Portaria GM/MS nº 1.339/1999 (182 códigos) e ampliado pela Portaria GM/MS nº 1.999/2023 para 347 códigos.',
    discipline: 'trabalho',
    sourceNote: 'Portaria GM/MS nº 1.339/1999; Portaria GM/MS nº 1.999/2023.',
  },
  {
    id: 'cerest-renast',
    term: 'CEREST e RENAST',
    definition:
      'Centros de Referência em Saúde do Trabalhador e Rede Nacional de Atenção Integral à Saúde do Trabalhador no SUS, espaços de vigilância, matriciamento e atuação interdisciplinar da Psicologia.',
    discipline: 'trabalho',
    sourceNote: 'CFP/CREPOP (2008 / 2019), Saúde do Trabalhador no âmbito da Saúde Pública.',
  },
  {
    id: 'centralidade-do-trabalho',
    term: 'Centralidade do trabalho',
    definition:
      'Tese defendida por Ricardo Antunes de que o trabalho segue estruturando a reprodução material, a sociabilidade e a subjetividade, mesmo com a retração do emprego fabril clássico.',
    discipline: 'trabalho',
    sourceNote: 'Antunes (1995; 1999), Os Sentidos do Trabalho.',
  },
  {
    id: 'sentido-e-significado',
    term: 'Sentido e significado do trabalho',
    definition:
      'Distinção analítica entre significado (representação social e cultural compartilhada sobre o trabalhar) e sentido (apropriação singular e afetiva construída pelo sujeito).',
    discipline: 'trabalho',
    sourceNote: 'Bendassolli (2009); Morin (2001).',
  },
  {
    id: 'real-da-atividade',
    term: 'Real da atividade',
    definition:
      'Na Clínica da Atividade de Yves Clot, engloba tanto a atividade efetivamente realizada quanto o que não se fez, o que se tentou fazer, o que se conteve e as ações impedidas pelo contexto.',
    discipline: 'trabalho',
    sourceNote: 'Clot (2008/2010), Trabalho e poder de agir.',
  },
  {
    id: 'genero-profissional-estilo',
    term: 'Gênero profissional e estilo',
    definition:
      'O gênero profissional é o patrimônio transpessoal de regras e modos de fazer compartilhados num ofício; o estilo é a recriação singular desse gênero pelo trabalhador.',
    discipline: 'trabalho',
    sourceNote: 'Clot (2006; 2008/2010).',
  },
  {
    id: 'poder-de-agir',
    term: 'Poder de agir',
    definition:
      'Capacidade efetiva do trabalhador e do coletivo de transformar a situação laboral e desenvolver o ofício, ampliada por métodos dialógicos como a autoconfrontação.',
    discipline: 'trabalho',
    sourceNote: 'Clot (2008/2010), Trabalho e poder de agir.',
  },
  {
    id: 'precarizacao-estrutural',
    term: 'Precarização estrutural',
    definition:
      'Processo contínuo de corrosão de direitos trabalhistas, estabilidade e proteção social que atinge de modo desigual juventudes, mulheres e pessoas negras no capitalismo contemporâneo.',
    discipline: 'transversal',
    sourceNote: 'Jacques (2003); Antunes (2018); Abílio (2020); Maksud.',
  },
];

export const workModules: Module[] = [
  {
    id: 't1',
    code: 'T1',
    discipline: 'trabalho',
    title: 'Módulo T1: Taylorismo, Fordismo, Toyotismo e Plataformização',
    description:
      'Modelos históricos de organização produtiva, controle do tempo e transformações contemporâneas do trabalho digital.',
    topics: [
      {
        id: 't1-1',
        code: 'T1.1',
        discipline: 'trabalho',
        moduleId: 't1',
        title: 'Taylorismo e Fordismo: Organização Científica e Linha de Montagem',
        summary:
          'Fundamentos do controle científico dos tempos e movimentos em Taylor e sua integração à produção em massa pela esteira fordista.',
        estimatedMinutes: 8,
        tags: ['organizacao-do-trabalho', 'controle-do-tempo', 'alienacao', 'precarizacao'],
        sections: [
          {
            id: 'fundamentos-taylorismo',
            heading: 'Taylorismo e a expropriação do saber operário',
            paragraphs: [
              'Na obra publicada originalmente em 1911, Frederick Winslow Taylor propôs a {{organizacao-cientifica-trabalho|Organização Científica do Trabalho}} como resposta gerencial ao que chamava de "vadiagem sistemática" nas fábricas [1]. Por meio do cronômetro e do estudo de tempos e movimentos, cada operação era decomposta em gestos elementares padronizados, antecedendo a introdução da linha de montagem móvel.',
              'O núcleo político e psicológico desse modelo reside na {{separacao-concepcao-execucao|separação entre concepção e execução}} [1]. O saber prático acumulado pelos ofícios artesanais passa a ser sistematizado pela gerência em manuais e fichas de instrução, reduzindo a autonomia decisória na oficina.',
            ],
            keyPoints: [
              'Cronoanálise taylorista (1911) define tempos e movimentos para estabelecer a "única melhor maneira" (one best way) antes da esteira fordista [1].',
              'Seleção e treinamento individual vinculados a incentivos salariais por peça produzida [1].',
            ],
          },
          {
            id: 'fordismo-esteira',
            heading: 'Fordismo, ritmo coletivo e consumo de massa',
            paragraphs: [
              'Henry Ford incorporou os princípios tayloristas à {{linha-de-montagem|linha de montagem}} móvel implantada em 1913 e relatada com Samuel Crowther em obra de 1922, traduzida no Brasil por Monteiro Lobato já em 1924 [2]. Esse arranjo deslocou o controle do ritmo das mãos do trabalhador para a velocidade mecânica da esteira e padronizou peças intercambiáveis para produção em larga escala.',
              'Além da fábrica, o modelo fordista articulou produção em massa e consumo de massa mediante salários mais elevados (como a jornada de oito horas e cinco dólares diários) acompanhados de vigilância moral sobre a vida cotidiana e a {{subjetividade-historica|subjetividade}} operária [2].',
            ],
            keyPoints: [
              'Distinguir a cronoanálise taylorista (1911) da linha de montagem móvel fordista (implantada em 1913 e sistematizada em 1922) [1] [2].',
              'Ritmo imposto mecanicamente pela esteira rolante e primeira edição brasileira de Minha Vida e Minha Obra traduzida por Monteiro Lobato em 1924 [2].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Taylor (1911/1990)',
            author: 'Frederick Winslow Taylor',
            work: 'Princípios de Administração Científica',
            year: '1911 / BR 1990',
            specificPoint: 'Capítulo 2: Os princípios da administração científica (4 pilares gerenciais e estudo de tempos e movimentos).',
            excerptNote:
              'Formula a transferência do conhecimento tradicional dos ofícios para a gerência, instituindo planejamento centralizado e execução prescrita (ed. clássica Atlas, trad. Arlindo Vieira Ramos, 1990).',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Ford (1922/1924)',
            author: 'Henry Ford (com Samuel Crowther)',
            work: 'Minha Vida e Minha Obra (My Life and Work)',
            year: '1922 / BR 1924',
            specificPoint: 'Capítulos 5 e 8: O início da linha de montagem móvel (1913) e a política salarial dos cinco dólares.',
            excerptNote:
              'Descreve a fixação do operário ao posto enquanto a esteira transporta o chassi; recebeu primeira tradução brasileira por Monteiro Lobato em 1924.',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t1-1-1',
            front: 'Qual é a principal ruptura organizacional introduzida pelo taylorismo no saber do trabalhador?',
            back: 'A separação rígida entre concepção (planejamento pela gerência) e execução (execução fragmentada e cronometrada pelo operário).',
            sourceId: '1',
          },
          {
            id: 'fc-t1-1-2',
            front: 'Como o fordismo altera o mecanismo de controle do ritmo de trabalho em relação ao taylorismo clássico?',
            back: 'Substitui a supervisão apenas individualizada pela esteira móvel implantada em 1913, que impõe objetivamente o ritmo coletivo à linha de produção.',
            sourceId: '2',
          },
          {
            id: 'fc-t1-1-3',
            front: 'Por que a política salarial fordista (jornada de 8h e 5 dólares/dia) tinha papel econômico e disciplinar?',
            back: 'Continha a rotatividade elevada nas fábricas e formava mercado consumidor de massa capaz de absorver os produtos padronizados.',
            sourceId: '2',
          },
        ],
        quiz: [
          {
            id: 'q-t1-1-1',
            question:
              'No taylorismo clássico, a criação de setores de planejamento responsáveis por prescrever cada gesto do operário expressa diretamente qual princípio?',
            options: [
              'Autogestão coletiva das equipes multifuncionais',
              'Separação entre concepção e execução do trabalho',
              'Rotatividade horizontal para ampliação de sentido',
              'Flexibilização da jornada por metas algorítmicas',
            ],
            correctIndex: 1,
            explanation:
              'Taylor defende que a gerência assuma a coleta e sistematização do saber operário, separando quem planeja a tarefa de quem a executa.',
            sourceId: '1',
          },
          {
            id: 'q-t1-1-2',
            question:
              'Qual inovação material distingue mais fortemente a fábrica fordista descrita em 1922 das oficinas tayloristas iniciais?',
            options: [
              'A eliminação completa da divisão parcelar de tarefas',
              'O trabalho remoto mediado por plataformas digitais',
              'A linha de montagem móvel acoplada à padronização em massa',
              'A substituição integral do salário fixo por participação nos lucros',
            ],
            correctIndex: 2,
            explanation:
              'Ford articulou a padronização taylorista à esteira rolante, levando a peça até o trabalhador estacionário e automatizando o ritmo produtivo.',
            sourceId: '2',
          },
          {
            id: 'q-t1-1-3',
            question:
              'Ao situar historicamente Taylor e Ford no Brasil e no mundo, qual distinção conceitual e bibliográfica está correta?',
            options: [
              'A linha de montagem móvel foi criada por Taylor em 1911 e adotada por Ford apenas em 1990',
              'O fordismo aboliu os tempos-padrão individuais para restituir o saber artesanal ao operário',
              'Minha Vida e Minha Obra foi escrita por Taylor e traduzida no Brasil pela primeira vez na década de 1990',
              'A cronoanálise taylorista (1911) precede a linha de montagem fordista (1913/1922), cuja 1a tradução brasileira por Monteiro Lobato é de 1924',
            ],
            correctIndex: 3,
            explanation:
              'Taylor sistematizou tempos e movimentos em 1911; Ford implantou a esteira móvel em 1913, publicou sua obra com Samuel Crowther em 1922 e teve tradução pioneira de Monteiro Lobato em 1924.',
            sourceId: '2',
          },
        ],
        comparison: {
          title: 'Comparação entre Taylorismo e Fordismo',
          headers: ['Dimensão', 'Taylorismo (1911)', 'Fordismo (1922)'],
          rows: [
            ['Eixo de controle', 'Cronômetro e estudo individual de movimentos', 'Esteira rolante e cadência mecanizada'],
            ['Escala produtiva', 'Racionalização de oficinas e tarefas', 'Produção em massa de bens padronizados'],
            ['Relação salarial', 'Incentivo por peça e tempo-padrão', 'Salário fixo elevado vinculado ao consumo de massa'],
          ],
        },
        flow: {
          title: 'Lógica da racionalização taylorista-fordista',
          steps: [
            {
              label: 'Decomposição dos gestos',
              detail: 'Cronometragem e divisão da tarefa em movimentos elementares padronizados.',
              sourceId: '1',
            },
            {
              label: 'Centralização gerencial',
              detail: 'Transferência do planejamento técnico para a gerência e redução da autonomia operária.',
              sourceId: '1',
            },
            {
              label: 'Cadência mecanizada',
              detail: 'Incorporação do tempo prescrito na esteira móvel para produção em série contínua.',
              sourceId: '2',
            },
          ],
        },
      },
      {
        id: 't1-2',
        code: 'T1.2',
        discipline: 'trabalho',
        moduleId: 't1',
        title: 'Toyotismo e Acumulação Flexível: Produção Enxuta e Captura da Subjetividade',
        summary:
          'Passagem da rigidez fordista à acumulação flexível, pilares do Sistema Toyota de Produção e efeitos psicossociais da polivalência e das metas.',
        estimatedMinutes: 9,
        tags: ['organizacao-do-trabalho', 'toyotismo', 'subjetividade', 'precarizacao'],
        sections: [
          {
            id: 'acumulacao-flexivel-harvey',
            heading: 'Da rigidez fordista à acumulação flexível',
            paragraphs: [
              'A crise estrutural do padrão taylorista-fordista nos anos 1970 abriu espaço para a emergência da {{acumulacao-flexivel|acumulação flexível}} analisada por David Harvey, apoiada em mercados fragmentados, descentralização produtiva, terceirização e flexibilização de contratos e jornadas [2].',
              'É fundamental diferenciar os campos conceituais: a categoria de acumulação flexível pertence à leitura econômico-geográfica de Harvey na obra de 1989 (traduzida no Brasil em 1992), e não a Taiichi Ohno, embora dialogue diretamente com a reestruturação industrial japonesa do pós-guerra [1] [2].',
            ],
            keyPoints: [
              'Acumulação flexível contrapõe-se à rigidez dos investimentos de longo prazo e dos grandes estoques fordistas [2].',
              'Desverticalização produtiva combina um núcleo reduzido de trabalhadores estáveis com ampla periferia terceirizada e precária [2] [3].',
            ],
          },
          {
            id: 'sistema-toyota-ohno',
            heading: 'Pilares operacionais do Toyotismo em Taiichi Ohno',
            paragraphs: [
              'Desenvolvido nas fábricas da Toyota entre as décadas de 1950 e 1970 e sistematizado por Taiichi Ohno em livro publicado em 1988, o {{toyotismo|toyotismo}} orienta a produção pela demanda real de mercado e busca eliminar toda forma de desperdício [1].',
              'Sua arquitetura operacional articula os dispositivos {{just-in-time-kanban|just-in-time e kanban}} à autonomação (jidoka, que permite parar a linha diante de defeitos), à melhoria contínua (kaizen) e ao trabalho em equipes polivalentes [1].',
            ],
            keyPoints: [
              'Produção puxada pela demanda substitui os grandes estoques fordistas por fluxo sincronizado (just-in-time e kanban) [1].',
              'Distinguir o período de implantação prática na Toyota (anos 1950 a 1970) da publicação do livro de Ohno (1988 original e 1997 no Brasil) [1].',
            ],
          },
          {
            id: 'subjetividade-antunes',
            heading: 'Liofilização organizacional e envolvimento manipulado',
            paragraphs: [
              'Na sociologia do trabalho brasileira de Ricardo Antunes, o toyotismo promove uma {{liofilizacao-organizacional|liofilização organizacional}}, enxugando o contingente de trabalho vivo nas plantas centrais enquanto intensifica a captura do tempo e da cognição operária [3].',
              'Em vez da separação mecânica entre pensar e executar típica do taylorismo, a gestão flexível requisita o saber intelectual do trabalhador por meio de círculos de controle de qualidade e metas coletivas, produzindo envolvimento manipulado e autocontrole entre pares [3].',
            ],
            keyPoints: [
              'Polivalência amplia o número de máquinas e tarefas operadas simultaneamente pelo mesmo trabalhador [1] [3].',
              'Captura da subjetividade converte iniciativa operária em incremento de produtividade e vigilância recíproca no grupo [3].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Ohno (1988/1997)',
            author: 'Taiichi Ohno',
            work: 'O Sistema Toyota de Produção: Além da Produção em Larga Escala',
            year: '1988 / BR 1997',
            specificPoint: 'Capítulos 1 e 2: Just-in-time, kanban, autonomação e eliminação de desperdícios.',
            excerptNote:
              'Sistematiza o modelo produtivo desenvolvido na Toyota entre as décadas de 1950 e 1970; edição brasileira publicada pela Bookman em 1997.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Harvey (1989/1992)',
            author: 'David Harvey',
            work: 'Condição Pós-Moderna',
            year: '1989 / BR 1992',
            specificPoint: 'Parte II: A transformação político-econômica do capitalismo do final do século XX (do fordismo à acumulação flexível).',
            excerptNote:
              'Analisa a reestruturação capitalista pós-1973 marcada pela flexibilidade dos processos produtivos, mercados de trabalho e padrões de consumo.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'Antunes (1995; 1999)',
            author: 'Ricardo Antunes',
            work: 'Adeus ao Trabalho? (1995) e Os Sentidos do Trabalho (1999)',
            year: '1995; 1999',
            specificPoint: 'Capítulos sobre toyotismo, liofilização organizacional e envolvimento manipulado da subjetividade.',
            excerptNote:
              'Examina como o modelo flexível combina enxugamento de quadros, terceirização e apropriação subjetiva do saber operário.',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t1-2-1',
            front: 'Como se articulam just-in-time e kanban no Sistema Toyota de Produção?',
            back: 'O just-in-time garante produção na quantidade e momento exatos da demanda sem estoques ociosos, enquanto o kanban usa cartões visuais para sinalizar reposição imediata.',
            sourceId: '1',
          },
          {
            id: 'fc-t1-2-2',
            front: 'Quem formulou o conceito de acumulação flexível e como ele se diferencia das obras de Taiichi Ohno?',
            back: 'David Harvey (1989 / BR 1992) formulou a categoria de acumulação flexível como regime econômico pós-fordista, distinta da sistematização fabril do Sistema Toyota publicada por Ohno em 1988.',
            sourceId: '2',
          },
          {
            id: 'fc-t1-2-3',
            front: 'O que Ricardo Antunes denomina liofilização organizacional e envolvimento manipulado?',
            back: 'A redução drástica do trabalho vivo na fábrica enxuta combinada à mobilização gerencial da subjetividade operária em prol das metas e do autocontrole.',
            sourceId: '3',
          },
        ],
        quiz: [
          {
            id: 'q-t1-2-1',
            question:
              'Em relação ao debate sobre reestruturação produtiva, qual associação entre autor, obra e conceito está correta?',
            options: [
              'Taiichi Ohno cunhou o termo acumulação flexível em 1955 ao publicar Condição Pós-Moderna',
              'David Harvey formulou a análise da acumulação flexível na transição pós-fordista, enquanto Taiichi Ohno sistematizou o Sistema Toyota de Produção desenvolvido entre 1950 e 1970 e publicado em livro em 1988',
              'Ricardo Antunes defendeu que o toyotismo eliminou a alienação ao restituir a propriedade dos meios de produção aos operários',
              'O kanban consiste em grandes estoques estratégicos típicos da linha de montagem fordista',
            ],
            correctIndex: 1,
            explanation:
              'Harvey (1989 / BR 1992) analisa o regime de acumulação flexível na escala macroeconômica, ao passo que Ohno (1988 / BR 1997) sistematiza o modelo implantado na Toyota entre os anos 1950 e 1970.',
            sourceId: '2',
          },
          {
            id: 'q-t1-2-2',
            question:
              'Segundo a leitura crítica de Ricardo Antunes, por que a polivalência e os círculos de qualidade do toyotismo não equivalem à emancipação do trabalhador?',
            options: [
              'Porque proíbem qualquer diálogo técnico entre operários no chão de fábrica',
              'Porque mantêm salários acima da média sindical em troca de redução de jornada',
              'Porque capturam o saber e a subjetividade operária para intensificar o ritmo e o controle entre pares dentro dos objetivos do capital',
              'Porque extinguem todas as formas de terceirização e contratos temporários',
            ],
            correctIndex: 2,
            explanation:
              'Antunes denomina esse processo envolvimento manipulado: o trabalho intelectual volta a ser solicitado pela gestão, mas subordinado ao enxugamento de quadros e à intensificação da exploração.',
            sourceId: '3',
          },
        ],
        comparison: {
          title: 'Fordismo vs. Toyotismo e Acumulação Flexível',
          headers: ['Dimensão', 'Fordismo', 'Toyotismo e Acumulação Flexível'],
          rows: [
            ['Lógica produtiva', 'Produção em massa empurrada para grandes estoques', 'Produção enxuta puxada pela demanda (just-in-time)'],
            ['Perfil do trabalho', 'Especialização rígida em posto fixo', 'Polivalência, equipes e multifuncionalidade'],
            ['Subjetividade', 'Separação rígida entre pensar e executar', 'Captura da subjetividade por metas e qualidade total'],
          ],
        },
        flow: {
          title: 'Dinâmica da produção enxuta e envolvimento subjetivo',
          steps: [
            {
              label: 'Demanda flutuante de mercado',
              detail: 'Pedidos menores e variados substituem séries rígidas e acionam o just-in-time.',
              sourceId: '2',
            },
            {
              label: 'Controle visual e polivalência',
              detail: 'Cartões kanban regulam a reposição imediata enquanto equipes assumem múltiplas operações.',
              sourceId: '1',
            },
            {
              label: 'Intensificação e autocontrole',
              detail: 'Enxugamento de quadros pressiona pares a vigiarem metas e internalizarem a lógica empresarial.',
              sourceId: '3',
            },
          ],
        },
      },
      {
        id: 't1-3',
        code: 'T1.3',
        discipline: 'trabalho',
        moduleId: 't1',
        title: 'Uberização, Plataformização e Trabalho Digital',
        summary:
          'Gerenciamento algorítmico, a figura do autogerente subordinado em Ludmila Abílio e a expansão do novo proletariado de serviços em Ricardo Antunes.',
        estimatedMinutes: 9,
        tags: ['uberizacao', 'trabalho-digital', 'precarizacao', 'controle-do-tempo'],
        sections: [
          {
            id: 'uberizacao-conceito-abilio',
            heading: 'Uberização além dos aplicativos de transporte',
            paragraphs: [
              'Para Ludmila Costhek Abílio, a {{uberizacao|uberização}} não se restringe a motoristas ou entregadores de aplicativo, mas designa uma tendência generalizada de organização e controle do trabalho na qual empresas eliminam vínculos formais e convertem trabalhadores em prestadores disponíveis sob demanda [1].',
              'Esse arranjo consolida o trabalhador just-in-time: o sujeito é remunerado apenas pelos instantes de demanda efetiva, permanece conectado sem pagamento pelo tempo de espera e assume integralmente ferramentas, manutenção, adoecimento e riscos da atividade [1].',
            ],
            keyPoints: [
              'Uberização sintetiza décadas de informalização e flexibilização antes mesmo da difusão dos smartphones [1].',
              'Transferência sistemática de custos operacionais e riscos econômicos da empresa para quem trabalha [1].',
            ],
          },
          {
            id: 'gerenciamento-algoritmico',
            heading: 'Gerenciamento algorítmico e autogerente subordinado',
            paragraphs: [
              'Por meio do {{gerenciamento-algoritmico|gerenciamento algorítmico}}, plataformas centralizam dados, estabelecem preços dinâmicos, distribuem tarefas e aplicam bloqueios de forma opaca, substituindo chefias presenciais por programação automatizada [1] [3].',
              'Abílio formula a noção de {{autogerente-subordinado|autogerente subordinado}} para descrever essa dupla condição: o trabalhador define quando se conecta e organiza estratégias diárias de sobrevivência, porém obedece a ranqueamentos, metas de aceitação e regras unilaterais das plataformas [1].',
            ],
            keyPoints: [
              'Discurso ideológico do "empreendedor de si" oculta subordinação real e ausência de direitos trabalhistas [1] [2].',
              'Gamificação, bônus variáveis e avaliações de usuários funcionam como dispositivos psicológicos de captura da jornada [1] [3].',
            ],
          },
          {
            id: 'novo-proletariado-antunes',
            heading: 'Novo proletariado de serviços e servidão digital',
            paragraphs: [
              'Ricardo Antunes analisa a expansão de um "novo proletariado de serviços na era digital", marcado por contratos intermitentes, trabalho zero-hora, pejotização e jornadas extensas mediadas por aplicativos e centrais digitais [2] [3].',
              'O autor utiliza a expressão privilégio da servidão ou "escravidão digital" para evidenciar que a conectividade constante dilui fronteiras entre tempo de trabalho e tempo de vida, agravando a fadiga física e o sofrimento psíquico [2] [3].',
            ],
            keyPoints: [
              'Combinação de alta tecnologia informacional com formas regressivas de exploração e desproteção social [2] [3].',
              'Dispersão espacial e individualização das métricas dificultam a organização sindical e defesas coletivas [1] [2].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Abílio (2020)',
            author: 'Ludmila Costhek Abílio',
            work: 'Uberização: a era do trabalhador just-in-time?',
            year: '2020',
            specificPoint: 'Estudos Avançados (USP), v. 34, n. 98, p. 111-126: trabalhador just-in-time, autogerente subordinado e gerenciamento algorítmico.',
            excerptNote:
              'Demonstra que a uberização é tendência ampla de informalização gerenciada por algoritmos, não restrita a motoristas e entregadores de aplicativos.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Antunes (2018)',
            author: 'Ricardo Antunes',
            work: 'O Privilégio da Servidão: o novo proletariado de serviços na era digital',
            year: '2018',
            specificPoint: 'Partes I e II: novo proletariado de serviços, intermitência, pejotização e escravidão digital.',
            excerptNote:
              'Analisa a reestruturação contemporânea no Brasil e a corrosão de direitos sob o discurso do empreendedorismo.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'Antunes (org., 2020)',
            author: 'Ricardo Antunes (org.)',
            work: 'Uberização, trabalho digital e Indústria 4.0',
            year: '2020',
            specificPoint: 'Coletânea sobre plataformas digitais, controle algorítmico e impactos sobre a saúde no trabalho digital.',
            excerptNote:
              'Reúne pesquisas brasileiras sobre plataformização, gestão por algoritmos e borramento entre trabalho e tempo de vida.',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t1-3-1',
            front: 'Por que Ludmila Abílio afirma que a uberização não se restringe a motoristas e entregadores de aplicativo?',
            back: 'Porque descreve uma tendência estrutural de conversão do trabalhador em fator produtivo just-in-time, sem vínculo e assumindo riscos, aplicável a múltiplos setores de serviços.',
            sourceId: '1',
          },
          {
            id: 'fc-t1-3-2',
            front: 'O que significa o conceito de autogerente subordinado em Abílio (2020)?',
            back: 'O trabalhador gerencia suas metas de sobrevivência, horários e custos operacionais, mas continua subordinado às regras, tarifas e punições definidas unilateralmente pelo algoritmo.',
            sourceId: '1',
          },
          {
            id: 'fc-t1-3-3',
            front: 'Como Ricardo Antunes caracteriza o novo proletariado de serviços na era digital?',
            back: 'Como contingente crescente submetido a intermitência, pejotização, conectividade permanente e perda de proteções trabalhistas sob retórica empreendedora.',
            sourceId: '2',
          },
        ],
        quiz: [
          {
            id: 'q-t1-3-1',
            question:
              'Na análise de Ludmila Costhek Abílio (2020), a figura do "autogerente subordinado" evidencia principalmente que:',
            options: [
              'A ausência de chefe presencial garante plena autonomia econômica ao trabalhador de plataforma',
              'A uberização aplica-se exclusivamente ao transporte individual de passageiros por carro',
              'As plataformas digitais eliminaram o tempo não remunerado de espera entre chamadas',
              'O trabalhador assume gestão cotidiana de tempo e custos, mas segue submetido ao controle opaco de algoritmos, tarifas e bloqueios',
            ],
            correctIndex: 3,
            explanation:
              'Abílio mostra que a suposta autonomia de horários convive com subordinação algorítmica estrita e transferência integral de riscos ao trabalhador just-in-time.',
            sourceId: '1',
          },
          {
            id: 'q-t1-3-2',
            question:
              'Para Ricardo Antunes em O Privilégio da Servidão (2018), o trabalho digital plataformizado produz qual contradição central?',
            options: [
              'Associa tecnologias informacionais avançadas à ampliação da proteção sindical e redução da jornada',
              'Substitui o setor de serviços pela volta exclusiva da manufatura artesanal',
              'Combina sofisticação tecnológica com precarização, intermitência e diluição dos limites entre trabalho e descanso',
              'Garante remuneração fixa para todo o tempo em que o trabalhador permanece conectado',
            ],
            correctIndex: 2,
            explanation:
              'Antunes evidencia que a alta tecnologia não trouxe redução emancipatória do tempo de trabalho, mas sim formas intensificadas de exploração e servidão digital.',
            sourceId: '2',
          },
        ],
        comparison: {
          title: 'Emprego Assalariado Clássico vs. Trabalho Uberizado',
          headers: ['Eixo analítico', 'Assalariamento padrão', 'Trabalho uberizado'],
          rows: [
            ['Meios e custos', 'Fornecidos e mantidos pela empresa contratante', 'Transferidos ao trabalhador (veículo, celular, manutenção)'],
            ['Controle de jornada', 'Chefia direta e ponto horário regulamentado', 'Gerenciamento algorítmico, tarifas dinâmicas e gamificação'],
            ['Tempo não produtivo', 'Tempo à disposição remunerado dentro da jornada', 'Tempo de espera sem remuneração (trabalhador just-in-time)'],
          ],
        },
        flow: {
          title: 'Mecanismo do gerenciamento algorítmico na uberização',
          steps: [
            {
              label: 'Transferência de riscos e vínculo ausente',
              detail: 'Trabalhador atua como parceiro sem piso salarial, férias ou proteção previdenciária plena.',
              sourceId: '1',
            },
            {
              label: 'Subordinação via algoritmo e dados',
              detail: 'Plataforma define preços, rotas, metas de aceitação e bloqueios sem transparência decisória.',
              sourceId: '1',
            },
            {
              label: 'Autogerenciamento e extensão da jornada',
              detail: 'Para atingir renda mínima, o autogerente subordinado amplia horas conectado e dilui o descanso.',
              sourceId: '2',
            },
          ],
        },
      },
    ],
  },
  {
    id: 't2',
    code: 'T2',
    discipline: 'trabalho',
    title: 'Módulo T2: Psicodinâmica do Trabalho e Organização Real',
    description:
      'Defasagem entre trabalho prescrito e real, estratégias coletivas de defesa, reconhecimento e saúde psíquica segundo Christophe Dejours.',
    topics: [
      {
        id: 't2-1',
        code: 'T2.1',
        discipline: 'trabalho',
        moduleId: 't2',
        title: 'Trabalho Prescrito vs. Trabalho Real: Ergonomia da Atividade e Psicodinâmica',
        summary:
          'Origem francófona da distinção entre tarefa e atividade na Ergonomia (Wisner, Daniellou, Guérin) e sua apropriação psicodinâmica por Christophe Dejours.',
        estimatedMinutes: 9,
        tags: ['psicodinamica-do-trabalho', 'ergonomia-da-atividade', 'organizacao-do-trabalho', 'subjetividade'],
        sections: [
          {
            id: 'origem-ergonomia-francofona',
            heading: 'Origem na Ergonomia francófona da atividade',
            paragraphs: [
              'A distinção conceitual entre {{trabalho-prescrito|trabalho prescrito}} (tarefa) e {{trabalho-real|trabalho real}} (atividade) não foi criada por Christophe Dejours, mas formulada na Ergonomia da Atividade francófona (CNAM), consolidada por autores como Alain Wisner, François Daniellou, François Guérin e Antoine Laville [1] [2].',
              'Por meio da Análise Ergonômica do Trabalho (AET), esses pesquisadores demonstraram que nenhuma prescrição gerencial consegue antecipar todas as variabilidades técnicas, ambientais, materiais e humanas da situação produtiva [1] [2].',
            ],
            keyPoints: [
              'Tarefa (trabalho prescrito) corresponde ao que deve ser feito segundo normas, metas e manuais [1] [2].',
              'Atividade (trabalho real) designa o modo concreto como o trabalhador regula a tarefa diante das variabilidades do meio [1] [2].',
            ],
          },
          {
            id: 'lacuna-estrutural-dejours',
            heading: 'O abismo entre prescrito e real na Psicodinâmica de Dejours',
            paragraphs: [
              'Christophe Dejours incorpora a descoberta ergonômica à Psicodinâmica do Trabalho para definir o trabalhar como o preenchimento subjetivo e corporal da defasagem inevitável entre organização prescrita e organização real [3].',
              'Se os trabalhadores cumprissem à risca todas as normas oficiais, como ocorre na chamada operação-padrão ou greve de zelo, o sistema produtivo pararia, comprovando que a eficiência cotidiana depende da transgressão criativa das prescrições [3].',
            ],
            keyPoints: [
              'A lacuna entre prescrito e real é estrutural e ineliminável, e não falha individual do trabalhador [2] [3].',
              'Trabalhar implica custo humano, engajamento afetivo e assunção de riscos para fazer o serviço acontecer [3].',
            ],
          },
          {
            id: 'inteligencia-pratica-metis',
            heading: 'Inteligência prática, astúcia e cooperação',
            paragraphs: [
              'Para superar incidentes do real, o trabalhador mobiliza a {{inteligencia-pratica|inteligência prática}} (ou métis), saber corporal e intuitivo construído na experiência direta com equipamentos, usuários e colegas [3].',
              'Como esses ajustes acontecem muitas vezes à margem dos manuais oficiais, os trabalhadores tendem a ocultá-los por receio de punição disciplinar, tornando invisível a parcela mais inventiva do trabalho [2] [3].',
            ],
            keyPoints: [
              'Inteligência prática nasce do corpo e da experiência situada, precedendo sua formalização técnica [3].',
              'Compreender o trabalho real exige escuta coletiva e análise da organização do trabalho, para além dos organogramas [1] [3].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Wisner (1987)',
            author: 'Alain Wisner',
            work: 'Por dentro do trabalho: ergonomia: método & técnica',
            year: '1987',
            specificPoint: 'Fundamentos da Análise Ergonômica do Trabalho (AET) e distinção entre tarefa prescrita e atividade real.',
            excerptNote:
              'Obra de referência da ergonomia francófona no Brasil demonstrando a distância estrutural entre normas prescritas e atividade situada.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Daniellou (2004) / Guérin et al.',
            author: 'François Daniellou (org.); François Guérin, Antoine Laville et al.',
            work: 'A ergonomia em busca de seus princípios (2004) e Compreender o trabalho para transformá-lo (2001)',
            year: '2001; 2004',
            specificPoint: 'Variabilidade produtiva, trabalho prescrito versus trabalho real e regulações operárias.',
            excerptNote:
              'Consolida o conceito ergonômico de atividade e a centralidade das variabilidades técnicas, organizacionais e humanas.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'Dejours (1980/1987)',
            author: 'Christophe Dejours',
            work: 'A Loucura do Trabalho: estudo de psicopatologia do trabalho',
            year: '1980 / BR 1987',
            specificPoint: 'Defasagem entre organização prescrita e organização real do trabalho; inteligência prática e custo humano.',
            excerptNote:
              'Incorpora a contribuição da ergonomia francófona para analisar como o sujeito mobiliza seu psiquismo diante do real do trabalho.',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t2-1-1',
            front: 'Onde nasce originalmente a distinção entre trabalho prescrito (tarefa) e trabalho real (atividade)?',
            back: 'Na Ergonomia da Atividade francófona (Alain Wisner, Antoine Laville, François Guérin, François Daniellou), sendo posteriormente incorporada por Christophe Dejours à Psicodinâmica do Trabalho.',
            sourceId: '1',
          },
          {
            id: 'fc-t2-1-2',
            front: 'O que demonstra o fenômeno da "operação-padrão" (greve de zelo) sobre o trabalho prescrito?',
            back: 'Demonstra que seguir estritamente todas as normas prescritas inviabiliza a produção, provando que o trabalho real exige ajustes e transgressões criativas.',
            sourceId: '3',
          },
          {
            id: 'fc-t2-1-3',
            front: 'O que é a inteligência prática (métis) na Psicodinâmica do Trabalho?',
            back: 'Um saber astucioso, corporal e situado que o trabalhador desenvolve na prática para contornar imprevistos que os procedimentos formais não preveem.',
            sourceId: '3',
          },
        ],
        quiz: [
          {
            id: 'q-t2-1-1',
            question:
              'Sobre a origem e o sentido da distinção entre trabalho prescrito e trabalho real, é correto afirmar que:',
            options: [
              'Foi criada exclusivamente por Taylor para eliminar o desperdício nas linhas de montagem',
              'Originou-se na Ergonomia francófona da atividade (Wisner, Guérin, Daniellou) e foi incorporada por Dejours para analisar o sofrimento e a inteligência no trabalho',
              'Indica que o trabalho real ocorre apenas quando o trabalhador comete erros por falta de treinamento',
              'Permite eliminar totalmente a lacuna entre tarefa e atividade por meio de softwares de controle',
            ],
            correctIndex: 1,
            explanation:
              'A distinção tarefa versus atividade nasce na Ergonomia da Atividade francófona e é incorporada por Dejours à Psicodinâmica do Trabalho como abismo estrutural e ineliminável.',
            sourceId: '2',
          },
          {
            id: 'q-t2-1-2',
            question:
              'Por que os trabalhadores frequentemente mantêm em segredo os atalhos e ajustes da sua inteligência prática diante da gerência?',
            options: [
              'Porque tais ajustes violam prescrições rígidas e poderiam gerar punição disciplinar, apesar de manterem a produção funcionando',
              'Porque a inteligência prática não tem utilidade na resolução de panes e imprevistos',
              'Porque o trabalho prescrito já prevê todas as variabilidades do processo produtivo',
              'Porque os sindicatos proíbem o compartilhamento de saberes entre colegas',
            ],
            correctIndex: 0,
            explanation:
              'Como os ajustes reais frequentemente infringem protocolos oficiais, os trabalhadores tendem a ocultá-los da hierarquia para evitar sanções.',
            sourceId: '3',
          },
        ],
        comparison: {
          title: 'Trabalho Prescrito vs. Trabalho Real',
          headers: ['Aspecto', 'Trabalho Prescrito (Tarefa)', 'Trabalho Real (Atividade)'],
          rows: [
            ['Definição', 'Normas, metas, scripts e tempos definidos pela gestão', 'Gestos, decisões e regulações concretas na situação laboral'],
            ['Relação com imprevistos', 'Supõe condições ideais e estáveis de execução', 'Lida diretamente com falhas, panes, atrasos e demandas humanas'],
            ['Saber mobilizado', 'Racionalidade técnica formal e manuais', 'Inteligência prática (métis) e cooperação tácita'],
          ],
        },
        flow: {
          title: 'Do hiato da prescrição à mobilização da atividade real',
          steps: [
            {
              label: 'Prescrição gerencial (tarefa)',
              detail: 'Empresa fixa metas, scripts e procedimentos padronizados antes da ação.',
              sourceId: '1',
            },
            {
              label: 'Confronto com variabilidades do real',
              detail: 'Imprevistos técnicos e relacionais rompem o previsto e revelam a falha da norma.',
              sourceId: '2',
            },
            {
              label: 'Regulação pela inteligência prática',
              detail: 'Trabalhador inventa atalhos e ajustes corporais e cognitivos para garantir o serviço.',
              sourceId: '3',
            },
          ],
        },
      },
      {
        id: 't2-2',
        code: 'T2.2',
        discipline: 'trabalho',
        moduleId: 't2',
        title: 'Sofrimento Patogênico, Sofrimento Criativo e Estratégias de Defesa',
        summary:
          'Destinos psíquicos do sofrimento no encontro entre sujeito e organização do trabalho, normalidade sofrente e papel ambíguo das defesas coletivas.',
        estimatedMinutes: 9,
        tags: ['psicodinamica-do-trabalho', 'sofrimento-psiquico', 'saude-mental', 'subjetividade'],
        sections: [
          {
            id: 'sofrimento-criativo-patogenico',
            heading: 'Sofrimento criativo e sofrimento patogênico',
            paragraphs: [
              'Na Psicodinâmica do Trabalho de Christophe Dejours, o sofrimento é inevitável no confronto do sujeito com o real do trabalho, mas não se reduz automaticamente a doença [1] [2]. Quando a organização permite margem de negociação e autonomia, emerge o {{sofrimento-criativo|sofrimento criativo}}, motor de inventividade e fortalecimento subjetivo [1].',
              'O {{sofrimento-patogenico|sofrimento patogênico}} instala-se quando todas as possibilidades de adaptação, ajuste ou criação na organização do trabalho foram bloqueadas, restando apenas repetição rígida e desgaste que podem evoluir para descompensação psíquica ou somática [1] [2].',
            ],
            keyPoints: [
              'A organização do trabalho (divisão de tarefas e relações de poder), mais que as condições físicas isoladas, decide o destino do sofrimento [1] [2].',
              'Sofrimento não é sinônimo imediato de patologia: pode impulsionar criação ou adoecimento conforme a flexibilidade organizacional [1].',
            ],
          },
          {
            id: 'estrategias-de-defesa-normalidade',
            heading: 'Estratégias de defesa e normalidade sofrente',
            paragraphs: [
              'Para evitar o adoecimento em ambientes penosos ou perigosos, trabalhadores constroem {{estrategias-de-defesa|estratégias de defesa}} individuais e, sobretudo, coletivas, como negação do risco, ritos de virilidade, humor ácido ou hiperatividade [1] [2].',
              'É um erro conceitual tratar a estratégia de defesa como patologia: ela sustenta a {{normalidade-sofrente|normalidade sofrente}}, um equilíbrio dinâmico e custoso que permite continuar trabalhando sem descompensação clínica [1] [3].',
            ],
            keyPoints: [
              'Defesas coletivas dependem de consenso e cumplicidade simbólica do grupo de trabalho [1].',
              'Normalidade não equivale a ausência de sofrimento, mas a uma vitória provisória das defesas contra a doença [3].',
            ],
          },
          {
            id: 'alienacao-banalizacao-injustica',
            heading: 'Enrijecimento defensivo e banalização da injustiça',
            paragraphs: [
              'Embora protejam momentaneamente a saúde mental, as estratégias defensivas não modificam as causas objetivas do sofrimento [1] [3]. Quando se cristalizam em ideologia defensiva rígida, passam a bloquear a percepção crítica da realidade [1] [3].',
              'Em A Banalização da Injustiça Social, Dejours analisa como defesas baseadas no cinismo e na racionalização levam trabalhadores e gestores a aceitar o sofrimento alheio, demissões e metas cruéis como inevitáveis [3].',
            ],
            keyPoints: [
              'Quando a defesa se enrijece, dificulta a mobilização coletiva e a transformação das condições nocivas [1] [3].',
              'A elaboração crítica das defesas ocorre em espaços públicos de deliberação, jamais por imposição clínica autoritária [1] [3].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Dejours, Abdoucheli & Jayet (1994)',
            author: 'Christophe Dejours, Elisabeth Abdoucheli e Christian Jayet',
            work: 'Psicodinâmica do Trabalho: contribuições da escola dejouriana à análise da relação prazer, sofrimento e trabalho',
            year: '1994',
            specificPoint: 'Tipologia do sofrimento criativo vs. patogênico e dinâmica das estratégias defensivas coletivas.',
            excerptNote:
              'Coletânea fundamental no Brasil que formaliza a passagem da psicopatologia para a psicodinâmica do trabalho e define a normalidade como objeto central.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Dejours (1980/1987)',
            author: 'Christophe Dejours',
            work: 'A Loucura do Trabalho: estudo de psicopatologia do trabalho',
            year: '1980 / BR 1987',
            specificPoint: 'Ideologias defensivas profissionais (construção civil, indústria química) e choque sujeito versus organização.',
            excerptNote:
              'Investiga como coletivos operários constroem ritos de negação do perigo para continuar trabalhando sob risco constante.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'Dejours (1998/1999)',
            author: 'Christophe Dejours',
            work: 'A Banalização da Injustiça Social',
            year: '1998 / BR 1999',
            specificPoint: 'Normalidade sofrente, estratégias de defesa contra a injustiça e tolerância social ao sofrimento.',
            excerptNote:
              'Analisa como defesas coletivas, inclusive a virilidade e o cinismo gerencial, anestesiam a sensibilidade ética diante da precarização (trad. Luiz Alberto Monjardim, FGV).',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t2-2-1',
            front: 'O que distingue sofrimento criativo de sofrimento patogênico na Psicodinâmica do Trabalho?',
            back: 'O sofrimento criativo ocorre quando há margem de negociação para inventar soluções e obter reconhecimento; o patogênico surge quando a rigidez organizacional bloqueia toda transformação.',
            sourceId: '1',
          },
          {
            id: 'fc-t2-2-2',
            front: 'Por que as estratégias de defesa não devem ser tratadas como sinônimo de patologia?',
            back: 'Porque são recursos psíquicos individuais ou coletivos que atenuam a percepção do medo e da pressão, preservando a normalidade e impedindo a descompensação clínica.',
            sourceId: '1',
          },
          {
            id: 'fc-t2-2-3',
            front: 'Qual o risco político e ético do conceito de normalidade sofrente em Dejours (1998/1999)?',
            back: 'O enrijecimento das defesas pode gerar alienação e banalização da injustiça social, levando sujeitos a tolerarem condições indignas sem resistência coletiva.',
            sourceId: '3',
          },
        ],
        quiz: [
          {
            id: 'q-t2-2-1',
            question:
              'Na escola dejouriana, qual afirmação descreve corretamente o papel das estratégias coletivas de defesa?',
            options: [
              'Protegem o aparelho psíquico mantendo a normalidade sofrente, embora não eliminem as causas objetivas do sofrimento',
              'São transtornos psiquiátricos graves que exigem afastamento imediato do trabalho',
              'Resolvem definitivamente a organização rígida do trabalho sem necessidade de negociação',
              'Atuam apenas de modo inconsciente e solitário, sem participação do coletivo de pares',
            ],
            correctIndex: 0,
            explanation:
              'As estratégias defensivas sustentam a normalidade em situações penosas, mas não transformam a organização do trabalho e podem produzir alienação quando se cristalizam.',
            sourceId: '1',
          },
          {
            id: 'q-t2-2-2',
            question:
              'Em A Banalização da Injustiça Social (1998 / BR 1999), Christophe Dejours relaciona o enrijecimento defensivo principalmente a:',
            options: [
              'Aumento espontâneo da solidariedade sindical nas fábricas flexíveis',
              'Eliminação completa do sofrimento psíquico nas chefias médias',
              'Anestesia ética e aceitação social de metas cruéis, exclusões e sofrimento alheio no trabalho',
              'Substituição das relações de trabalho pela ergonomia participativa',
            ],
            correctIndex: 2,
            explanation:
              'Dejours mostra como defesas como o cinismo e a ideologia da virilidade contribuem para naturalizar e banalizar a injustiça sofrida pelos colegas e subordinados.',
            sourceId: '3',
          },
        ],
        comparison: {
          title: 'Sofrimento Criativo, Sofrimento Patogênico e Estratégias de Defesa',
          headers: ['Categoria', 'Relação com a organização', 'Efeito psíquico e coletivo'],
          rows: [
            ['Sofrimento criativo', 'Encontra margem de autonomia e negociação da tarefa', 'Gera inventividade, cooperação e saúde psíquica'],
            ['Sofrimento patogênico', 'Esbarra em organização rígida e sem reconhecimento', 'Produz esgotamento e risco de descompensação'],
            ['Estratégias de defesa', 'Atenuam a percepção do medo ou da pressão sem mudar o real', 'Sustentam a normalidade sofrente, com risco de alienação'],
          ],
        },
        flow: {
          title: 'Bifurcação psíquica do sofrimento na Psicodinâmica',
          steps: [
            {
              label: 'Encontro sujeito vs. organização',
              detail: 'Hiato entre prescrito e real gera inevitável tensão afetiva e cognitiva no trabalhador.',
              sourceId: '1',
            },
            {
              label: 'Mediação defensiva ou criativa',
              detail: 'Com autonomia e cooperação, surge sofrimento criativo; sob rigidez, constroem-se defesas coletivas.',
              sourceId: '2',
            },
            {
              label: 'Normalidade sofrente ou adoecimento',
              detail: 'Se as defesas fracassam, instala-se o sofrimento patogênico; se se enrijecem, banaliza-se a injustiça.',
              sourceId: '3',
            },
          ],
        },
      },
      {
        id: 't2-3',
        code: 'T2.3',
        discipline: 'trabalho',
        moduleId: 't2',
        title: 'Reconhecimento e Sublimação: A Transformação Simbólica do Sofrimento',
        summary:
          'Dinâmica do reconhecimento sobre o fazer, articulação entre julgamento de utilidade e julgamento de beleza e o papel da sublimação na identidade.',
        estimatedMinutes: 8,
        tags: ['psicodinamica-do-trabalho', 'reconhecimento', 'subjetividade', 'saude-mental'],
        sections: [
          {
            id: 'dinamica-reconhecimento',
            heading: 'Reconhecimento como retribuição simbólica pelo fazer',
            paragraphs: [
              'Na Psicodinâmica do Trabalho, o {{reconhecimento-no-trabalho|reconhecimento}} é o operador central que permite transformar o sofrimento decorrente do encontro com o real em prazer e fortalecimento identitário [1] [2].',
              'Diferentemente de prêmios financeiros isolados ou elogios pessoais vazios da gestão de pessoas, o reconhecimento dejouriano recai estritamente sobre o fazer (a qualidade da contribuição à atividade coletiva), e não sobre a pessoa em abstrato [1] [2].',
            ],
            keyPoints: [
              'Reconhecimento não é gratificação monetária nem elogio individualista, mas validação simbólica do trabalho realizado [1].',
              'Sem reconhecimento, o investimento da inteligência prática perde sentido e abre caminho ao sofrimento patogênico [1] [2].',
            ],
          },
          {
            id: 'julgamentos-utilidade-beleza',
            heading: 'Julgamento de utilidade e julgamento de beleza',
            paragraphs: [
              'A dinâmica do reconhecimento efetiva-se por meio de dois julgamentos simbólicos complementares [1]. O {{julgamento-de-utilidade|julgamento de utilidade}} é proferido pela linha hierárquica (chefias), subordinados ou clientes, atestando a relevância técnica, econômica ou social da atividade realizada [1].',
              'Já o {{julgamento-de-beleza|julgamento de beleza}} é proferido pelos pares que dominam os códigos, macetes e dilemas do ofício, conferindo pertencimento ao coletivo e reconhecendo a originalidade ou o estilo do profissional [1] [2].',
            ],
            keyPoints: [
              'Julgamento de utilidade parte da hierarquia ou de usuários (eixo vertical/social); julgamento de beleza parte dos pares (eixo horizontal) [1].',
              'O julgamento de beleza exige regras de ofício compartilhadas e confiança para tornar visível o trabalho real [1] [2].',
            ],
          },
          {
            id: 'sublimacao-identidade',
            heading: 'Sublimação no trabalho e consolidação da identidade',
            paragraphs: [
              'Apoiando-se na metapsicologia freudiana, Dejours define a {{sublimacao-no-trabalho|sublimação}} no trabalho como a articulação entre a busca singular do sujeito por realização pulsional e o campo socialmente valorizado da atividade produtiva [1] [3].',
              'Quando os julgamentos de utilidade e beleza convergem sobre o fazer, a sublimação viabiliza a inscrição social da contribuição individual, reforçando a autoestima e a saúde mental mesmo diante de tarefas exigentes [1] [3].',
            ],
            keyPoints: [
              'A identidade no trabalho resulta dessa mediação entre o sujeito, o real da tarefa e o olhar dos outros [1] [2].',
              'A erosão da cooperação pela avaliação individualizada de desempenho e pela competição destrói as bases do julgamento de beleza [2].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Dejours, Abdoucheli & Jayet (1994)',
            author: 'Christophe Dejours, Elisabeth Abdoucheli e Christian Jayet',
            work: 'Psicodinâmica do Trabalho: contribuições da escola dejouriana à análise da relação prazer, sofrimento e trabalho',
            year: '1994',
            specificPoint: 'Dinâmica do reconhecimento: julgamento de utilidade, julgamento de beleza e sublimação.',
            excerptNote:
              'Demonstra como a retribuição simbólica pelo fazer converte sofrimento em prazer e sustenta a saúde psíquica.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Dejours (1998/1999)',
            author: 'Christophe Dejours',
            work: 'A Banalização da Injustiça Social',
            year: '1998 / BR 1999',
            specificPoint: 'Fragilização do reconhecimento pela avaliação individualizada de desempenho e competição.',
            excerptNote:
              'Critica modelos gerenciais que substituem a cooperação e o julgamento dos pares por metas solitárias e medo da demissão.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'Dejours (1980/1987)',
            author: 'Christophe Dejours',
            work: 'A Loucura do Trabalho: estudo de psicopatologia do trabalho',
            year: '1980 / BR 1987',
            specificPoint: 'Economia psicossomática, sublimação e sentido da tarefa na organização do trabalho.',
            excerptNote:
              'Articula a psicanálise à análise do trabalho para explicar como a atividade pode funcionar como via sublimatória ou fonte de desgaste.',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t2-3-1',
            front: 'Sobre o que incide o reconhecimento na Psicodinâmica do Trabalho de Dejours?',
            back: 'Incide especificamente sobre o fazer (a qualidade e utilidade da contribuição no trabalho real), e não sobre a pessoa em abstrato nem como mero bônus salarial.',
            sourceId: '1',
          },
          {
            id: 'fc-t2-3-2',
            front: 'Qual é a diferença entre julgamento de utilidade e julgamento de beleza?',
            back: 'O julgamento de utilidade vem de chefias, subordinados ou clientes quanto ao valor técnico/social do resultado; o de beleza vem dos pares do ofício quanto às regras da arte e ao estilo.',
            sourceId: '1',
          },
          {
            id: 'fc-t2-3-3',
            front: 'Como a competição individualista por metas afeta a dinâmica do reconhecimento?',
            back: 'Corrói a confiança e o coletivo de trabalho, inviabilizando o julgamento de beleza entre pares e bloqueando a via da sublimação.',
            sourceId: '2',
          },
        ],
        quiz: [
          {
            id: 'q-t2-3-1',
            question:
              'Na psicodinâmica dejouriana, o reconhecimento que confere pertencimento ao coletivo de ofício e avalia a qualidade técnica do fazer é chamado de:',
            options: [
              'Julgamento de beleza, proferido pelos pares que conhecem as regras da arte do ofício',
              'Julgamento de utilidade, emitido exclusivamente pela diretoria financeira',
              'Ideologia defensiva de virilidade, baseada na negação do perigo',
              'Avaliação meritocrática individual por ranqueamento algorítmico',
            ],
            correctIndex: 0,
            explanation:
              'O julgamento de beleza é proferido pelos pares do mesmo ofício sobre o fazer, distinguindo-se do julgamento de utilidade emitido por chefias, subordinados ou clientes.',
            sourceId: '1',
          },
          {
            id: 'q-t2-3-2',
            question:
              'Por que premiações financeiras isoladas ou elogios genéricos da gestão não substituem o reconhecimento psicodinâmico?',
            options: [
              'Porque o trabalhador rejeita qualquer aumento salarial em favor da sublimação',
              'Porque a sublimação dispensa a existência de outros sujeitos no ambiente laboral',
              'Porque apenas a ergonomia física determina o prazer no trabalho',
              'Porque o reconhecimento exige julgamento simbólico verídico sobre o fazer real, articulando utilidade social e validação dos pares',
            ],
            correctIndex: 3,
            explanation:
              'Sem visibilidade do trabalho real e validação simbólica da qualidade do fazer por pares e usuários/chefias, elogios vazios ou bônus não convertem sofrimento em sentido identitário.',
            sourceId: '2',
          },
        ],
        comparison: {
          title: 'Julgamento de Utilidade vs. Julgamento de Beleza',
          headers: ['Critério', 'Julgamento de Utilidade', 'Julgamento de Beleza'],
          rows: [
            ['Quem avalia', 'Chefias, subordinados, clientes ou usuários', 'Pares e colegas do mesmo ofício'],
            ['O que valida', 'Relevância técnica, social ou econômica do resultado', 'Conformidade às regras da arte e originalidade do estilo'],
            ['Efeito principal', 'Reconhece o valor externo da contribuição', 'Confere pertencimento coletivo e identidade de ofício'],
          ],
        },
        flow: {
          title: 'Circuito psicodinâmico do reconhecimento e da sublimação',
          steps: [
            {
              label: 'Engajamento no trabalho real',
              detail: 'Sujeito mobiliza inteligência prática para superar falhas da prescrição.',
              sourceId: '1',
            },
            {
              label: 'Duplo julgamento sobre o fazer',
              detail: 'Pares atestam a qualidade técnica (beleza) e chefias ou clientes validam o valor (utilidade).',
              sourceId: '1',
            },
            {
              label: 'Sublimação e prazer',
              detail: 'Retribuição simbólica converte sofrimento em realização identitária e fortalece a saúde mental.',
              sourceId: '3',
            },
          ],
        },
      },
    ],
  },
  {
    id: 't3',
    code: 'T3',
    discipline: 'trabalho',
    title: 'Módulo T3: Saúde Mental, Adoecimento e Políticas do Trabalho',
    description:
      'Síndrome de burnout, assédio moral organizacional, NTEP e atuação em saúde do trabalhador no SUS e nas organizações.',
    topics: [
      {
        id: 't3-1',
        code: 'T3.1',
        discipline: 'trabalho',
        moduleId: 't3',
        title: 'Síndrome de Burnout e Esgotamento Profissional',
        summary:
          'Tríade conceitual de Maslach e Leiter, pesquisa pioneira de Wanderley Codo no Brasil e enquadramento como fenômeno ocupacional na CID-11 (QD85) e LDRT 2023.',
        estimatedMinutes: 9,
        tags: ['saude-mental', 'burnout', 'trabalho-e-saude', 'politicas-publicas'],
        sections: [
          {
            id: 'trilogia-burnout-maslach',
            heading: 'Dimensões clássicas e pesquisa brasileira de Wanderley Codo',
            paragraphs: [
              'Christina Maslach e Michael P. Leiter definem a {{sindrome-de-burnout|Síndrome de Burnout}} como resposta crônica a estressores organizacionais persistentes, estruturada em três dimensões: exaustão emocional, cinismo (ou despersonalização/distanciamento afetivo) e baixa realização profissional [1].',
              'No Brasil, Wanderley Codo coordenou pesquisa nacional pioneira com cerca de 39 mil profissionais da educação básica, caracterizando o burnout como "síndrome da desistência": o trabalhador permanece fisicamente no posto, mas perde o vínculo afetivo e o investimento simbólico no ensinar e cuidar [2].',
            ],
            keyPoints: [
              'Exaustão emocional expressa o esgotamento de recursos físicos e psíquicos diante de sobrecarga contínua [1].',
              'Cinismo ou despersonalização traduz defesa de distanciamento frio em relação a alunos, pacientes ou usuários [1] [2].',
              'Wanderley Codo (1999) demonstrou o peso da falta de suporte, controle e reconhecimento na educação pública brasileira [2].',
            ],
          },
          {
            id: 'cid11-qd85-ldrt-2023',
            heading: 'CID-11 (QD85) e Portaria GM/MS nº 1.999/2023',
            paragraphs: [
              'Na 11a Revisão da Classificação Internacional de Doenças da OMS (vigente desde janeiro de 2022), o burnout passou a ocupar o código QD85 como {{fenomeno-ocupacional-qd85|fenômeno ocupacional}}, explicitando que diz respeito exclusivamente ao contexto laboral e não deve ser aplicado a outras esferas da vida [3].',
              'No Brasil, a Portaria GM/MS nº 1.999/2023 atualizou a Lista de Doenças Relacionadas ao Trabalho (LDRT) e incorporou formalmente a Síndrome de Esgotamento Profissional (burnout) ao lado de quadros de ansiedade e depressão ligados à organização do trabalho [4].',
            ],
            keyPoints: [
              'CID-11 QD85 retira o foco de "fraqueza individual" e vincula o esgotamento às condições e gestão do trabalho [3].',
              'Portaria GM/MS nº 1.999/2023 fortalece a notificação, a vigilância epidemiológica e a assistência no SUS [4].',
            ],
          },
          {
            id: 'critica-psicologizacao',
            heading: 'Crítica à individualização e intervenção organizacional',
            paragraphs: [
              'Maslach e Leiter já advertiam que intervenções restritas a técnicas individuais de relaxamento ou treino de resiliência fracassam quando preservam metas abusivas, conflito de valores, injustiça e sobrecarga estrutural [1].',
              'A atuação psicológica alinhada à Saúde do Trabalhador evita culpabilizar o sujeito esgotado e investiga seis áreas de desajuste organizacional: carga de trabalho, controle, recompensa, comunidade, justiça e valores [1] [2] [4].',
            ],
            keyPoints: [
              'Burnout não é transtorno puramente intrapsíquico: resulta de desajuste estrutural entre trabalhador e organização [1] [3].',
              'Prevenção efetiva exige redesenho do trabalho, autonomia real e políticas institucionais de proteção [1] [4].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Maslach & Leiter (1997/1999)',
            author: 'Christina Maslach e Michael P. Leiter',
            work: 'Trabalho: fonte de prazer ou desgaste? Guia para vencer o estresse na empresa',
            year: '1997 / BR 1999',
            specificPoint: 'Três dimensões do burnout e seis áreas de desajuste organizacional (carga, controle, recompensa, comunidade, justiça, valores).',
            excerptNote:
              'Sustenta que a origem do esgotamento reside na organização do trabalho, e não em déficit pessoal de enfrentamento.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Wanderley Codo (1999)',
            author: 'Wanderley Codo (org.)',
            work: 'Educação: carinho e trabalho - Burnout, a síndrome da desistência do educador',
            year: '1999',
            specificPoint: 'Pesquisa CNTE/LPT-UnB sobre sofrimento psíquico, desistência afetiva e dimensões do burnout em educadores brasileiros.',
            excerptNote:
              'Marco da Psicologia do Trabalho no Brasil ao mensurar exaustão emocional, despersonalização e falta de envolvimento pessoal no trabalho docente.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'OMS CID-11 QD85 (2022)',
            author: 'Organização Mundial da Saúde (OMS)',
            work: 'Classificação Internacional de Doenças - 11a Revisão (CID-11), código QD85',
            year: '2022',
            specificPoint: 'Fatores que influenciam o estado de saúde: Burnout definido como fenômeno ocupacional.',
            excerptNote:
              'Estabelece que o burnout resulta de estresse crônico no local de trabalho não manejado com sucesso, restrito ao âmbito ocupacional.',
            kind: 'norma',
          },
          {
            id: '4',
            shortLabel: 'Portaria GM/MS 1.999/2023',
            author: 'Ministério da Saúde',
            work: 'Portaria GM/MS nº 1.999, de 27 de novembro de 2023',
            year: '2023',
            specificPoint: 'Atualização da Lista de Doenças Relacionadas ao Trabalho (LDRT), incluindo Síndrome de Burnout e transtornos mentais.',
            excerptNote:
              'Altera a Portaria de Consolidação GM/MS nº 5/2017, ampliando a LDRT para 347 códigos em Listas A e B no SUS.',
            kind: 'norma',
          },
        ],
        flashcards: [
          {
            id: 'fc-t3-1-1',
            front: 'Quais são as três dimensões clássicas da Síndrome de Burnout segundo Maslach e Leiter?',
            back: 'Exaustão emocional, cinismo (ou despersonalização/distanciamento afetivo) e baixa realização profissional (sentimento de ineficácia).',
            sourceId: '1',
          },
          {
            id: 'fc-t3-1-2',
            front: 'Por que Wanderley Codo (1999) definiu o burnout como "síndrome da desistência"?',
            back: 'Porque o trabalhador continua comparecendo ao trabalho, mas rompe afetivamente o investimento no cuidado e no sentido da atividade diante de condições adversas.',
            sourceId: '2',
          },
          {
            id: 'fc-t3-1-3',
            front: 'Como a CID-11 (código QD85) e a Portaria GM/MS nº 1.999/2023 enquadram o burnout?',
            back: 'A CID-11 (QD85) classifica o burnout exclusivamente como fenômeno ocupacional, e a Portaria GM/MS nº 1.999/2023 o incorpora formalmente à LDRT brasileira.',
            sourceId: '3',
          },
        ],
        quiz: [
          {
            id: 'q-t3-1-1',
            question:
              'Na 11a Revisão da Classificação Internacional de Doenças (CID-11), vigente desde 2022, o código QD85 define a Síndrome de Burnout como:',
            options: [
              'Transtorno de personalidade antissocial sem relação com o trabalho',
              'Condição transitória que não pode constar na Lista de Doenças Relacionadas ao Trabalho no Brasil',
              'Déficit exclusivamente genético de regulação do sono fora do ambiente laboral',
              'Fenômeno ocupacional resultante de estresse crônico no local de trabalho não manejado com sucesso',
            ],
            correctIndex: 3,
            explanation:
              'A CID-11 (QD85) circunscreve o burnout ao contexto ocupacional e a Portaria GM/MS nº 1.999/2023 consolidou sua inclusão na LDRT do SUS.',
            sourceId: '3',
          },
          {
            id: 'q-t3-1-2',
            question:
              'De acordo com Maslach e Leiter (1997 / BR 1999) e Wanderley Codo (1999), por que treinamentos individuais de relaxamento são insuficientes para prevenir o burnout?',
            options: [
              'Porque o burnout independe da carga horária e das relações de poder na instituição',
              'Porque mantêm intactos os desajustes organizacionais de sobrecarga, baixo controle, injustiça e falta de suporte',
              'Porque a exaustão emocional melhora espontaneamente com o aumento da competição entre colegas',
              'Porque apenas trabalhadores autônomos desenvolvem esgotamento profissional',
            ],
            correctIndex: 1,
            explanation:
              'Ambos os estudos mostram que o burnout decorre da organização do trabalho e exige transformações estruturais nas condições, autonomia e reconhecimento laboral.',
            sourceId: '1',
          },
        ],
        comparison: {
          title: 'Três Dimensões do Burnout vs. Determinantes Organizacionais',
          headers: ['Dimensão', 'Manifestação clínica e laboral', 'Determinante organizacional'],
          rows: [
            ['Exaustão emocional', 'Fadiga extrema e esgotamento de energia psíquica', 'Sobrecarga crônica de metas e ritmo acelerado'],
            ['Cinismo / despersonalização', 'Distanciamento afetivo, frieza e irritabilidade', 'Conflito ético de valores e falta de suporte institucional'],
            ['Baixa realização', 'Sensação de ineficácia e desistência (Codo)', 'Ausência de autonomia, recursos e reconhecimento'],
          ],
        },
        flow: {
          title: 'Do desajuste organizacional ao reconhecimento normativo do Burnout',
          steps: [
            {
              label: 'Desajuste trabalho e sujeito',
              detail: 'Sobrecarga, baixo controle, injustiça e conflito de valores corroem o engajamento.',
              sourceId: '1',
            },
            {
              label: 'Esgotamento e desistência',
              detail: 'Exaustão emocional, cinismo defensivo e perda de realização comprometem o cuidado e a saúde.',
              sourceId: '2',
            },
            {
              label: 'Enquadramento ocupacional',
              detail: 'CID-11 (QD85) e Portaria GM/MS nº 1.999/2023 situam o quadro na organização laboral.',
              sourceId: '3',
            },
          ],
        },
      },
      {
        id: 't3-2',
        code: 'T3.2',
        discipline: 'trabalho',
        moduleId: 't3',
        title: 'Assédio Moral e Violência Organizacional',
        summary:
          'Caracterização clínica e relacional do assédio moral em Marie-France Hirigoyen e crítica político-organizacional das humilhações no trabalho em Margarida Barreto.',
        estimatedMinutes: 9,
        tags: ['assedio-moral', 'violencia-institucional', 'saude-mental', 'precarizacao'],
        sections: [
          {
            id: 'definicao-hirigoyen',
            heading: 'Condutas repetitivas e abordagem de Marie-France Hirigoyen',
            paragraphs: [
              'A psiquiatra e psicanalista francesa Marie-France Hirigoyen consolidou o conceito de {{assedio-moral-trabalho|assédio moral no trabalho}} como toda conduta abusiva (gestos, palavras, comportamentos ou atitudes) que, por sua repetição e sistematização, atenta contra a dignidade ou integridade psíquica e física de alguém, degradando o clima laboral [1] [2].',
              'Em Mal-estar no Trabalho (2001), Hirigoyen refinou o conceito para diferenciar o assédio moral do estresse generalizado, de conflitos abertos pontuais e do exercício legítimo do poder diretivo com cobrança respeitosa de tarefas [2].',
            ],
            keyPoints: [
              'Exige repetição e prolongamento no tempo, distinguindo-se de atritos isolados ou críticas técnicas pontuais [1] [2].',
              'Pode manifestar-se de modo vertical descendente (mais frequente), horizontal (entre pares), ascendente ou misto [2].',
            ],
          },
          {
            id: 'barreto-jornada-humilhacoes',
            heading: 'Margarida Barreto e o assédio moral organizacional',
            paragraphs: [
              'No Brasil, a médica do trabalho Margarida Barreto conduziu pesquisa empírica pioneira (2000; livro de 2003) com mais de dois mil trabalhadores em sindicatos e ambulatórios, desvelando a jornada de humilhações que atinge com maior intensidade mulheres, pessoas com LER/DORT, trabalhadores racializados e mais velhos [3].',
              'Enquanto Hirigoyen enfatiza inicialmente a dinâmica perversa interpessoal de matriz psicanalítica, Barreto desloca o eixo para a dimensão político-organizacional: o {{assedio-moral-organizacional|assédio moral organizacional}} é incorporado como método de gestão pelo medo, mediante metas inatingíveis e constrangimentos públicos [2] [3].',
            ],
            keyPoints: [
              'Barreto articula o assédio moral à reestruturação produtiva, à terceirização e à exclusão de trabalhadores lesionados [3].',
              'Consequências incluem depressão, crises de ansiedade, hipertensão, distúrbios do sono, vergonha e risco de suicídio [1] [3].',
            ],
          },
          {
            id: 'enfrentamento-psicologia',
            heading: 'Critérios de identificação e atuação psicossocial',
            paragraphs: [
              'Na clínica e nas organizações, a Psicologia evita reduzir o assédio moral a mero desajuste de personalidade entre dois indivíduos, investigando como a cultura gerencial tolera, oculta ou premia a violência psicológica [2] [3].',
              'O enfrentamento ético requer escuta acolhedora sem revitimização, registro da recorrência, fortalecimento de coletivos de trabalho e transformação das práticas de gestão [2] [3].',
            ],
            keyPoints: [
              'Cobrança técnica proporcional e exercício legítimo de supervisão não configuram assédio moral [2].',
              'Articular a escuta clínica relacional (Hirigoyen) à leitura político-sanitária da saúde do trabalhador (Barreto) [1] [3].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Hirigoyen (1998/2000)',
            author: 'Marie-France Hirigoyen',
            work: 'Assédio Moral: a violência perversa no cotidiano',
            year: '1998 / BR 2000',
            specificPoint: 'Caracterização da violência psicológica sutil, fases do assédio e efeitos sobre a vítima.',
            excerptNote:
              'Formula a análise clínico-psicanalítica inicial do assédio moral nas relações familiares e profissionais (Bertrand Brasil, 2000).',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Hirigoyen (2001/2002)',
            author: 'Marie-France Hirigoyen',
            work: 'Mal-estar no Trabalho: redefinindo o assédio moral',
            year: '2001 / BR 2002',
            specificPoint: 'Diferenciação entre assédio moral, estresse, conflito pontual e gestão por pressão.',
            excerptNote:
              'Amplia a análise para fatores organizacionais e explicita critérios que separam conflito aberto e poder diretivo legítimo do assédio sistemático.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'Barreto (2000/2003)',
            author: 'Margarida Maria Silveira Barreto',
            work: 'Violência, saúde e trabalho: uma jornada de humilhações',
            year: '2000 / 2003',
            specificPoint: 'Pesquisa brasileira sobre humilhações sistemáticas, assédio organizacional e adoecimento de trabalhadores.',
            excerptNote:
              'Baseada em dissertação de 2000 e publicada pela EDUC/FAPESP em 2003, vincula o assédio às estratégias produtivas de controle e exclusão.',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t3-2-1',
            front: 'Quais critérios diferenciam o assédio moral de um conflito pontual ou exigência legítima de trabalho?',
            back: 'O assédio moral envolve condutas abusivas repetitivas e prolongadas no tempo que visam degradar a dignidade e o ambiente laboral, diferindo de atritos isolados ou cobranças técnicas proporcionais.',
            sourceId: '2',
          },
          {
            id: 'fc-t3-2-2',
            front: 'O que caracteriza o assédio moral organizacional na pesquisa de Margarida Barreto?',
            back: 'O uso sistemático de humilhações, metas abusivas e punições coletivas como estratégia gerencial de controle pelo medo e descarte de trabalhadores adoecidos.',
            sourceId: '3',
          },
          {
            id: 'fc-t3-2-3',
            front: 'Qual diferença de ênfase distingue Marie-France Hirigoyen de Margarida Barreto?',
            back: 'Hirigoyen parte de uma matriz psicanalítica e relacional focada na perversão e no vínculo; Barreto prioriza a saúde do trabalhador, a classe, o gênero e a crítica político-organizacional.',
            sourceId: '1',
          },
        ],
        quiz: [
          {
            id: 'q-t3-2-1',
            question:
              'Segundo Marie-France Hirigoyen (2001 / BR 2002), qual situação NÃO deve ser classificada como assédio moral no trabalho?',
            options: [
              'Isolamento deliberado e desqualificação repetida de um trabalhador ao longo de meses',
              'Exposição sistemática do profissional a tarefas humilhantes ou abaixo de sua qualificação como punição',
              'Conflito pontual ou cobrança técnica respeitosa e proporcional inerente ao poder diretivo',
              'Difamação contínua entre colegas que degrada a saúde psíquica da vítima',
            ],
            correctIndex: 2,
            explanation:
              'Hirigoyen enfatiza que conflitos abertos esporádicos e exigências legítimas de trabalho não configuram assédio moral, que exige repetição, intencionalidade degradante e ataque à dignidade.',
            sourceId: '2',
          },
          {
            id: 'q-t3-2-2',
            question:
              'Na investigação brasileira de Margarida Barreto (2000 / 2003), as humilhações no trabalho vinculam-se diretamente a:',
            options: [
              'Desvios individuais aleatórios sem conexão com metas empresariais',
              'Estratégias político-organizacionais de intensificação produtiva e exclusão de trabalhadores lesionados, mulheres e grupos vulnerabilizados',
              'Políticas sindicais voltadas à proteção de portadores de LER/DORT',
              'Apenas relações horizontais entre colegas sem participação de chefias',
            ],
            correctIndex: 1,
            explanation:
              'Barreto demonstra que a jornada de humilhações opera como instrumento gerencial estruturado na reestruturação produtiva, atingindo com maior severidade trabalhadoras, adoecidos e minorias.',
            sourceId: '3',
          },
        ],
        comparison: {
          title: 'Leituras Complementares: Hirigoyen vs. Barreto',
          headers: ['Eixo analítico', 'Marie-France Hirigoyen', 'Margarida Barreto'],
          rows: [
            ['Ênfase teórica', 'Psicodinâmica relacional e perversão moral no cotidiano', 'Saúde do trabalhador, classe, gênero e gestão do capital'],
            ['Foco empírico', 'Casos clínicos e distinção jurídica do assédio', 'Trabalhadores adoecidos e humilhações em fábricas e serviços'],
            ['Critério central', 'Repetição degradante distinta de conflito pontual', 'Assédio organizacional como método gerencial de controle'],
          ],
        },
        flow: {
          title: 'Escalada da violência psicológica no trabalho',
          steps: [
            {
              label: 'Estratégia gerencial ou hostilidade',
              detail: 'Metas punitivas ou perseguição miram trabalhadores resistentes, lesionados ou minorizados.',
              sourceId: '3',
            },
            {
              label: 'Repetição e isolamento',
              detail: 'Humilhações recorrentes, boicote de informações e desqualificação degradam o ambiente laboral.',
              sourceId: '1',
            },
            {
              label: 'Adoecimento e ruptura',
              detail: 'Vergonha, ansiedade, sintomas psicossomáticos e afastamento exigem intervenção coletiva e sanitária.',
              sourceId: '2',
            },
          ],
        },
      },
      {
        id: 't3-3',
        code: 'T3.3',
        discipline: 'trabalho',
        moduleId: 't3',
        title: 'NTEP, LDRT e Saúde do Trabalhador no SUS',
        summary:
          'Nexo Técnico Epidemiológico Previdenciário (Lei nº 11.430/2006 e Decreto nº 6.042/2007), atualização da LDRT pela Portaria GM/MS nº 1.999/2023 e atuação do psicólogo no CREPOP.',
        estimatedMinutes: 10,
        tags: ['ntep', 'politicas-publicas', 'trabalho-e-saude', 'etica-cfp'],
        sections: [
          {
            id: 'ntep-inss',
            heading: 'O NTEP e a inversão do ônus da prova no INSS',
            paragraphs: [
              'Historicamente, o reconhecimento previdenciário de agravos ocupacionais dependia da emissão da Comunicação de Acidente de Trabalho (CAT) pelo empregador, gerando subnotificação expressiva. A Lei nº 11.430/2006 (que alterou a Lei nº 8.213/1991) e o Decreto nº 6.042/2007 (que incluiu a Lista C no Decreto nº 3.048/1999) instituíram o {{ntep|Nexo Técnico Epidemiológico Previdenciário (NTEP)}} [1].',
              'Pelo NTEP, a perícia do INSS cruza estatisticamente o código da doença (CID) com o ramo de atividade econômica da empresa (CNAE); constatada significância epidemiológica na Lista C, presume-se o nexo acidentário mesmo sem emissão de CAT, cabendo à empresa apresentar prova técnica em contrário [1].',
            ],
            keyPoints: [
              'Lei nº 11.430/2006 e Decreto nº 6.042/2007 criaram e regulamentaram o NTEP (Lista C previdenciária do INSS) [1].',
              'Inversão do ônus da prova protege o segurado diante da recusa ou omissão patronal na emissão de CAT [1].',
            ],
          },
          {
            id: 'ldrt-1999-2023',
            heading: 'LDRT no SUS: da Portaria 1.339/1999 à Portaria 1.999/2023',
            paragraphs: [
              'No campo das políticas públicas, não se deve confundir a Lista C do NTEP (instrumento previdenciário do INSS) com a {{ldrt|Lista de Doenças Relacionadas ao Trabalho (LDRT)}} do Ministério da Saúde, voltada à vigilância, ao diagnóstico clínico e à atenção integral no SUS [1] [2] [3].',
              'A Portaria GM/MS nº 1.339/1999 instituiu a primeira LDRT com 182 códigos organizados pela classificação de Schilling (grupos I, II e III) [2]. Após 24 anos, a Portaria GM/MS nº 1.999/2023 (27 de novembro de 2023) revisou o rol para 347 códigos, distribuídos em Lista A (agentes/fatores de risco para doenças) e Lista B (doenças para fatores de risco), incorporando formalmente burnout, transtornos de ansiedade, depressão, tentativa de suicídio relacionada ao trabalho e COVID-19 [3].',
            ],
            keyPoints: [
              'Portaria GM/MS nº 1.339/1999: marco inicial da LDRT no SUS (182 códigos segundo Schilling I, II e III) [2].',
              'Portaria GM/MS nº 1.999/2023: atualização vigente que amplia a LDRT para 347 códigos (Listas A e B) e inclui burnout e transtornos mentais [3].',
              'Separar claramente a LDRT do Ministério da Saúde (vigilância e assistência no SUS) da Lista C do NTEP (perícia previdenciária no INSS) [1] [3].',
            ],
          },
          {
            id: 'crepop-cerest-psicologia',
            heading: 'Atuação da Psicologia na RENAST e nos CEREST (CREPOP)',
            paragraphs: [
              'As Referências Técnicas do CFP/CREPOP para atuação em Saúde do Trabalhador no âmbito da Saúde Pública (1a edição em 2008 e edição revisada em 2019) orientam psicólogas e psicólogos nos {{cerest-renast|CEREST e na RENAST}} a superar o modelo clínico-individualizante e higienista [4].',
              'A prática no SUS articula vigilância em saúde do trabalhador (VISAT), acolhimento do sofrimento psíquico relacionado ao trabalho, matriciamento da Rede de Atenção Psicossocial (RAPS) e controle social com sindicatos e movimentos de trabalhadores [4].',
            ],
            keyPoints: [
              'CEREST não se restringe a ambulatório isolado: exerce retaguarda técnica, vigilância nos locais de trabalho e educação permanente na rede [4].',
              'Compreender o trabalho como determinante social do processo saúde-doença orienta a escuta clínica e a notificação compulsória no SINAN [3] [4].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Lei 11.430/2006 e Dec. 6.042/2007',
            author: 'Brasil (Presidência da República)',
            work: 'Lei nº 11.430/2006 e Decreto nº 6.042/2007 (Lista C do Decreto nº 3.048/1999)',
            year: '2006 / 2007',
            specificPoint: 'Instituição e regulamentação do NTEP no Regime Geral de Previdência Social (cruzamento CNAE x CID).',
            excerptNote:
              'Permite ao INSS presumir o nexo epidemiológico entre agravo e atividade econômica independentemente da emissão de CAT pelo empregador.',
            kind: 'norma',
          },
          {
            id: '2',
            shortLabel: 'Portaria GM/MS 1.339/1999',
            author: 'Ministério da Saúde',
            work: 'Portaria GM/MS nº 1.339, de 18 de novembro de 1999',
            year: '1999',
            specificPoint: 'Primeira Lista de Doenças Relacionadas ao Trabalho (182 códigos) e adoção da classificação de Schilling I a III.',
            excerptNote:
              'Marco histórico na saúde pública brasileira para estabelecimento de relação clínica e epidemiológica entre trabalho e adoecimento.',
            kind: 'norma',
          },
          {
            id: '3',
            shortLabel: 'Portaria GM/MS 1.999/2023',
            author: 'Ministério da Saúde',
            work: 'Portaria GM/MS nº 1.999, de 27 de novembro de 2023',
            year: '2023',
            specificPoint: 'Atualização da LDRT (347 códigos em Listas A e B), incorporando Burnout, ansiedade, depressão e COVID-19.',
            excerptNote:
              'Altera a Portaria de Consolidação GM/MS nº 5/2017, ampliando o reconhecimento sanitário de agravos psicossociais e mentais no SUS.',
            kind: 'norma',
          },
          {
            id: '4',
            shortLabel: 'CFP/CREPOP (2008/2019)',
            author: 'Conselho Federal de Psicologia (CFP) / CREPOP',
            work: 'Saúde do Trabalhador no âmbito da Saúde Pública: referências para a atuação da(o) psicóloga(o)',
            year: '2008 / 2019',
            specificPoint: 'Diretrizes de atuação da Psicologia na RENAST, nos CEREST, na VISAT e na articulação com a RAPS.',
            excerptNote:
              'Documento elaborado com participação de referências como Maria da Graça Corrêa Jacques e Leny Sato (1a ed. 2008, ed. revisada 2019).',
            kind: 'norma',
          },
        ],
        flashcards: [
          {
            id: 'fc-t3-3-1',
            front: 'Como funciona o NTEP e quais normas o instituíram no Brasil?',
            back: 'Criado pela Lei nº 11.430/2006 e regulamentado pelo Decreto nº 6.042/2007 (Lista C), o NTEP cruza CNAE e CID no INSS para presumir nexo ocupacional mesmo sem CAT emitida pelo empregador.',
            sourceId: '1',
          },
          {
            id: 'fc-t3-3-2',
            front: 'O que mudou da Portaria GM/MS nº 1.339/1999 para a Portaria GM/MS nº 1.999/2023?',
            back: 'A LDRT foi ampliada de 182 códigos (1999) para 347 códigos organizados em Listas A e B (2023), incorporando formalmente burnout, transtornos de ansiedade, depressão e COVID-19.',
            sourceId: '3',
          },
          {
            id: 'fc-t3-3-3',
            front: 'Qual o papel do psicólogo nos CEREST segundo as Referências Técnicas CFP/CREPOP (2008/2019)?',
            back: 'Superar a clínica individualizante e atuar em vigilância em saúde do trabalhador (VISAT), matriciamento na RAPS, escuta do sofrimento laboral e articulação com movimentos sociais.',
            sourceId: '4',
          },
        ],
        quiz: [
          {
            id: 'q-t3-3-1',
            question:
              'Qual distinção normativa está correta entre a LDRT atualizada em 2023 e o NTEP previdenciário?',
            options: [
              'A LDRT (Portaria GM/MS nº 1.999/2023, com 347 códigos em Listas A e B) orienta vigilância e atenção no SUS, enquanto o NTEP (Lista C do Decreto nº 6.042/2007) opera no INSS cruzando CNAE e CID',
              'A Portaria GM/MS nº 1.339/1999 revogou a Portaria nº 1.999/2023 e reduziu a lista para 182 códigos',
              'O NTEP proíbe o reconhecimento de transtornos mentais quando não houver CAT assinada pela empresa',
              'A Portaria GM/MS nº 1.999/2023 excluiu o burnout e a depressão das doenças relacionadas ao trabalho',
            ],
            correctIndex: 0,
            explanation:
              'A Portaria GM/MS nº 1.999/2023 ampliou a LDRT do SUS de 182 para 347 códigos (incluindo burnout e saúde mental), enquanto o NTEP (Lista C previdenciária) fundamenta o nexo estatístico CNAE x CID no INSS.',
            sourceId: '3',
          },
          {
            id: 'q-t3-3-2',
            question:
              'O principal avanço introduzido pela Lei nº 11.430/2006 e pelo Decreto nº 6.042/2007 por meio do NTEP foi:',
            options: [
              'Transferir integralmente o diagnóstico clínico do SUS para as empresas contratantes',
              'Inverter o ônus da prova na perícia do INSS ao presumir o nexo ocupacional por significância epidemiológica entre CNAE e CID, mesmo sem CAT',
              'Substituir a RAPS pelos ambulatórios privados de medicina ocupacional',
              'Restringir os benefícios acidentários exclusivamente a acidentes típicos com fraturas',
            ],
            correctIndex: 1,
            explanation:
              'Antes do NTEP, a recusa patronal em emitir a CAT dificultava o reconhecimento acidentário; com a Lista C, o cruzamento CNAE x CID permite presumir o nexo na perícia do INSS.',
            sourceId: '1',
          },
          {
            id: 'q-t3-3-3',
            question:
              'Segundo o documento CFP/CREPOP sobre Saúde do Trabalhador no âmbito da Saúde Pública (2008 / 2019), a atuação psicológica na RENAST e nos CEREST deve priorizar:',
            options: [
              'Atendimento psicoterápico individual isolado voltado à adaptação do trabalhador às metas produtivas',
              'Aplicação exclusiva de testes de seleção ocupacional para empresas conveniadas',
              'Ações integradas de vigilância em saúde do trabalhador (VISAT), matriciamento na rede SUS e análise das condições de trabalho',
              'Encaminhamento compulsório de todas as queixas laborais para perícia jurídica privada',
            ],
            correctIndex: 2,
            explanation:
              'As referências do CREPOP rejeitam o modelo adaptacionista individualizante e posicionam a Psicologia na vigilância, matriciamento e transformação coletiva dos processos de trabalho.',
            sourceId: '4',
          },
        ],
        comparison: {
          title: 'NTEP (INSS) vs. LDRT 2023 (SUS)',
          headers: ['Dimensão', 'NTEP (Lei 11.430/2006)', 'LDRT 2023 (Portaria 1.999/2023)'],
          rows: [
            ['Órgão e finalidade', 'Previdência Social (INSS) para benefícios acidentários', 'Ministério da Saúde (SUS) para vigilância e cuidado'],
            ['Estrutura técnica', 'Cruzamento estatístico CNAE x CID na Lista C', '347 códigos em Lista A (riscos) e Lista B (doenças)'],
            ['Impacto prático', 'Presume nexo mesmo sem emissão patronal de CAT', 'Amplia notificação no SINAN e inclui burnout e saúde mental'],
          ],
        },
        flow: {
          title: 'Fluxo de reconhecimento e cuidado em Saúde do Trabalhador',
          steps: [
            {
              label: 'Agravamento e escuta qualificada',
              detail: 'Rede SUS ou CEREST investiga história laboral do usuário para além do sintoma isolado.',
              sourceId: '4',
            },
            {
              label: 'Referência sanitária na LDRT 2023',
              detail: 'Aplica-se a Portaria GM/MS nº 1.999/2023 para orientar diagnóstico, notificação e vigilância.',
              sourceId: '3',
            },
            {
              label: 'Proteção previdenciária pelo NTEP',
              detail: 'No INSS, cruzamento CNAE x CID (Lista C) pode firmar nexo acidentário mesmo sem CAT.',
              sourceId: '1',
            },
          ],
        },
      },
    ],
  },
  {
    id: 't4',
    code: 'T4',
    discipline: 'trabalho',
    title: 'Módulo T4: Sentidos do Trabalho, Clínica da Atividade e Precarização',
    description:
      'Centralidade do trabalho, poder de agir em Yves Clot e impactos psicossociais da precarização contemporânea.',
    topics: [
      {
        id: 't4-1',
        code: 'T4.1',
        discipline: 'trabalho',
        moduleId: 't4',
        title: 'Centralidade e Sentido do Trabalho',
        summary:
          'Crítica de Ricardo Antunes às teses do fim do trabalho, distinção entre sentido e significado em Pedro Bendassolli e dimensões do trabalho com sentido em Estelle Morin.',
        estimatedMinutes: 8,
        tags: ['sentido-do-trabalho', 'subjetividade', 'trabalho-e-identidade', 'organizacao-do-trabalho'],
        sections: [
          {
            id: 'centralidade-antunes',
            heading: 'A persistente centralidade do trabalho em Ricardo Antunes',
            paragraphs: [
              'Diante de teses sociológicas das décadas de 1980 e 1990 que anunciavam o fim do trabalho devido à automação, Ricardo Antunes sustenta a {{centralidade-do-trabalho|centralidade do trabalho}} como categoria ontológica e estruturante da sociabilidade e da {{subjetividade-historica|subjetividade}} [1].',
              'O que entra em crise não é o trabalho humano em sentido amplo, mas o emprego assalariado fabril estável típico do fordismo; em seu lugar, expande-se a classe-que-vive-do-trabalho nos serviços, na informalidade, no trabalho feminino e nos vínculos precarizados [1].',
            ],
            keyPoints: [
              'Antunes refuta as teses do "adeus ao trabalho" e analisa a metamorfose heterogênea da classe trabalhadora [1].',
              'O trabalho conserva dupla face: potencial de criação humana (poiésis) e espaço de estranhamento sob o capital [1].',
            ],
          },
          {
            id: 'sentido-vs-significado',
            heading: 'Sentido e significado: a distinção em Pedro Bendassolli',
            paragraphs: [
              'Na Psicologia do Trabalho brasileira, Pedro F. Bendassolli alerta que {{sentido-e-significado|sentido e significado}} não devem ser empregados como sinônimos indiferenciados [2].',
              'O significado corresponde à representação socialmente construída, compartilhada pela cultura e pela linguagem sobre o valor do trabalho; já o sentido refere-se à apropriação afetiva, singular e existencial que cada sujeito elabora na relação concreta com sua atividade [2].',
            ],
            keyPoints: [
              'Significado situa-se no plano sociocultural, histórico e discursivo compartilhado [2].',
              'Sentido envolve coerência subjetiva, desejo e implicação pessoal do trabalhador com o que realiza [2].',
            ],
          },
          {
            id: 'trabalho-com-sentido-morin',
            heading: 'Características do trabalho com sentido em Estelle Morin',
            paragraphs: [
              'Em pesquisas empíricas com trabalhadores e gestores, Estelle M. Morin identifica que o trabalho adquire sentido quando é realizado de forma eficiente e gera resultado útil, proporciona satisfação intrínseca, assegura autonomia, promove inserção social e mantém alinhamento ético e moral [3].',
              'Quando a organização impõe tarefas inúteis, antiéticas ou esvaziadas de autonomia e laços coletivos, instala-se a perda de sentido, comprometendo o engajamento e a saúde mental [2] [3].',
            ],
            keyPoints: [
              'Morin sintetiza características do trabalho com sentido: eficiência/utilidade, prazer na realização, ética, autonomia, relacionamento e segurança [3].',
              'Sentido do trabalho resulta de construção psicossocial tensionada pelas contradições produtivas [1] [2].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Antunes (1995; 1999)',
            author: 'Ricardo Antunes',
            work: 'Adeus ao Trabalho? (1995) e Os Sentidos do Trabalho (1999)',
            year: '1995; 1999',
            specificPoint: 'Crítica ao fim da centralidade do trabalho e análise da classe-que-vive-do-trabalho.',
            excerptNote:
              'Demonstra que a retração do operariado fabril tradicional não elimina a centralidade do trabalho, mas a complexifica nos serviços e na precarização.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Bendassolli (2009)',
            author: 'Pedro F. Bendassolli',
            work: 'Psicologia e Trabalho: Apropriações e Significados',
            year: '2009',
            specificPoint: 'Diferenciação conceitual entre significado (social/cultural) e sentido (apropriação subjetiva) do trabalho.',
            excerptNote:
              'Sistematiza as matrizes teóricas da psicologia sobre o sentido do trabalho e evita o uso indiscriminado dos dois termos.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'Morin (2001)',
            author: 'Estelle M. Morin',
            work: 'Os sentidos do trabalho (RAE - Revista de Administração de Empresas, v. 41, n. 3, p. 8-19)',
            year: '2001',
            specificPoint: 'Características do trabalho que tem sentido: eficiência, utilidade, autonomia, ética, inserção social e prazer.',
            excerptNote:
              'Artigo clássico na psicologia organizacional e do trabalho distinguindo sentido pessoal e condições organizacionais favoráveis.',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t4-1-1',
            front: 'Como Ricardo Antunes responde às teses sociológicas do "fim do trabalho"?',
            back: 'Argumenta que entrou em crise a forma histórica do emprego fabril estável, mas o trabalho permanece central e ampliado na heterogênea classe-que-vive-do-trabalho.',
            sourceId: '1',
          },
          {
            id: 'fc-t4-1-2',
            front: 'Qual a distinção entre significado e sentido do trabalho em Pedro Bendassolli (2009)?',
            back: 'Significado é a representação social e cultural compartilhada sobre o trabalhar; sentido é a apropriação afetiva e singular construída pelo sujeito em sua atividade.',
            sourceId: '2',
          },
          {
            id: 'fc-t4-1-3',
            front: 'Quais características marcam um trabalho com sentido segundo Estelle Morin (2001)?',
            back: 'Ser realizado de modo eficiente e útil, oferecer autonomia, proporcionar satisfação intrínseca, manter alinhamento ético, garantir segurança e permitir inserção relacional.',
            sourceId: '3',
          },
        ],
        quiz: [
          {
            id: 'q-t4-1-1',
            question:
              'Na Psicologia do Trabalho brasileira, a distinção sistematizada por Pedro F. Bendassolli (2009) estabelece que:',
            options: [
              'Significado remete às representações culturais compartilhadas sobre o trabalho, enquanto sentido diz respeito à apropriação subjetiva e singular pelo trabalhador',
              'Sentido e significado são conceitos idênticos que designam apenas o valor salarial do cargo',
              'Sentido depende exclusivamente da herança biológica e não guarda relação com o contexto produtivo',
              'Significado refere-se às emoções privadas e sentido às leis trabalhistas',
            ],
            correctIndex: 0,
            explanation:
              'Bendassolli (2009) distingue o registro coletivo/cultural (significado) do registro afetivo/pessoal (sentido), evitando tratá-los como sinônimos imprecisos.',
            sourceId: '2',
          },
          {
            id: 'q-t4-1-2',
            question:
              'Ao analisar a "centralidade do trabalho" em Adeus ao Trabalho? (1995) e Os Sentidos do Trabalho (1999), Ricardo Antunes defende que:',
            options: [
              'A automação eliminou a necessidade do trabalho humano na produção de valor',
              'O trabalho perdeu relevância identitária após a década de 1980',
              'A redução do operariado industrial clássico não extingue o trabalho, que se metamorfoseia em serviços, informalidade e precarização',
              'Apenas trabalhadores do setor industrial pertencem à classe-que-vive-do-trabalho',
            ],
            correctIndex: 2,
            explanation:
              'Antunes refuta a tese do fim do trabalho ao mostrar a expansão heterogênea e precarizada da classe-que-vive-do-trabalho nos serviços e na informalidade.',
            sourceId: '1',
          },
        ],
        comparison: {
          title: 'Significado vs. Sentido do Trabalho',
          headers: ['Critério', 'Significado do Trabalho', 'Sentido do Trabalho'],
          rows: [
            ['Plano predominante', 'Cultural, histórico e linguisticamente compartilhado', 'Subjetivo, afetivo e singular na trajetória pessoal'],
            ['Dinâmica de formação', 'Normas sociais, ideologias e valores coletivos do ofício', 'Apropriação ativa do sujeito frente à tarefa e aos outros'],
            ['Condição em Morin (2001)', 'Reconhecimento social da utilidade e valor moral', 'Autonomia, prazer no fazer e coerência ética pessoal'],
          ],
        },
        flow: {
          title: 'Construção psicossocial do sentido do trabalho',
          steps: [
            {
              label: 'Significados sociais disponíveis',
              detail: 'Cultura, classe e história oferecem representações sobre o valor do trabalhar.',
              sourceId: '1',
            },
            {
              label: 'Experiência concreta da atividade',
              detail: 'Sujeito confronta autonomia, ética, utilidade e laços sociais no cotidiano laboral.',
              sourceId: '3',
            },
            {
              label: 'Apropriação singular de sentido',
              detail: 'Quando há coerência entre fazer, valores e reconhecimento, o trabalho sustenta identidade.',
              sourceId: '2',
            },
          ],
        },
      },
      {
        id: 't4-2',
        code: 'T4.2',
        discipline: 'trabalho',
        moduleId: 't4',
        title: 'Clínica da Atividade e Poder de Agir',
        summary:
          'Matriz histórico-cultural vigotskiana de Yves Clot, real da atividade, gênero profissional e estilo, e ampliação do poder de agir pela autoconfrontação.',
        estimatedMinutes: 9,
        tags: ['clinica-da-atividade', 'poder-de-agir', 'subjetividade', 'ergonomia-da-atividade'],
        sections: [
          {
            id: 'matriz-vigotskiana-real',
            heading: 'Matriz vigotskiana e o conceito de real da atividade',
            paragraphs: [
              'Desenvolvida por Yves Clot no CNAM francês, a Clínica da Atividade ancora-se na psicologia histórico-cultural de Vigotski (mediação instrumental e desenvolvimento pela controvérsia social), distinguindo-se teórica e metodologicamente da Psicodinâmica do Trabalho de Christophe Dejours, de matriz psicanalítica [1] [2].',
              'Clot diferencia a atividade realizada (o gesto observável que foi efetivamente executado) do {{real-da-atividade|real da atividade}}: tudo aquilo que o trabalhador não fez, não pôde fazer, tentou fazer, conteve ou adiou diante dos constrangimentos da situação [2].',
            ],
            keyPoints: [
              'O trabalho impedido ou suspenso exerce peso psíquico tão intenso quanto a ação executada [2].',
              'Clínica da Atividade foca o desenvolvimento do ofício e da ação, e não apenas a economia pulsional de defesas e sofrimento [1] [2].',
            ],
          },
          {
            id: 'genero-estilo-oficio',
            heading: 'Gênero profissional, estilo e função psicológica do trabalho',
            paragraphs: [
              'Para agir com saúde e eficiência, o trabalhador apoia-se na dupla {{genero-profissional-estilo|gênero profissional e estilo}} [1] [2]. O gênero profissional constitui uma memória coletiva e transpessoal de regras implícitas, gestos e critérios compartilhados por um ofício [1] [2].',
              'O estilo designa a recriação singular e situada desse gênero pelo trabalhador diante de imprevistos; quando o gênero profissional é enfraquecido pela precarização ou por gestão burocrática, cada sujeito fica isolado frente às falhas e o adoecimento se agrava [1] [2].',
            ],
            keyPoints: [
              'Gênero profissional opera como recurso coletivo para agir, mediando a relação entre prescrição e sujeito [1] [2].',
              'O trabalho cumpre sua função psicológica quando articula patrimônio histórico do ofício e criação estilística singular [1].',
            ],
          },
          {
            id: 'poder-de-agir-autoconfrontacao',
            heading: 'Poder de agir e métodos de autoconfrontação',
            paragraphs: [
              'A intervenção na Clínica da Atividade busca restaurar e ampliar o {{poder-de-agir|poder de agir}} dos trabalhadores sobre seu meio e sobre si mesmos, reabrindo o debate coletivo sobre os critérios do trabalho bem-feito [2].',
              'Para tanto, Clot emprega métodos dialógicos indiretos com registro em vídeo: na autoconfrontação simples, o trabalhador comenta suas imagens com o pesquisador; na autoconfrontação cruzada, dois profissionais experientes debatem entre si modos distintos de agir, convertendo a experiência em instrumento para novas ações [2].',
            ],
            keyPoints: [
              'Autoconfrontação cruzada instaura controvérsia profissional fecunda que revitaliza o gênero do ofício [2].',
              'Saúde em Clot vincula-se à capacidade de criar novos meios e expandir o raio de ação no trabalho [2].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Clot (2006)',
            author: 'Yves Clot',
            work: 'A função psicológica do trabalho',
            year: '2006',
            specificPoint: 'Gênero profissional, estilo individual, atividade dirigida e diálogo com a psicologia de Vigotski.',
            excerptNote:
              'Apresenta os fundamentos da Clínica da Atividade e a centralidade do coletivo histórico de ofício como recurso psíquico.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Clot (2008/2010)',
            author: 'Yves Clot',
            work: 'Trabalho e poder de agir',
            year: '2008 / BR 2010',
            specificPoint: 'Real da atividade versus atividade realizada, poder de agir e métodos de autoconfrontação simples e cruzada.',
            excerptNote:
              'Sistematiza a intervenção clínica voltada ao desenvolvimento do poder de agir sobre a organização do trabalho (orig. PUF 2008; BR Fabrefactum 2010).',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t4-2-1',
            front: 'Qual é a diferença entre atividade realizada e real da atividade em Yves Clot?',
            back: 'Atividade realizada é o que se observa como executado; real da atividade inclui também o que não se fez, o que se tentou fazer, o que foi impedido e as possibilidades suspensas.',
            sourceId: '2',
          },
          {
            id: 'fc-t4-2-2',
            front: 'Como se relacionam gênero profissional e estilo na Clínica da Atividade?',
            back: 'O gênero profissional é o patrimônio coletivo de regras e maneiras de agir de um ofício; o estilo é a transformação singular desse gênero pelo trabalhador na situação concreta.',
            sourceId: '1',
          },
          {
            id: 'fc-t4-2-3',
            front: 'O que distingue teoricamente a Clínica da Atividade (Clot) da Psicodinâmica do Trabalho (Dejours)?',
            back: 'Clot apoia-se na matriz histórico-cultural de Vigotski, com foco no ofício, real da atividade, poder de agir e autoconfrontação; Dejours parte da psicanálise, focando sofrimento, defesas e reconhecimento.',
            sourceId: '2',
          },
        ],
        quiz: [
          {
            id: 'q-t4-2-1',
            question:
              'Sobre a Clínica da Atividade desenvolvida por Yves Clot, qual alternativa apresenta corretamente sua matriz teórica e seus conceitos centrais?',
            options: [
              'Baseia-se na psicanálise freudiana clássica e analisa exclusivamente sonhos de trabalhadores',
              'Confunde-se integralmente com o taylorismo por usar filmagens para punir gestos lentos',
              'Reduz o poder de agir à obediência estrita do trabalho prescrito sem debate entre pares',
              'Articula a psicologia histórico-cultural de Vigotski e a ergonomia, centrando-se no real da atividade, no gênero profissional, no poder de agir e na autoconfrontação',
            ],
            correctIndex: 3,
            explanation:
              'Yves Clot funda a Clínica da Atividade em diálogo com Vigotski e a Ergonomia da Atividade, utilizando autoconfrontação simples e cruzada para desenvolver o ofício e o poder de agir.',
            sourceId: '2',
          },
          {
            id: 'q-t4-2-2',
            question:
              'Segundo Yves Clot (2006; 2008 / BR 2010), quando uma organização destrói o gênero profissional de um ofício, o trabalhador:',
            options: [
              'Aumenta espontaneamente seu poder de agir por não depender mais de colegas',
              'Perde o recurso coletivo de mediação, fica solitário diante dos imprevistos da tarefa e torna-se mais vulnerável ao adoecimento',
              'Alcança imediatamente a sublimação por meio da competição individual',
              'Elimina o real da atividade e passa a executar apenas gestos automáticos saudáveis',
            ],
            correctIndex: 1,
            explanation:
              'Para Clot, o gênero profissional ampara o sujeito; quando o coletivo de ofício é desagregado, o trabalhador precisa inventar tudo sozinho sem respaldo, perdendo poder de agir.',
            sourceId: '1',
          },
        ],
        comparison: {
          title: 'Psicodinâmica do Trabalho (Dejours) vs. Clínica da Atividade (Clot)',
          headers: ['Dimensão', 'Psicodinâmica do Trabalho (Dejours)', 'Clínica da Atividade (Clot)'],
          rows: [
            ['Matriz teórica', 'Psicanálise e Ergonomia da Atividade', 'Psicologia histórico-cultural (Vigotski) e Ergonomia'],
            ['Conceitos-chave', 'Sofrimento, defesas coletivas, reconhecimento e sublimação', 'Real da atividade, gênero profissional, estilo e poder de agir'],
            ['Dispositivo clínico', 'Espaço coletivo de palavra e interpretação do sofrimento', 'Autoconfrontação simples e cruzada para desenvolver o ofício'],
          ],
        },
        flow: {
          title: 'Desenvolvimento do poder de agir pela autoconfrontação',
          steps: [
            {
              label: 'Registro da atividade em vídeo',
              detail: 'Filmagem capta gestos reais e dilemas enfrentados no cotidiano de trabalho.',
              sourceId: '2',
            },
            {
              label: 'Autoconfrontação simples e cruzada',
              detail: 'Pares debatem diferentes maneiras de fazer, expondo o real da atividade e o impedido.',
              sourceId: '2',
            },
            {
              label: 'Renovação do gênero e poder de agir',
              detail: 'Controvérsia coletiva atualiza as regras do ofício e amplia a capacidade de transformar o meio.',
              sourceId: '1',
            },
          ],
        },
      },
      {
        id: 't4-3',
        code: 'T4.3',
        discipline: 'trabalho',
        moduleId: 't4',
        title: 'Precarização Contemporânea e Juventudes',
        summary:
          'Psicologia Social do Trabalho em Maria da Graça Corrêa Jacques, marcadores sociais e vulnerabilidades em Ivia Maksud e inserção juvenil precária em Antunes e Abílio.',
        estimatedMinutes: 9,
        tags: ['precarizacao', 'juventudes', 'subjetividade', 'saude-mental'],
        sections: [
          {
            id: 'jacques-psicologia-social-trabalho',
            heading: 'Trabalho, identidade e saúde mental em Maria da Graça Jacques',
            paragraphs: [
              'Na Psicologia Social Crítica do Trabalho brasileira, Maria da Graça Corrêa Jacques analisa como a reestruturação produtiva, o desemprego e a {{precarizacao-estrutural|precarização estrutural}} reconfiguram a identidade do trabalhador e produzem sofrimento psíquico [1].',
              'Ao investigar saúde mental e trabalho para além da grande fábrica tradicional, Jacques demonstra que a instabilidade dos vínculos e a corrosão de pertencimentos coletivos fragilizam projetos de vida e atravessam a {{subjetividade-historica|subjetividade}} [1].',
            ],
            keyPoints: [
              'Jacques (2002; 2003; 2005) integra abordagens críticas sobre identidade, desemprego e saúde/doença mental no trabalho [1].',
              'A precarização não atinge apenas a renda imediata, mas desorganiza referências sociais e redes de solidariedade [1].',
            ],
          },
          {
            id: 'maksud-vulnerabilidades-juventudes',
            heading: 'Juventudes, vulnerabilidades e marcadores sociais em Ivia Maksud',
            paragraphs: [
              'No campo da Saúde Coletiva e da Antropologia da Saúde (IFF/Fiocruz), Ivia Maksud investiga como trajetórias de juventudes, processos de trabalho em saúde e redes de cuidado são atravessados pelas dimensões individual, social e programática da vulnerabilidade [2].',
              'Essa abordagem complementa a Psicologia do Trabalho ao evidenciar que a inserção juvenil precária não é homogênea: marcadores sociais de classe, raça, gênero, território e geração modulam o acesso à proteção social, à saúde e ao trabalho digno [1] [2].',
            ],
            keyPoints: [
              'Delimitar campos: Maria da Graça Jacques escreve na Psicologia Social Crítica do Trabalho; Ivia Maksud contribui desde a Saúde Coletiva sobre juventudes e vulnerabilidades [1] [2].',
              'Vulnerabilidade programática destaca o papel decisivo de políticas públicas integradas de saúde, educação e assistência para jovens [2].',
            ],
          },
          {
            id: 'juventude-servicos-plataformas',
            heading: 'Intermitência, plataformização e futuro juvenil em Antunes e Abílio',
            paragraphs: [
              'Ao analisar a morfologia atual do trabalho no Brasil, Ricardo Antunes e Ludmila Costhek Abílio apontam que as juventudes urbanas compõem parcela expressiva da força de trabalho absorvida por contratos intermitentes, teleatendimento, comércio e {{uberizacao|uberização}} [3] [4].',
              'Sob o léxico do empreendedorismo e da flexibilidade, jovens enfrentam alta rotatividade, ausência de previdência, endividamento e esgotamento precoce, exigindo articulação entre Psicologia do Trabalho e políticas públicas intersetoriais [1] [2] [3] [4].',
            ],
            keyPoints: [
              'Jovens negros e de periferias concentram-se nos postos mais desprotegidos e arriscados do trabalho digital e de serviços [2] [3] [4].',
              'Leitura interseccional entre trabalho, juventude e políticas públicas evita naturalizar a precariedade como escolha vocacional [1] [2] [4].',
            ],
          },
        ],
        sources: [
          {
            id: '1',
            shortLabel: 'Jacques (2002; 2003; 2005)',
            author: 'Maria da Graça Corrêa Jacques',
            work: 'Saúde Mental & Trabalho: Leituras (2002); Abordagens teórico-metodológicas em saúde/doença mental & trabalho (2003); Psicologia Social Contemporânea (ed. 2005)',
            year: '2002; 2003; 2005',
            specificPoint: 'Reestruturação produtiva, desemprego, precarização e identidade do trabalhador na Psicologia Social do Trabalho.',
            excerptNote:
              'Consolida a leitura crítica brasileira da relação entre trabalho precarizado, subjetividade e sofrimento psíquico.',
            kind: 'obra',
          },
          {
            id: '2',
            shortLabel: 'Maksud (IFF/Fiocruz)',
            author: 'Ivia Maksud',
            work: 'Estudos em Saúde Coletiva sobre juventudes, vulnerabilidades, marcadores sociais e redes de cuidado (IFF/Fiocruz)',
            year: 'Produção IFF/Fiocruz',
            specificPoint: 'Análise das dimensões individual, social e programática da vulnerabilidade em trajetórias juvenis e trabalho em saúde.',
            excerptNote:
              'Articula Saúde Coletiva e marcadores sociais de diferença (geração, gênero, classe e raça) para compreender acessos desiguais a cuidado e proteção.',
            kind: 'obra',
          },
          {
            id: '3',
            shortLabel: 'Antunes (2018)',
            author: 'Ricardo Antunes',
            work: 'O Privilégio da Servidão: o novo proletariado de serviços na era digital',
            year: '2018',
            specificPoint: 'Inserção juvenil precarizada no setor de serviços, contratos intermitentes e corrosão de direitos trabalhistas.',
            excerptNote:
              'Evidencia como a expansão do trabalho intermitente e terceirizado atinge fortemente jovens trabalhadores urbanos.',
            kind: 'obra',
          },
          {
            id: '4',
            shortLabel: 'Abílio (2020)',
            author: 'Ludmila Costhek Abílio',
            work: 'Uberização: a era do trabalhador just-in-time?',
            year: '2020',
            specificPoint: 'Concentração de jovens periféricos em ocupações sob demanda e transferência de riscos via plataformas digitais.',
            excerptNote:
              'Analisa a consolidação do trabalho uberizado entre jovens sob retórica empreendedora e ausência de proteção social.',
            kind: 'obra',
          },
        ],
        flashcards: [
          {
            id: 'fc-t4-3-1',
            front: 'Qual a contribuição específica de Maria da Graça Corrêa Jacques sobre precarização e saúde mental?',
            back: 'Na Psicologia Social Crítica do Trabalho, Jacques mostra como desemprego e vínculos instáveis afetam a identidade, corroem projetos de futuro e geram sofrimento psíquico.',
            sourceId: '1',
          },
          {
            id: 'fc-t4-3-2',
            front: 'De que campo parte Ivia Maksud e como suas pesquisas enriquecem o debate sobre juventudes e trabalho?',
            back: 'A partir da Saúde Coletiva e Antropologia da Saúde (IFF/Fiocruz), Maksud analisa vulnerabilidades individual, social e programática e marcadores sociais em juventudes e redes de cuidado.',
            sourceId: '2',
          },
          {
            id: 'fc-t4-3-3',
            front: 'Como Ricardo Antunes e Ludmila Abílio explicam a inserção juvenil no trabalho contemporâneo?',
            back: 'Apontam que jovens urbanos e periféricos são absorvidos em massa por serviços intermitentes, teleatendimento e plataformas digitais sob retórica empreendedora e desproteção previdenciária.',
            sourceId: '4',
          },
        ],
        quiz: [
          {
            id: 'q-t4-3-1',
            question:
              'Ao estudar precarização contemporânea e juventudes em Psicologia, qual articulação disciplinar descreve com rigor o escopo de cada referência?',
            options: [
              'Maria da Graça Jacques atua na Psicologia Social Crítica do Trabalho (identidade e saúde mental), Ivia Maksud contribui pela Saúde Coletiva (juventudes e vulnerabilidades) e Antunes e Abílio analisam serviços intermitentes e uberização',
              'Maria da Graça Jacques propôs a Lista C do NTEP no INSS, enquanto Ivia Maksud fundou a Ergonomia da Atividade francesa',
              'Ricardo Antunes restringe a precarização aos cargos públicos concursados de nível superior',
              'Ludmila Abílio defende que a plataformização elimina todas as desigualdades raciais e geracionais no trabalho',
            ],
            correctIndex: 0,
            explanation:
              'A articulação interdisciplinar respeita o escopo de cada produção: Psicologia Social do Trabalho (Jacques), Saúde Coletiva e marcadores de vulnerabilidade (Maksud) e Sociologia do Trabalho digital (Antunes e Abílio).',
            sourceId: '2',
          },
          {
            id: 'q-t4-3-2',
            question:
              'Segundo Maria da Graça Corrêa Jacques e Ricardo Antunes, os efeitos psicossociais da precarização sobre jovens trabalhadores vão além da redução salarial porque:',
            options: [
              'Garantem maior tempo livre remunerado para qualificação universitária',
              'Fortalecem o gênero profissional e a estabilidade dos coletivos de ofício',
              'Substituem integralmente a necessidade de políticas públicas de saúde e previdência',
              'Fragilizam laços coletivos, dificultam a projeção de futuro e submetem a subjetividade à insegurança permanente',
            ],
            correctIndex: 3,
            explanation:
              'A precarização desestrutura o pertencimento coletivo, corrói horizontes de futuro e agrava o sofrimento psíquico e a vulnerabilidade social.',
            sourceId: '1',
          },
        ],
        comparison: {
          title: 'Articulação Teórica sobre Precarização e Juventudes',
          headers: ['Referência', 'Campo e foco analítico', 'Contribuição ao tema'],
          rows: [
            ['Maria da Graça Jacques', 'Psicologia Social do Trabalho e Saúde Mental', 'Impactos do desemprego e precarização na identidade e sofrimento'],
            ['Ivia Maksud', 'Saúde Coletiva e Antropologia da Saúde', 'Vulnerabilidade social/programática e marcadores juvenis'],
            ['Antunes e Abílio', 'Sociologia do Trabalho contemporâneo', 'Intermitência, serviços precários e uberização juvenil'],
          ],
        },
        flow: {
          title: 'Ciclo da precarização juvenil e resposta psicossocial',
          steps: [
            {
              label: 'Desigualdades e marcadores sociais',
              detail: 'Classe, raça, gênero e território condicionam a entrada precoce em vínculos desprotegidos.',
              sourceId: '2',
            },
            {
              label: 'Trabalho precário e intermitente',
              detail: 'Plataformas e serviços impõem jornadas extensas sem garantias, corroendo projetos de vida.',
              sourceId: '4',
            },
            {
              label: 'Adoecimento e política pública',
              detail: 'Psicologia articula escuta crítica e fortalecimento de redes protetivas em saúde e trabalho.',
              sourceId: '1',
            },
          ],
        },
      },
    ],
  },
];
