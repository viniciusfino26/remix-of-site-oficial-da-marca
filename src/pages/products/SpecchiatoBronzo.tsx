// src/pages/products/SpecchiatoBronzo.tsx
//
// Página unificada da SpecchiatoBronzo (residencial + empresarial em uma única URL).
// Premium tier · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/solar/specchiato-bronzo

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/specchiato-bronzo';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const SpecchiatoBronzoPage = () => {
  const data = getProductDualPublic('specchiato-bronzo');
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

export default SpecchiatoBronzoPage;
