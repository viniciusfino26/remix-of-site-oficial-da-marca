# Redesign da Pagina Automotivo — Layout Alternado com Tabs

## Objetivo

Redesenhar a pagina `/automotivo` (`src/pages/Automotivo.tsx`) seguindo a imagem de referencia: hero com "Peliculas Premium / Sinta a diferenca", texto introdutorio, barra de tabs para navegacao entre produtos solares, secoes alternadas (texto esquerda/direita) para cada produto, secao de beneficios com icones, e CTA final. Manter todos os textos existentes (chaves i18n) e animacoes (parallax, fadeIn, stagger).

## Nova Estrutura da Pagina

1. **Hero** — mantido com parallax, glow e textos existentes. Ajustar subtitulo visual para "Peliculas Premium / Sinta a diferenca" conforme referencia
2. **Texto introdutorio** — secao com titulo "Peliculas de Protecao Solar para Vidros Automotivos", subtitulo italico e paragrafo descritivo usando textos existentes (`heroTitle`, `heroSubtitle`, `productsSubtitle`)
3. **CTA "ENCONTRE O SEU INSULFILM IDEAL"** — botao/banner centralizado com destaque
4. **Tabs de navegacao** — barra com tabs: Dark, Eclipse, Vip, Matrix, Transparente, Polariz Ultra (filtrando apenas produtos de controle solar)
5. **Secoes alternadas de produto** — cada produto solar exibido em secao full-width com layout alternado:
  - Secoes impares: texto a esquerda, imagem placeholder a direita
  - Secoes pares: imagem placeholder a esquerda, texto a direita
  - Cada secao mostra: nome INSULFILM + produto, tecnologia/serie, descricao completa, visual, botao "EXPLORE"
6. **Beneficios** — secao com 5 icones: Maxima Reducao de Calor, Excelente Visibilidade, Privacidade e Seguranca, Celulares e Eletronicos, Design Sofisticado + badge "PACOTE COMPLETO DE GARANTIAS / CERTIFICADO INDIVIDUAL"
7. **CTA Final** — banner laranja "Exija as peliculas originais INSULFILM! Sofisticacao e Protecao Solar de verdade para voce e sua familia."
8. **Diferenciais** — mantido identico (tabs com parallax)
9. **FAQ** — mantido identico

## Detalhes Tecnicos

### Arquivo principal editado

- `src/pages/Automotivo.tsx` — reescrita da secao de produtos

### Estrutura dos produtos solares (apenas controle solar)

Filtrar os produtos para exibir apenas os de controle solar na secao principal:

- Dark (Pigmentada, Clear, ate 39%)
- Eclipse (Carbono, HD, ate 49%)
- VIP (Carbono Extra, HD, ate 58%)
- Matrix (Nano Ceramica, Ultra Definition, ate 72%) — usando chave `ltMatrix`
- Transparente — Matrix  também, mas quase incolor
- Polariz Ultra (Nano Ceramica, Ultra Definition, ate 72%)

Os produtos de seguranca (Antivandal, SkudoGuard, SkudoUltra, SkinSafe8K, Phantom PPF) permanecem no array mas nao aparecem na secao principal de tabs — ficam apenas nos cards existentes ou links.

### Layout alternado de cada produto

```text
Secao full-width com min-h-[50vh]
  - Grid 2 colunas (md:grid-cols-2)
  - Coluna texto: nome, specs (tecnologia/serie), descricao, visual, botao
  - Coluna imagem: bg-carbon-gradient com placeholder
  - Alternancia: odd = texto-esquerda, even = texto-direita
  - Animacao: fadeInLeft para texto, fadeInRight para imagem (e vice-versa)
  - whileInView com stagger
```

### Secao de beneficios

```text
5 icones em grid (grid-cols-5 no desktop, grid-cols-2 no mobile)
  - Sun: Maxima Reducao de Calor, Raios UV e IR
  - Eye: Excelente Visibilidade Interna
  - Shield: Privacidade e Seguranca Visual
  - Smartphone: Celulares e Eletronicos
  - Award: Design Sofisticado
  - Badge central: "PACOTE COMPLETO DE GARANTIAS / CERTIFICADO INDIVIDUAL"
```

### CTA final

```text
Banner full-width bg-accent (laranja)
  - Texto: "Exija as peliculas originais INSULFILM!"
  - Subtitulo: "Sofisticacao e Protecao Solar de verdade para voce e sua familia."
  - Animacao fadeInUp
```

### Animacoes mantidas

- Hero: parallax com useScroll/useTransform/useSpring, glow pulse
- Produtos: fadeInLeft/fadeInRight alternados, stagger, whileInView
- Tabs: mantidos com animacao de entrada
- Diferenciais: parallax diagonal texture, glass cards
- FAQ: fadeInLeft/fadeInRight alternados no accordion

### Imports adicionais

- `Eye, Smartphone` do lucide-react (para secao de beneficios)

### Nenhuma dependencia nova necessaria

### Chaves i18n existentes utilizadas

- Todas as chaves `automotivePage.*` permanecem
- Textos da secao de beneficios e CTA final serao inline (portugues direto) pois nao existem chaves i18n para eles — consistente com o padrao ja usado nos banners da home