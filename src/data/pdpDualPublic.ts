// src/data/pdpDualPublic.ts
//
// Camada de dados para PDPs unificadas (página única servindo público residencial + empresarial).
// Sobrepõe a `copyBySegment.ts`, `pdpProducts.ts` e `pdpFAQs.ts` existentes — não as substitui.
//
// Cada produto define aqui APENAS os campos novos exigidos pelo template <ProductPDP>:
//  - Hero unificado (badge, título, subtítulo neutro, 4 quick stats)
//  - Cards de auto-segmentação ("É pra você?")
//  - Quatro dores por público (residencial + empresarial)
//  - Mini-FAQ por público (subconjunto das FAQs canônicas em pdpFAQs.ts)
//  - Linhas relacionadas para o bloco de comparação
//
// Verdade técnica (TSER, VLT, IR, UV, garantia) e FAQ canônica continuam vivendo nos arquivos centrais.

// ─────────────────────────────────────────────
// Números agregados — substituem logos de cases na asa B2B
// ─────────────────────────────────────────────
export const dualPublicAggregates = {
  appliedSquareMeters: '+3 milhões m²',
  yearsInMarket: 'Em projetos arquitetônicos desde 1988',
  bestSellerNote: 'Linha mais vendida do portfólio INSULFILM™ arquitetônico nos últimos 4 anos',
} as const;

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────
export interface QuickStat {
  label: string;
  value: string;
}

export interface SegmentationCard {
  headline: string;
  description: string;
}

export interface PainPoint {
  problem: string;
  solution: string;
}

export interface MiniFAQ {
  q: string;
  a: string;
}

export interface RelatedProduct {
  slug: string;
  name: string;
  positioning: string;
}

export interface ProductDualPublic {
  /** Slug usado para casar com pdpProducts.ts e pdpFAQs.ts */
  slug: string;

  /** Slug alternativo pra Schema.org (override do slug quando o produto compartilha
   *  nome com outro de divisão diferente — ex: Phantom Gloss arq usa 'phantom-gloss-spf'
   *  pra evitar colisão com Phantom Gloss automotivo). */
  seoSlug?: string;

  /** Categoria pra breadcrumb e SEO. */
  category: 'arq-solar' | 'arq-seguranca' | 'arq-decorativo' | 'arq-spf';

  /** Linha (Performance | Premium) pra exibição visual. */
  line: 'Performance' | 'Premium';

  /** ── Hero universal ── */
  hero: {
    badge: string;
    title: string;        // Headline neutra, não escolhe lado
    subtitle: string;     // Suporte da headline
    quickStats: QuickStat[]; // 4 stats que importam pros dois públicos
  };

  /** ── Seção "É pra você?" ── */
  segmentation: {
    residential: SegmentationCard;
    corporate: SegmentationCard;
  };

  /** ── Espinha técnica universal ── */
  description: {
    paragraphs: string[];          // 3-4 parágrafos sobre o produto
    techTable: QuickStat[];        // tabela completa de specs
  };

  /** ── Asa B2C (residencial) ── */
  residential: {
    h2: string;
    pains: PainPoint[];            // 4 dores residenciais
    miniFaq: MiniFAQ[];            // 3 perguntas residenciais
  };

  /** ── Asa B2B (empresarial) ── */
  corporate: {
    h2: string;
    pains: PainPoint[];            // 4 dores empresariais
    miniFaq: MiniFAQ[];            // 3 perguntas empresariais
    aggregates: typeof dualPublicAggregates;
  };

  /** ── Comparação cruzada ── */
  related: RelatedProduct[];
}

// ─────────────────────────────────────────────
// Clear70 — produto piloto da estrutura dual-public
// ─────────────────────────────────────────────
const clear70: ProductDualPublic = {
  slug: 'clear70',
  category: 'arq-solar',
  line: 'Performance',

  hero: {
    badge: 'Solar · Performance',
    title: 'Máxima transparência. Controle solar invisível.',
    subtitle:
      'Tecnologia nano cerâmica para vidros — bloqueia até 81% do calor infravermelho preservando 72% da luz natural.',
    quickStats: [
      { label: 'Transparência (VLT)', value: '72%' },
      { label: 'Rejeição IR', value: 'até 81%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Garantia', value: 'até 5 anos' },
    ],
  },

  segmentation: {
    residential: {
      headline: 'Para sua residência',
      description:
        'A sala que esquenta no fim da tarde, o sofá que desbotou antes da hora, a janela exposta para a rua. Conforto que você sente em uma semana.',
    },
    corporate: {
      headline: 'Para seu projeto comercial',
      description:
        'Postos de trabalho fora da NR17, ar-condicionado em carga máxima, fachada que não pode mudar de cor. Eficiência documentada para auditoria.',
    },
  },

  description: {
    paragraphs: [
      'A INSULFILM™ Clear70 combina o que projetos arquitetônicos exigentes precisam: alta eficiência no controle solar com máxima preservação da luz natural e estética neutra que não interfere no design.',
      'Sua composição com nanopartículas cerâmicas entrega rejeição de infravermelho sem metalização — preservando sinais eletrônicos, mantendo aparência neutra e oferecendo desempenho estável ao longo do tempo.',
      'Para fachadas, sacadas e janelas onde a claridade é parte do projeto, a Clear70 é a escolha técnica correta.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'Nano Ceramic Infrared Film' },
      { label: 'Transmissão de luz visível (VLT)', value: '72%' },
      { label: 'Rejeição infravermelho (IR)', value: 'até 81%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Rejeição total de energia (TSER)', value: '50%' },
      { label: 'Refletância visível externa', value: 'Baixa' },
      { label: 'Privacidade diurna', value: 'Baixa' },
      { label: 'Interferência em sinais eletrônicos', value: 'Não há (sem metalização)' },
      { label: 'Garantia', value: 'Até 5 anos (residencial e comercial)' },
    ],
  },

  residential: {
    h2: 'Clear70 para residências — conforto que você sente em uma semana',
    pains: [
      {
        problem: 'A sala que esquenta de tarde e força o ar-condicionado a trabalhar dobrado.',
        solution:
          'Bloqueio de até 81% do infravermelho — o calor é refletido antes de atravessar o vidro. Resultado mensurável já na primeira semana.',
      },
      {
        problem: 'O sofá que desbotou. O piso de madeira que clareou. A obra de arte que perdeu cor.',
        solution:
          'Bloqueio >99% dos raios UV — o principal responsável pelo desbotamento de móveis, tecidos, pisos e obras de arte.',
      },
      {
        problem: 'A janela do quarto exposta para o prédio em frente, sem opção de cortina.',
        solution:
          'Refletância externa baixa preserva a vista do interior, com privacidade diurna sem fechar cortina.',
      },
      {
        problem: 'Conta de luz que dispara no verão por conta do ar-condicionado.',
        solution:
          'Redução documentada da carga térmica — o sistema de refrigeração precisa trabalhar menos para manter o mesmo conforto.',
      },
    ],
    miniFaq: [
      {
        q: 'Película arquitetônica reduz mesmo o calor do ambiente?',
        a: 'Sim. A INSULFILM™ Clear70 bloqueia até 81% dos raios infravermelhos — o principal responsável pela sensação de calor em ambientes com vidro. O resultado é perceptível nas primeiras horas após a aplicação.',
      },
      {
        q: 'A Clear70 escurece o ambiente?',
        a: 'Não. Mantém 72% de transmissão de luz visível — o ambiente continua naturalmente iluminado. Para situações em que se deseja mais privacidade ou tonalidade, há outras linhas indicadas.',
      },
      {
        q: 'A película interfere no Wi-Fi de casa ou em antenas?',
        a: 'Não. A Clear70 usa tecnologia nano cerâmica sem metalização, portanto não interfere em sinais eletrônicos como Wi-Fi, 4G/5G ou TV.',
      },
    ],
  },

  corporate: {
    h2: 'Clear70 para escritórios, edifícios e espaços comerciais',
    pains: [
      {
        problem: 'Postos de trabalho próximos a fachadas envidraçadas fora da faixa de conforto NR17.',
        solution:
          'Redução de carga térmica documentada — apoia conformidade com NR17 sem alterar a estética da fachada. Certificado individual disponível para auditoria.',
      },
      {
        problem: 'OPEX dominado pelo ar-condicionado em carga máxima durante meses do ano.',
        solution:
          'Redução mensurável da carga térmica do edifício — menor demanda do sistema de refrigeração e menor consumo de energia. Calculadora de retorno disponível mediante consulta.',
      },
      {
        problem: 'Edifício histórico ou tombado onde a fachada não pode ser alterada.',
        solution:
          'Aplicação não-invasiva, reversível, sem alteração visual da fachada. Aprovada para uso em edifícios históricos no Brasil desde 1988.',
      },
      {
        problem: 'Especificação técnica com exigência de procedência documentada.',
        solution:
          'Cada aplicação em canal oficial inclui certificado individual com lote, data e responsável técnico. Spec sheet disponível para incorporação em memorial descritivo.',
      },
    ],
    miniFaq: [
      {
        q: 'A Clear70 atende exigências de NR17?',
        a: 'A Clear70 contribui com a conformidade NR17 ao reduzir a carga térmica de postos de trabalho próximos a fachadas envidraçadas. Para a documentação de auditoria completa, consulte um especialista da INSULFILM™ — o relatório técnico é emitido caso a caso.',
      },
      {
        q: 'É possível aplicar em edifícios já habitados sem interromper a operação?',
        a: 'Sim. A aplicação é feita por andares ou por área, sem interrupção da operação geral do edifício. O processo padrão minimiza impacto em ocupantes.',
      },
      {
        q: 'Há documentação técnica para incorporar em projeto e auditoria?',
        a: 'Sim. Spec sheet em PDF com tabela completa de propriedades ópticas e térmicas, certificado de procedência por aplicação, e laudos técnicos sob demanda. Disponíveis com o consultor B2B.',
      },
    ],
    aggregates: dualPublicAggregates,
  },

  related: [
    {
      slug: 'orizzonte70',
      name: 'INSULFILM™ Orizzonte70',
      positioning: 'Premium · maior rejeição IR mantendo a transparência',
    },
    {
      slug: 'naturale',
      name: 'INSULFILM™ Naturale',
      positioning: 'Premium · tom neutro, performance estendida, garantia 10 anos',
    },
    {
      slug: 'petrolio',
      name: 'INSULFILM™ Petrolio',
      positioning: 'Performance · privacidade diurna e sofisticação',
    },
  ],
};

// ─────────────────────────────────────────────
// Orizzonte70 — exemplar #2 (Premium tier)
// ─────────────────────────────────────────────
const orizzonte70: ProductDualPublic = {
  slug: 'orizzonte70',
  category: 'arq-solar',
  line: 'Premium',

  hero: {
    badge: 'Solar · Premium',
    title: 'Performance cerâmica premium. Transparência preservada.',
    subtitle:
      'Tecnologia nano cerâmica de geração premium — bloqueia 93% do calor infravermelho com 68% de transmissão luminosa. Garantia de 10 anos.',
    quickStats: [
      { label: 'Transparência (VLT)', value: '68%' },
      { label: 'Rejeição IR', value: 'até 93%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Garantia', value: 'até 10 anos' },
    ],
  },

  segmentation: {
    residential: {
      headline: 'Para sua residência de alto padrão',
      description:
        'A casa que cuida de tudo: vista preservada, móveis intactos, conforto consistente, garantia decenal. Para quem investiu no interior e exige o mesmo nível de cuidado nas janelas.',
    },
    corporate: {
      headline: 'Para projetos de alta exigência',
      description:
        'Edifícios classe AAA, retrofits prediais, conformidade NR17 em larga escala. Performance cerâmica documentada, custo de ciclo de vida competitivo, dossiê técnico para auditoria.',
    },
  },

  description: {
    paragraphs: [
      'A INSULFILM™ Orizzonte70 é o topo da família solar arquitetônica — película cerâmica de geração premium com 93% de rejeição infravermelha e máxima preservação da transparência ótica.',
      'Sua composição cerâmica avançada combina o que nenhuma alternativa no mercado entrega simultaneamente: bloqueio térmico de performance superior, neutralidade ótica que não distorce a percepção de cor do ambiente e estabilidade de longo prazo certificada.',
      'Aplicada em residências de alto padrão, fachadas corporativas classe AAA e edifícios de valor patrimonial onde desempenho mediano comprometeria o ativo. Garantia de 10 anos — a mais longa do portfólio.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'Premium Nano Ceramic Infrared Film' },
      { label: 'Transmissão de luz visível (VLT)', value: '68%' },
      { label: 'Rejeição infravermelho (IR)', value: 'até 93%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Rejeição total de energia (TSER)', value: '~58%' },
      { label: 'Refletância visível externa', value: 'Baixa' },
      { label: 'Neutralidade ótica', value: 'Premium (alta)' },
      { label: 'Interferência em sinais eletrônicos', value: 'Não há (sem metalização)' },
      { label: 'Garantia', value: 'Até 10 anos (residencial e comercial)' },
    ],
  },

  residential: {
    h2: 'Orizzonte70 para residências de alto padrão',
    pains: [
      {
        problem:
          'A vista do jardim, da praia, da cidade — você não quer abrir mão dela com cortinas pesadas.',
        solution:
          '68% de transmissão luminosa preservam a vista. Você vê tudo o que tinha antes da aplicação — só o calor que some.',
      },
      {
        problem:
          'Móveis caros, obras de arte, pisos importados — o investimento de uma vida no interior da casa.',
        solution:
          '>99% de bloqueio UV + estabilidade ótica cerâmica premium. Os materiais do interior preservam apresentação e valor por décadas.',
      },
      {
        problem:
          'Você quer conforto consistente, não solução que decai em dois anos.',
        solution:
          'Garantia de 10 anos — a mais longa do portfólio. Cobertura de fabricante e aplicação por canal autorizado.',
      },
      {
        problem:
          'A casa tem múltiplas exposições solares e merece uma especificação técnica, não improviso.',
        solution:
          'Mapeamento térmico individual pré-aplicação. Performance premium em todas as orientações de janela.',
      },
    ],
    miniFaq: [
      {
        q: 'Vale a diferença de preço entre Orizzonte70 e Clear70?',
        a: 'Se você prioriza transparência máxima e longevidade (garantia de 10 vs 5 anos), sim. A diferença de 12% no bloqueio IR e o dobro de garantia justificam o investimento para residências de alto padrão e ativos de longo prazo.',
      },
      {
        q: 'Aplica em todas as janelas da casa ou só nas críticas?',
        a: 'O consultor faz mapeamento térmico antes da especificação. Janelas voltadas para nascente e poente são prioridade. Vidros estruturais em sacadas integradas geralmente também entram. Aplicação modular por face/janela.',
      },
      {
        q: 'Não escurece o ambiente como filmes mais antigos?',
        a: '68% de transmissão luminosa — praticamente imperceptível visualmente. A cerâmica premium é opticamente neutra: não interfere na percepção de cor de interior, em obras de arte ou na fotografia residencial.',
      },
    ],
  },

  corporate: {
    h2: 'Orizzonte70 para edifícios classe AAA e projetos de alta exigência',
    pains: [
      {
        problem:
          'Edifício de múltiplos pavimentos com obrigação NR17 documentada em toda a área útil.',
        solution:
          'Especificação premium com laudo técnico individual por andar e por face. Documentação pronta para auditoria do MTE e para gestão interna de SST.',
      },
      {
        problem:
          'Custo de ciclo de vida (LCC) é critério no comitê de aprovação — não só CAPEX.',
        solution:
          'Garantia 10 anos + manutenção zero ao longo da vida útil. O LCC do Orizzonte70 supera alternativas de custo inicial menor em qualquer horizonte > 4 anos.',
      },
      {
        problem:
          'Fachadas envidraçadas de alto valor patrimonial — desempenho mediano compromete o ativo.',
        solution:
          'Performance cerâmica premium documentada por laudo técnico por aplicação. Especificação aprovada em edifícios listados e ativos AAA no Brasil.',
      },
      {
        problem:
          'Diretoria quer evidência hard de redução de OPEX antes de aprovar retrofit predial.',
        solution:
          'Estudo de simulação térmica predial + relatório de ROI individualizado sob demanda. Disponível diretamente com consultor B2B.',
      },
    ],
    miniFaq: [
      {
        q: 'Como Orizzonte70 ajuda na conformidade NR17 em edifícios corporativos?',
        a: 'A NR17 exige conforto térmico em postos de trabalho, e fachadas envidraçadas são fonte direta de carga térmica radiante. Orizzonte70 reduz essa carga de forma mensurável e documentada, com laudo técnico individual por aplicação — pronto para auditoria do MTE e para o processo interno de gestão de SST.',
      },
      {
        q: 'Garantia de 10 anos cobre todo o ciclo de vida do equipamento?',
        a: 'Cobre fabricante e aplicação. Inclui descoloração, descolamento e perda de performance superior a 15% da especificação inicial. Termo de garantia individual emitido por aplicação, vinculado ao lote.',
      },
      {
        q: 'É possível especificar Orizzonte70 em retrofit predial em andamento?',
        a: 'Sim. A aplicação não requer obra civil, é feita por andar, face ou área, e não interrompe ocupação. Solução comum em retrofits prediais e adequações NR17 em edifícios já habitados.',
      },
    ],
    aggregates: dualPublicAggregates,
  },

  related: [
    {
      slug: 'naturale',
      name: 'INSULFILM™ Naturale',
      positioning: 'Premium · tom neutro com performance térmica estendida',
    },
    {
      slug: 'ultravioletti90',
      name: 'INSULFILM™ Ultravioletti90',
      positioning: 'Premium · proteção UV de pico para acervos sensíveis',
    },
    {
      slug: 'clear70',
      name: 'INSULFILM™ Clear70',
      positioning: 'Performance · alternativa de custo inicial menor',
    },
  ],
};

// ─────────────────────────────────────────────
// Naturale — Premium · tom neutro · 4 versões (70/50/35/20)
// ─────────────────────────────────────────────
const naturale: ProductDualPublic = {
  slug: 'naturale',
  category: 'arq-solar',
  line: 'Premium',
  hero: {
    badge: 'Solar · Premium',
    title: 'Discrição que transforma. Tom neutro sem perda de performance.',
    subtitle:
      'Película arquitetônica premium com tecnologia de bombardeamento iônico — até 81% de rejeição IR preservando a aparência natural do vidro. Quatro versões de transparência (70/50/35/20). Garantia 10 anos.',
    quickStats: [
      { label: 'Tonalidade', value: 'Neutra' },
      { label: 'Rejeição IR', value: 'até 81%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Garantia', value: 'até 10 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para sua residência sem alteração visual',
      description:
        'O projeto arquitetônico não pode mudar. As cortinas estão certas. O vidro precisa cumprir função sem se anunciar. Tom neutro premium que respeita o que já está bem feito.',
    },
    corporate: {
      headline: 'Para projetos onde a fachada é parte da identidade',
      description:
        'Edifícios onde alterar visual da fachada é impossível — patrimônio histórico, identidade corporativa, especificação arquitetônica congelada. Solução técnica invisível ao olhar externo.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Naturale é a película arquitetônica para projetos onde a estética não pode mudar. Tecnologia de bombardeamento iônico (Neutral Sputtered Film) que entrega até 81% de rejeição IR com tonalidade neutra — sem espelhamento, sem alteração de cor, sem distorção visual.',
      'Disponível em quatro versões de transparência (70/50/35/20), permite calibrar luminosidade pra cada ambiente sem comprometer a identidade visual do projeto. A versão escolhida para uma sala de reunião pode ser diferente da especificada para a área de trabalho aberta, mantendo coerência arquitetônica.',
      'Aplicada em residências de alto padrão, edifícios corporativos com identidade visual definida e patrimônios históricos onde alterar a fachada é proibido.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'Neutral Sputtered Film' },
      { label: 'Versões disponíveis', value: '4 (Naturale 70, 50, 35, 20)' },
      { label: 'Transmissão de luz visível (VLT)', value: '20% a 70% (conforme versão)' },
      { label: 'Rejeição infravermelho (IR)', value: 'até 81%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Refletância visível externa', value: 'Baixa (sem espelhamento)' },
      { label: 'Neutralidade ótica', value: 'Premium (sem alteração de cor)' },
      { label: 'Interferência em sinais eletrônicos', value: 'Não há' },
      { label: 'Garantia', value: 'Até 10 anos (residencial e comercial)' },
    ],
  },
  residential: {
    h2: 'Naturale para residências sem alteração estética',
    pains: [
      {
        problem:
          'O projeto arquitetônico foi pensado nos mínimos detalhes — a cor do vidro também.',
        solution:
          'Tom neutro Premium. Não espelha, não amarela, não distorce. O vidro continua sendo o vidro especificado.',
      },
      {
        problem:
          'Diferentes ambientes da casa precisam de diferentes níveis de privacidade e luz.',
        solution:
          'Quatro versões (70/50/35/20) permitem calibrar cada ambiente sem perder coerência visual do conjunto.',
      },
      {
        problem:
          'Não quer abrir mão do calor controlado mesmo em janelas onde a luz natural é prioridade.',
        solution:
          'Até 81% de rejeição IR mesmo na versão de maior transparência (Naturale 70). Performance térmica real sem comprometer luminosidade.',
      },
      {
        problem:
          'Quer solução premium duradoura, não improviso a ser refeito em 3 anos.',
        solution:
          'Garantia 10 anos. Tecnologia Sputtered estável que não degrada cromaticamente ao longo da vida útil.',
      },
    ],
    miniFaq: [
      {
        q: 'Por que escolher Naturale em vez de Clear70 ou Orizzonte70?',
        a: 'A Naturale é a escolha quando neutralidade ótica é o critério principal — não muda a aparência do vidro. Tem mais opções de versão (4 transparências) que Clear70 e Orizzonte70 (versão única). Indicada quando o projeto exige flexibilidade de calibração por ambiente.',
      },
      {
        q: 'A Naturale escurece o ambiente?',
        a: 'Depende da versão. Naturale 70 mantém alta luminosidade (similar à Clear70). Naturale 20 reduz luminosidade significativamente. A escolha é feita ambiente por ambiente conforme uso.',
      },
      {
        q: 'Pode aplicar versões diferentes de Naturale na mesma casa?',
        a: 'Sim, é o uso recomendado. Áreas sociais geralmente recebem versão de maior transparência; suítes e áreas íntimas, versões mais fechadas. O consultor faz o mapeamento.',
      },
    ],
  },
  corporate: {
    h2: 'Naturale para edifícios onde a fachada não pode mudar',
    pains: [
      {
        problem:
          'Edifício de patrimônio histórico ou identidade corporativa congelada — fachada não admite alteração visual.',
        solution:
          'Solução tecnicamente invisível. Aprovada para uso em patrimônio histórico no Brasil. Sem alterar refletância externa.',
      },
      {
        problem:
          'Conformidade NR17 em postos de trabalho próximos a fachadas envidraçadas.',
        solution:
          'Redução documentada de carga térmica radiante por andar e face. Laudo técnico individual emitido por aplicação, pronto para auditoria do MTE.',
      },
      {
        problem:
          'Diferentes pavimentos têm necessidades térmicas/luminosas diferentes — não dá pra padronizar um único produto.',
        solution:
          'Quatro versões permitem especificação modular por andar ou área. Mesma família, mesma identidade visual, performance calibrada.',
      },
      {
        problem:
          'Retrofit predial em andamento e a janela de obra é curta.',
        solution:
          'Aplicação por face, por andar ou por ambiente. Sem obra civil, sem interrupção de ocupação. Cronograma compatível com retrofit ativo.',
      },
    ],
    miniFaq: [
      {
        q: 'A Naturale altera a aparência externa da fachada vista da rua?',
        a: 'Não. Sem espelhamento e sem alteração de cor — a fachada continua com a aparência original. É essa a justificativa de uso em edifícios de patrimônio histórico e em identidades corporativas que exigem preservação visual.',
      },
      {
        q: 'É possível misturar versões diferentes de Naturale no mesmo edifício?',
        a: 'Sim. Especificação modular é o uso padrão em projetos corporativos. Cada andar ou face pode receber a versão correta para sua exposição solar e função interna.',
      },
      {
        q: 'Como Naturale entra na documentação NR17?',
        a: 'Laudo técnico individual por aplicação documenta a redução de carga térmica radiante. Anexado ao mapeamento de riscos físicos (calor) do PGR/PCMSO. Disponível com consultor B2B.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'orizzonte70',
      name: 'INSULFILM™ Orizzonte70',
      positioning: 'Premium · cerâmica com rejeição IR superior (93%)',
    },
    {
      slug: 'ultravioletti90',
      name: 'INSULFILM™ Ultravioletti90',
      positioning: 'Premium · proteção UV de pico, alta transparência',
    },
    {
      slug: 'clear70',
      name: 'INSULFILM™ Clear70',
      positioning: 'Performance · alternativa de custo inicial menor',
    },
  ],
};

// ─────────────────────────────────────────────
// Ultravioletti90 — Premium · UV-focused · garantia 5 anos
// ─────────────────────────────────────────────
const ultravioletti90: ProductDualPublic = {
  slug: 'ultravioletti90',
  category: 'arq-solar',
  line: 'Premium',
  hero: {
    badge: 'Solar · Premium · UV',
    title: 'Proteção UV de pico. Completamente imperceptível.',
    subtitle:
      'Película arquitetônica incolor especializada em UV — bloqueia mais de 99% dos raios ultravioleta sem alterar luminosidade, tonalidade ou aparência do vidro. Para residências de alto padrão e ambientes onde o acervo é parte do valor.',
    quickStats: [
      { label: 'Transparência (VLT)', value: '88%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Aparência', value: 'Incolor · invisível' },
      { label: 'Garantia', value: 'até 5 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para residências de alto padrão',
      description:
        'Obras de arte, peças de design, fotografias raras, móveis assinados — o interior da casa onde o valor está nos detalhes. Proteção UV completamente invisível, sem alterar luminosidade nem aparência do vidro.',
    },
    corporate: {
      headline: 'Para museus, galerias e espaços com acervo exposto',
      description:
        'Museus, galerias de arte, lojas de alto padrão, hotelaria sofisticada. UV é o principal agente de degradação visual de acervos e mercadorias — Ultravioletti90 documenta a barreira sem alterar nenhuma estética do ambiente.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Ultravioletti90 é a película arquitetônica especializada em proteção UV — bloqueio superior a 99% dos raios ultravioleta, com tecnologia UV Concentrated específica para essa função.',
      'Diferente das soluções solares que tratam UV como benefício secundário, a Ultravioletti90 é desenhada com a proteção UV como objetivo principal. A composição preserva 88% da luz visível e mantém a aparência original do vidro completamente intacta — sem tonalidade, sem reflexo, sem alteração de cor. Visualmente imperceptível.',
      'Indicada para museus, galerias de arte, residências de alto padrão com acervo significativo e ambientes comerciais sofisticados (hotelaria, lojas de luxo) onde a depreciação por UV representa perda de valor patrimonial ou de marca.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'UV Concentrated' },
      { label: 'Transmissão de luz visível (VLT)', value: '88%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Aparência', value: 'Incolor (completamente invisível)' },
      { label: 'Alteração tonal do vidro', value: 'Nenhuma' },
      { label: 'Refletância visível externa', value: 'Mínima' },
      { label: 'Interferência em sinais eletrônicos', value: 'Não há' },
      { label: 'Aplicação típica', value: 'Museus, galerias, residências de alto padrão' },
      { label: 'Garantia', value: 'Até 5 anos' },
    ],
  },
  residential: {
    h2: 'Ultravioletti90 para residências de alto padrão',
    pains: [
      {
        problem:
          'Obras de arte, fotografias antigas, coleções pessoais expostas à luz natural — UV degrada cromaticamente em silêncio.',
        solution:
          '>99% de bloqueio UV. O principal agente de desbotamento neutralizado, sem alterar a iluminação natural do ambiente.',
      },
      {
        problem:
          'Móveis de design, peças de couro nobre, tapeçarias importadas, tapetes assinados — investimentos cuja apresentação visual define o valor.',
        solution:
          'Proteção UV de pico estende significativamente a vida visual desses ativos. Aplicação invisível mantém a estética intacta.',
      },
      {
        problem:
          'O projeto de interiores foi pensado em texturas e cromias específicas — madeiras nobres, pedras naturais, peças coloridas — que perdem identidade com exposição UV cumulativa.',
        solution:
          'Bloqueio UV preserva a integridade cromática especificada pelo arquiteto/decorador. O projeto continua sendo o projeto entregue.',
      },
      {
        problem:
          'Não quer escurecer o ambiente, não quer alterar a estética, não quer película visível em nenhum ângulo de luz.',
        solution:
          '88% de transmissão luminosa, aparência incolor, sem alteração tonal do vidro. Completamente imperceptível ao olhar — totalmente perceptível na preservação.',
      },
    ],
    miniFaq: [
      {
        q: 'A Ultravioletti90 também reduz calor?',
        a: 'A função principal é proteção UV — não é uma solução térmica primária. Reduz calor em menor grau que as linhas focadas em IR (Clear70, Orizzonte70). Se proteção térmica é prioridade, escolha solar; se conservação UV invisível é prioridade, escolha Ultravioletti90.',
      },
      {
        q: 'Por que a garantia é menor (5 anos) que outras Premium?',
        a: 'A garantia reflete o regime de uso específico. A composição UV Concentrated é otimizada para máxima eficiência UV, não para longevidade térmica máxima. 5 anos é o ciclo de revisão recomendado.',
      },
      {
        q: 'É a mesma película usada em museus?',
        a: 'A linha é frequentemente especificada em ambientes museológicos e de galeria por exatamente essa razão: máxima proteção UV com mínima alteração visual. Consultor pode emitir laudo técnico para projetos institucionais ou residenciais com acervo significativo.',
      },
    ],
  },
  corporate: {
    h2: 'Ultravioletti90 para museus, galerias e espaços de alto padrão',
    pains: [
      {
        problem:
          'Vitrine comercial com mercadoria desbotando — reposição custa, imagem da loja se desgasta.',
        solution:
          '>99% de bloqueio UV preserva cores originais de tecidos, embalagens e produtos. Vida útil de visual de produto se estende significativamente.',
      },
      {
        problem:
          'Galeria, museu corporativo ou hall com acervo artístico exposto à luz solar direta.',
        solution:
          'Especificação técnica para conservação patrimonial. Laudo individual por aplicação documenta a barreira UV — exigência comum de seguradoras de acervo.',
      },
      {
        problem:
          'Joalheria, loja de luxo ou showroom de alto padrão — mercadoria de alto valor sob luz natural.',
        solution:
          'Bloqueio UV de pico preserva cores e materiais sem escurecer o ambiente nem alterar a percepção visual do produto. Mercadoria conservada, vitrine impecável.',
      },
      {
        problem:
          'Retrofit de loja, galeria ou ambiente corporativo onde estética não pode mudar.',
        solution:
          'Aplicação incolor. Não altera vitrine, não muda visual da loja, não afeta percepção do espaço. Instalação rápida sem interrupção de operação.',
      },
    ],
    miniFaq: [
      {
        q: 'A Ultravioletti90 é adequada para retrofit de loja em operação?',
        a: 'Sim — é uma das aplicações típicas. Instalação modular por vidro, fora do horário de pico, sem alteração da estética da vitrine ou identidade visual da marca.',
      },
      {
        q: 'Pode ser combinada com outras películas no mesmo edifício?',
        a: 'Sim. Comum em projetos especificarem Ultravioletti90 em vitrines/galerias e uma solar (Orizzonte70 ou Naturale) em ambientes administrativos. O consultor faz a especificação por zona.',
      },
      {
        q: 'Que documentação técnica está disponível para seguradoras de acervo?',
        a: 'Laudo técnico individual por aplicação com especificação UV, certificado de procedência e termo de garantia. Frequentemente aceito por seguradoras como evidência de mitigação de risco UV.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'naturale',
      name: 'INSULFILM™ Naturale',
      positioning: 'Premium · neutralidade ótica + IR superior',
    },
    {
      slug: 'orizzonte70',
      name: 'INSULFILM™ Orizzonte70',
      positioning: 'Premium · cerâmica IR de pico com transparência preservada',
    },
    {
      slug: 'clear70',
      name: 'INSULFILM™ Clear70',
      positioning: 'Performance · controle solar com bom bloqueio UV',
    },
  ],
};

// ─────────────────────────────────────────────
// MetallicoArgento — Premium · espelhado prata · 3 versões (50/35/20)
// ─────────────────────────────────────────────
const metallicoArgento: ProductDualPublic = {
  slug: 'metallico-argento',
  category: 'arq-solar',
  line: 'Premium',
  hero: {
    badge: 'Solar · Premium · Espelhado',
    title: 'Performance espelhada premium. Até 86% de bloqueio IR.',
    subtitle:
      'Película espelhada com tecnologia Vapor-Coated Aluminium — performance térmica máxima e estética espelhada prata. Três versões para diferentes contextos. Garantia 10 anos.',
    quickStats: [
      { label: 'Rejeição IR', value: 'até 86%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Estética', value: 'Espelhada prata' },
      { label: 'Garantia', value: 'até 10 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para residências de fachada exposta',
      description:
        'Casa em terreno aberto, sacada com sol direto durante metade do dia, vista para condomínio adjacente. Privacidade diurna total com performance térmica de topo.',
    },
    corporate: {
      headline: 'Para edifícios com fachadas de alta exposição solar',
      description:
        'Corporativos com identidade visual espelhada, edifícios em zona quente urbana, retrofit de fachadas para redução agressiva de OPEX em ar-condicionado.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Metallico Argento é a película arquitetônica premium para situações de alta exposição solar onde performance térmica é critério primário. Tecnologia Vapor-Coated Aluminium entrega até 86% de rejeição IR — patamar superior dentro da linha solar.',
      'A estética espelhada prata cumpre função dupla: privacidade diurna total (de fora não se vê o interior durante o dia) e identidade visual contemporânea. Disponível em três versões (50/35/20) que permitem calibrar opacidade conforme cada projeto.',
      'Especificada em residências de fachada exposta, edifícios corporativos em zonas urbanas quentes (especialmente regiões norte e centro-oeste) e retrofits onde a meta é redução agressiva de consumo de ar-condicionado.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'Vapor-Coated Aluminium Film' },
      { label: 'Versões disponíveis', value: '3 (Metallico Argento 50, 35, 20)' },
      { label: 'Rejeição infravermelho (IR)', value: 'até 86%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Estética', value: 'Espelhada prata (visão externa)' },
      { label: 'Privacidade diurna', value: 'Alta (efeito espelho)' },
      { label: 'Interferência em sinais eletrônicos', value: 'Pode haver (verificar com consultor)' },
      { label: 'Garantia', value: 'Até 10 anos' },
    ],
  },
  residential: {
    h2: 'Metallico Argento para residências de fachada exposta',
    pains: [
      {
        problem:
          'Casa de frente para outra casa ou condomínio — privacidade diurna sem fechar cortinas.',
        solution:
          'Efeito espelhado externo durante o dia bloqueia a visão de fora. Privacidade total sem reduzir luz natural interna.',
      },
      {
        problem:
          'Sacada com sol direto que torna ambiente impossível de usar nas tardes quentes.',
        solution:
          'Até 86% de bloqueio IR — patamar superior. O ambiente fica utilizável em todos os horários.',
      },
      {
        problem:
          'Conta de luz com ar-condicionado dominando consumo no verão.',
        solution:
          'Redução agressiva de carga térmica diminui demanda do sistema de refrigeração. Resultado mensurável já no segundo mês de fatura.',
      },
      {
        problem:
          'Quer estética contemporânea — vidro espelhado moderno, não película "automotiva" no prédio.',
        solution:
          'Acabamento arquitetônico premium. Linha Premium INSULFILM™, não confundir com películas espelhadas genéricas de baixo custo.',
      },
    ],
    miniFaq: [
      {
        q: 'Vejo para fora normalmente durante o dia?',
        a: 'Sim. O efeito espelho é assimétrico — bloqueia visão de quem está do lado mais iluminado (de fora durante o dia) preservando a visão de quem está do lado menos iluminado (você dentro da casa).',
      },
      {
        q: 'E à noite, quando a luz interna está acesa?',
        a: 'O efeito se inverte: à noite, de fora se enxerga para dentro. Para privacidade noturna, é necessário usar cortinas ou persianas. O efeito espelho é diurno.',
      },
      {
        q: 'A película interfere em Wi-Fi ou sinal celular?',
        a: 'Pode haver atenuação parcial por conta da camada de alumínio. Em projetos onde o sinal é crítico, o consultor faz teste prévio e pode recomendar alternativa não-metálica como Orizzonte70.',
      },
    ],
  },
  corporate: {
    h2: 'Metallico Argento para edifícios em alta exposição solar urbana',
    pains: [
      {
        problem:
          'Edifício corporativo em zona urbana quente — postos de trabalho próximos à fachada com NR17 comprometida.',
        solution:
          'Até 86% de bloqueio IR reduz drasticamente a carga térmica radiante. Conformidade NR17 documentada por laudo técnico individual.',
      },
      {
        problem:
          'OPEX do edifício dominado por consumo de ar-condicionado em meses quentes.',
        solution:
          'Patamar superior de rejeição IR resulta em redução proporcional da demanda do sistema. Simulação térmica predial disponível para previsão de ROI.',
      },
      {
        problem:
          'Retrofit de fachada onde se quer renovação estética e ganho de performance simultaneamente.',
        solution:
          'Estética espelhada prata renova visual urbano do edifício enquanto a performance térmica atualiza para padrão contemporâneo. Solução dupla em uma especificação.',
      },
      {
        problem:
          'Aplicação em edifício habitado — não pode ter obra civil prolongada.',
        solution:
          'Aplicação modular por andar/face. Cronograma compatível com operação contínua. Sem interrupção de uso dos ambientes.',
      },
    ],
    miniFaq: [
      {
        q: 'Atende exigências NR17 em postos próximos a fachadas envidraçadas?',
        a: 'Sim — é uma das soluções mais eficazes para casos de alta carga radiante. Laudo técnico individual documenta a redução por área. Anexável ao PGR/PCMSO.',
      },
      {
        q: 'Como Metallico Argento se compara a Reflesso d\'Argento (Performance)?',
        a: 'Metallico Argento é a versão Premium da família espelhada: tecnologia Vapor-Coated, maior bloqueio IR (até 86% vs 70%+ da Reflesso), garantia 10 anos (vs 3 anos). Para projetos onde performance e durabilidade são críticos.',
      },
      {
        q: 'A atenuação de sinal celular pode ser problema em edifício corporativo?',
        a: 'Em edifícios com sinal já fraco, sim. Em edifícios com sistema de DAS ou repetidores internos, geralmente não. Análise prévia disponível com consultor B2B.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'specchiato-bronzo',
      name: 'INSULFILM™ Specchiato Bronzo',
      positioning: 'Premium · espelhado bronze, estética distintiva',
    },
    {
      slug: 'orizzonte70',
      name: 'INSULFILM™ Orizzonte70',
      positioning: 'Premium · alternativa não-espelhada com IR superior',
    },
    {
      slug: 'reflesso-d-argento',
      name: "INSULFILM™ Reflesso d'Argento",
      positioning: 'Performance · espelhado prata de custo inicial menor',
    },
  ],
};

// ─────────────────────────────────────────────
// SpecchiatoBronzo — Premium · espelhado bronze · 3 versões (35/25/15)
// ─────────────────────────────────────────────
const specchiatoBronzo: ProductDualPublic = {
  slug: 'specchiato-bronzo',
  category: 'arq-solar',
  line: 'Premium',
  hero: {
    badge: 'Solar · Premium · Espelhado Bronze',
    title: 'Sofisticação bronze. Conforto visual preservado.',
    subtitle:
      'Película espelhada premium com tecnologia Sputtered Nichrome — estética bronze de distinção arquitetônica, até 72% de bloqueio IR e conforto visual interno mantido. Três versões. Garantia 10 anos.',
    quickStats: [
      { label: 'Rejeição IR', value: 'até 72%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Estética', value: 'Espelhada bronze' },
      { label: 'Garantia', value: 'até 10 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para residências com identidade arquitetônica distintiva',
      description:
        'Quem quer mais que espelhamento prata padrão — quer assinatura visual. Bronze é menos comum, mais arquitetônico, mais característico. Performance Premium em estética singular.',
    },
    corporate: {
      headline: 'Para edifícios com identidade visual marcante',
      description:
        'Fachadas dos anos 70-80 em retrofit, edifícios com identidade bronze histórica, lounge bars e hotéis de identidade visual definida. Performance arquitetônica e estética unidas.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Specchiato Bronzo é a alternativa estética premium dentro da família espelhada — tecnologia Sputtered Nichrome com acabamento bronze característico. Performance térmica Premium (até 72% de bloqueio IR) com identidade visual distintiva.',
      'O bronze como acabamento arquitetônico tem história: edifícios corporativos clássicos dos anos 70-80, residências de arquitetura modernista, hotelaria de alto padrão. A Specchiato Bronzo dá continuidade contemporânea a essa linguagem, agora com performance térmica de geração atual.',
      'Disponível em três versões (35/25/15) para diferentes intensidades de espelhamento e privacidade. Indicada para projetos onde a identidade visual é tão importante quanto a performance.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'Sputtered Nichrome Film' },
      { label: 'Versões disponíveis', value: '3 (Specchiato Bronzo 35, 25, 15)' },
      { label: 'Rejeição infravermelho (IR)', value: 'até 72%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Estética', value: 'Espelhada bronze' },
      { label: 'Privacidade diurna', value: 'Alta' },
      { label: 'Conforto visual interno', value: 'Preservado (Sputtered Nichrome)' },
      { label: 'Garantia', value: 'Até 10 anos' },
    ],
  },
  residential: {
    h2: 'Specchiato Bronzo para residências de assinatura arquitetônica',
    pains: [
      {
        problem:
          'Casa de arquitetura definida — espelhamento prata padrão quebraria a linguagem visual.',
        solution:
          'Bronze como acabamento dá continuidade à arquitetura. Performance térmica Premium sem comprometer identidade.',
      },
      {
        problem:
          'Quer privacidade diurna mas não quer "casa espelhada genérica".',
        solution:
          'Espelhamento bronze é menos comum, mais arquitetônico. Cumpre função de privacidade com singularidade visual.',
      },
      {
        problem:
          'Sacada ou ambiente exposto onde o conforto visual interno (cor, tom da luz) não pode ser distorcido.',
        solution:
          'Tecnologia Sputtered Nichrome preserva conforto visual interno. A luz que passa mantém tonalidade adequada para vivência.',
      },
      {
        problem:
          'Investimento de longo prazo — não quer película que descole ou perca aderência em poucos anos.',
        solution:
          'Garantia 10 anos com cobertura de descolamento, descoloração e perda de performance. Aplicação por canal autorizado INSULFILM™.',
      },
    ],
    miniFaq: [
      {
        q: 'Bronze é discreto ou chama atenção?',
        a: 'Depende da versão. Specchiato Bronzo 35 é mais sutil; Bronzo 15 é mais marcante. A escolha é feita conforme o projeto arquitetônico. Bronze é, em geral, menos chamativo que prata e mais distintivo que tons neutros.',
      },
      {
        q: 'Pode combinar com outras películas na mesma casa?',
        a: 'Sim. Comum combinar Specchiato Bronzo em fachadas expostas e uma linha não-espelhada (Naturale, Clear70) em ambientes internos ou janelas voltadas para área protegida.',
      },
      {
        q: 'Qual a diferença real para Metallico Argento?',
        a: 'Tecnologia, estética e performance térmica. Argento é Vapor-Coated Aluminium, espelhamento prata, até 86% IR. Bronzo é Sputtered Nichrome, espelhamento bronze, até 72% IR. Escolha por estética (bronze vs prata) e contexto de uso.',
      },
    ],
  },
  corporate: {
    h2: 'Specchiato Bronzo para edifícios com identidade visual bronze',
    pains: [
      {
        problem:
          'Edifício corporativo dos anos 70-80 em retrofit — fachada bronze original precisa de atualização com manutenção da identidade.',
        solution:
          'Specchiato Bronzo dá continuidade contemporânea à linguagem bronze histórica. Performance térmica atualizada, identidade preservada.',
      },
      {
        problem:
          'Hotel ou empreendimento de alto padrão onde a estética da fachada é parte do branding.',
        solution:
          'Acabamento bronze como elemento de marca. Performance Premium garante NR17 nos ambientes internos sem comprometer identidade visual externa.',
      },
      {
        problem:
          'Conformidade NR17 em edifício de fachada exposta — solução técnica não pode interferir na estética arquitetônica aprovada.',
        solution:
          'Laudo técnico individual documenta a adequação NR17. Estética bronze mantém a aprovação arquitetônica original.',
      },
      {
        problem:
          'Retrofit de edifício histórico ou tombado com fachada bronze original.',
        solution:
          'Aplicação reversível, não-invasiva, sem alteração estrutural. Aprovada para uso em edifícios com restrições patrimoniais. Documentação técnica disponível.',
      },
    ],
    miniFaq: [
      {
        q: 'Specchiato Bronzo é aprovada para retrofit de edifício tombado?',
        a: 'A aplicação é não-invasiva e reversível, característica geralmente compatível com restrições patrimoniais. A aprovação caso a caso depende do órgão de tombamento. Consultor B2B emite documentação técnica para apresentação ao IPHAN/órgãos locais.',
      },
      {
        q: 'Mantém conformidade NR17 mesmo com bloqueio IR menor (72%) que Metallico Argento (86%)?',
        a: 'Depende do nível de carga térmica do ambiente. Em situações de exposição extrema, Metallico Argento é mais indicado. Em exposições intermediárias, Specchiato Bronzo entrega NR17 conforme. Análise técnica individual define a especificação correta.',
      },
      {
        q: 'Como manter consistência visual em edifício com várias faces?',
        a: 'Especificação por face. Em retrofits de edifícios bronze, é comum aplicar Specchiato Bronzo em todas as faces visíveis para coerência. Documentação técnica acompanha cada face individualmente.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'metallico-argento',
      name: 'INSULFILM™ Metallico Argento',
      positioning: 'Premium · espelhado prata com IR superior (86%)',
    },
    {
      slug: 'orizzonte70',
      name: 'INSULFILM™ Orizzonte70',
      positioning: 'Premium · alternativa não-espelhada com IR de pico',
    },
    {
      slug: 'naturale',
      name: 'INSULFILM™ Naturale',
      positioning: 'Premium · tom neutro sem espelhamento',
    },
  ],
};

// ─────────────────────────────────────────────
// Petrolio — Performance · estética preta sem refletividade
// ─────────────────────────────────────────────
const petrolio: ProductDualPublic = {
  slug: 'petrolio',
  category: 'arq-solar',
  line: 'Performance',
  hero: {
    badge: 'Solar · Performance',
    title: 'Estética preta sem espelhamento. Discreta por fora, controlada por dentro.',
    subtitle:
      'Película arquitetônica híbrida com acabamento preto — sem efeito espelho, sem refletividade externa intensa. Proteção UV >99% com personalidade arquitetônica contemporânea.',
    quickStats: [
      { label: 'Aparência', value: 'Preta opaca' },
      { label: 'Rejeição IR', value: 'até 42%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Garantia', value: 'até 3 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para residências com identidade arquitetônica preta',
      description:
        'Casas contemporâneas, vidros pretos integrados, fachadas modernistas. Quem quer privacidade e proteção UV sem que a casa pareça um prédio espelhado de aeroporto.',
    },
    corporate: {
      headline: 'Para projetos comerciais com estética definida',
      description:
        'Lojas conceituais, showrooms contemporâneos, fachadas de identidade preta. Reduz carga UV total e melhora privacidade sem comprometer linguagem arquitetônica.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Petrolio é a película arquitetônica de acabamento preto opaco — sem o efeito espelho que define os filmes espelhados convencionais. Tecnologia Hybrid Performance combina proteção UV de pico (>99%) com controle solar moderado.',
      'O posicionamento é estético antes de tudo: ela existe para projetos onde a opacidade preta é parte da linguagem arquitetônica e a refletividade espelhada seria descontextualizada. A rejeição IR (até 42%) é menor que linhas focadas em performance térmica, mas suficiente para reduzir ganho solar em ambientes onde estética é prioridade.',
      'Indicada para arquitetura contemporânea residencial e comercial, fachadas de vidros pretos integrados e projetos onde o controle solar não pode comprometer a identidade visual.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'Hybrid Performance Film' },
      { label: 'Aparência', value: 'Preta opaca (sem espelhamento)' },
      { label: 'Rejeição infravermelho (IR)', value: 'até 42%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Refletividade externa', value: 'Baixa' },
      { label: 'Privacidade diurna', value: 'Alta (opacidade)' },
      { label: 'Interferência em sinais eletrônicos', value: 'Mínima' },
      { label: 'Garantia', value: 'Até 3 anos' },
    ],
  },
  residential: {
    h2: 'Petrolio para residências contemporâneas',
    pains: [
      {
        problem:
          'Casa de arquitetura preta — película espelhada padrão quebraria a linguagem do projeto.',
        solution:
          'Acabamento preto opaco coerente com a estética. Sem espelhamento, sem refletividade que destoa.',
      },
      {
        problem:
          'Quer privacidade diurna sem que a fachada vire um espelho que reflete a vizinhança.',
        solution:
          'Privacidade pela opacidade, não pela refletividade. De fora se vê preto sólido, não o reflexo da rua.',
      },
      {
        problem:
          'Móveis e pisos sofrendo com luz UV em ambientes voltados para o sol.',
        solution:
          '>99% de bloqueio UV. Proteção máxima de interiores contra o principal agente de descoloração.',
      },
      {
        problem:
          'Quer reduzir parte do calor sem investir no patamar Premium de bloqueio térmico.',
        solution:
          'Redução IR moderada (até 42%) com investimento Performance. Para quem prioriza estética + UV + privacidade, não bloqueio térmico máximo.',
      },
    ],
    miniFaq: [
      {
        q: 'Petrolio reduz muito o calor?',
        a: 'Reduz parcialmente (até 42% de IR). Se controle térmico é a prioridade principal, Clear70 ou linhas Premium (Orizzonte70, MetallicoArgento) entregam mais. A Petrolio é escolhida por estética preta + UV + privacidade.',
      },
      {
        q: 'Escurece muito o ambiente interno?',
        a: 'Sim, é uma película opaca preta — reduz luz natural significativamente. É escolha consciente: você troca luminosidade por privacidade total e estética preta. Não é indicada para ambientes onde luz natural é prioridade.',
      },
      {
        q: 'Por que não é Premium se a UV é >99%?',
        a: 'A classificação Premium leva em conta tecnologia, performance integral e garantia (10 anos). A Petrolio tem garantia de 3 anos e tecnologia Hybrid — Performance é a classificação correta. A UV alta é benefício da composição, não suficiente para Premium isoladamente.',
      },
    ],
  },
  corporate: {
    h2: 'Petrolio para projetos comerciais com identidade preta definida',
    pains: [
      {
        problem:
          'Loja conceito, showroom ou ponto comercial com fachada preta — espelhamento padrão descaracterizaria a marca.',
        solution:
          'Acabamento preto opaco mantém identidade visual do ponto. Privacidade diurna + UV preservam mercadoria e ambiente interno.',
      },
      {
        problem:
          'Mercadoria desbotando em vitrines voltadas para sol direto — reposição custa, imagem da loja se desgasta.',
        solution:
          '>99% de bloqueio UV preserva cores originais de produtos e display. Aplicação rápida em retrofit de fachada.',
      },
      {
        problem:
          'NR17 em postos de trabalho próximos a fachada de vidro com alta carga UV.',
        solution:
          'Bloqueio UV de pico contribui em ambientes onde exposição cumulativa é fator. Documentação técnica disponível com consultor B2B.',
      },
      {
        problem:
          'Retrofit de ponto comercial em operação — não pode haver obra que interrompa o atendimento.',
        solution:
          'Aplicação modular por vidro, fora do horário de operação. Sem alteração civil. Cronograma compatível com loja aberta.',
      },
    ],
    miniFaq: [
      {
        q: 'Pode ser aplicada em fachada visível da rua?',
        a: 'Sim — é o uso típico em lojas conceituais e showrooms. A aparência preta opaca de fora é parte da estética buscada nesses projetos.',
      },
      {
        q: 'Como Petrolio se compara a Grigio Invertito ou Reflesso d\'Argento?',
        a: 'Petrolio é PRETA OPACA, sem espelhamento. Grigio Invertito é ESPELHADA com visibilidade interna preservada (efeito espião melhorado, similar à Specchiato Bronzo). Reflesso d\'Argento é ESPELHADA PRATA convencional. Três soluções de privacidade com estéticas e leituras visuais diferentes.',
      },
      {
        q: 'A Petrolio cumpre exigência NR17?',
        a: 'Contribui com a redução de carga UV em postos de trabalho. Para conformidade NR17 ampla (incluindo conforto térmico), análise por consultor B2B define se Petrolio sozinha é suficiente ou se complemento térmico é necessário.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'grigio-invertito',
      name: 'INSULFILM™ Grigio Invertito',
      positioning: 'Performance · privacidade externa + visibilidade interna',
    },
    {
      slug: 'reflesso-d-argento',
      name: "INSULFILM™ Reflesso d'Argento",
      positioning: 'Performance · espelhado prata com IR superior',
    },
    {
      slug: 'orizzonte70',
      name: 'INSULFILM™ Orizzonte70',
      positioning: 'Premium · upgrade aspiracional não-espelhado',
    },
  ],
};

// ─────────────────────────────────────────────
// Grigio Invertito — Performance · espelhado invertido (fora prata / dentro fumê)
// ─────────────────────────────────────────────
const grigioInvertito: ProductDualPublic = {
  slug: 'grigio-invertito',
  category: 'arq-solar',
  line: 'Performance',
  hero: {
    badge: 'Solar · Performance',
    title: 'Privacidade espelhada com visibilidade interna preservada.',
    subtitle:
      'Película arquitetônica com alto efeito espelhado externo e visão interna mais aguçada que filmes refletivos convencionais. Privacidade diurna sem perder o contato visual com o exterior. Garantia 3 anos.',
    quickStats: [
      { label: 'Transparência interna (VLT)', value: '15%' },
      { label: 'Rejeição IR', value: 'até 75%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Garantia', value: 'até 3 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para residências que precisam de privacidade sem perder a vista',
      description:
        'Casa de frente para vizinho próximo, condomínio horizontal, sacada exposta. Quem quer privacidade durante o dia mas não abre mão de olhar para fora.',
    },
    corporate: {
      headline: 'Para escritórios e salas com privacidade + vista',
      description:
        'Salas de reunião com fachada envidraçada, escritórios em andares baixos, ambientes onde se exige privacidade total externa mas a equipe precisa continuar enxergando o entorno.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Grigio Invertito tem uma característica que a destaca dentro da linha espelhada Performance: mesmo com alto efeito espelho externo, a visibilidade interna permanece mais aguçada que a maioria dos filmes refletivos convencionais. Tecnologia Vapor-Coated Aluminium calibrada para esse equilíbrio.',
      'O comportamento é parecido com a Specchiato Bronzo (Premium) no aspecto da visão interna preservada — sem o "fechamento" característico dos filmes espelhados clássicos. A diferença está no tom (cinza vs bronze), na tecnologia e no patamar Performance (vs Premium).',
      'À noite, quando a luz interna supera a externa, o efeito espelho se inverte (de fora se enxerga para dentro). Para manter o "efeito espião" também à noite, uma solução técnica comum é instalar um spot de luz externo voltado para a fachada — equilibra a iluminação dos dois lados e preserva o espelhamento. Quando isso não é viável, cortina ou persiana noturna resolvem.',
      'Aplicação típica: residências em condomínios horizontais, salas em térreo e andares baixos, ambientes onde a combinação privacidade externa + visão interna ao exterior é prioridade. Rejeição IR de até 75% adiciona controle térmico relevante além da função de privacidade.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'Vapor-Coated Aluminium Film' },
      { label: 'Transmissão de luz visível (VLT)', value: '15%' },
      { label: 'Rejeição infravermelho (IR)', value: 'até 75%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Efeito externo (diurno)', value: 'Espelho prata-cinza' },
      { label: 'Visibilidade interna', value: 'Preservada (acima do padrão refletivo)' },
      { label: 'Privacidade diurna', value: 'Alta (efeito espelho)' },
      { label: 'Privacidade noturna', value: 'Requer iluminação externa OU cortina' },
      { label: 'Garantia', value: 'Até 3 anos' },
    ],
  },
  residential: {
    h2: 'Grigio Invertito para residências de condomínio horizontal',
    pains: [
      {
        problem:
          'Casa de frente para casa do vizinho — sempre com cortina fechada, perdendo luz natural e vista.',
        solution:
          'Privacidade diurna pelo espelhamento externo. A cortina pode ficar aberta durante o dia — você mantém vista para fora com visibilidade preservada acima do padrão refletivo.',
      },
      {
        problem:
          'Sacada ou terraço em condomínio com tráfego de outros condôminos passando próximo.',
        solution:
          'De fora, ninguém enxerga. De dentro, você continua usufruindo do ambiente normalmente.',
      },
      {
        problem:
          'Quer também reduzir calor da fachada exposta, não só ganhar privacidade.',
        solution:
          'Até 75% de rejeição IR — performance térmica relevante. Solução dupla: privacidade + controle solar em uma especificação.',
      },
      {
        problem:
          'Garantia mínima de 3 anos suficiente — não precisa do compromisso Premium de 10.',
        solution:
          'Linha Performance INSULFILM™. Mesma tecnologia Vapor-Coated em escala Performance, preço acessível com garantia de fabricante.',
      },
    ],
    miniFaq: [
      {
        q: 'Funciona de noite também?',
        a: 'Por padrão não — quando a luz interna fica mais forte que a externa (à noite, com luzes acesas), o efeito espelho se inverte e de fora se enxerga para dentro. Solução técnica: spot de luz externo voltado para a fachada equilibra a iluminação dos dois lados e mantém o "efeito espião" também à noite. Quando isso não é viável, cortina ou persiana noturna resolvem.',
      },
      {
        q: 'Escurece muito o ambiente?',
        a: 'A versão padrão tem VLT de 15% — escurece visivelmente. Para ambientes onde se quer privacidade com mais luz, vale conversar com consultor sobre outras opções. Para privacidade total, o escurecimento é parte do funcionamento.',
      },
      {
        q: 'Posso aplicar em apartamento alto também?',
        a: 'Pode, mas a aplicação típica é em térreos, andares baixos e casas — onde a privacidade externa é problema real. Em altos andares, geralmente não há necessidade prática.',
      },
    ],
  },
  corporate: {
    h2: 'Grigio Invertito para escritórios e salas com privacidade + visibilidade',
    pains: [
      {
        problem:
          'Sala de reunião térrea voltada para rua — privacidade necessária mas equipe quer continuar enxergando movimento externo.',
        solution:
          'Espelhamento externo diurno bloqueia visão de fora. Visibilidade interna preservada. Solução padrão para salas de board e reuniões executivas em térreos.',
      },
      {
        problem:
          'NR17 em estação de trabalho próxima à fachada com exposição UV e térmica.',
        solution:
          'Até 75% de rejeição IR + >99% UV reduzem a carga térmica radiante. Laudo técnico por aplicação disponível para anexo ao PGR.',
      },
      {
        problem:
          'Ponto comercial em andar baixo com pessoas passando o tempo todo na frente da vitrine.',
        solution:
          'Privacidade diurna total para o interior do ponto. Aparência externa controlada. Vitrine continua sendo vitrine apenas para quem decidiu entrar.',
      },
      {
        problem:
          'Retrofit em escritório em operação — janela de obra é curta.',
        solution:
          'Aplicação por vidro, fora do horário de pico. Sem obra civil. Operação não para.',
      },
    ],
    miniFaq: [
      {
        q: 'Como Grigio Invertito atende a NR17?',
        a: 'A redução de carga IR e UV é documentada por laudo técnico individual emitido por aplicação. Anexo ao PGR/PCMSO compõe a documentação de mitigação para postos próximos a fachadas envidraçadas.',
      },
      {
        q: 'Funciona em pavimentos altos ou só térreos?',
        a: 'Tecnicamente funciona em qualquer pavimento. A demanda é principalmente em térreos e andares baixos por questão de privacidade real (em alto andar geralmente não há quem olhe diretamente para dentro). Em alto, a função fica reduzida ao controle solar.',
      },
      {
        q: 'É a versão Performance do Metallico Argento?',
        a: 'Não exatamente. Metallico Argento é espelhamento simétrico (espelha dos dois lados durante o dia). Grigio Invertito é assimétrico (espelha só de um lado). São produtos com funções relacionadas mas distintas. Análise de uso define qual é a especificação correta.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'reflesso-d-argento',
      name: "INSULFILM™ Reflesso d'Argento",
      positioning: 'Performance · espelhado prata convencional',
    },
    {
      slug: 'petrolio',
      name: 'INSULFILM™ Petrolio',
      positioning: 'Performance · privacidade preta sem espelhamento',
    },
    {
      slug: 'metallico-argento',
      name: 'INSULFILM™ Metallico Argento',
      positioning: 'Premium · upgrade espelhado com IR superior (86%)',
    },
  ],
};

// ─────────────────────────────────────────────
// Reflesso d'Argento — Performance · espelhado prata convencional
// ─────────────────────────────────────────────
const reflessoDArgento: ProductDualPublic = {
  slug: 'reflesso-d-argento',
  category: 'arq-solar',
  line: 'Performance',
  hero: {
    badge: 'Solar · Performance',
    title: 'Espelhado prata clássico. Privacidade e controle solar em escala Performance.',
    subtitle:
      'Película arquitetônica espelhada com 80% de rejeição IR e privacidade diurna total. Aplicação versátil em fachadas e pergolados. Linha Performance com garantia 3 anos.',
    quickStats: [
      { label: 'Rejeição IR', value: 'até 80%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Estética', value: 'Espelhada prata' },
      { label: 'Garantia', value: 'até 3 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para fachadas e ambientes expostos ao sol direto',
      description:
        'Sacadas com sol direto, áreas envidraçadas grandes, pergolados de vidro. Quem quer privacidade espelhada e controle solar agressivo sem investir no patamar Premium.',
    },
    corporate: {
      headline: 'Para edifícios e fachadas envidraçadas em alta exposição',
      description:
        'Edifícios corporativos em zona urbana quente, fachadas voltadas para nascente/poente, NR17 em postos próximos a fachadas. Custo-benefício Performance para projetos amplos.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Reflesso d\'Argento é a versão Performance da família espelhada prata da INSULFILM™. Tecnologia Vapor-Coated Aluminium com até 80% de rejeição IR — patamar superior dentro do tier Performance.',
      'Atende a aplicação clássica de fachadas e ambientes expostos: privacidade diurna total pelo efeito espelho prata, controle solar agressivo pela alta rejeição IR e proteção UV >99%. Versatilidade de aplicação em vidros de fachada, pergolados envidraçados e áreas integradas grandes.',
      'Compete com a Metallico Argento (Premium) no patamar térmico, oferecendo investimento inicial menor e garantia Performance (3 anos vs 10 anos). A escolha entre as duas é função do horizonte de investimento e ciclo de vida pretendido.',
    ],
    techTable: [
      { label: 'Tecnologia', value: 'Vapor-Coated Aluminium Film' },
      { label: 'Rejeição infravermelho (IR)', value: 'até 80%' },
      { label: 'Bloqueio UV', value: '>99%' },
      { label: 'Estética', value: 'Espelhada prata' },
      { label: 'Privacidade diurna', value: 'Alta (efeito espelho)' },
      { label: 'Aplicações típicas', value: 'Fachadas, pergolados, áreas envidraçadas amplas' },
      { label: 'Interferência em sinais eletrônicos', value: 'Pode haver (verificar com consultor)' },
      { label: 'Garantia', value: 'Até 3 anos' },
    ],
  },
  residential: {
    h2: 'Reflesso d\'Argento para residências com fachadas amplas',
    pains: [
      {
        problem:
          'Sacada integrada grande com sol direto — torna o ambiente impossível de usar nas horas de pico.',
        solution:
          'Até 80% de rejeição IR. A sacada vira ambiente utilizável em qualquer horário do dia.',
      },
      {
        problem:
          'Pergolado envidraçado, área de lazer com vidro — calor concentrado, conta de luz dispara.',
        solution:
          'Performance térmica de alto patamar. Reduz necessidade de ar-condicionado e gera economia mensurável em poucas faturas.',
      },
      {
        problem:
          'Privacidade diurna pra área da casa exposta a vizinhança ou rua.',
        solution:
          'Efeito espelho prata bloqueia visão de fora durante o dia. Privacidade total sem reduzir luminosidade interna.',
      },
      {
        problem:
          'Quer espelhado prata clássico, sem investir no patamar Premium.',
        solution:
          'Linha Performance INSULFILM™. Mesma estética visual do Metallico Argento, com investimento inicial menor e garantia 3 anos.',
      },
    ],
    miniFaq: [
      {
        q: 'Qual a diferença real entre Reflesso d\'Argento (Performance) e Metallico Argento (Premium)?',
        a: 'Tecnologia Vapor-Coated Aluminium em ambos. Diferença está em performance integral (Metallico chega até 86% IR vs 80% da Reflesso) e principalmente em garantia (10 vs 3 anos). Em horizonte curto, a Reflesso entrega quase a mesma performance térmica. Em horizonte longo, o Metallico amortiza melhor pelo ciclo de vida estendido.',
      },
      {
        q: 'Funciona em pergolado de vidro com sol direto?',
        a: 'Sim — é uma das aplicações típicas. Reduz drasticamente a sensação térmica do ambiente sob o pergolado, especialmente em horários de pico solar.',
      },
      {
        q: 'O efeito espelho funciona dos dois lados?',
        a: 'Durante o dia, espelha de fora (privacidade externa). À noite, com luz interna acesa, o efeito se inverte. Para privacidade noturna, cortina/persiana ainda é necessária.',
      },
    ],
  },
  corporate: {
    h2: 'Reflesso d\'Argento para edifícios corporativos em escala',
    pains: [
      {
        problem:
          'Edifício corporativo com várias fachadas envidraçadas — Metallico Argento sobe muito o CAPEX do retrofit.',
        solution:
          'Performance térmica próxima do Premium (80% vs 86% IR) com investimento inicial significativamente menor. Para projetos em escala, viabiliza o retrofit completo.',
      },
      {
        problem:
          'NR17 em diversos postos próximos a fachadas envidraçadas — exigência ampla, orçamento finito.',
        solution:
          'Custo-benefício Performance permite cobertura ampla da edificação. Laudo técnico individual por aplicação documenta conformidade para PGR/PCMSO.',
      },
      {
        problem:
          'Retrofit predial em andamento, edifício habitado, cronograma apertado.',
        solution:
          'Aplicação por andar, face ou área. Sem obra civil. Cronograma compatível com operação contínua do prédio.',
      },
      {
        problem:
          'Diretoria quer redução de OPEX em ar-condicionado — sem aprovar CAPEX Premium.',
        solution:
          'Patamar de rejeição IR Performance entrega redução térmica relevante. Simulação de retorno via consultor B2B mostra payback compatível com Performance investment.',
      },
    ],
    miniFaq: [
      {
        q: 'Quando faz sentido escolher Reflesso d\'Argento em vez de Metallico Argento?',
        a: 'Horizonte mais curto de investimento, orçamento limitado, escala ampla. A Metallico é a escolha quando o horizonte é longo (10 anos) e a performance integral importa. A Reflesso é a escolha quando o critério é viabilizar retrofit em escala com CAPEX ajustado.',
      },
      {
        q: 'Como atende a NR17 em edifício corporativo?',
        a: 'A redução de carga IR e UV é documentada por laudo técnico individual emitido por aplicação. Anexa-se ao mapeamento de riscos físicos (calor) do PGR/PCMSO. Solução padrão em edifícios corporativos.',
      },
      {
        q: 'Pode interferir em Wi-Fi ou sinal celular?',
        a: 'Pode atenuar parcialmente, pela camada de alumínio da composição Vapor-Coated. Em edifícios com sistema de DAS ou repetidores internos, geralmente não é problema. Análise prévia com consultor B2B identifica risco antes da especificação.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'grigio-invertito',
      name: 'INSULFILM™ Grigio Invertito',
      positioning: 'Performance · espelhado invertido (visibilidade interna preservada)',
    },
    {
      slug: 'metallico-argento',
      name: 'INSULFILM™ Metallico Argento',
      positioning: 'Premium · upgrade aspiracional com IR superior (86%)',
    },
    {
      slug: 'petrolio',
      name: 'INSULFILM™ Petrolio',
      positioning: 'Performance · alternativa preta sem espelhamento',
    },
  ],
};

// ─────────────────────────────────────────────
// Phantom Gloss — Premium · SPF para superfícies brilhosas
// ─────────────────────────────────────────────
const phantomGloss: ProductDualPublic = {
  slug: 'phantom-gloss',
  seoSlug: 'phantom-gloss-spf',
  category: 'arq-spf',
  line: 'Premium',
  hero: {
    badge: 'SPF · Premium',
    title: 'Proteção invisível. Brilho original preservado.',
    subtitle:
      'Surface Protection Film de 180 microns para superfícies brilhosas — mármore polido, lacado, madeira envernizada, vidro de alto padrão. Barreira contra micro-riscos, manchas ácidas e desgaste cotidiano. Garantia 5 anos.',
    quickStats: [
      { label: 'Espessura', value: '180 microns' },
      { label: 'Proteção', value: 'Anti-risco · barreira química' },
      { label: 'Temperatura', value: '-35°C a 116°C' },
      { label: 'Garantia', value: 'até 5 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para superfícies de alto padrão na sua residência',
      description:
        'Bancada de mármore polido na cozinha. Móveis lacados de marcenaria fina. Mesa de jantar envernizada. Investimento que precisa continuar bonito daqui a 5 anos. Proteção invisível, brilho preservado.',
    },
    corporate: {
      headline: 'Para mobiliário e revestimentos comerciais de alto padrão',
      description:
        'Hotelaria sofisticada, showrooms, lobbies, mobiliário executivo, mármore polido em recepções. Onde a aparência da superfície É parte do produto — e a degradação cotidiana é o principal risco.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Phantom Gloss arquitetônica é uma película de proteção de superfície — SPF (Surface Protection Film) — com 180 microns de espessura, desenhada para preservar superfícies de acabamento brilhoso em ambientes arquitetônicos. Pertence à família Phantom, distinta da versão automotiva (PPF — Paint Protection Film) que tem aplicação e formulação específicas para pintura de veículos.',
      'Diferente das películas solares, a Phantom Gloss não atua sobre vidros de fachada — atua sobre o objeto que precisa ser protegido: bancada, móvel, mesa, painel.',
      'O conflito central do design de alto padrão é que as superfícies mais bonitas são as mais expostas: a bancada de mármore que recebe vinho, cítricos e ácido cotidiano. O móvel lacado que recebe utensílios deslizando. A mesa envernizada que recebe pratos quentes. Cada uso é um vetor de degradação invisível.',
      'A Phantom Gloss interpõe uma camada técnica entre a superfície e esses agentes — preservando o brilho original, a profundidade dos reflexos e a integridade visual da peça. Aplicação invisível: você sabe que está lá apenas pela ausência do dano.',
      'Indicada para residências de alto padrão (cozinhas gourmet, suítes master, espaços gourmet integrados) e ambientes comerciais sofisticados (hotelaria 5 estrelas, showrooms, lobbies corporativos premium, mobiliário executivo).',
    ],
    techTable: [
      { label: 'Tipo', value: 'SPF — Surface Protection Film' },
      { label: 'Espessura', value: '180 microns (7 mil)' },
      { label: 'Acabamento', value: 'Gloss (preserva brilho original)' },
      { label: 'Proteção mecânica', value: 'Anti-risco e anti-abrasão' },
      { label: 'Proteção química', value: 'Barreira contra ácidos, álcalis e solventes domésticos' },
      { label: 'Faixa de temperatura', value: '-35°C a 116°C' },
      { label: 'Aplicação típica', value: 'Mármore, lacado, vidro, madeira envernizada' },
      { label: 'Limpeza', value: 'Superfície ultra lisa, sem retenção de resíduos' },
      { label: 'Garantia', value: 'Até 5 anos' },
    ],
  },
  residential: {
    h2: 'Phantom Gloss para superfícies premium da sua residência',
    pains: [
      {
        problem:
          'Bancada de mármore polido na cozinha — vinho, vinagre, suco de limão e produtos de limpeza atacam diariamente.',
        solution:
          'Barreira química contra ácidos e álcalis domésticos. Mancha não penetra na pedra. Limpeza vira detalhe, não problema.',
      },
      {
        problem:
          'Marcenaria lacada de alto padrão começando a mostrar micro-riscos do uso cotidiano após poucos anos.',
        solution:
          '180 microns de proteção anti-risco preservam o acabamento. O lacado continua novo, sem aquela "rede" de micro-abrasões que mata o brilho.',
      },
      {
        problem:
          'Mesa de jantar envernizada com marcas de pratos quentes, anéis de copo, riscos de talheres.',
        solution:
          'Aplicação invisível, resistência térmica até 116°C. Você usa a mesa normalmente, ela continua impecável.',
      },
      {
        problem:
          'O investimento em interiores foi alto — não quer assistir a degradação progressiva nos próximos 5 anos.',
        solution:
          'Garantia 5 anos contra falhas da película. O valor estético do investimento se preserva no horizonte do produto.',
      },
    ],
    miniFaq: [
      {
        q: 'A Phantom Gloss aparece visualmente sobre a superfície?',
        a: 'Não. A aplicação é invisível — você não percebe que existe uma camada protetiva. O brilho original do mármore, do lacado ou da madeira envernizada continua exatamente como antes da aplicação.',
      },
      {
        q: 'Pode ser aplicada sobre qualquer superfície brilhosa?',
        a: 'A linha é específica para superfícies de acabamento gloss — mármore polido, granito polido, lacado, madeira envernizada, vidro de alto padrão. Para acabamento fosco, ver Phantom Matte. Para superfícies muito irregulares ou porosas, consulta técnica é necessária.',
      },
      {
        q: 'Como remover, se quiser?',
        a: 'Aplicação reversível. Remoção é feita por aplicador especializado, sem dano à superfície original. Comum em projetos onde se quer trocar o protetor ao longo dos anos.',
      },
    ],
  },
  corporate: {
    h2: 'Phantom Gloss para mobiliário e revestimentos comerciais de alto padrão',
    pains: [
      {
        problem:
          'Mármore polido em recepção, lobby ou área social de hotel — atrito constante com bagagem, carrinhos, sapatos.',
        solution:
          '180 microns de proteção anti-abrasão preservam o acabamento original. A peça continua sendo "novo mármore" mesmo após anos de operação intensa.',
      },
      {
        problem:
          'Mobiliário executivo lacado (mesas de reunião, painéis de escritório de diretoria) sofrendo desgaste em uso diário.',
        solution:
          'Resistência a riscos e impactos cotidianos. Reuniões, notebooks deslizando, café derramado — superfície segue impecável.',
      },
      {
        problem:
          'Showroom com superfícies de alto padrão que precisam ser tocadas pelo cliente para apresentação.',
        solution:
          'A Phantom Gloss permite o contato físico sem comprometer a apresentação. Mostruário se mantém em estado de demonstração por toda a vida útil do investimento.',
      },
      {
        problem:
          'Hotelaria 5 estrelas com volume alto de hóspedes — degradação é inevitável, custo de troca de mobiliário é alto.',
        solution:
          'Estende ciclo de vida útil de superfícies premium. CAPEX único, OPEX de manutenção reduzido. Cobertura sob garantia 5 anos.',
      },
    ],
    miniFaq: [
      {
        q: 'A Phantom Gloss arquitetônica é a mesma que a automotiva?',
        a: 'Não — são da mesma família Phantom, mas produtos distintos. A versão arquitetônica é SPF (Surface Protection Film), aplicada em superfícies de acabamento como mármore polido, lacado e madeira envernizada. A versão automotiva é PPF (Paint Protection Film), aplicada sobre pintura de veículos. Aplicações, formulações e aplicadores são diferentes.',
      },
      {
        q: 'Phantom Gloss substitui manutenção periódica de mármore polido?',
        a: 'Não substitui — complementa. A manutenção periódica de polimento continua sendo recomendada conforme orientação do fornecedor da pedra. A Phantom Gloss elimina o principal agente que acelera a necessidade dessa manutenção: o ataque químico cotidiano.',
      },
      {
        q: 'Funciona em projetos corporativos de retrofit?',
        a: 'Sim — é uma das aplicações típicas. Aplicada sobre mobiliário e revestimentos existentes sem necessidade de obra. Hospedeiros, restaurantes e lobbies em operação podem receber a proteção sem interrupção de serviço.',
      },
      {
        q: 'Existe versão para acabamento fosco?',
        a: 'Sim — Phantom Matte. Mesma tecnologia de proteção, calibrada para preservar acabamento fosco em mármore matte, lacado fosco e superfícies de madeira em acabamento natural ou matte.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'phantom-matte',
      name: 'INSULFILM™ Phantom Matte',
      positioning: 'Premium · SPF para acabamento fosco preservado',
    },
    {
      slug: 'orizzonte70',
      name: 'INSULFILM™ Orizzonte70',
      positioning: 'Premium · proteção solar para vidros de fachada (categoria diferente)',
    },
    {
      slug: 'naturale',
      name: 'INSULFILM™ Naturale',
      positioning: 'Premium · solução solar premium discreta',
    },
  ],
};

// ─────────────────────────────────────────────
// Phantom Matte — Premium · SPF para superfícies foscas
// ─────────────────────────────────────────────
const phantomMatte: ProductDualPublic = {
  slug: 'phantom-matte',
  category: 'arq-spf',
  line: 'Premium',
  hero: {
    badge: 'SPF · Premium',
    title: 'Proteção fosca. Acabamento matte intacto.',
    subtitle:
      'Surface Protection Film de 180 microns calibrado para preservar acabamentos foscos — mármore matte, lacado fosco, madeira em acabamento natural ou velado. Sem alteração de textura, sem brilho indesejado. Garantia 5 anos.',
    quickStats: [
      { label: 'Espessura', value: '180 microns' },
      { label: 'Acabamento', value: 'Matte preservado' },
      { label: 'Proteção', value: 'Anti-risco · barreira química' },
      { label: 'Garantia', value: 'até 5 anos' },
    ],
  },
  segmentation: {
    residential: {
      headline: 'Para superfícies foscas de alto padrão',
      description:
        'O acabamento fosco está cada vez mais presente em residências de design contemporâneo — mármore preto matte, lacado fosco, madeira natural sem verniz. Protege sem brilhar.',
    },
    corporate: {
      headline: 'Para projetos comerciais com identidade matte definida',
      description:
        'Boutique hotels com paleta matte, restaurantes assinados, espaços de design contemporâneo, showrooms de luxo onde o acabamento fosco é parte da identidade visual.',
    },
  },
  description: {
    paragraphs: [
      'A INSULFILM™ Phantom Matte arquitetônica é a contraparte fosca da família Phantom — SPF (Surface Protection Film) com 180 microns, calibrada especificamente para preservar acabamentos matte em ambientes arquitetônicos. Pertence à família Phantom mas é produto distinto da versão automotiva PPF.',
      'O acabamento fosco tem crescido em arquitetura e design contemporâneos: mármore preto fosco em bancadas, lacado matte em marcenaria, madeira em acabamento natural ou velado. Esses acabamentos são igualmente vulneráveis a riscos, manchas e desgaste — mas qualquer película convencional adicionaria brilho, distorcendo a estética.',
      'A Phantom Matte resolve isso: preserva exatamente o acabamento original. Você protege a superfície sem alterar a leitura visual do material. Aplicação invisível em todos os sentidos.',
      'Indicada para residências de design contemporâneo, ambientes comerciais com paleta matte definida (boutique hotels, restaurantes, showrooms de luxo) e qualquer projeto onde a estética fosca é parte da identidade.',
    ],
    techTable: [
      { label: 'Tipo', value: 'SPF — Surface Protection Film' },
      { label: 'Espessura', value: '180 microns (7 mil)' },
      { label: 'Acabamento', value: 'Matte (preserva fosco original)' },
      { label: 'Proteção mecânica', value: 'Anti-risco e anti-abrasão' },
      { label: 'Proteção química', value: 'Barreira contra ácidos, álcalis e solventes domésticos' },
      { label: 'Faixa de temperatura', value: '-35°C a 116°C' },
      { label: 'Aplicação típica', value: 'Mármore fosco, lacado matte, madeira natural' },
      { label: 'Diferencial vs Phantom Gloss', value: 'Acabamento fosco preservado (não adiciona brilho)' },
      { label: 'Garantia', value: 'Até 5 anos' },
    ],
  },
  residential: {
    h2: 'Phantom Matte para superfícies foscas premium',
    pains: [
      {
        problem:
          'Mármore preto fosco na bancada da cozinha — o acabamento matte é a identidade do projeto, mas é o que mais sofre com manchas.',
        solution:
          'Barreira química preserva o acabamento matte intacto. Mancha não penetra. O fosco continua sendo fosco.',
      },
      {
        problem:
          'Marcenaria em lacado matte de cor escura — qualquer micro-risco se torna imediatamente visível pela diferença de textura.',
        solution:
          '180 microns de proteção evitam o micro-risco antes que ele aconteça. O lacado matte mantém uniformidade visual.',
      },
      {
        problem:
          'Mesa de madeira em acabamento natural (óleo / velado) que sofre com líquidos e marcas de uso.',
        solution:
          'Barreira contra manchas líquidas sem alterar o aspecto natural da madeira. A peça continua "viva" visualmente, protegida invisivelmente.',
      },
      {
        problem:
          'Aplicação de proteção convencional adicionaria brilho — quebrando a paleta matte cuidadosamente especificada pelo arquiteto.',
        solution:
          'Phantom Matte é calibrada para preservar exatamente o acabamento fosco original. Sem brilho indesejado, sem alteração de textura visual.',
      },
    ],
    miniFaq: [
      {
        q: 'A Phantom Matte adiciona algum brilho à superfície original?',
        a: 'Não. A formulação é específica para preservar acabamento fosco. Se o seu material original é matte, ele continua matte após a aplicação — sem brilho, sem reflexo indesejado, sem alteração de textura visual.',
      },
      {
        q: 'Posso ter Phantom Gloss em uma superfície e Phantom Matte em outra na mesma casa?',
        a: 'Sim, é o uso comum. Em projetos contemporâneos é normal ter mistura de acabamentos — bancada de mármore polido (Gloss) e marcenaria lacada matte (Matte) na mesma cozinha. O aplicador especifica a versão correta por peça.',
      },
      {
        q: 'Funciona em pedra natural com porosidade visível (tipo travertino fosco)?',
        a: 'Em superfícies com porosidade muito acentuada, a aplicação requer análise prévia. Em pedras foscas com superfície razoavelmente plana, sim. Consulta técnica antes da especificação garante o resultado.',
      },
    ],
  },
  corporate: {
    h2: 'Phantom Matte para projetos comerciais com identidade fosca',
    pains: [
      {
        problem:
          'Boutique hotel com paleta matte definida pelo design — qualquer alteração de acabamento quebra a linguagem.',
        solution:
          'Proteção que não interfere na estética. Os ambientes continuam visualmente fiéis ao projeto original do designer.',
      },
      {
        problem:
          'Restaurante de alto padrão com mobiliário lacado fosco em uso intenso — desgaste rápido, repaginação cara.',
        solution:
          'Estende ciclo de vida do mobiliário sem alterar acabamento. CAPEX único, OPEX de reposição reduzido.',
      },
      {
        problem:
          'Showroom de design contemporâneo onde os móveis em exposição são tocados constantemente pelo público.',
        solution:
          'Proteção contra contato físico sem comprometer a leitura matte das peças. Exposição mantém estado de "vitrine" por toda a vida útil.',
      },
      {
        problem:
          'Espaço corporativo com identidade visual fosca (paleta minimalista, materiais naturais) que precisa de durabilidade operacional.',
        solution:
          'Proteção técnica invisível em todos os sentidos. Mantém a linguagem visual do espaço, adiciona resistência operacional.',
      },
    ],
    miniFaq: [
      {
        q: 'Phantom Matte é nova na linha INSULFILM™?',
        a: 'É a versão fosca complementar à Phantom Gloss (que protege acabamento brilhoso). Mesma tecnologia base de SPF, calibrada para preservar acabamento matte. Foi desenhada para projetos contemporâneos que adotam paleta fosca como linguagem.',
      },
      {
        q: 'Como o aplicador escolhe entre Phantom Gloss e Phantom Matte?',
        a: 'Pelo acabamento do material original. Superfície brilhosa (mármore polido, lacado brilhoso, verniz alto-brilho) → Gloss. Superfície fosca (mármore matte, lacado fosco, madeira natural sem brilho) → Matte. Aplicação errada altera a leitura visual — por isso a análise prévia importa.',
      },
      {
        q: 'Cobre superfícies com texturas (madeira escovada, pedra rústica)?',
        a: 'Para superfícies com textura acentuada, análise prévia é necessária — a película pode não acompanhar a topografia. Em superfícies foscas relativamente planas, sim. Consultor técnico avalia caso a caso.',
      },
    ],
    aggregates: dualPublicAggregates,
  },
  related: [
    {
      slug: 'phantom-gloss',
      name: 'INSULFILM™ Phantom Gloss',
      positioning: 'Premium · SPF para acabamento brilhoso preservado',
    },
    {
      slug: 'orizzonte70',
      name: 'INSULFILM™ Orizzonte70',
      positioning: 'Premium · proteção solar para vidros de fachada (categoria diferente)',
    },
    {
      slug: 'specchiato-bronzo',
      name: 'INSULFILM™ Specchiato Bronzo',
      positioning: 'Premium · solar espelhado bronze para arquiteturas distintivas',
    },
  ],
};

// ─────────────────────────────────────────────
// Registro central (próximas PDPs entram aqui)
// ─────────────────────────────────────────────
export const productDualPublicData: Record<string, ProductDualPublic> = {
  clear70,
  orizzonte70,
  naturale,
  ultravioletti90,
  'metallico-argento': metallicoArgento,
  'specchiato-bronzo': specchiatoBronzo,
  petrolio,
  'grigio-invertito': grigioInvertito,
  'reflesso-d-argento': reflessoDArgento,
  'phantom-gloss': phantomGloss,
  'phantom-matte': phantomMatte,
};

export const getProductDualPublic = (slug: string): ProductDualPublic | undefined =>
  productDualPublicData[slug];
