// src/pages/products/PhantomGloss.tsx
//
// Página unificada da PhantomGloss (residencial + empresarial em uma única URL).
// Premium tier · categoria SPF (Surface Protection Film) · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/spf/phantom-gloss

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/spf/phantom-gloss';
const CATEGORY_URL = '/pt/arquitetonico/spf';
const CATEGORY_LABEL = 'SPF';

const PhantomGlossPage = () => {
  const data = getProductDualPublic('phantom-gloss');
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

export default PhantomGlossPage;
