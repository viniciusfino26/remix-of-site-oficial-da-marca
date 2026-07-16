// src/lib/pdpProductImages.ts
// Registro de imagens de produtos, aplicado ao manifesto PDP_PRODUCTS após o carregamento.
// Separado de pdpProducts.ts para permitir que o manifesto seja consumido
// em ambientes sem Vite (ex: bundling para Edge Functions/Deno) sem arrastar
// os assets binários.

import autoAntivandalismo13K from '@/assets/auto-antivandalismo13k.jpg';
import autoSkinSafe8K from '@/assets/auto-skinsafe8k.jpg';
import autoSkudoGuard from '@/assets/auto-skudoguard.jpg';
import autoSkudoUltra from '@/assets/auto-skudoultra.jpg';
import { PDP_PRODUCTS } from './pdpProducts';

const SITE = 'https://www.insulfilm.com.br';
const ABS = (u: string) => (u.startsWith('http') ? u : `${SITE}${u}`);

const IMAGES: Record<string, string> = {
  antivandalismo13k: autoAntivandalismo13K,
  skinsafe8k: autoSkinSafe8K,
  skudoguard: autoSkudoGuard,
  'skudo-ultra': autoSkudoUltra,
};

// Aplica imagens ao manifesto (efeito colateral no import).
for (const [slug, url] of Object.entries(IMAGES)) {
  const p = PDP_PRODUCTS[slug];
  if (p) p.image = ABS(url);
}

export {};
