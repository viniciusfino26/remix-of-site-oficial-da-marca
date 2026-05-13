// src/pages/products/MetallicoArgento.tsx
//
// Página unificada da MetallicoArgento (residencial + empresarial em uma única URL).
// Premium tier · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/solar/metallico-argento

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/solar/metallico-argento';
const CATEGORY_URL = '/pt/arquitetonico/solar';
const CATEGORY_LABEL = 'Solar';

const MetallicoArgentoPage = () => {
  const data = getProductDualPublic('metallico-argento');
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

export default MetallicoArgentoPage;
