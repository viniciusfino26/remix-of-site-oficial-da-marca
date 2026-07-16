// src/lib/pdpProductImages.ts
// Mapeamento de imagens (assets Vite) por slug de produto.
// Separado de pdpProducts.ts para permitir que o manifesto de produtos seja
// consumido em ambientes sem Vite (ex: bundling para Edge Functions/Deno).

import autoAntivandalismo13K from '@/assets/auto-antivandalismo13k.jpg';
import autoSkinSafe8K from '@/assets/auto-skinsafe8k.jpg';
import autoSkudoGuard from '@/assets/auto-skudoguard.jpg';
import autoSkudoUltra from '@/assets/auto-skudoultra.jpg';

export const PDP_PRODUCT_IMAGES: Record<string, string> = {
  antivandalismo13k: autoAntivandalismo13K,
  skinsafe8k: autoSkinSafe8K,
  skudoguard: autoSkudoGuard,
  'skudo-ultra': autoSkudoUltra,
};
