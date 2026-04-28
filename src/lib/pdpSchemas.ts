// src/lib/pdpSchemas.ts
// Geradores centralizados de BreadcrumbList e FAQPage (JSON-LD) para PDPs.
// Mantém Single Source of Truth — valores devem bater com TLDR/Specs/Product Schema.

const SITE = 'https://www.insulfilm.com.br';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Gera JSON-LD BreadcrumbList. URLs absolutas. */
export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url.startsWith('http') ? it.url : `${SITE}${it.url}`,
  })),
});

export interface FAQItem {
  q: string;
  a: string;
}

/** Gera JSON-LD FAQPage. */
export const buildFAQSchema = (faqs: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

/** Combina vários schemas em um array @graph para um único <script>. */
export const combineSchemas = (...schemas: object[]) => ({
  '@context': 'https://schema.org',
  '@graph': schemas.map((s) => {
    const { ['@context']: _ctx, ...rest } = s as Record<string, unknown>;
    return rest;
  }),
});
