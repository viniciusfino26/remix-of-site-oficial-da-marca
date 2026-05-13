// src/pages/products/Ultravioletti90.tsx
//
// Página unificada da Ultravioletti90 (residencial + empresarial em uma única URL).
// Premium tier · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/solar/ultravioletti90

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/ultravioletti90';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const Ultravioletti90Page = () => {
  const data = getProductDualPublic('ultravioletti90');
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

export default Ultravioletti90Page;
