

# Atualizar Footer — Links Reais e Estrutura Corrigida

## Resumo

Atualizar o `Footer.tsx` com links reais de redes sociais, reorganizar a estrutura de links, adicionar badge antipirataria e link Anti-Pirataria no bottom bar.

---

## Mudancas no Footer.tsx

### 1. Import — trocar Linkedin por MessageCircle
```typescript
// Antes:
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
// Depois:
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
```

### 2. Coluna Institucional — atualizar rotas
- `/quem-somos` — manter (Quem Somos)
- `/franquias` — manter (Franquias)
- `/carreiras` — manter (Carreiras)
- `/aviso-legal` — nova rota substituindo `/anti-pirataria` (Anti-Pirataria)

### 3. Coluna Linhas de Produto — simplificar
Remover links de `/antivandalismo13k`, `/skudoguard` e `/produtos` separados. Manter:
- `/automotivo` — Para Meu Carro
- `/residencial` — Para Minha Residencia
- `/produtos` — Produtos
- `/antivandalismo13k` — Antivandalismo 13K (usando `t('nav.antiVandalism')`)

### 4. Coluna Suporte — reorganizar ordem e adicionar "Seja Parceiro"
- `/lojas` — Localizador de Lojas (primeiro, com `Analytics.storeLocatorClick`)
- `/vendas` — Central de Vendas
- `/sac` — SAC
- `/parceiro` — Seja Parceiro (`t('nav.becomePartner')`)

### 5. Redes Sociais — URLs reais e trocar LinkedIn por WhatsApp
- Instagram: `https://www.instagram.com/insulfilmoriginal`
- Facebook: `https://www.facebook.com/insulfilmoriginal`
- YouTube: `https://www.youtube.com/INSULFILMMaximizado`
- WhatsApp: `https://wa.me/5511976136911` (com `Analytics.whatsappClick` ao inves de `ctaClick`)

### 6. Adicionar badge antipirataria
Abaixo dos icones sociais, antes do logo, inserir um bloco com texto:
- "INSULFILM (TM) e marca registrada."
- "Registrada no INPI desde 1987. Uso indevido e crime — Lei n. 9.279/96."
- Link "Saiba mais" apontando para `/aviso-legal`

### 7. Bottom Bar — adicionar link Anti-Pirataria
Adicionar terceiro link `/aviso-legal` com texto "Anti-Pirataria" ao lado de Privacidade e Termos.

---

## Arquivos

### Editado:
- `src/components/Footer.tsx`

### Sem alteracoes:
- Nenhum arquivo novo necessario
- Todas as translation keys ja existem (`nav.becomePartner`, `nav.antiVandalism`, `nav.storeLocator`, etc.)

