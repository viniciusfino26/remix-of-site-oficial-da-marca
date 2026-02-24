

# Reestruturacao Completa do Site Conforme Novo Sitemap

## Resumo

Reestruturar a navegacao, rotas e criar todas as paginas novas conforme o sitemap oficial, mantendo 100% do conteudo existente. Alem disso, corrigir as chaves de traducao faltantes no pt.json.

---

## Fase 1 — Header e Navegacao

### Arquivo: `src/components/Header.tsx`

Atualizar o mega-menu para refletir a nova estrutura:

**Marca** (manter icon Shield):
- Quem Somos / Nosso Proposito → /quem-somos
- Franquias → /franquias
- Trabalhe Conosco → /carreiras
- Autenticidade e Anti-pirataria → /anti-pirataria

**Divisao Autos** (manter icon Car):
- Para meu carro → /automotivo
- Para minha frota → /frota
- PPF — Protecao de Pintura → /ppf

**Divisao Arquitetonica** (manter icon Building2):
- Para minha residencia → /residencial
- Para minha empresa → /empresarial

**Atendimento** (manter icon Headphones):
- Central de Vendas → /vendas
- SAC → /sac
- FAQ → /faq
- Garantia → /garantia

**CTA "Seja Parceiro"** → /parceiro (manter botao existente)

Remover do mega-menu: links diretos para Antivandalismo, SkudoGuard e a proposta de teste (esses produtos ficam acessiveis via /automotivo como cards com link).

Adicionar chaves nav novas nos 3 idiomas: `nav.ppf`, `nav.faq`, `nav.warranty`, `nav.fleet` (renomear labels conforme sitemap).

---

## Fase 2 — Rotas (App.tsx)

### Arquivo: `src/App.tsx`

Adicionar imports e rotas para todas as paginas novas + ajustar redirect de /quem-somos:

**Rotas mantidas (sem alteracao):**
- `/` → Index
- `/automotivo` → Automotivo
- `/antivandalismo13k` → Antivandalismo13K
- `/antivandalismo13k/teste_proposta` → Antivandalismo13KProposta
- `/skudoguard` → SkudoGuard
- `/skinsafe8k` → SkinSafe8K
- `/skudo-ultra` → SkudoUltra
- `/residencial` → Residencial
- `/lojas` → Lojas

**Rota ajustada:**
- `/quem-somos` → QuemSomos (rota principal, nao mais redirect)
- `/institucional` → redirect para `/quem-somos` (inverter o redirect atual)

**Rotas novas (11 paginas):**
- `/franquias` → Franquias
- `/carreiras` → Carreiras
- `/anti-pirataria` → AntiPirataria
- `/frota` → Frota
- `/ppf` → PPF
- `/empresarial` → Empresarial
- `/vendas` → Vendas
- `/sac` → SAC
- `/faq` → FAQ
- `/garantia` → Garantia
- `/parceiro` → Parceiro

---

## Fase 3 — Paginas Novas

Todas as paginas seguem o design system existente: Framer Motion (fadeInUp, stagger), shadcn/ui, Tailwind, dark theme, useTranslation.

### 3.1 Pagina Parceiro (`src/pages/Parceiro.tsx`) — PLACEHOLDER
- Hero com bg-carbon-gradient, titulo "Seja um Parceiro Oficial INSULFILM", subtitulo
- Duas secoes: "Autos" (Concessionarias, Aplicador Oficial) e "Arq" (Revendedor, Aplicador Oficial)
- Cada subsecao com card glass-card + descricao + botao WhatsApp "Fale Conosco"
- Badge "Em breve — formulario de cadastro"

### 3.2 Pagina Franquias (`src/pages/Franquias.tsx`)
- Hero sobre o modelo de franquias INSULFILM
- Secao de beneficios (4 cards): Marca Reconhecida, Suporte Completo, Territorio Exclusivo, Retorno Rapido
- CTA com WhatsApp

### 3.3 Pagina Carreiras (`src/pages/Carreiras.tsx`)
- Hero "Trabalhe Conosco"
- Secao valores da empresa (3-4 cards)
- CTA "Envie seu curriculo" com WhatsApp/email

### 3.4 Pagina AntiPirataria (`src/pages/AntiPirataria.tsx`)
- Hero "Autenticidade e Anti-pirataria"
- Como verificar autenticidade (QR Code, certificado)
- Alerta sobre produtos piratas
- CTA denuncia

### 3.5 Pagina Frota (`src/pages/Frota.tsx`)
- Hero "Para Minha Frota"
- Beneficios para frotas (conforto dos passageiros, protecao solar, reducao de custo AC)
- CTA atendimento especializado via WhatsApp

### 3.6 Pagina PPF (`src/pages/PPF.tsx`)
- Hero "Protecao de Pintura — Phantom"
- Cards: Phantom 6mil e Phantom 8mil (specs, descricao)
- Secao "Ferramenta Interativa" com placeholder "Em breve"
- CTA WhatsApp

### 3.7 Pagina Empresarial (`src/pages/Empresarial.tsx`)
- Hero "Para Minha Empresa"
- Beneficios para empresas (eficiencia energetica, privacidade, seguranca, decorativo)
- Subcategorias de peliculas arquitetonicas: Controle Solar, Seguranca (ISSF4000/7000), Decorativas (Jateado, Whiteout, Blackout)
- CTA WhatsApp

### 3.8 Pagina Vendas (`src/pages/Vendas.tsx`)
- Hero "Central de Vendas"
- Cards com canais de contato (WhatsApp, telefone, email)
- Link para /lojas

### 3.9 Pagina SAC (`src/pages/SAC.tsx`)
- Hero "Atendimento ao Cliente"
- Cards com opcoes de contato
- Link para FAQ e Garantia

### 3.10 Pagina FAQ (`src/pages/FAQ.tsx`)
- Hero "Perguntas Frequentes"
- Accordion com perguntas organizadas por categoria (Automotivo, Arquitetonico, Garantia, Geral)
- Reaproveitar FAQs ja existentes no automotivePage + novas

### 3.11 Pagina Garantia (`src/pages/Garantia.tsx`)
- Hero "Garantia INSULFILM"
- Tabela/cards com tipos de garantia por produto
- Como acionar a garantia
- CTA WhatsApp

---

## Fase 4 — Correcao de Chaves de Traducao (pt.json)

### Arquivo: `src/i18n/locales/pt.json`

**4.1 Chaves da pagina Institucional:**
- Adicionar `about.statYears`: "Anos de Mercado"
- Adicionar `about.statStores`: "Lojas em SP"
- Adicionar `about.statPioneering`: "Pioneirismos"
- Adicionar `about.timeline.e1986` (copiar conteudo de e1988)

**4.2 Chaves da pagina Automotivo:**
- Adicionar aliases: `automotivePage.dark` (copiar de `ltDark`), `automotivePage.eclipse` (de `ltEclipse`), `automotivePage.vip` (de `ltVip`), `automotivePage.polaris` (de `ltPolariz`)
- Cada alias com sub-chaves: name, category, serie, heat, tech, type, desc, warranty

**4.3 Chaves novas para todas as 11 paginas** — adicionar nos 3 idiomas (pt, en, es):
- `franquiasPage.*`, `carreirasPage.*`, `antiPiracyPage.*`, `frotaPage.*`, `ppfPage.*`, `empresarialPage.*`, `vendasPage.*`, `sacPage.*`, `faqPage.*`, `garantiaPage.*`, `parceiroPage.*`

**4.4 Chaves de navegacao novas:**
- `nav.ppf`: "PPF" / "PPF" / "PPF"
- `nav.faq`: "FAQ" / "FAQ" / "FAQ"
- `nav.warranty`: ja existe como `nav.warranty`
- `nav.fleet`: usar `nav.forMyFleet` existente

---

## Fase 5 — Footer

### Arquivo: `src/components/Footer.tsx`

Atualizar links do footer para refletir a nova estrutura de rotas (ex: adicionar FAQ, Garantia, remover links obsoletos).

---

## Detalhes Tecnicos

### Arquivos novos (11):
- `src/pages/Parceiro.tsx`
- `src/pages/Franquias.tsx`
- `src/pages/Carreiras.tsx`
- `src/pages/AntiPirataria.tsx`
- `src/pages/Frota.tsx`
- `src/pages/PPF.tsx`
- `src/pages/Empresarial.tsx`
- `src/pages/Vendas.tsx`
- `src/pages/SAC.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/Garantia.tsx`

### Arquivos editados (5):
- `src/App.tsx` — imports + 11 rotas novas + ajuste redirect quem-somos/institucional
- `src/components/Header.tsx` — mega-menu reestruturado conforme sitemap
- `src/i18n/locales/pt.json` — correcao de chaves faltantes + chaves das 11 paginas novas
- `src/i18n/locales/en.json` — mesmas chaves traduzidas
- `src/i18n/locales/es.json` — mesmas chaves traduzidas
- `src/components/Footer.tsx` — links atualizados

### Paginas existentes preservadas (sem alteracao de conteudo):
Index, QuemSomos, Automotivo, Antivandalismo13K, Antivandalismo13KProposta, SkudoGuard, SkinSafe8K, SkudoUltra, Residencial, Lojas

### Padrao de cada pagina nova:
- Hero com bg-carbon-gradient, parallax, Badge, titulo, subtitulo, separator-accent
- Secoes com cards glass-card ou cards shadcn/ui
- CTA final com botao WhatsApp verde (MessageCircle icon)
- Animacoes: fadeInUp, fadeInLeft, fadeInRight, scaleIn, stagger
- useTranslation() para todos os textos

### Ordem de implementacao sugerida:
1. Corrigir pt.json (chaves faltantes) — resolve erros atuais
2. Header + App.tsx — reestruturar navegacao
3. Paginas novas (em lotes de 3-4 por prompt)
4. Footer
5. Traducoes en.json e es.json

