// src/pages/products/Naturale.tsx
//
// Página unificada da Naturale (residencial + empresarial em uma única URL).
// Premium tier · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/solar/naturale

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/naturale';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const NaturalePage = () => {
  const data = getProductDualPublic('naturale');
  if (!data) return null;
  return (
    <ProductPDP
      data={data}
      canonicalUrl={CANONICAL}
      categoryUrl={CATEGORY_URL}
      categoryLabel={CATEGORY_LABEL}
    />
  );
};

export default NaturalePage;
