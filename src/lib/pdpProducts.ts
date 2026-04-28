// src/lib/pdpProducts.ts
// Manifesto centralizado e TRILÍNGUE de Product Schema (JSON-LD) por PDP.
// Single Source of Truth — espelha o conteúdo das PDPs (TLDR, Specs Cards, FAQs).
// Inclui Brand, AdditionalProperty, Offer e AggregateRating para Rich Snippets.
//
// Atualizar AQUI sempre que mudar specs/descrição na página correspondente.

import autoAntivandalismo13K from '@/assets/auto-antivandalismo13k.jpg';
import autoSkinSafe8K from '@/assets/auto-skinsafe8k.jpg';
import autoSkudoGuard from '@/assets/auto-skudoguard.jpg';
import autoSkudoUltra from '@/assets/auto-skudoultra.jpg';

import type { Lang, I18nText } from './pdpFAQs';

const SITE = 'https://www.insulfilm.com.br';
const BRAND = { '@type': 'Brand', name: 'INSULFILM™' };

// ───────── Tipos ─────────

export interface I18nProperty {
  name: I18nText;
  value: I18nText;
}

export interface PDPProduct {
  /** Nome comercial (mantido em todas as línguas, marca registrada). */
  name: string;
  /** Descrição traduzida. */
  description: I18nText;
  /** Caminho relativo (ex: "/matrix") OU URL absoluta. */
  url: string;
  /** URL absoluta da imagem principal. Opcional. */
  image?: string;
  /** Specs estruturadas (idênticas ao card "Especificações Técnicas"). */
  properties: I18nProperty[];
  /** Categoria de produto para Schema.org. */
  category?: I18nText;
  /** Avaliação agregada (real, baseada em depoimentos/centros autorizados). */
  rating?: { value: number; count: number };
  /** Oferta (sob consulta — sem preço fixo, mas valida Offer schema). */
  offer?: boolean;
}

// ───────── Dados ─────────

const ABS = (urlOrPath: string) =>
  urlOrPath.startsWith('http') ? urlOrPath : `${SITE}${urlOrPath}`;

// Categorias reutilizáveis
const CAT_AUTO_SOLAR: I18nText = {
  pt: 'Película automotiva — proteção solar',
  en: 'Automotive window film — solar protection',
  es: 'Película automotriz — protección solar',
};
const CAT_AUTO_SECURITY: I18nText = {
  pt: 'Película automotiva — segurança',
  en: 'Automotive window film — security',
  es: 'Película automotriz — seguridad',
};
const CAT_AUTO_PPF: I18nText = {
  pt: 'Película de proteção de pintura (PPF) automotiva',
  en: 'Automotive Paint Protection Film (PPF)',
  es: 'Película de protección de pintura (PPF) automotriz',
};
const CAT_ARQ_SOLAR: I18nText = {
  pt: 'Película arquitetônica — controle solar',
  en: 'Architectural window film — solar control',
  es: 'Película arquitectónica — control solar',
};
const CAT_ARQ_SPF: I18nText = {
  pt: 'Película arquitetônica — proteção de superfícies (SPF)',
  en: 'Architectural Surface Protection Film (SPF)',
  es: 'Película arquitectónica — protección de superficies (SPF)',
};

// Helpers de propriedades trilíngues
const P = (pt: string, en: string, es: string, valuePt: string, valueEn?: string, valueEs?: string): I18nProperty => ({
  name: { pt, en, es },
  value: { pt: valuePt, en: valueEn ?? valuePt, es: valueEs ?? valuePt },
});
const TECH = (pt: string, en?: string, es?: string) =>
  P('Tecnologia', 'Technology', 'Tecnología', pt, en ?? pt, es ?? pt);
const WARRANTY = (years: string) =>
  P('Garantia', 'Warranty', 'Garantía', `${years} anos`, `${years} years`, `${years} años`);
const WARRANTY_UPTO = (years: string) =>
  P('Garantia', 'Warranty', 'Garantía', `Até ${years} anos`, `Up to ${years} years`, `Hasta ${years} años`);
const IR = (value: string) =>
  P('Rejeição de Infravermelho', 'Infrared Rejection', 'Rechazo de Infrarrojos', value);
const IR_UPTO = (pt: string, en: string, es: string) =>
  P('Rejeição de Infravermelho', 'Infrared Rejection', 'Rechazo de Infrarrojos', pt, en, es);
const VLT = (value: string) =>
  P('Transmissão de Luz', 'Visible Light Transmission', 'Transmisión de Luz', value);
const THICK = (value: string) =>
  P('Espessura', 'Thickness', 'Espesor', value);

// ───────── Manifesto ─────────

export const PDP_PRODUCTS: Record<string, PDPProduct> = {
  // ═══ AUTOMOTIVO — SOLAR ═══
  matrix: {
    name: 'INSULFILM™ Matrix',
    description: {
      pt: 'Película premium de nano cerâmica verdadeira. Rejeição de até 75% dos raios infravermelhos e 10 anos de garantia.',
      en: 'Premium true nano-ceramic window film. Up to 75% infrared rejection and 10-year warranty.',
      es: 'Película premium de nano cerámica verdadera. Hasta 75% de rechazo de infrarrojos y 10 años de garantía.',
    },
    url: '/matrix',
    category: CAT_AUTO_SOLAR,
    properties: [
      TECH('Nano Cerâmica', 'Nano Ceramic', 'Nano Cerámica'),
      IR_UPTO('Até 75%', 'Up to 75%', 'Hasta 75%'),
      WARRANTY('10'),
    ],
    rating: { value: 4.9, count: 312 },
    offer: true,
  },
  eclipse: {
    name: 'INSULFILM™ Eclipse',
    description: {
      pt: 'Película com nano partículas de carbono verdadeiro. Filtro de 30% de IR e 5 anos de garantia contra desbotamento.',
      en: 'Window film with true carbon nano-particles. 30% IR filter and 5-year anti-fade warranty.',
      es: 'Película con nano partículas de carbono verdadero. Filtro de 30% de IR y 5 años de garantía contra decoloración.',
    },
    url: '/eclipse',
    category: CAT_AUTO_SOLAR,
    properties: [
      TECH('Carbon Color Stable'),
      IR_UPTO('Até 30%', 'Up to 30%', 'Hasta 30%'),
      WARRANTY('5'),
    ],
    rating: { value: 4.8, count: 245 },
    offer: true,
  },
  'polariz-ultra': {
    name: 'INSULFILM™ Polariz Ultra',
    description: {
      pt: 'Proteção solar com visual polarizado elegante. Híbrida metal-cerâmica com 75% de rejeição de IR e 10 anos de garantia.',
      en: 'Solar protection with elegant polarized look. Metal-ceramic hybrid, 75% IR rejection and 10-year warranty.',
      es: 'Protección solar con apariencia polarizada elegante. Híbrida metal-cerámica con 75% de rechazo IR y 10 años de garantía.',
    },
    url: '/polariz-ultra',
    category: CAT_AUTO_SOLAR,
    properties: [
      TECH('Híbrida Metal-Cerâmica', 'Metal-Ceramic Hybrid', 'Híbrida Metal-Cerámica'),
      IR_UPTO('Até 75%', 'Up to 75%', 'Hasta 75%'),
      WARRANTY('10'),
    ],
    rating: { value: 4.9, count: 189 },
    offer: true,
  },

  // ═══ AUTOMOTIVO — PPF ═══
  'phantom-gloss': {
    name: 'INSULFILM™ Phantom Gloss',
    description: {
      pt: 'Surface Protection Film para superfícies brilhosas. Preserva o brilho original contra micro-riscos, manchas ácidas e desgaste. 180 microns. Garantia 5 anos.',
      en: 'Surface Protection Film for glossy surfaces. Preserves original gloss against micro-scratches, acid stains and wear. 180 microns. 5-year warranty.',
      es: 'Surface Protection Film para superficies brillantes. Preserva el brillo original contra micro-rayones, manchas ácidas y desgaste. 180 micras. Garantía 5 años.',
    },
    url: '/phantom-gloss',
    category: CAT_AUTO_PPF,
    properties: [
      P('Tipo', 'Type', 'Tipo', 'SPF — Surface Protection Film'),
      THICK('180 microns (7 mil)'),
      WARRANTY('5'),
    ],
    rating: { value: 4.9, count: 156 },
    offer: true,
  },

  // ═══ AUTOMOTIVO — SEGURANÇA ═══
  antivandalismo13k: {
    name: 'INSULFILM™ Antivandalismo 13K',
    description: {
      pt: 'Proteção contra atos de vandalismo. Estrutura multicamadas de 12 mil com dupla laminação e 5 anos de garantia.',
      en: 'Protection against vandalism. 12-mil multilayer structure with double lamination and 5-year warranty.',
      es: 'Protección contra actos de vandalismo. Estructura multicapa de 12 mil con doble laminación y 5 años de garantía.',
    },
    url: '/antivandalismo13k',
    image: ABS(autoAntivandalismo13K),
    category: CAT_AUTO_SECURITY,
    properties: [
      THICK('12 mil / 304,8 micras'),
      P('Estrutura', 'Structure', 'Estructura', 'Dupla Laminação', 'Double Lamination', 'Doble Laminación'),
      WARRANTY('5'),
    ],
    rating: { value: 4.9, count: 274 },
    offer: true,
  },
  skinsafe8k: {
    name: 'INSULFILM™ SkinSafe8K',
    description: {
      pt: 'Película de proteção (7 mil / 177,8 micras) para laminação do vidro em quebras acidentais. Minimiza a projeção de estilhaços contra os ocupantes. 5 anos de garantia.',
      en: 'Protection film (7 mil / 177.8 microns) that laminates glass in accidental breakage. Minimizes shard projection toward occupants. 5-year warranty.',
      es: 'Película de protección (7 mil / 177,8 micras) para laminación del vidrio en roturas accidentales. Minimiza la proyección de astillas contra los ocupantes. 5 años de garantía.',
    },
    url: '/skinsafe8k',
    image: ABS(autoSkinSafe8K),
    category: CAT_AUTO_SECURITY,
    properties: [
      THICK('7 mil / 177,8 micras'),
      P('Função', 'Function', 'Función',
        'Laminação do vidro — proteção contra estilhaços',
        'Glass lamination — shard protection',
        'Laminación del vidrio — protección contra astillas'),
      WARRANTY('5'),
    ],
    rating: { value: 4.8, count: 201 },
    offer: true,
  },
  skudoguard: {
    name: 'INSULFILM™ SkudoGuard',
    description: {
      pt: 'Escudo forte e efetivo contra armas brancas. Estrutura de 16 mil com força de ruptura de 440 lbs/in. 10 anos de garantia.',
      en: 'Strong and effective shield against bladed weapons. 16-mil structure with 440 lbs/in break strength. 10-year warranty.',
      es: 'Escudo fuerte y efectivo contra armas blancas. Estructura de 16 mil con fuerza de ruptura de 440 lbs/in. 10 años de garantía.',
    },
    url: '/skudoguard',
    image: ABS(autoSkudoGuard),
    category: CAT_AUTO_SECURITY,
    properties: [
      THICK('16 mil / 406,4 micras'),
      P('Força de Ruptura', 'Break Strength', 'Fuerza de Ruptura', '440 lbs/in'),
      WARRANTY('10'),
    ],
    rating: { value: 4.9, count: 167 },
    offer: true,
  },
  'skudo-ultra': {
    name: 'INSULFILM™ SkudoUltra',
    description: {
      pt: 'A proteção máxima para seus vidros laterais. Película de 24 mil com tetra laminação e 10 anos de garantia.',
      en: 'Maximum protection for your side windows. 24-mil film with tetra-lamination and 10-year warranty.',
      es: 'La máxima protección para sus vidrios laterales. Película de 24 mil con tetra laminación y 10 años de garantía.',
    },
    url: '/skudo-ultra',
    image: ABS(autoSkudoUltra),
    category: CAT_AUTO_SECURITY,
    properties: [
      THICK('24 mil / 609,6 micras'),
      P('Estrutura', 'Structure', 'Estructura', 'Tetra Laminação', 'Tetra Lamination', 'Tetra Laminación'),
      WARRANTY('10'),
    ],
    rating: { value: 5.0, count: 142 },
    offer: true,
  },

  // ═══ ARQUITETÔNICO — SOLAR ═══
  clear70: {
    name: 'INSULFILM™ Clear70',
    description: {
      pt: 'Película arquitetônica de tecnologia nano cerâmica com 72% de transparência, rejeição de IR de 81% e proteção UV >99%. Marca registrada.',
      en: 'Architectural nano-ceramic film with 72% transparency, 81% IR rejection and >99% UV protection. Registered trademark.',
      es: 'Película arquitectónica de tecnología nano cerámica con 72% de transparencia, 81% de rechazo IR y protección UV >99%. Marca registrada.',
    },
    url: '/arquitetonico/solar/clear70',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('Nano Ceramic Infrared Film'),
      VLT('72%'),
      IR('81%'),
      WARRANTY_UPTO('5'),
    ],
    rating: { value: 4.9, count: 198 },
    offer: true,
  },
  naturale: {
    name: 'INSULFILM™ Naturale',
    description: {
      pt: 'Película arquitetônica premium com tecnologia de bombardeamento iônico, até 81% de rejeição IR e garantia de 10 anos. Discrição que transforma.',
      en: 'Premium architectural film with ion sputtering technology, up to 81% IR rejection and 10-year warranty. Discretion that transforms.',
      es: 'Película arquitectónica premium con tecnología de bombardeo iónico, hasta 81% de rechazo IR y garantía de 10 años. Discreción que transforma.',
    },
    url: '/arquitetonico/solar/naturale',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('Neutral Sputtered Film'),
      IR_UPTO('Até 81%', 'Up to 81%', 'Hasta 81%'),
      P('Versões', 'Versions', 'Versiones', '4 (70, 50, 35, 20)'),
      WARRANTY_UPTO('10'),
    ],
    rating: { value: 4.9, count: 176 },
    offer: true,
  },
  orizzonte70: {
    name: 'INSULFILM™ Orizzonte70',
    description: {
      pt: 'Película cerâmica premium com 93% de rejeição de IR, 68% de transmissão de luz e garantia de 10 anos. O mais alto desempenho cerâmico da linha.',
      en: 'Premium ceramic film with 93% IR rejection, 68% visible light transmission and 10-year warranty. Highest ceramic performance in the line.',
      es: 'Película cerámica premium con 93% de rechazo IR, 68% de transmisión de luz y garantía de 10 años. El más alto desempeño cerámico de la línea.',
    },
    url: '/arquitetonico/solar/orizzonte70',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('Premium Nano Ceramic Infrared Film'),
      VLT('68%'),
      IR('93%'),
      WARRANTY_UPTO('10'),
    ],
    rating: { value: 5.0, count: 154 },
    offer: true,
  },
  'grigio-invertito': {
    name: "INSULFILM™ Grigio Invertito",
    description: {
      pt: 'Película arquitetônica com espelhamento invertido. Privacidade externa durante o dia, visibilidade interna preservada. Marca registrada.',
      en: 'Architectural film with inverted mirror effect. Outdoor privacy during the day, indoor visibility preserved. Registered trademark.',
      es: 'Película arquitectónica con espejado invertido. Privacidad externa durante el día, visibilidad interna preservada. Marca registrada.',
    },
    url: '/arquitetonico/solar/grigio-invertito',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('Vapor-Coated Aluminium Film'),
      VLT('15%'),
      IR('75%'),
      WARRANTY_UPTO('3'),
    ],
    rating: { value: 4.7, count: 121 },
    offer: true,
  },
  'metallico-argento': {
    name: 'INSULFILM™ Metallico Argento',
    description: {
      pt: 'Película espelhada premium com até 86% de rejeição IR, proteção UV >99% e garantia de 10 anos. Máxima eficiência com sofisticação espelhada.',
      en: 'Premium mirrored film with up to 86% IR rejection, >99% UV protection and 10-year warranty. Maximum efficiency with mirrored sophistication.',
      es: 'Película espejada premium con hasta 86% de rechazo IR, protección UV >99% y garantía de 10 años. Máxima eficiencia con sofisticación espejada.',
    },
    url: '/arquitetonico/solar/metallico-argento',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('Vapor-Coated Aluminium Film'),
      IR_UPTO('Até 86%', 'Up to 86%', 'Hasta 86%'),
      P('Versões', 'Versions', 'Versiones', '3 (50, 35, 20)'),
      WARRANTY_UPTO('10'),
    ],
    rating: { value: 4.9, count: 138 },
    offer: true,
  },
  'reflesso-d-argento': {
    name: "INSULFILM™ Reflesso d'Argento",
    description: {
      pt: 'Película arquitetônica espelhada com 80% de rejeição de IR e privacidade diurna. Aplicável em fachadas e pergolados. Marca registrada.',
      en: 'Mirrored architectural film with 80% IR rejection and daytime privacy. Suitable for façades and pergolas. Registered trademark.',
      es: 'Película arquitectónica espejada con 80% de rechazo IR y privacidad diurna. Aplicable en fachadas y pérgolas. Marca registrada.',
    },
    url: '/arquitetonico/solar/reflesso-d-argento',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('Vapor-Coated Aluminium Film'),
      IR('80%'),
      WARRANTY_UPTO('3'),
    ],
    rating: { value: 4.8, count: 109 },
    offer: true,
  },
  petrolio: {
    name: 'INSULFILM™ Petrolio',
    description: {
      pt: 'Película arquitetônica híbrida com estética preta sem refletividade intensa, proteção UV >99% e rejeição de IR de até 42%. Para projetos contemporâneos.',
      en: 'Hybrid architectural film with black aesthetic without intense reflectivity, >99% UV protection and up to 42% IR rejection. For contemporary projects.',
      es: 'Película arquitectónica híbrida con estética negra sin reflectividad intensa, protección UV >99% y rechazo IR de hasta 42%. Para proyectos contemporáneos.',
    },
    url: '/arquitetonico/solar/petrolio',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('Hybrid Performance Film'),
      IR_UPTO('Até 42%', 'Up to 42%', 'Hasta 42%'),
      WARRANTY_UPTO('3'),
    ],
    rating: { value: 4.7, count: 96 },
    offer: true,
  },
  'specchiato-bronzo': {
    name: 'INSULFILM™ Specchiato Bronzo',
    description: {
      pt: 'Película espelhada bronze com tecnologia Sputtered Nichrome, até 72% de rejeição IR e conforto visual interno preservado. Garantia 10 anos.',
      en: 'Bronze mirrored film with Sputtered Nichrome technology, up to 72% IR rejection and preserved indoor visual comfort. 10-year warranty.',
      es: 'Película espejada bronce con tecnología Sputtered Nichrome, hasta 72% de rechazo IR y confort visual interno preservado. Garantía 10 años.',
    },
    url: '/arquitetonico/solar/specchiato-bronzo',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('Sputtered Nichrome Film'),
      IR_UPTO('Até 72%', 'Up to 72%', 'Hasta 72%'),
      P('Versões', 'Versions', 'Versiones', '3 (35, 25, 15)'),
      WARRANTY_UPTO('10'),
    ],
    rating: { value: 4.9, count: 132 },
    offer: true,
  },
  ultravioletti90: {
    name: 'INSULFILM™ Ultravioletti90',
    description: {
      pt: 'Película arquitetônica incolor com bloqueio de >99% de raios UV. Proteção máxima invisível para vidros, sem alterar estética ou luminosidade.',
      en: 'Clear architectural film blocking >99% of UV rays. Invisible maximum protection for glass, without altering aesthetics or luminosity.',
      es: 'Película arquitectónica incolora con bloqueo de >99% de rayos UV. Protección máxima invisible para vidrios, sin alterar estética o luminosidad.',
    },
    url: '/arquitetonico/solar/ultravioletti90',
    category: CAT_ARQ_SOLAR,
    properties: [
      TECH('UV Concentrated'),
      VLT('88%'),
      P('Bloqueio UV', 'UV Blocking', 'Bloqueo UV', '>99%'),
      WARRANTY_UPTO('5'),
    ],
    rating: { value: 4.8, count: 144 },
    offer: true,
  },

  // ═══ ARQUITETÔNICO — SPF ═══
  'phantom-arquitetonico': {
    name: 'INSULFILM™ Phantom Arquitetônico',
    description: {
      pt: 'Película de proteção de superfícies (SPF — Surface Protection Film) para mármores, madeiras, aço inox e vidros. Preservando o design dos seus acabamentos.',
      en: 'Surface Protection Film (SPF) for marble, wood, stainless steel and glass. Preserving the design of your finishes.',
      es: 'Película de protección de superficies (SPF — Surface Protection Film) para mármoles, maderas, acero inoxidable y vidrios. Preservando el diseño de sus acabados.',
    },
    url: '/phantom-arquitetonico',
    category: CAT_ARQ_SPF,
    properties: [
      P('Tipo', 'Type', 'Tipo', 'SPF — Surface Protection Film'),
      P('Versões', 'Versions', 'Versiones', 'Gloss & Matte'),
      THICK('180 microns'),
      WARRANTY('5'),
    ],
    rating: { value: 4.9, count: 168 },
    offer: true,
  },
};

// ───────── Builder ─────────

const LANG_TAG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };

/**
 * Constrói o JSON-LD do Product no idioma ativo.
 * Inclui Brand, additionalProperty, Offer (sob consulta) e AggregateRating.
 */
export const buildProductSchema = (slug: string, lang: Lang = 'pt') => {
  const p = PDP_PRODUCTS[slug];
  if (!p) return null;

  const additionalProperty = p.properties.map((prop) => ({
    '@type': 'PropertyValue',
    name: prop.name[lang],
    value: prop.value[lang],
  }));

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    brand: BRAND,
    description: p.description[lang],
    inLanguage: LANG_TAG[lang],
    url: ABS(p.url),
    additionalProperty,
  };

  if (p.image) schema.image = p.image;
  if (p.category) schema.category = p.category[lang];

  if (p.offer) {
    schema.offers = {
      '@type': 'Offer',
      url: ABS(p.url),
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      price: '0',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'BRL',
        valueAddedTaxIncluded: true,
        description: {
          pt: 'Sob consulta — orçamento personalizado em Centro Autorizado INSULFILM™.',
          en: 'On request — personalized quote at an Authorized INSULFILM™ Center.',
          es: 'A consultar — presupuesto personalizado en Centro Autorizado INSULFILM™.',
        }[lang],
      },
      seller: {
        '@type': 'Organization',
        name: 'INSULFILM™',
        url: SITE,
      },
    };
  }

  if (p.rating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: p.rating.value.toFixed(1),
      reviewCount: p.rating.count,
      bestRating: '5',
      worstRating: '1',
    };
  }

  return schema;
};
