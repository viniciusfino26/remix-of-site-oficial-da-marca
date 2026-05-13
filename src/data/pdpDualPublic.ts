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
        'Edifícios classe AAA, retrofits LEED/AQUA, ativos imobiliários de alto valor patrimonial. Performance cerâmica documentada, custo de ciclo de vida competitivo, dossiê técnico para auditoria.',
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
          'Edifício classe AAA com FAR elevado e exigência de certificação LEED/AQUA.',
        solution:
          'Especificação premium documentada para créditos de Eficiência Energética. Laudo técnico individual + simulação térmica disponíveis sob demanda.',
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
        q: 'Como Orizzonte70 contribui em projetos LEED ou AQUA?',
        a: 'Bloqueio de IR e UV são critérios de pontuação em Otimização de Eficiência Energética. Laudo técnico individual + simulação térmica entregam evidência documental para o crédito. Especificação detalhada disponível com consultor B2B.',
      },
      {
        q: 'Garantia de 10 anos cobre todo o ciclo de vida do equipamento?',
        a: 'Cobre fabricante e aplicação. Inclui descoloração, descolamento e perda de performance superior a 15% da especificação inicial. Termo de garantia individual emitido por aplicação, vinculado ao lote.',
      },
      {
        q: 'É possível especificar Orizzonte70 em retrofit predial em andamento?',
        a: 'Sim. A aplicação não requer obra civil, é feita por andar, face ou área, e não interrompe ocupação. É a solução padrão para retrofits LEED/AQUA em edifícios habitados.',
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
// Registro central (próximas PDPs entram aqui)
// ─────────────────────────────────────────────
export const productDualPublicData: Record<string, ProductDualPublic> = {
  clear70,
  orizzonte70,
  // ultravioletti90: { ... },
  // ...
};

export const getProductDualPublic = (slug: string): ProductDualPublic | undefined =>
  productDualPublicData[slug];
