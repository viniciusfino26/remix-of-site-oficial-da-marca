export type Segment = 'residencial' | 'comercial';

export interface SegmentCopy {
  h1: string;
  description: string;
  benefits: string[];
}

export type ProductSegmentCopy = Record<Segment, SegmentCopy>;

export const copyBySegment: Record<string, ProductSegmentCopy> = {
  clear70: {
    residencial: {
      h1: 'A sala mais fresca. A vista que você investiu.',
      description: 'Película solar para apartamentos e casas. Conforto térmico, proteção de móveis contra desbotamento.',
      benefits: ['Conforto térmico', 'Proteção de patrimônio', 'Estética preservada'],
    },
    comercial: {
      h1: 'NR17 cumprida. AC sob controle.',
      description: 'Película solar para escritórios e prédios comerciais. Redução de OPEX, produtividade aumentada.',
      benefits: ['Cumprimento de NR17', 'Redução de custos', 'Produtividade'],
    },
  },

  orizzonte70: {
    residencial: {
      h1: 'Proteção solar sem abrir mão da luz natural.',
      description: 'Película solar de alta transparência para residências. Bloqueia calor e UV sem escurecer o ambiente.',
      benefits: ['Luz natural preservada', 'Proteção UV total', 'Conforto térmico'],
    },
    comercial: {
      h1: 'Fachada envidraçada sem custo energético.',
      description: 'Película solar transparente para fachadas comerciais. Mantém a estética arquitetônica e reduz carga térmica.',
      benefits: ['Eficiência energética', 'Estética de fachada', 'Redução de OPEX'],
    },
  },

  ultravioletti90: {
    residencial: {
      h1: 'Seus móveis protegidos. Sua pele também.',
      description: 'Película com bloqueio de 90% dos raios UV para residências. Preserva móveis, pisos e obras de arte.',
      benefits: ['Proteção UV 90%', 'Preservação de interiores', 'Saúde da família'],
    },
    comercial: {
      h1: 'Vitrines sem desbotamento. Mercadoria protegida.',
      description: 'Película UV para comércios e showrooms. Protege produtos expostos e reduz perdas por desbotamento.',
      benefits: ['Proteção de mercadoria', 'Redução de perdas', 'Ambiente seguro'],
    },
  },

  naturale: {
    residencial: {
      h1: 'Conforto térmico com aparência natural.',
      description: 'Película solar de tom neutro para residências. Reduz calor sem alterar a cor dos vidros.',
      benefits: ['Tom neutro', 'Conforto térmico', 'Harmonia visual'],
    },
    comercial: {
      h1: 'Aparência profissional. Temperatura controlada.',
      description: 'Película solar neutra para escritórios e consultórios. Elegância discreta com desempenho térmico.',
      benefits: ['Estética profissional', 'Controle térmico', 'Ambiente produtivo'],
    },
  },

  petrolio: {
    residencial: {
      h1: 'Privacidade e sofisticação na medida certa.',
      description: 'Película solar de tonalidade escura para residências. Privacidade diurna e controle de luminosidade.',
      benefits: ['Privacidade diurna', 'Controle de luminosidade', 'Sofisticação'],
    },
    comercial: {
      h1: 'Salas de reunião sem reflexos. Privacidade corporativa.',
      description: 'Película solar escura para ambientes corporativos. Ideal para salas de reunião e áreas de atendimento.',
      benefits: ['Privacidade corporativa', 'Anti-reflexo', 'Conforto visual'],
    },
  },

  'grigio-invertito': {
    residencial: {
      h1: 'Elegância discreta para quem valoriza design.',
      description: 'Película solar cinza invertido para residências de alto padrão. Estética contemporânea com proteção solar.',
      benefits: ['Design contemporâneo', 'Proteção solar', 'Privacidade parcial'],
    },
    comercial: {
      h1: 'Identidade visual sofisticada para sua fachada.',
      description: 'Película cinza invertido para fachadas comerciais. Visual premium e desempenho térmico em um só produto.',
      benefits: ['Visual premium', 'Desempenho térmico', 'Identidade de fachada'],
    },
  },

  'metallico-argento': {
    residencial: {
      h1: 'Espelhamento sutil. Privacidade total de dia.',
      description: 'Película metalizada prata para residências. Rejeição máxima de calor com efeito espelhado externo.',
      benefits: ['Privacidade diurna total', 'Máxima rejeição de calor', 'Efeito espelhado'],
    },
    comercial: {
      h1: 'Fachada espelhada. Conta de energia reduzida.',
      description: 'Película metalizada para edifícios comerciais. Máxima eficiência térmica e visual imponente.',
      benefits: ['Máxima eficiência térmica', 'Visual imponente', 'Redução de OPEX'],
    },
  },

  'reflesso-d-argento': {
    residencial: {
      h1: 'Reflexo prateado. Proteção sem precedentes.',
      description: 'Película reflexiva prata para residências. Privacidade e bloqueio de calor para ambientes voltados ao sol.',
      benefits: ['Reflexão solar intensa', 'Privacidade máxima', 'Proteção de interiores'],
    },
    comercial: {
      h1: 'Performance térmica máxima para grandes áreas.',
      description: 'Película reflexiva de alta performance para fachadas e galpões. ROI rápido pela economia em climatização.',
      benefits: ['ROI acelerado', 'Performance térmica máxima', 'Grandes áreas envidraçadas'],
    },
  },

  'specchiato-bronzo': {
    residencial: {
      h1: 'Tons quentes. Proteção elegante.',
      description: 'Película espelhada bronze para residências. Combina estética acolhedora com bloqueio eficiente de calor.',
      benefits: ['Estética acolhedora', 'Bloqueio de calor', 'Tom bronze exclusivo'],
    },
    comercial: {
      h1: 'Fachada bronze. Sofisticação que se destaca.',
      description: 'Película espelhada bronze para fachadas comerciais. Diferenciação arquitetônica com desempenho térmico.',
      benefits: ['Diferenciação arquitetônica', 'Desempenho térmico', 'Visual sofisticado'],
    },
  },
};
