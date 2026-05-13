// src/pages/products/PhantomMatte.tsx
//
// Página unificada da PhantomMatte (residencial + empresarial em uma única URL).
// Premium tier · categoria SPF (Surface Protection Film) · padrão dual-público.
//
// URL canônica: /pt/arquitetonico/spf/phantom-matte

import ProductPDP from '@/components/ProductPDP';
import { getProductDualPublic } from '@/data/pdpDualPublic';

const CANONICAL = 'https://insulfilm.com.br/pt/arquitetonico/spf/phantom-matte';
const CATEGORY_URL = '/pt/arquitetonico/spf';
const CATEGORY_LABEL = 'SPF';

const PhantomMattePage = () => {
  const data = getProductDualPublic('phantom-matte');
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

export default PhantomMattePage;
