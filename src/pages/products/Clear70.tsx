// src/pages/products/Clear70.tsx
//
// Página unificada da Clear70 (residencial + empresarial em uma única URL).
// Substitui:
//   - src/pages/Clear70.tsx (legado /clear70 e /arquitetonico/solar/clear70)
//   - src/pages/arq/residencial/solar/Clear70.tsx
//   - src/pages/arq/comercial/solar/Clear70.tsx
//
// URL canônica: /pt/arquitetonico/solar/clear70

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/clear70';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const Clear70Page = () => {
  const data = getProductDualPublic('clear70');

  if (!data) {
    // Não deve acontecer, fallback defensivo
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

export default Clear70Page;
