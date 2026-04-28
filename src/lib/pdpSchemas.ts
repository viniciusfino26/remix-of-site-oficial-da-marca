// src/lib/pdpSchemas.ts
// Geradores centralizados de BreadcrumbList e FAQPage (JSON-LD) para PDPs.

const SITE = 'https://www.insulfilm.com.br';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

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

/** FAQPage JSON-LD com `inLanguage` para SEO multilíngue. */
export const buildFAQSchema = (faqs: FAQItem[], inLanguage: string) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    inLanguage,
    acceptedAnswer: { '@type': 'Answer', text: a, inLanguage },
  })),
});
