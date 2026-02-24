

# Ajustes no Footer: Analytics + Conteudo Atualizado

## Resumo

Duas frentes de trabalho no Footer:
1. **Adicionar tracking de Analytics** em todos os pontos de interacao (CTA "Seja Parceiro", links de navegacao, icones de redes sociais)
2. **Atualizar links e conteudo** para refletir as paginas que realmente existem no site, remover links mortos, e alinhar a estrutura com o Header

---

## 1. Tracking de Analytics

Importar `{ Analytics }` do componente `Analytics.tsx` (que sera criado junto, conforme plano anterior aprovado) e adicionar eventos nos seguintes pontos:

| Elemento | Evento |
|----------|--------|
| Botao "Quero Ser Parceiro" (CTA banner) | `Analytics.ctaClick('Quero Ser Parceiro', 'footer')` |
| Links institucionais (Quem Somos, etc.) | `Analytics.ctaClick('link_label', 'footer')` |
| Links de produto (Automotivo, Residencial) | `Analytics.ctaClick('link_label', 'footer')` |
| Links de suporte (Vendas, SAC, Lojas) | `Analytics.ctaClick('link_label', 'footer')` |
| Icones de redes sociais (Instagram, Facebook, LinkedIn, YouTube) | `Analytics.ctaClick('social_instagram', 'footer')` (etc.) |

---

## 2. Atualizacao de Links e Conteudo

### Links com paginas existentes (manter):
- `/quem-somos` — Quem Somos
- `/automotivo` — Para Meu Carro
- `/residencial` — Para Minha Residencia

### Links sem pagina (ficam apontando para rotas futuras, mantidos como estao):
- `/franquias`, `/carreiras`, `/anti-pirataria` — Institucional
- `/vendas`, `/sac`, `/lojas` — Suporte
- `/parceiro` — CTA Banner
- `/privacidade`, `/termos` — Bottom bar
- `/produtos` — Linhas de produto

### Adicionar links para paginas novas existentes:
- `/antivandalismo13k` — Antivandalismo 13K (na coluna Linhas de Produto)
- `/skudoguard` — SkudoGuard (na coluna Linhas de Produto)

### Redes sociais — atualizar URLs placeholder:
- Manter `href="#"` por enquanto (sem URLs reais), mas com tracking de clique

---

## Arquivos

### Editados:
- `src/components/Footer.tsx` — adicionar import do Analytics, eventos de tracking em todos os cliques, adicionar links para Antivandalismo 13K e SkudoGuard na coluna "Linhas de Produto"

### Criados (do plano anterior, dependencia):
- `src/components/Analytics.tsx` — componente de tracking (sera criado junto, conforme plano ja aprovado)
- `src/App.tsx` — adicionar `<AnalyticsProvider />` (do plano anterior)

---

## Detalhes tecnicos

### Footer.tsx — mudancas:

1. Adicionar import:
```typescript
import { Analytics } from '@/components/Analytics';
```

2. No botao CTA "Quero Ser Parceiro":
```typescript
onClick={() => Analytics.ctaClick('Quero Ser Parceiro', 'footer')}
```

3. Nos links de navegacao, adicionar onClick com tracking (sem interferir na navegacao do Link):
```typescript
<Link to="/quem-somos" onClick={() => Analytics.ctaClick('Quem Somos', 'footer')} ...>
```

4. Nos icones de redes sociais:
```typescript
<a href="#" onClick={() => Analytics.ctaClick('social_instagram', 'footer')} ...>
```

5. Na coluna "Linhas de Produto", adicionar 2 novos itens:
```typescript
<li><Link to="/antivandalismo13k" ...>Antivandalismo 13K</Link></li>
<li><Link to="/skudoguard" ...>SkudoGuard</Link></li>
```

