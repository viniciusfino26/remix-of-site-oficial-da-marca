

# Ajustes na Home: Video sem faixas pretas + Destaque de Logo/Slogan

## Problema 1: Video com faixas pretas

O video atualmente usa `aspect-video` (16:9) com iframe escalado a 110%. As faixas pretas vem do ratio do video do YouTube nao preencher o container. Os ProductBanners usam `min-h-[60vh]` com `object-cover` — o video precisa seguir o mesmo padrao.

**Solucao:** Trocar o container do video de `aspect-video` para o mesmo layout dos ProductBanners — `min-h-[60vh]` com overflow hidden e iframe escalado para cobrir 100% do espaco (scale ~130% para garantir cobertura total sem barras).

### Alteracao em `src/pages/Index.tsx` (linhas 153-169):

```tsx
{/* Hero Video */}
<section className="relative min-h-[60vh] overflow-hidden my-2">
  <iframe
    src="https://www.youtube.com/embed/C6sEdLl1R90?..."
    title="INSULFILM™"
    allow="..."
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] pointer-events-none"
    loading="lazy"
  />
  <div className="absolute inset-0 z-10 cursor-default" />
</section>
```

Remove-se: `py-12`, `max-w-7xl`, `rounded-2xl`, `border`, `aspect-video` — tudo que criava um "quadro" ao redor do video. Agora fica full-bleed como os banners.

## Problema 2: Destaque do Logo + Slogan + Website Oficial

A imagem de referencia (image-4) mostra o logo INSULFILM com o slogan "A marca das peliculas" e "Website Oficial" sobre fundo navy. Isso substituira o banner fino atual (linha 78-85) por uma secao mais proeminente.

**Solucao:** Substituir o `<motion.div>` do banner por uma secao centrada com:
- Logo INSULFILM (importado de `src/assets/logo-light.png` que ja existe)
- Slogan "A marca das peliculas" em texto leve
- "Website Oficial" abaixo

### Alteracao em `src/pages/Index.tsx` (linhas 77-85):

```tsx
{/* Banner Website Oficial */}
<motion.div
  className="bg-primary text-primary-foreground text-center py-6 flex flex-col items-center gap-2"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <img src={logoLight} alt="INSULFILM™" className="h-12 w-auto" />
  <p className="text-sm text-primary-foreground/70 font-light">A marca das peliculas</p>
  <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary-foreground/50">Website Oficial</p>
</motion.div>
```

Adicionar import do logo no topo: `import logoLight from '@/assets/logo-light.png';`

**Nota sobre o logo:** O arquivo `src/assets/logo-light.png` ja existe no projeto. Se a qualidade nao for suficiente, sera necessario o usuario fornecer uma versao em alta resolucao (idealmente SVG ou PNG 2x).

## Arquivos Alterados

| Arquivo | Alteracao |
|---------|-----------|
| `src/pages/Index.tsx` | 1) Import logo-light. 2) Banner topo: logo + slogan + "Website Oficial". 3) Video: full-bleed min-h-[60vh] sem moldura, iframe 130% |

## O que NAO muda
- ProductBanner.tsx (ja esta correto)
- Header, Footer, rotas
- Demais secoes da home

