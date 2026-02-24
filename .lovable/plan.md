
# Adicionar Conteudo Institucional na Pagina Quem Somos

## Resumo

Inserir 4 blocos de texto institucional no inicio da pagina `/quem-somos`, logo apos o hero e antes da timeline. Layout limpo e organizado com animacoes suaves seguindo o padrao da pagina.

---

## Nova Estrutura da Pagina

1. **HERO** (existente, sem alteracoes)
2. **NOVO: Secao Institucional** (4 blocos de texto)
   - Quem Somos
   - O que nos diferencia
   - Os produtos que oferecemos (com lista)
   - O que nos impulsiona diariamente
3. **Timeline** (existente, sem alteracoes)
4. **Nao e tudo igual** (existente, sem alteracoes)

---

## Layout Visual

- Fundo claro (`bg-background`) para contraste com o hero escuro
- Cada bloco com titulo em `font-extrabold` + separador accent
- Texto em `text-muted-foreground font-light leading-relaxed`
- Grid alternado: blocos 1 e 2 lado a lado (md:grid-cols-2), bloco 3 com lista estilizada, bloco 4 centralizado como statement final
- Animacoes `fadeInUp` com stagger, consistentes com o resto da pagina

---

## Detalhes Tecnicos

### Arquivo: `src/pages/QuemSomos.tsx`

Inserir nova `<section>` entre o fechamento do hero (linha ~203) e o inicio da timeline (linha ~205). A secao contera:

- Container com `max-w-5xl mx-auto`
- 4 subsecoes com `motion.div` usando as variantes `fadeInUp` e `stagger` ja existentes
- Lista de produtos com icones `CheckCircle` (ja importado no lucide-react)
- Separador accent entre cada bloco

### Arquivo: `src/i18n/locales/pt.json`

Adicionar chaves `about.intro.*` para os 4 blocos de texto (mantendo internacionalizacao). O conteudo em portugues sera exatamente o texto fornecido pelo usuario.

### Arquivos: `src/i18n/locales/en.json` e `src/i18n/locales/es.json`

Adicionar as mesmas chaves com traducoes equivalentes em ingles e espanhol.
