// src/pages/products/Petrolio.tsx
//
// Página unificada da Petrolio (residencial + empresarial em uma única URL).
// Performance tier · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/solar/petrolio

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/petrolio';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const PetrolioPage = () => {
  const data = getProductDualPublic('petrolio');
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

export default PetrolioPage;
