# Roadmap Completo — Site Institucional INSULFILM™

## Estado Atual

**Paginas prontas (3):**

- `/` — Home (hero, produtos, why, simuladores)
- `/quem-somos` — Institucional com timeline
- `/automotivo` — Catalogo automotivo com FAQ

**Paginas referenciadas no menu/footer mas que NAO existem (11):**

- `/franquias` — Franquias
- `/carreiras` — Carreiras
- `/anti-pirataria` — Anti-Pirataria
- `/frota` — Para Minha Frota
- `/residencial` — Para Minha Residencia
- `/empresarial` — Para Minha Empresa
- `/vendas` — Central de Vendas
- `/sac` — SAC
- `/lojas` — Localizador de Lojas
- `/parceiro` — Seja Parceiro
- `/produtos` — Catalogo Geral de Produtos
- `/privacidade` — Politica de Privacidade
- `/termos` — Termos de Uso

**Funcionalidades globais que faltam:**

- Botao flutuante WhatsApp
- Formulario de contato/orcamento
- SEO (meta tags, Open Graph), GEO, webMCP
- Links reais de redes sociais no footer

---

## Ordem de Prioridade

### FASE 1 — Funcionalidades Essenciais (Impacto Imediato)

**1.1 Botao Flutuante WhatsApp**

- Componente global fixo no canto inferior direito
- Icone WhatsApp com animacao pulse
- Link direto para conversa com mensagem pre-formatada
- Visivel em todas as paginas

**1.2 Pagina `/residencial` — Peliculas Arquitetonicas**

- Mesmo padrao visual do `/automotivo`
- Produtos: Petrolio, Metallico, Specchiato, Naturale, Orizzonte
- Secao de diferenciais para residencias
- FAQ especifico para peliculas arquitetonicas

**1.3 Pagina `/parceiro` — Seja Parceiro / Franquias**

- Hero com proposta de valor para franqueados/revendedores
- Formulario de cadastro (nome, email, telefone, cidade, tipo de interesse)
- Beneficios de ser parceiro (cards com icones)
- CTA WhatsApp como alternativa ao formulario

**1.4 SEO e Meta Tags**

- Componente `<SEO>` reutilizavel com react-helmet ou tags manuais
- Title, description, Open Graph para cada pagina
- Favicon e manifest corretos

---

### FASE 2 — Paginas de Suporte ao Cliente

**2.1 Pagina `/lojas` — Localizador de Lojas**

- Lista de lojas autorizadas por estado/cidade
- Filtro por regiao
- Card de cada loja com endereco, telefone, WhatsApp
- Futuro: integracao com mapa (Google Maps embed)

**2.2 Pagina `/vendas` — Central de Vendas**

- Formulario de orcamento (tipo de servico, veiculo/imovel, cidade)
- Informacoes de contato comercial
- CTA WhatsApp

**2.3 Pagina `/sac` — SAC / Atendimento**

- FAQ geral (diferente do FAQ de produto)
- Formulario de contato para reclamacoes/duvidas
- Canais de atendimento (telefone, email, WhatsApp)
- Verificador de autenticidade (campo para codigo do certificado)

---

### FASE 3 — Paginas Institucionais Complementares

**3.1 Pagina `/franquias` — Modelo de Franquia**

- Explicacao do modelo de franquia INSULFILM™
- Numeros e dados da rede
- Depoimentos de franqueados
- CTA para formulario de interesse (redireciona para `/parceiro`)

**3.2 Pagina `/anti-pirataria` — Anti-Pirataria**

- Como identificar pelicula original vs falsa
- Sistema de verificacao de autenticidade (QR Code)
- Riscos de usar pelicula pirata
- Canal de denuncia

**3.3 Pagina `/carreiras` — Trabalhe Conosco**

- Cultura e valores da marca
- Vagas abertas (lista simples, editavel)
- Formulario de candidatura (nome, email, area, curriculo)

---

### FASE 4 — Paginas Secundarias e Complementos

**4.1 Pagina `/empresarial` — Peliculas para Empresas**

- Mesmo padrao do `/residencial` mas focado em B2B
- Cases de sucesso (predios, frotas corporativas)
- Formulario de orcamento corporativo

**4.2 Pagina `/frota` — Peliculas para Frotas**

- Beneficios para gestores de frota
- Tabela de produtos recomendados por tipo de veiculo
- Formulario de orcamento para frota
- CTA para contato comercial

**4.3 Pagina `/produtos` — Catalogo Geral**

- Pagina que unifica automotivo + residencial + empresarial
- Filtros por categoria (automotivo, arquitetonico, seguranca, PPF)
- Grid com todos os produtos
- Links para paginas especificas

**4.4 Paginas Legais**

- `/privacidade` — Politica de Privacidade (texto legal)
- `/termos` — Termos de Uso (texto legal)

---

### FASE 5 — Funcionalidades Avancadas (Futuro)

**5.1 Simuladores Interativos**

- Visualizador automotivo (selecionar carro + pelicula)
- Simulador VLT (comparar niveis de escurecimento)
- Demo arquitetonico (antes/depois em ambientes)

**5.2 Blog / Conteudo**

- Pagina de artigos sobre peliculas, legislacao, dicas
- SEO para trafico organico

**5.3 Area do Franqueado (restrita)**

- Login para franqueados
- Materiais de marketing para download
- Tabela de precos

---

## Resumo por Fase


| Fase | Paginas/Funcionalidades              | Estimativa          |
| ---- | ------------------------------------ | ------------------- |
| 1    | WhatsApp, Residencial, Parceiro, SEO | 4 entregas          |
| 2    | Lojas, Vendas, SAC                   | 3 entregas          |
| 3    | Franquias, Anti-Pirataria, Carreiras | 3 entregas          |
| 4    | Empresarial, Frota, Catalogo, Legais | 4 entregas          |
| 5    | Simuladores, Blog, Area Restrita     | 3 entregas (futuro) |


---

## Detalhes Tecnicos

### Padrao para cada nova pagina:

- Criar `src/pages/NomeDaPagina.tsx`
- Adicionar rota em `src/App.tsx`
- Adicionar traducoes em `pt.json`, `en.json`, `es.json`
- Seguir padrao visual existente (hero azul escuro, cards premium, animacoes framer-motion)

### Componentes reutilizaveis a criar:

- `src/components/WhatsAppButton.tsx` — Botao flutuante global
- `src/components/ContactForm.tsx` — Formulario reutilizavel (orcamento, contato, candidatura)
- `src/components/ProductCard.tsx` — Card de produto extraido do Automotivo para reutilizar
- `src/components/PageHero.tsx` — Hero padrao reutilizavel para todas as paginas
- `src/components/SEO.tsx` — Meta tags reutilizaveis

### Arquivos editados em cada fase:

- `src/App.tsx` — Novas rotas
- `src/i18n/locales/*.json` — Traducoes
- `src/components/Header.tsx` — Ajustes de navegacao se necessario