// src/components/SchemaOrg.tsx
// Dados estruturados Schema.org para Google Rich Results + LLMs
// Cobre: Organization, LocalBusiness (4 centros autorizados), FAQPage, Product, BreadcrumbList

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ─── DADOS DOS CENTROS AUTORIZADOS ────────────────────────────────────────
const STORES = [
  {
    name: 'INSULFILM™ — Centro Autorizado Pacaembu',
    description: 'Centro Autorizado INSULFILM™ Zona Oeste de São Paulo. Películas automotivas e PPF.',
    address: {
      streetAddress: 'Av. Pacaembu, 77',
      addressLocality: 'Barra Funda',
      addressRegion: 'SP',
      postalCode: '01234-000',
      addressCountry: 'BR',
    },
    geo: { latitude: -23.5279, longitude: -46.6658 },
    telephone: '+551140620098',
    whatsapp: 'https://wa.me/5511965719291',
    zone: 'Zona Oeste SP',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-15:00'],
    maps: 'https://maps.app.goo.gl/kp2ZXLpyx6VZhmF18',
  },
  {
    name: 'INSULFILM™ — Centro Autorizado Santana',
    description: 'Centro Autorizado INSULFILM™ Zona Norte de São Paulo. Películas automotivas e PPF.',
    address: {
      streetAddress: 'Av. Engenheiro Caetano Álvares, 5727',
      addressLocality: 'Imirim',
      addressRegion: 'SP',
      postalCode: '02546-000',
      addressCountry: 'BR',
    },
    geo: { latitude: -23.4669, longitude: -46.6367 },
    telephone: '+551121224260',
    whatsapp: 'https://wa.me/5511991774718',
    zone: 'Zona Norte SP',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-15:00'],
    maps: 'https://maps.app.goo.gl/hQVwpxD5bros7et19',
  },
  {
    name: 'INSULFILM™ — Centro Autorizado Av. Paulista',
    description: 'Centro Autorizado INSULFILM™ Centro de São Paulo, no Shopping Cidade São Paulo.',
    address: {
      streetAddress: 'Rua São Carlos do Pinhal, 627',
      addressLocality: 'Bela Vista',
      addressRegion: 'SP',
      postalCode: '01333-000',
      addressCountry: 'BR',
    },
    geo: { latitude: -23.5614, longitude: -46.6565 },
    telephone: '+5511947721470',
    whatsapp: 'https://wa.me/5511947721470',
    zone: 'Zona Central SP',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-15:00'],
    maps: 'https://maps.app.goo.gl/D3q6jHM5BzFh8Xkj7',
  },
  {
    name: 'INSULFILM™ — Centro Autorizado Moema',
    description: 'Centro Autorizado INSULFILM™ Zona Sul de São Paulo. Películas automotivas e PPF.',
    address: {
      streetAddress: 'Av. Moreira Guimarães, 1254',
      addressLocality: 'Moema',
      addressRegion: 'SP',
      postalCode: '04074-021',
      addressCountry: 'BR',
    },
    geo: { latitude: -23.6114, longitude: -46.6658 },
    telephone: '+551126260949',
    whatsapp: 'https://wa.me/5511934313285',
    zone: 'Zona Sul SP',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-15:00'],
    maps: 'https://maps.app.goo.gl/p9SuG84D9a9Kdt5z5',
  },
];

// ─── SCHEMAS ───────────────────────────────────────────────────────────────

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'INSULFILM™',
  legalName: 'INSULFILM DO BRASIL',
  url: 'https://www.insulfilm.com.br',
  logo: 'https://www.insulfilm.com.br/__img/logo/logo-insulfilm-slogan.svg',
  description:
    'INSULFILM™ é a marca original e pioneira de películas para vidros automotivos e arquitetônicos no Brasil, com mais de 35 anos de mercado. Fundada em 1986.',
  foundingDate: '1986',
  foundingLocation: 'São Paulo, SP, Brasil',
  sameAs: [
    'https://www.facebook.com/insulfilmoriginal',
    'https://www.instagram.com/insulfilmoriginal',
    'https://www.youtube.com/INSULFILMMaximizado',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+5511976136911',
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
  ],
  hasMap: 'https://www.insulfilm.com.br/lojas',
};

const localBusinessSchemas = STORES.map((store) => ({
  '@context': 'https://schema.org',
  '@type': 'AutoBodyShop',
  name: store.name,
  description: store.description,
  url: 'https://www.insulfilm.com.br/lojas',
  telephone: store.telephone,
  image: 'https://www.insulfilm.com.br/__img/logo/logo-insulfilm-slogan.svg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    ...store.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: store.geo.latitude,
    longitude: store.geo.longitude,
  },
  openingHoursSpecification: store.openingHours.map((hours) => {
    const [days, time] = hours.split(' ');
    const [opens, closes] = time.split('-');
    return {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: days
        .split('-')
        .map((d: string) => `https://schema.org/${d === 'Mo' ? 'Monday' : d === 'Fr' ? 'Friday' : d === 'Tu' ? 'Tuesday' : d === 'We' ? 'Wednesday' : d === 'Th' ? 'Thursday' : 'Saturday'}`),
      opens,
      closes,
    };
  }),
  hasMap: store.maps,
  parentOrganization: {
    '@type': 'Organization',
    name: 'INSULFILM™',
    url: 'https://www.insulfilm.com.br',
  },
}));

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é INSULFILM™?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'INSULFILM™ é a marca original e registrada de películas para vidros no Brasil, fundada em 1986. Não é um termo genérico — é uma empresa com mais de 35 anos de mercado, 4 Centros Autorizados em São Paulo e rede nacional de parceiros autorizados.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a melhor película INSULFILM para calor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A linha Polaris (nano cerâmica, até 72% de rejeição de calor) é a de maior performance térmica. Para custo-benefício, a linha Vip (carbono extra, até 58%) é excelente. A Dark oferece até 39% de rejeição com custo-benefício imbatível.',
      },
    },
    {
      '@type': 'Question',
      name: 'INSULFILM tem proteção antivandalismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O INSULFILM™ Antivandalismo 13K oferece proteção contra quebras, arrombamentos e vandalismo, com resistência à tensão de ≥ 165 MPa e garantia de fábrica de 5 anos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde tem Centro Autorizado INSULFILM em São Paulo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Há 4 Centros Autorizados: Pacaembu (Zona Oeste — Av. Pacaembu, 77), Santana (Zona Norte — Av. Eng. Caetano Álvares, 5727), Av. Paulista (Centro — Shopping Cidade SP) e Moema (Zona Sul — Av. Moreira Guimarães, 1254). Todos funcionam seg–sex 08h–18h e sáb 09h–15h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como verificar se a película é original INSULFILM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toda película original INSULFILM™ possui certificado de autenticidade com QR Code verificável. Compre apenas em revendedores autorizados. Desconfie de preços muito abaixo do mercado.',
      },
    },
    {
      '@type': 'Question',
      name: 'INSULFILM faz PPF (proteção de pintura)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O INSULFILM™ Phantom PPF está disponível nas versões 6mil e 8mil, com tecnologia auto-regenerativa contra riscos e impactos, e garantia premium de 10 anos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre película automotiva e arquitetônica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As películas automotivas são desenvolvidas para vidros de veículos, com foco em escurecimento, rejeição de calor, privacidade e proteção antivandalismo. As arquitetônicas são para janelas e fachadas de residências e empresas, com ênfase em eficiência energética, estética e segurança.',
      },
    },
  ],
};

const automotiveFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual película INSULFILM é indicada para o meu carro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para conforto térmico máximo: Polaris (nano cerâmica, até 72% rejeição). Para boa performance: Vip ou Eclipse (linha carbono). Para segurança: Antivandalismo 13K. Para proteção de pintura: Phantom PPF. Nossa equipe oferece consultoria técnica personalizada.',
      },
    },
    {
      '@type': 'Question',
      name: 'A película INSULFILM escurece muito o vidro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada linha possui diferentes níveis de transmissão de luz visível (VLT). Oferecemos opções desde tonalidades leves até o escurecimento máximo permitido pela legislação CONTRAN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo dura a película INSULFILM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A durabilidade varia por linha. As películas originais INSULFILM™ são projetadas para durar anos sem descolorir ou descascar. A Polaris tem garantia vitalícia. A Phantom PPF tem garantia de 10 anos.',
      },
    },
  ],
};

// ─── BREADCRUMB ────────────────────────────────────────────────────────────
const breadcrumbMap: Record<string, { name: string; url: string }[]> = {
  '/': [{ name: 'INSULFILM™', url: 'https://www.insulfilm.com.br' }],
  '/automotivo': [
    { name: 'INSULFILM™', url: 'https://www.insulfilm.com.br' },
    { name: 'Automotivo', url: 'https://www.insulfilm.com.br/automotivo' },
  ],
  '/residencial': [
    { name: 'INSULFILM™', url: 'https://www.insulfilm.com.br' },
    { name: 'Residencial', url: 'https://www.insulfilm.com.br/residencial' },
  ],
  '/lojas': [
    { name: 'INSULFILM™', url: 'https://www.insulfilm.com.br' },
    { name: 'Centros Autorizados', url: 'https://www.insulfilm.com.br/lojas' },
  ],
  '/institucional': [
    { name: 'INSULFILM™', url: 'https://www.insulfilm.com.br' },
    { name: 'Institucional', url: 'https://www.insulfilm.com.br/institucional' },
  ],
  '/parceiro': [
    { name: 'INSULFILM™', url: 'https://www.insulfilm.com.br' },
    { name: 'Seja Parceiro', url: 'https://www.insulfilm.com.br/parceiro' },
  ],
  '/aviso-legal': [
    { name: 'INSULFILM™', url: 'https://www.insulfilm.com.br' },
    { name: 'Aviso Legal', url: 'https://www.insulfilm.com.br/aviso-legal' },
  ],
};

function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── INJETOR ───────────────────────────────────────────────────────────────
function injectSchema(id: string, data: object) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

// ─── COMPONENTE ────────────────────────────────────────────────────────────
const SchemaOrg = () => {
  const location = useLocation();

  useEffect(() => {
    // Organization — em todas as páginas
    injectSchema('schema-organization', organizationSchema);

    // LocalBusiness dos 4 centros autorizados — em todas as páginas
    localBusinessSchemas.forEach((schema, i) => {
      injectSchema(`schema-store-${i}`, schema);
    });

    // Breadcrumb — dinâmico por rota
    const breadcrumbItems = breadcrumbMap[location.pathname];
    if (breadcrumbItems) {
      injectSchema('schema-breadcrumb', buildBreadcrumb(breadcrumbItems));
    }

    // FAQ — específico por página
    if (location.pathname === '/') {
      injectSchema('schema-faq', homeFaqSchema);
    } else if (location.pathname === '/automotivo') {
      injectSchema('schema-faq', automotiveFaqSchema);
    } else {
      const existing = document.getElementById('schema-faq');
      if (existing) existing.remove();
    }
  }, [location.pathname]);

  return null;
};

export default SchemaOrg;
export { STORES };
