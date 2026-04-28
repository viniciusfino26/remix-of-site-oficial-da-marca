// src/lib/pdpFAQs.ts
// Manifesto centralizado e TRILÍNGUE (pt/en/es) de FAQs e Breadcrumbs por PDP.
// Single Source of Truth — espelhado no FAQPage Schema (JSON-LD) e no <PDPFaqSection> visível.
// Atualizar AQUI quando alterar specs nas páginas correspondentes.

import { buildBreadcrumbSchema, buildFAQSchema, type BreadcrumbItem, type FAQItem } from './pdpSchemas';

export type Lang = 'pt' | 'en' | 'es';

export interface I18nText {
  pt: string;
  en: string;
  es: string;
}

export interface I18nFAQ {
  q: I18nText;
  a: I18nText;
}

export interface I18nBreadcrumbItem {
  name: I18nText;
  url: string;
}

interface PDPMeta {
  breadcrumb: I18nBreadcrumbItem[];
  faqs: I18nFAQ[];
}

// ───────── Helpers de breadcrumb ─────────
const HOME: I18nBreadcrumbItem = {
  name: { pt: 'Início', en: 'Home', es: 'Inicio' },
  url: '/',
};
const AUTO: I18nBreadcrumbItem = {
  name: { pt: 'Automotivo', en: 'Automotive', es: 'Automotriz' },
  url: '/automotivo',
};
const ARQ: I18nBreadcrumbItem = {
  name: { pt: 'Arquitetônico', en: 'Architectural', es: 'Arquitectónico' },
  url: '/arquitetonico',
};
const SOLAR: I18nText = { pt: 'Solar', en: 'Solar', es: 'Solar' };
const SECURITY: I18nText = { pt: 'Segurança', en: 'Security', es: 'Seguridad' };
const PPF_LABEL: I18nText = { pt: 'PPF', en: 'PPF', es: 'PPF' };
const SPF_LABEL: I18nText = { pt: 'SPF', en: 'SPF', es: 'SPF' };

const product = (name: string): I18nText => ({ pt: name, en: name, es: name });

const autoSolar = (name: string, url: string): I18nBreadcrumbItem[] => [
  HOME, AUTO, { name: SOLAR, url: '/automotivo/solar' }, { name: product(name), url },
];
const autoSecurity = (name: string, url: string): I18nBreadcrumbItem[] => [
  HOME, AUTO, { name: SECURITY, url: '/automotivo/seguranca' }, { name: product(name), url },
];
const autoPPF = (name: string, url: string): I18nBreadcrumbItem[] => [
  HOME, AUTO, { name: PPF_LABEL, url: '/automotivo/ppf' }, { name: product(name), url },
];
const arqSolar = (name: string, url: string): I18nBreadcrumbItem[] => [
  HOME, ARQ, { name: SOLAR, url: '/arquitetonico/solar' }, { name: product(name), url },
];
const arqSPF = (name: string, url: string): I18nBreadcrumbItem[] => [
  HOME, ARQ, { name: SPF_LABEL, url: '/arquitetonico/spf' }, { name: product(name), url },
];

// ───────── Manifesto trilíngue ─────────
export const PDP_META: Record<string, PDPMeta> = {
  // ═══ AUTOMOTIVO — SOLAR ═══
  matrix: {
    breadcrumb: autoSolar('INSULFILM™ Matrix', '/matrix'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Matrix?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Matrix film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Matrix?',
        },
        a: {
          pt: 'A INSULFILM™ Matrix rejeita até 75% dos raios infravermelhos.',
          en: 'INSULFILM™ Matrix rejects up to 75% of infrared rays.',
          es: 'INSULFILM™ Matrix rechaza hasta el 75% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Matrix?',
          en: 'How many years of warranty does INSULFILM™ Matrix have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Matrix?',
        },
        a: {
          pt: 'A INSULFILM™ Matrix tem 10 anos de garantia contra desbotamento.',
          en: 'INSULFILM™ Matrix has a 10-year warranty against fading.',
          es: 'INSULFILM™ Matrix tiene 10 años de garantía contra decoloración.',
        },
      },
      {
        q: {
          pt: 'A película INSULFILM™ Matrix interfere em GPS, celular ou pedágio?',
          en: 'Does INSULFILM™ Matrix interfere with GPS, cell phone or toll signals?',
          es: '¿La película INSULFILM™ Matrix interfiere con GPS, móvil o peaje?',
        },
        a: {
          pt: 'Não. A Matrix é fabricada com nano cerâmica verdadeira, sem metal, e não interfere em sinais de GPS, celular, rádio ou pedágios eletrônicos.',
          en: 'No. Matrix is manufactured with true nano-ceramic, metal-free, and does not interfere with GPS, cell phone, radio or electronic toll signals.',
          es: 'No. Matrix se fabrica con verdadera nano-cerámica, sin metal, y no interfiere con señales de GPS, móvil, radio ni peajes electrónicos.',
        },
      },
      {
        q: {
          pt: 'Qual a tecnologia da película INSULFILM™ Matrix?',
          en: 'What is the technology of the INSULFILM™ Matrix film?',
          es: '¿Cuál es la tecnología de la película INSULFILM™ Matrix?',
        },
        a: {
          pt: 'A Matrix usa Nano Cerâmica da série Ultra Definition.',
          en: 'Matrix uses Nano Ceramic technology from the Ultra Definition series.',
          es: 'Matrix utiliza Nano Cerámica de la serie Ultra Definition.',
        },
      },
    ],
  },
  eclipse: {
    breadcrumb: autoSolar('INSULFILM™ Eclipse', '/eclipse'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Eclipse?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Eclipse film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Eclipse?',
        },
        a: {
          pt: 'A INSULFILM™ Eclipse rejeita até 30% dos raios infravermelhos.',
          en: 'INSULFILM™ Eclipse rejects up to 30% of infrared rays.',
          es: 'INSULFILM™ Eclipse rechaza hasta el 30% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Eclipse?',
          en: 'How many years of warranty does INSULFILM™ Eclipse have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Eclipse?',
        },
        a: {
          pt: 'A INSULFILM™ Eclipse tem 5 anos de garantia.',
          en: 'INSULFILM™ Eclipse has a 5-year warranty.',
          es: 'INSULFILM™ Eclipse tiene 5 años de garantía.',
        },
      },
      {
        q: {
          pt: 'Qual a tecnologia da película INSULFILM™ Eclipse?',
          en: 'What is the technology of the INSULFILM™ Eclipse film?',
          es: '¿Cuál es la tecnología de la película INSULFILM™ Eclipse?',
        },
        a: {
          pt: 'A Eclipse é Carbon Color Stable, fabricada com nano partículas de carbono verdadeiro, garantindo cor estável sem desbotamento ao longo do tempo.',
          en: 'Eclipse is Carbon Color Stable, made with true carbon nano-particles, ensuring stable color without fading over time.',
          es: 'Eclipse es Carbon Color Stable, fabricada con nano-partículas de carbono auténtico, garantizando color estable sin decoloración con el tiempo.',
        },
      },
    ],
  },
  'polariz-ultra': {
    breadcrumb: autoSolar('INSULFILM™ Polariz Ultra', '/polariz-ultra'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Polariz Ultra?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Polariz Ultra film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Polariz Ultra?',
        },
        a: {
          pt: 'A INSULFILM™ Polariz Ultra rejeita até 75% dos raios infravermelhos.',
          en: 'INSULFILM™ Polariz Ultra rejects up to 75% of infrared rays.',
          es: 'INSULFILM™ Polariz Ultra rechaza hasta el 75% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Polariz Ultra?',
          en: 'How many years of warranty does INSULFILM™ Polariz Ultra have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Polariz Ultra?',
        },
        a: {
          pt: 'A INSULFILM™ Polariz Ultra tem 10 anos de garantia contra desbotamento.',
          en: 'INSULFILM™ Polariz Ultra has a 10-year warranty against fading.',
          es: 'INSULFILM™ Polariz Ultra tiene 10 años de garantía contra decoloración.',
        },
      },
      {
        q: {
          pt: 'Qual a tecnologia da película INSULFILM™ Polariz Ultra?',
          en: 'What is the technology of the INSULFILM™ Polariz Ultra film?',
          es: '¿Cuál es la tecnología de la película INSULFILM™ Polariz Ultra?',
        },
        a: {
          pt: 'A Polariz Ultra usa tecnologia híbrida metal-cerâmica de 5ª geração, com visual polarizado característico.',
          en: 'Polariz Ultra uses 5th generation hybrid metal-ceramic technology, with a distinctive polarized look.',
          es: 'Polariz Ultra utiliza tecnología híbrida metal-cerámica de 5.ª generación, con un aspecto polarizado característico.',
        },
      },
    ],
  },
  // ═══ AUTOMOTIVO — SEGURANÇA ═══
  antivandalismo13k: {
    breadcrumb: autoSecurity('INSULFILM™ Antivandalismo 13K', '/antivandalismo13k'),
    faqs: [
      {
        q: {
          pt: 'Qual a espessura da película INSULFILM™ Antivandalismo 13K?',
          en: 'What is the thickness of the INSULFILM™ Antivandalismo 13K film?',
          es: '¿Cuál es el espesor de la película INSULFILM™ Antivandalismo 13K?',
        },
        a: {
          pt: 'A INSULFILM™ Antivandalismo 13K tem 12 mil de espessura, equivalente a 304,8 micras.',
          en: 'INSULFILM™ Antivandalismo 13K is 12 mil thick, equivalent to 304.8 microns.',
          es: 'INSULFILM™ Antivandalismo 13K tiene 12 mil de espesor, equivalente a 304,8 micras.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Antivandalismo 13K?',
          en: 'How many years of warranty does INSULFILM™ Antivandalismo 13K have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Antivandalismo 13K?',
        },
        a: {
          pt: 'A INSULFILM™ Antivandalismo 13K tem 5 anos de garantia.',
          en: 'INSULFILM™ Antivandalismo 13K has a 5-year warranty.',
          es: 'INSULFILM™ Antivandalismo 13K tiene 5 años de garantía.',
        },
      },
      {
        q: {
          pt: 'A INSULFILM™ Antivandalismo 13K resiste a tentativas de arrombamento?',
          en: 'Does INSULFILM™ Antivandalismo 13K resist break-in attempts?',
          es: '¿La INSULFILM™ Antivandalismo 13K resiste intentos de robo?',
        },
        a: {
          pt: 'Sim. A construção em dupla laminação retarda arrombamentos, quebras e tentativas de roubo em vidros laterais automotivos.',
          en: 'Yes. The double-lamination construction delays break-ins, smash-and-grabs and theft attempts on automotive side windows.',
          es: 'Sí. La construcción en doble laminado retarda intentos de robo, roturas y vandalismo en cristales laterales automotrices.',
        },
      },
    ],
  },
  skinsafe8k: {
    breadcrumb: autoSecurity('INSULFILM™ SkinSafe 8K', '/skinsafe8k'),
    faqs: [
      {
        q: {
          pt: 'Qual a espessura da película INSULFILM™ SkinSafe 8K?',
          en: 'What is the thickness of the INSULFILM™ SkinSafe 8K film?',
          es: '¿Cuál es el espesor de la película INSULFILM™ SkinSafe 8K?',
        },
        a: {
          pt: 'A INSULFILM™ SkinSafe 8K tem 7 mil de espessura, equivalente a 177,8 micras.',
          en: 'INSULFILM™ SkinSafe 8K is 7 mil thick, equivalent to 177.8 microns.',
          es: 'INSULFILM™ SkinSafe 8K tiene 7 mil de espesor, equivalente a 177,8 micras.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ SkinSafe 8K?',
          en: 'How many years of warranty does INSULFILM™ SkinSafe 8K have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ SkinSafe 8K?',
        },
        a: {
          pt: 'A INSULFILM™ SkinSafe 8K tem 5 anos de garantia.',
          en: 'INSULFILM™ SkinSafe 8K has a 5-year warranty.',
          es: 'INSULFILM™ SkinSafe 8K tiene 5 años de garantía.',
        },
      },
      {
        q: {
          pt: 'A INSULFILM™ SkinSafe 8K protege contra estilhaços?',
          en: 'Does INSULFILM™ SkinSafe 8K protect against shattered glass?',
          es: '¿La INSULFILM™ SkinSafe 8K protege contra esquirlas?',
        },
        a: {
          pt: 'Sim. Ela retém os fragmentos do vidro em quebras acidentais, mantendo-os aderidos à película e reduzindo o risco de ferimentos nos ocupantes.',
          en: 'Yes. It holds glass fragments together in accidental breakage, keeping them adhered to the film and reducing injury risk to occupants.',
          es: 'Sí. Retiene los fragmentos de vidrio en roturas accidentales, manteniéndolos adheridos a la película y reduciendo el riesgo de lesiones a los ocupantes.',
        },
      },
    ],
  },
  skudoguard: {
    breadcrumb: autoSecurity('INSULFILM™ SkudoGuard', '/skudoguard'),
    faqs: [
      {
        q: {
          pt: 'Qual a espessura da película INSULFILM™ SkudoGuard?',
          en: 'What is the thickness of the INSULFILM™ SkudoGuard film?',
          es: '¿Cuál es el espesor de la película INSULFILM™ SkudoGuard?',
        },
        a: {
          pt: 'A INSULFILM™ SkudoGuard tem 16 mil de espessura, equivalente a 406,4 micras.',
          en: 'INSULFILM™ SkudoGuard is 16 mil thick, equivalent to 406.4 microns.',
          es: 'INSULFILM™ SkudoGuard tiene 16 mil de espesor, equivalente a 406,4 micras.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ SkudoGuard?',
          en: 'How many years of warranty does INSULFILM™ SkudoGuard have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ SkudoGuard?',
        },
        a: {
          pt: 'A INSULFILM™ SkudoGuard tem 10 anos de garantia.',
          en: 'INSULFILM™ SkudoGuard has a 10-year warranty.',
          es: 'INSULFILM™ SkudoGuard tiene 10 años de garantía.',
        },
      },
      {
        q: {
          pt: 'A INSULFILM™ SkudoGuard resiste a armas brancas?',
          en: 'Does INSULFILM™ SkudoGuard resist bladed weapons?',
          es: '¿La INSULFILM™ SkudoGuard resiste armas blancas?',
        },
        a: {
          pt: 'Sim. Com força de ruptura de 440 lbs/in, ela atua como escudo contra armas brancas e tentativas de invasão.',
          en: 'Yes. With a break strength of 440 lbs/in, it acts as a shield against bladed weapons and intrusion attempts.',
          es: 'Sí. Con fuerza de ruptura de 440 lbs/in, actúa como escudo contra armas blancas e intentos de intrusión.',
        },
      },
    ],
  },
  'skudo-ultra': {
    breadcrumb: autoSecurity('INSULFILM™ SkudoUltra', '/skudo-ultra'),
    faqs: [
      {
        q: {
          pt: 'Qual a espessura da película INSULFILM™ SkudoUltra?',
          en: 'What is the thickness of the INSULFILM™ SkudoUltra film?',
          es: '¿Cuál es el espesor de la película INSULFILM™ SkudoUltra?',
        },
        a: {
          pt: 'A INSULFILM™ SkudoUltra tem 24 mil de espessura, equivalente a 609,6 micras.',
          en: 'INSULFILM™ SkudoUltra is 24 mil thick, equivalent to 609.6 microns.',
          es: 'INSULFILM™ SkudoUltra tiene 24 mil de espesor, equivalente a 609,6 micras.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ SkudoUltra?',
          en: 'How many years of warranty does INSULFILM™ SkudoUltra have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ SkudoUltra?',
        },
        a: {
          pt: 'A INSULFILM™ SkudoUltra tem 10 anos de garantia.',
          en: 'INSULFILM™ SkudoUltra has a 10-year warranty.',
          es: 'INSULFILM™ SkudoUltra tiene 10 años de garantía.',
        },
      },
      {
        q: {
          pt: 'A INSULFILM™ SkudoUltra é a película de segurança automotiva mais robusta?',
          en: 'Is INSULFILM™ SkudoUltra the most robust automotive security film?',
          es: '¿La INSULFILM™ SkudoUltra es la película de seguridad automotriz más robusta?',
        },
        a: {
          pt: 'Sim. Construção tetra laminada com adesivo extremo, é a película de segurança automotiva mais robusta da marca.',
          en: 'Yes. Tetra-laminated construction with extreme adhesive — the most robust automotive security film of the brand.',
          es: 'Sí. Construcción tetra laminada con adhesivo extremo — la película de seguridad automotriz más robusta de la marca.',
        },
      },
    ],
  },
  // ═══ AUTOMOTIVO — PPF ═══
  'phantom-gloss': {
    breadcrumb: autoPPF('INSULFILM™ Phantom Gloss', '/phantom-gloss'),
    faqs: [
      {
        q: {
          pt: 'Qual a espessura do PPF INSULFILM™ Phantom Gloss?',
          en: 'What is the thickness of the INSULFILM™ Phantom Gloss PPF?',
          es: '¿Cuál es el espesor del PPF INSULFILM™ Phantom Gloss?',
        },
        a: {
          pt: 'O INSULFILM™ Phantom Gloss tem 7 mil de espessura, equivalente a aproximadamente 180 microns.',
          en: 'INSULFILM™ Phantom Gloss is 7 mil thick, equivalent to approximately 180 microns.',
          es: 'INSULFILM™ Phantom Gloss tiene 7 mil de espesor, equivalente a aproximadamente 180 micras.',
        },
      },
      {
        q: {
          pt: 'Por quantos anos o INSULFILM™ Phantom Gloss é garantido?',
          en: 'For how many years is INSULFILM™ Phantom Gloss warranted?',
          es: '¿Por cuántos años está garantizado el INSULFILM™ Phantom Gloss?',
        },
        a: {
          pt: 'O INSULFILM™ Phantom Gloss tem 5 anos de garantia contra rachaduras, formação de bolhas e amarelamento causados por defeitos de fabricação.',
          en: 'INSULFILM™ Phantom Gloss has a 5-year warranty against cracking, bubbling and yellowing caused by manufacturing defects.',
          es: 'INSULFILM™ Phantom Gloss tiene 5 años de garantía contra agrietamiento, formación de burbujas y amarillamiento causados por defectos de fabricación.',
        },
      },
      {
        q: {
          pt: 'O INSULFILM™ Phantom Gloss tem propriedade auto-regenerativa?',
          en: 'Does INSULFILM™ Phantom Gloss have self-healing properties?',
          es: '¿El INSULFILM™ Phantom Gloss tiene propiedades de autorregeneración?',
        },
        a: {
          pt: 'Sim. Possui tecnologia auto-regenerativa que recupera microriscos com calor.',
          en: 'Yes. It features self-healing technology that recovers micro-scratches with heat.',
          es: 'Sí. Cuenta con tecnología de autorregeneración que recupera microrayones con calor.',
        },
      },
    ],
  },
  // ═══ ARQUITETÔNICO — SOLAR ═══
  clear70: {
    breadcrumb: arqSolar('INSULFILM™ Clear70', '/arquitetonico/clear70'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Clear70?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Clear70 film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Clear70?',
        },
        a: {
          pt: 'A INSULFILM™ Clear70 rejeita até 81% dos raios infravermelhos.',
          en: 'INSULFILM™ Clear70 rejects up to 81% of infrared rays.',
          es: 'INSULFILM™ Clear70 rechaza hasta el 81% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Qual a transmissão de luz visível (VLT) da INSULFILM™ Clear70?',
          en: 'What is the visible light transmission (VLT) of INSULFILM™ Clear70?',
          es: '¿Cuál es la transmisión de luz visible (VLT) de INSULFILM™ Clear70?',
        },
        a: {
          pt: 'A INSULFILM™ Clear70 tem 72% de transmissão de luz visível (VLT).',
          en: 'INSULFILM™ Clear70 has 72% visible light transmission (VLT).',
          es: 'INSULFILM™ Clear70 tiene 72% de transmisión de luz visible (VLT).',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Clear70?',
          en: 'How many years of warranty does INSULFILM™ Clear70 have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Clear70?',
        },
        a: {
          pt: 'A INSULFILM™ Clear70 tem garantia de até 5 anos.',
          en: 'INSULFILM™ Clear70 has a warranty of up to 5 years.',
          es: 'INSULFILM™ Clear70 tiene garantía de hasta 5 años.',
        },
      },
    ],
  },
  naturale: {
    breadcrumb: arqSolar('INSULFILM™ Naturale', '/arquitetonico/naturale'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Naturale?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Naturale film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Naturale?',
        },
        a: {
          pt: 'A INSULFILM™ Naturale rejeita até 81% dos raios infravermelhos nas versões mais escuras.',
          en: 'INSULFILM™ Naturale rejects up to 81% of infrared rays in the darker versions.',
          es: 'INSULFILM™ Naturale rechaza hasta el 81% de los rayos infrarrojos en las versiones más oscuras.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Naturale?',
          en: 'How many years of warranty does INSULFILM™ Naturale have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Naturale?',
        },
        a: {
          pt: 'A INSULFILM™ Naturale tem garantia de até 10 anos.',
          en: 'INSULFILM™ Naturale has a warranty of up to 10 years.',
          es: 'INSULFILM™ Naturale tiene garantía de hasta 10 años.',
        },
      },
      {
        q: {
          pt: 'Qual a tecnologia da película INSULFILM™ Naturale?',
          en: 'What is the technology of the INSULFILM™ Naturale film?',
          es: '¿Cuál es la tecnología de la película INSULFILM™ Naturale?',
        },
        a: {
          pt: 'A Naturale usa tecnologia Sputtered Neutra de tonalidade neutra.',
          en: 'Naturale uses Sputtered Neutral technology with a neutral tone.',
          es: 'Naturale utiliza tecnología Sputtered Neutra de tono neutro.',
        },
      },
    ],
  },
  orizzonte70: {
    breadcrumb: arqSolar('INSULFILM™ Orizzonte70', '/arquitetonico/orizzonte70'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Orizzonte70?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Orizzonte70 film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Orizzonte70?',
        },
        a: {
          pt: 'A INSULFILM™ Orizzonte70 rejeita até 93% dos raios infravermelhos.',
          en: 'INSULFILM™ Orizzonte70 rejects up to 93% of infrared rays.',
          es: 'INSULFILM™ Orizzonte70 rechaza hasta el 93% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Qual a transmissão de luz visível (VLT) da INSULFILM™ Orizzonte70?',
          en: 'What is the visible light transmission (VLT) of INSULFILM™ Orizzonte70?',
          es: '¿Cuál es la transmisión de luz visible (VLT) de INSULFILM™ Orizzonte70?',
        },
        a: {
          pt: 'A INSULFILM™ Orizzonte70 tem 68% de transmissão de luz visível (VLT).',
          en: 'INSULFILM™ Orizzonte70 has 68% visible light transmission (VLT).',
          es: 'INSULFILM™ Orizzonte70 tiene 68% de transmisión de luz visible (VLT).',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Orizzonte70?',
          en: 'How many years of warranty does INSULFILM™ Orizzonte70 have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Orizzonte70?',
        },
        a: {
          pt: 'A INSULFILM™ Orizzonte70 tem 10 anos de garantia.',
          en: 'INSULFILM™ Orizzonte70 has a 10-year warranty.',
          es: 'INSULFILM™ Orizzonte70 tiene 10 años de garantía.',
        },
      },
    ],
  },
  'grigio-invertito': {
    breadcrumb: arqSolar('INSULFILM™ Grigio Invertito', '/arquitetonico/grigio-invertito'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Grigio Invertito?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Grigio Invertito film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Grigio Invertito?',
        },
        a: {
          pt: 'A INSULFILM™ Grigio Invertito rejeita 75% dos raios infravermelhos.',
          en: 'INSULFILM™ Grigio Invertito rejects 75% of infrared rays.',
          es: 'INSULFILM™ Grigio Invertito rechaza el 75% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Grigio Invertito?',
          en: 'How many years of warranty does INSULFILM™ Grigio Invertito have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Grigio Invertito?',
        },
        a: {
          pt: 'A INSULFILM™ Grigio Invertito tem garantia de até 3 anos.',
          en: 'INSULFILM™ Grigio Invertito has a warranty of up to 3 years.',
          es: 'INSULFILM™ Grigio Invertito tiene garantía de hasta 3 años.',
        },
      },
      {
        q: {
          pt: 'Como funciona a privacidade invertida da Grigio Invertito?',
          en: 'How does the inverted privacy of Grigio Invertito work?',
          es: '¿Cómo funciona la privacidad invertida de Grigio Invertito?',
        },
        a: {
          pt: 'A película é espelhada na face externa e fumê na face interna, oferecendo privacidade durante o dia e visual fumê de dentro para fora.',
          en: 'The film is mirrored on the outer face and smoked on the inner face, offering daytime privacy and a smoked look from inside out.',
          es: 'La película es espejada en la cara exterior y ahumada en la cara interior, ofreciendo privacidad diurna y un aspecto ahumado de dentro hacia fuera.',
        },
      },
    ],
  },
  'metallico-argento': {
    breadcrumb: arqSolar('INSULFILM™ Metallico Argento', '/arquitetonico/metallico-argento'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Metallico Argento?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Metallico Argento film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Metallico Argento?',
        },
        a: {
          pt: 'A INSULFILM™ Metallico Argento rejeita até 86% dos raios infravermelhos.',
          en: 'INSULFILM™ Metallico Argento rejects up to 86% of infrared rays.',
          es: 'INSULFILM™ Metallico Argento rechaza hasta el 86% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Quanto da energia solar a INSULFILM™ Metallico Argento rejeita?',
          en: 'How much solar energy does INSULFILM™ Metallico Argento reject?',
          es: '¿Cuánta energía solar rechaza INSULFILM™ Metallico Argento?',
        },
        a: {
          pt: 'A INSULFILM™ Metallico Argento rejeita até 80% da energia solar total.',
          en: 'INSULFILM™ Metallico Argento rejects up to 80% of total solar energy.',
          es: 'INSULFILM™ Metallico Argento rechaza hasta el 80% de la energía solar total.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Metallico Argento?',
          en: 'How many years of warranty does INSULFILM™ Metallico Argento have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Metallico Argento?',
        },
        a: {
          pt: 'A INSULFILM™ Metallico Argento tem 10 anos de garantia.',
          en: 'INSULFILM™ Metallico Argento has a 10-year warranty.',
          es: 'INSULFILM™ Metallico Argento tiene 10 años de garantía.',
        },
      },
    ],
  },
  'reflesso-d-argento': {
    breadcrumb: arqSolar("INSULFILM™ Reflesso d'Argento", '/arquitetonico/reflesso-d-argento'),
    faqs: [
      {
        q: {
          pt: "Qual a rejeição de calor da película INSULFILM™ Reflesso d'Argento?",
          en: "What is the heat rejection of the INSULFILM™ Reflesso d'Argento film?",
          es: "¿Cuál es el rechazo de calor de la película INSULFILM™ Reflesso d'Argento?",
        },
        a: {
          pt: "A INSULFILM™ Reflesso d'Argento rejeita 80% do calor solar.",
          en: "INSULFILM™ Reflesso d'Argento rejects 80% of solar heat.",
          es: "INSULFILM™ Reflesso d'Argento rechaza el 80% del calor solar.",
        },
      },
      {
        q: {
          pt: "Quantos anos de garantia tem a INSULFILM™ Reflesso d'Argento?",
          en: "How many years of warranty does INSULFILM™ Reflesso d'Argento have?",
          es: "¿Cuántos años de garantía tiene INSULFILM™ Reflesso d'Argento?",
        },
        a: {
          pt: "A INSULFILM™ Reflesso d'Argento tem garantia de até 3 anos.",
          en: "INSULFILM™ Reflesso d'Argento has a warranty of up to 3 years.",
          es: "INSULFILM™ Reflesso d'Argento tiene garantía de hasta 3 años.",
        },
      },
      {
        q: {
          pt: "Qual a tecnologia da INSULFILM™ Reflesso d'Argento?",
          en: "What is the technology of INSULFILM™ Reflesso d'Argento?",
          es: "¿Cuál es la tecnología de INSULFILM™ Reflesso d'Argento?",
        },
        a: {
          pt: "A Reflesso d'Argento usa tecnologia Refletiva Sputtered de excelente custo-benefício.",
          en: "Reflesso d'Argento uses Sputtered Reflective technology with excellent cost-benefit.",
          es: "Reflesso d'Argento utiliza tecnología Reflectiva Sputtered con excelente costo-beneficio.",
        },
      },
    ],
  },
  petrolio: {
    breadcrumb: arqSolar('INSULFILM™ Petrolio', '/arquitetonico/petrolio'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Petrolio?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Petrolio film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Petrolio?',
        },
        a: {
          pt: 'A INSULFILM™ Petrolio rejeita até 42% dos raios infravermelhos.',
          en: 'INSULFILM™ Petrolio rejects up to 42% of infrared rays.',
          es: 'INSULFILM™ Petrolio rechaza hasta el 42% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Petrolio?',
          en: 'How many years of warranty does INSULFILM™ Petrolio have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Petrolio?',
        },
        a: {
          pt: 'A INSULFILM™ Petrolio tem 3 anos de garantia.',
          en: 'INSULFILM™ Petrolio has a 3-year warranty.',
          es: 'INSULFILM™ Petrolio tiene 3 años de garantía.',
        },
      },
      {
        q: {
          pt: 'Qual a tonalidade da INSULFILM™ Petrolio?',
          en: 'What is the tone of INSULFILM™ Petrolio?',
          es: '¿Cuál es la tonalidad de INSULFILM™ Petrolio?',
        },
        a: {
          pt: 'A Petrolio é uma película híbrida fumê (charcoal) de alta durabilidade.',
          en: 'Petrolio is a hybrid charcoal-tinted film with high durability.',
          es: 'Petrolio es una película híbrida ahumada (charcoal) de alta durabilidad.',
        },
      },
    ],
  },
  'specchiato-bronzo': {
    breadcrumb: arqSolar('INSULFILM™ Specchiato Bronzo', '/arquitetonico/specchiato-bronzo'),
    faqs: [
      {
        q: {
          pt: 'Qual a rejeição de calor (IR) da película INSULFILM™ Specchiato Bronzo?',
          en: 'What is the heat (IR) rejection of the INSULFILM™ Specchiato Bronzo film?',
          es: '¿Cuál es el rechazo de calor (IR) de la película INSULFILM™ Specchiato Bronzo?',
        },
        a: {
          pt: 'A INSULFILM™ Specchiato Bronzo rejeita até 72% dos raios infravermelhos.',
          en: 'INSULFILM™ Specchiato Bronzo rejects up to 72% of infrared rays.',
          es: 'INSULFILM™ Specchiato Bronzo rechaza hasta el 72% de los rayos infrarrojos.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Specchiato Bronzo?',
          en: 'How many years of warranty does INSULFILM™ Specchiato Bronzo have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Specchiato Bronzo?',
        },
        a: {
          pt: 'A INSULFILM™ Specchiato Bronzo tem 10 anos de garantia.',
          en: 'INSULFILM™ Specchiato Bronzo has a 10-year warranty.',
          es: 'INSULFILM™ Specchiato Bronzo tiene 10 años de garantía.',
        },
      },
      {
        q: {
          pt: 'Qual a tecnologia da INSULFILM™ Specchiato Bronzo?',
          en: 'What is the technology of INSULFILM™ Specchiato Bronzo?',
          es: '¿Cuál es la tecnología de INSULFILM™ Specchiato Bronzo?',
        },
        a: {
          pt: 'A Specchiato Bronzo usa tecnologia Sputtered Nichrome em tom bronze, com baixo efeito espelho interno.',
          en: 'Specchiato Bronzo uses Sputtered Nichrome technology in a bronze tone, with low interior mirror effect.',
          es: 'Specchiato Bronzo utiliza tecnología Sputtered Nichrome en tono bronce, con bajo efecto espejo interior.',
        },
      },
    ],
  },
  ultravioletti90: {
    breadcrumb: arqSolar('INSULFILM™ Ultravioletti90', '/arquitetonico/ultravioletti90'),
    faqs: [
      {
        q: {
          pt: 'Quanto a INSULFILM™ Ultravioletti90 bloqueia de raios UV?',
          en: 'How much UV does INSULFILM™ Ultravioletti90 block?',
          es: '¿Cuánta radiación UV bloquea INSULFILM™ Ultravioletti90?',
        },
        a: {
          pt: 'A INSULFILM™ Ultravioletti90 bloqueia mais de 99% dos raios ultravioleta.',
          en: 'INSULFILM™ Ultravioletti90 blocks more than 99% of ultraviolet rays.',
          es: 'INSULFILM™ Ultravioletti90 bloquea más del 99% de los rayos ultravioleta.',
        },
      },
      {
        q: {
          pt: 'Qual a transmissão de luz visível (VLT) da Ultravioletti90?',
          en: 'What is the visible light transmission (VLT) of Ultravioletti90?',
          es: '¿Cuál es la transmisión de luz visible (VLT) de Ultravioletti90?',
        },
        a: {
          pt: 'A INSULFILM™ Ultravioletti90 tem 88% de transmissão de luz visível, mantendo o vidro praticamente incolor.',
          en: 'INSULFILM™ Ultravioletti90 has 88% visible light transmission, keeping the glass virtually colorless.',
          es: 'INSULFILM™ Ultravioletti90 tiene 88% de transmisión de luz visible, manteniendo el vidrio prácticamente incoloro.',
        },
      },
      {
        q: {
          pt: 'Quantos anos de garantia tem a INSULFILM™ Ultravioletti90?',
          en: 'How many years of warranty does INSULFILM™ Ultravioletti90 have?',
          es: '¿Cuántos años de garantía tiene INSULFILM™ Ultravioletti90?',
        },
        a: {
          pt: 'A INSULFILM™ Ultravioletti90 tem 5 anos de garantia.',
          en: 'INSULFILM™ Ultravioletti90 has a 5-year warranty.',
          es: 'INSULFILM™ Ultravioletti90 tiene 5 años de garantía.',
        },
      },
    ],
  },
  // ═══ ARQUITETÔNICO — SPF ═══
  'phantom-arquitetonico': {
    breadcrumb: arqSPF('INSULFILM™ Phantom Arquitetônico', '/phantom-arquitetonico'),
    faqs: [
      {
        q: {
          pt: 'Qual a espessura do SPF INSULFILM™ Phantom Arquitetônico?',
          en: 'What is the thickness of the INSULFILM™ Phantom Architectural SPF?',
          es: '¿Cuál es el espesor del SPF INSULFILM™ Phantom Arquitectónico?',
        },
        a: {
          pt: 'O INSULFILM™ Phantom Arquitetônico tem aproximadamente 180 microns de espessura.',
          en: 'INSULFILM™ Phantom Architectural is approximately 180 microns thick.',
          es: 'INSULFILM™ Phantom Arquitectónico tiene aproximadamente 180 micras de espesor.',
        },
      },
      {
        q: {
          pt: 'Por quantos anos o INSULFILM™ Phantom Arquitetônico é garantido?',
          en: 'For how many years is INSULFILM™ Phantom Architectural warranted?',
          es: '¿Por cuántos años está garantizado el INSULFILM™ Phantom Arquitectónico?',
        },
        a: {
          pt: 'O INSULFILM™ Phantom Arquitetônico tem 5 anos de garantia.',
          en: 'INSULFILM™ Phantom Architectural has a 5-year warranty.',
          es: 'INSULFILM™ Phantom Arquitectónico tiene 5 años de garantía.',
        },
      },
      {
        q: {
          pt: 'O que é um SPF (Surface Protection Film)?',
          en: 'What is an SPF (Surface Protection Film)?',
          es: '¿Qué es un SPF (Surface Protection Film)?',
        },
        a: {
          pt: 'SPF é uma película de proteção de superfície que preserva o brilho original contra micro-riscos, manchas ácidas e desgaste em superfícies brilhosas arquitetônicas.',
          en: 'SPF is a surface protection film that preserves the original gloss against micro-scratches, acid stains and wear on architectural high-gloss surfaces.',
          es: 'SPF es una película de protección de superficies que preserva el brillo original contra microrayones, manchas ácidas y desgaste en superficies brillantes arquitectónicas.',
        },
      },
    ],
  },
};

// ───────── API pública ─────────

const LANG_TAG: Record<Lang, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

const ALL_LANGS: Lang[] = ['pt', 'en', 'es'];

const pickFAQs = (faqs: I18nFAQ[], lang: Lang): FAQItem[] =>
  faqs.map((f) => ({ q: f.q[lang], a: f.a[lang] }));

const pickBreadcrumb = (items: I18nBreadcrumbItem[], lang: Lang): BreadcrumbItem[] =>
  items.map((it) => ({ name: it.name[lang], url: it.url }));

/**
 * Retorna BreadcrumbList (idioma ativo) + um array de FAQPage por idioma
 * (cada um com `inLanguage`). Renderizar cada FAQPage como `<script>` separado.
 */
export const getPDPSchemas = (slug: string, currentLang: Lang = 'pt') => {
  const meta = PDP_META[slug];
  if (!meta) return null;
  return {
    breadcrumb: buildBreadcrumbSchema(pickBreadcrumb(meta.breadcrumb, currentLang)),
    faqsByLang: ALL_LANGS.map((lang) => buildFAQSchema(pickFAQs(meta.faqs, lang), LANG_TAG[lang])),
  };
};

/** FAQs traduzidas para o componente visível. */
export const getPDPFaqs = (slug: string, lang: Lang): FAQItem[] | null => {
  const meta = PDP_META[slug];
  if (!meta) return null;
  return pickFAQs(meta.faqs, lang);
};
