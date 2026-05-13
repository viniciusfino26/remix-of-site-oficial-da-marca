// src/pages/products/Orizzonte70.tsx
//
// Página unificada da Orizzonte70 (residencial + empresarial em uma única URL).
// Premium tier · exemplar #2 do padrão dual-público.
//
// URL canônica: /pt/arquitetonico/solar/orizzonte70

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/orizzonte70';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const Orizzonte70Page = () => {
  const data = getProductDualPublic('orizzonte70');

  if (!data) {
    return null;
  }

  return (
    <ProductPDP
      data={data}
      canonicalUrl={CANONICAL}
      categoryUrl={CATEGORY_URL}
      categoryLabel={CATEGORY_LABEL}
    />
  );
};

export default Orizzonte70Page;
