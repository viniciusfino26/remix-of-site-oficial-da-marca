// src/pages/products/ReflessoDArgento.tsx
//
// Página unificada da ReflessoDArgento (residencial + empresarial em uma única URL).
// Performance tier · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/solar/reflesso-d-argento

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/reflesso-d-argento';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const ReflessoDArgentoPage = () => {
  const data = getProductDualPublic('reflesso-d-argento');
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

export default ReflessoDArgentoPage;
