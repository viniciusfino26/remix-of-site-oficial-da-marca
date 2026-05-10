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
// Registro central (próximas PDPs entram aqui)
// ─────────────────────────────────────────────
export const productDualPublicData: Record<string, ProductDualPublic> = {
  clear70,
  // orizzonte70: { ... },
  // ultravioletti90: { ... },
  // ...
};

export const getProductDualPublic = (slug: string): ProductDualPublic | undefined =>
  productDualPublicData[slug];
