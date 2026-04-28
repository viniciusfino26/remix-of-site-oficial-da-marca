// src/lib/pdpFAQs.ts
// Manifesto centralizado de FAQs e Breadcrumbs por PDP.
// Valores SINCRONIZADOS com TLDR/Specs/Product Schema (Single Source of Truth).
// Atualizar AQUI quando alterar specs nas páginas correspondentes.

import { buildBreadcrumbSchema, buildFAQSchema, type BreadcrumbItem, type FAQItem } from './pdpSchemas';

interface PDPMeta {
  breadcrumb: BreadcrumbItem[];
  faqs: FAQItem[];
}

// ───────── Helpers ─────────
const HOME = { name: 'Início', url: '/' };
const AUTO = { name: 'Automotivo', url: '/automotivo' };
const ARQ = { name: 'Arquitetônico', url: '/arquitetonico' };

const autoSolar = (name: string, url: string): BreadcrumbItem[] => [
  HOME, AUTO, { name: 'Solar', url: '/automotivo/solar' }, { name, url },
];
const autoSecurity = (name: string, url: string): BreadcrumbItem[] => [
  HOME, AUTO, { name: 'Segurança', url: '/automotivo/seguranca' }, { name, url },
];
const autoPPF = (name: string, url: string): BreadcrumbItem[] => [
  HOME, AUTO, { name: 'PPF', url: '/automotivo/ppf' }, { name, url },
];
const arqSolar = (name: string, url: string): BreadcrumbItem[] => [
  HOME, ARQ, { name: 'Solar', url: '/arquitetonico/solar' }, { name, url },
];
const arqSPF = (name: string, url: string): BreadcrumbItem[] => [
  HOME, ARQ, { name: 'SPF', url: '/arquitetonico/spf' }, { name, url },
];

// ───────── Manifesto ─────────
export const PDP_META: Record<string, PDPMeta> = {
  // ═══ AUTOMOTIVO — SOLAR ═══
  matrix: {
    breadcrumb: autoSolar('INSULFILM™ Matrix', '/matrix'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Matrix?', a: 'A INSULFILM™ Matrix rejeita até 75% dos raios infravermelhos.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Matrix?', a: 'A INSULFILM™ Matrix tem 10 anos de garantia contra desbotamento.' },
      { q: 'A película INSULFILM™ Matrix interfere em GPS, celular ou pedágio?', a: 'Não. A Matrix é fabricada com nano cerâmica verdadeira, sem metal, e não interfere em sinais de GPS, celular, rádio ou pedágios eletrônicos.' },
      { q: 'Qual a tecnologia da película INSULFILM™ Matrix?', a: 'A Matrix usa Nano Cerâmica da série Ultra Definition.' },
    ],
  },
  eclipse: {
    breadcrumb: autoSolar('INSULFILM™ Eclipse', '/eclipse'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Eclipse?', a: 'A INSULFILM™ Eclipse rejeita até 30% dos raios infravermelhos.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Eclipse?', a: 'A INSULFILM™ Eclipse tem 5 anos de garantia.' },
      { q: 'Qual a tecnologia da película INSULFILM™ Eclipse?', a: 'A Eclipse é Carbon Color Stable, fabricada com nano partículas de carbono verdadeiro, garantindo cor estável sem desbotamento ao longo do tempo.' },
    ],
  },
  'polariz-ultra': {
    breadcrumb: autoSolar('INSULFILM™ Polariz Ultra', '/polariz-ultra'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Polariz Ultra?', a: 'A INSULFILM™ Polariz Ultra rejeita até 75% dos raios infravermelhos.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Polariz Ultra?', a: 'A INSULFILM™ Polariz Ultra tem 10 anos de garantia contra desbotamento.' },
      { q: 'Qual a tecnologia da película INSULFILM™ Polariz Ultra?', a: 'A Polariz Ultra usa tecnologia híbrida metal-cerâmica de 5ª geração, com visual polarizado característico.' },
    ],
  },
  // ═══ AUTOMOTIVO — SEGURANÇA ═══
  antivandalismo13k: {
    breadcrumb: autoSecurity('INSULFILM™ Antivandalismo 13K', '/antivandalismo13k'),
    faqs: [
      { q: 'Qual a espessura da película INSULFILM™ Antivandalismo 13K?', a: 'A INSULFILM™ Antivandalismo 13K tem 12 mil de espessura, equivalente a 304,8 micras.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Antivandalismo 13K?', a: 'A INSULFILM™ Antivandalismo 13K tem 5 anos de garantia.' },
      { q: 'A INSULFILM™ Antivandalismo 13K resiste a tentativas de arrombamento?', a: 'Sim. A construção em dupla laminação retarda arrombamentos, quebras e tentativas de roubo em vidros laterais automotivos.' },
    ],
  },
  skinsafe8k: {
    breadcrumb: autoSecurity('INSULFILM™ SkinSafe 8K', '/skinsafe8k'),
    faqs: [
      { q: 'Qual a espessura da película INSULFILM™ SkinSafe 8K?', a: 'A INSULFILM™ SkinSafe 8K tem 7 mil de espessura, equivalente a 177,8 micras.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ SkinSafe 8K?', a: 'A INSULFILM™ SkinSafe 8K tem 5 anos de garantia.' },
      { q: 'A INSULFILM™ SkinSafe 8K protege contra estilhaços?', a: 'Sim. Ela retém os fragmentos do vidro em quebras acidentais, mantendo-os aderidos à película e reduzindo o risco de ferimentos nos ocupantes.' },
    ],
  },
  skudoguard: {
    breadcrumb: autoSecurity('INSULFILM™ SkudoGuard', '/skudoguard'),
    faqs: [
      { q: 'Qual a espessura da película INSULFILM™ SkudoGuard?', a: 'A INSULFILM™ SkudoGuard tem 16 mil de espessura, equivalente a 406,4 micras.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ SkudoGuard?', a: 'A INSULFILM™ SkudoGuard tem 10 anos de garantia.' },
      { q: 'A INSULFILM™ SkudoGuard resiste a armas brancas?', a: 'Sim. Com força de ruptura de 440 lbs/in, ela atua como escudo contra armas brancas e tentativas de invasão.' },
    ],
  },
  'skudo-ultra': {
    breadcrumb: autoSecurity('INSULFILM™ SkudoUltra', '/skudo-ultra'),
    faqs: [
      { q: 'Qual a espessura da película INSULFILM™ SkudoUltra?', a: 'A INSULFILM™ SkudoUltra tem 24 mil de espessura, equivalente a 609,6 micras.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ SkudoUltra?', a: 'A INSULFILM™ SkudoUltra tem 10 anos de garantia.' },
      { q: 'A INSULFILM™ SkudoUltra é a película de segurança automotiva mais robusta?', a: 'Sim. Construção tetra laminada com adesivo extremo, é a película de segurança automotiva mais robusta da marca.' },
    ],
  },
  // ═══ AUTOMOTIVO — PPF ═══
  'phantom-gloss': {
    breadcrumb: autoPPF('INSULFILM™ Phantom Gloss', '/phantom-gloss'),
    faqs: [
      { q: 'Qual a espessura do PPF INSULFILM™ Phantom Gloss?', a: 'O INSULFILM™ Phantom Gloss tem 7 mil de espessura, equivalente a aproximadamente 180 microns.' },
      { q: 'Por quantos anos o INSULFILM™ Phantom Gloss é garantido?', a: 'O INSULFILM™ Phantom Gloss tem 5 anos de garantia contra rachaduras, formação de bolhas e amarelamento causados por defeitos de fabricação.' },
      { q: 'O INSULFILM™ Phantom Gloss tem propriedade auto-regenerativa?', a: 'Sim. Possui tecnologia auto-regenerativa que recupera microriscos com calor.' },
    ],
  },
  // ═══ ARQUITETÔNICO — SOLAR ═══
  clear70: {
    breadcrumb: arqSolar('INSULFILM™ Clear70', '/arquitetonico/clear70'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Clear70?', a: 'A INSULFILM™ Clear70 rejeita até 81% dos raios infravermelhos.' },
      { q: 'Qual a transmissão de luz visível (VLT) da INSULFILM™ Clear70?', a: 'A INSULFILM™ Clear70 tem 72% de transmissão de luz visível (VLT).' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Clear70?', a: 'A INSULFILM™ Clear70 tem garantia de até 5 anos.' },
    ],
  },
  naturale: {
    breadcrumb: arqSolar('INSULFILM™ Naturale', '/arquitetonico/naturale'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Naturale?', a: 'A INSULFILM™ Naturale rejeita até 81% dos raios infravermelhos nas versões mais escuras.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Naturale?', a: 'A INSULFILM™ Naturale tem garantia de até 10 anos.' },
      { q: 'Qual a tecnologia da película INSULFILM™ Naturale?', a: 'A Naturale usa tecnologia Sputtered Neutra de tonalidade neutra.' },
    ],
  },
  orizzonte70: {
    breadcrumb: arqSolar('INSULFILM™ Orizzonte70', '/arquitetonico/orizzonte70'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Orizzonte70?', a: 'A INSULFILM™ Orizzonte70 rejeita até 93% dos raios infravermelhos.' },
      { q: 'Qual a transmissão de luz visível (VLT) da INSULFILM™ Orizzonte70?', a: 'A INSULFILM™ Orizzonte70 tem 68% de transmissão de luz visível (VLT).' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Orizzonte70?', a: 'A INSULFILM™ Orizzonte70 tem 10 anos de garantia.' },
    ],
  },
  'grigio-invertito': {
    breadcrumb: arqSolar('INSULFILM™ Grigio Invertito', '/arquitetonico/grigio-invertito'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Grigio Invertito?', a: 'A INSULFILM™ Grigio Invertito rejeita 75% dos raios infravermelhos.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Grigio Invertito?', a: 'A INSULFILM™ Grigio Invertito tem garantia de até 3 anos.' },
      { q: 'Como funciona a privacidade invertida da Grigio Invertito?', a: 'A película é espelhada na face externa e fumê na face interna, oferecendo privacidade durante o dia e visual fumê de dentro para fora.' },
    ],
  },
  'metallico-argento': {
    breadcrumb: arqSolar('INSULFILM™ Metallico Argento', '/arquitetonico/metallico-argento'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Metallico Argento?', a: 'A INSULFILM™ Metallico Argento rejeita até 86% dos raios infravermelhos.' },
      { q: 'Quanto da energia solar a INSULFILM™ Metallico Argento rejeita?', a: 'A INSULFILM™ Metallico Argento rejeita até 80% da energia solar total.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Metallico Argento?', a: 'A INSULFILM™ Metallico Argento tem 10 anos de garantia.' },
    ],
  },
  'reflesso-d-argento': {
    breadcrumb: arqSolar("INSULFILM™ Reflesso d'Argento", '/arquitetonico/reflesso-d-argento'),
    faqs: [
      { q: "Qual a rejeição de calor da película INSULFILM™ Reflesso d'Argento?", a: "A INSULFILM™ Reflesso d'Argento rejeita 80% do calor solar." },
      { q: "Quantos anos de garantia tem a INSULFILM™ Reflesso d'Argento?", a: "A INSULFILM™ Reflesso d'Argento tem garantia de até 3 anos." },
      { q: "Qual a tecnologia da INSULFILM™ Reflesso d'Argento?", a: "A Reflesso d'Argento usa tecnologia Refletiva Sputtered de excelente custo-benefício." },
    ],
  },
  petrolio: {
    breadcrumb: arqSolar('INSULFILM™ Petrolio', '/arquitetonico/petrolio'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Petrolio?', a: 'A INSULFILM™ Petrolio rejeita até 42% dos raios infravermelhos.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Petrolio?', a: 'A INSULFILM™ Petrolio tem 3 anos de garantia.' },
      { q: 'Qual a tonalidade da INSULFILM™ Petrolio?', a: 'A Petrolio é uma película híbrida fumê (charcoal) de alta durabilidade.' },
    ],
  },
  'specchiato-bronzo': {
    breadcrumb: arqSolar('INSULFILM™ Specchiato Bronzo', '/arquitetonico/specchiato-bronzo'),
    faqs: [
      { q: 'Qual a rejeição de calor (IR) da película INSULFILM™ Specchiato Bronzo?', a: 'A INSULFILM™ Specchiato Bronzo rejeita até 72% dos raios infravermelhos.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Specchiato Bronzo?', a: 'A INSULFILM™ Specchiato Bronzo tem 10 anos de garantia.' },
      { q: 'Qual a tecnologia da INSULFILM™ Specchiato Bronzo?', a: 'A Specchiato Bronzo usa tecnologia Sputtered Nichrome em tom bronze, com baixo efeito espelho interno.' },
    ],
  },
  ultravioletti90: {
    breadcrumb: arqSolar('INSULFILM™ Ultravioletti90', '/arquitetonico/ultravioletti90'),
    faqs: [
      { q: 'Quanto a INSULFILM™ Ultravioletti90 bloqueia de raios UV?', a: 'A INSULFILM™ Ultravioletti90 bloqueia mais de 99% dos raios ultravioleta.' },
      { q: 'Qual a transmissão de luz visível (VLT) da Ultravioletti90?', a: 'A INSULFILM™ Ultravioletti90 tem 88% de transmissão de luz visível, mantendo o vidro praticamente incolor.' },
      { q: 'Quantos anos de garantia tem a INSULFILM™ Ultravioletti90?', a: 'A INSULFILM™ Ultravioletti90 tem 5 anos de garantia.' },
    ],
  },
  // ═══ ARQUITETÔNICO — SPF ═══
  'phantom-arquitetonico': {
    breadcrumb: arqSPF('INSULFILM™ Phantom Arquitetônico', '/phantom-arquitetonico'),
    faqs: [
      { q: 'Qual a espessura do SPF INSULFILM™ Phantom Arquitetônico?', a: 'O INSULFILM™ Phantom Arquitetônico tem aproximadamente 180 microns de espessura.' },
      { q: 'Por quantos anos o INSULFILM™ Phantom Arquitetônico é garantido?', a: 'O INSULFILM™ Phantom Arquitetônico tem 5 anos de garantia.' },
      { q: 'O que é um SPF (Surface Protection Film)?', a: 'SPF é uma película de proteção de superfície que preserva o brilho original contra micro-riscos, manchas ácidas e desgaste em superfícies brilhosas arquitetônicas.' },
    ],
  },
};

/**
 * Retorna os schemas BreadcrumbList + FAQPage para um PDP.
 * Retorna `null` se o slug não estiver mapeado (degrada silenciosamente).
 */
export const getPDPSchemas = (slug: string) => {
  const meta = PDP_META[slug];
  if (!meta) return null;
  return {
    breadcrumb: buildBreadcrumbSchema(meta.breadcrumb),
    faq: buildFAQSchema(meta.faqs),
  };
};
