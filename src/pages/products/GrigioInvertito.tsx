// src/pages/products/GrigioInvertito.tsx
//
// Página unificada da GrigioInvertito (residencial + empresarial em uma única URL).
// Performance tier · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/solar/grigio-invertito

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/grigio-invertito';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const GrigioInvertitoPage = () => {
  const data = getProductDualPublic('grigio-invertito');
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

export default GrigioInvertitoPage;
