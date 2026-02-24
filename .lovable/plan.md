

# Adicionar Pagina de Politica de Privacidade

## Resumo

Criar uma pagina dedicada de Politica de Privacidade acessivel em `/privacidade`, seguindo o padrao visual e arquitetural das demais paginas do site (como QuemSomos). A pagina tera conteudo juridico padrao para um site brasileiro de comercio de servicos e produtos, com informacoes sobre coleta de dados, cookies (Google Analytics, GTM, Clarity), direitos do titular (LGPD) e contato.

## Arquivos

### Novo:
- `src/pages/Privacidade.tsx` — Pagina completa com:
  - Hero section com gradiente carbon (padrao do site)
  - Secoes: Introducao, Dados Coletados, Cookies e Rastreamento (GA4, GTM, Clarity), Finalidade do Tratamento, Compartilhamento, Direitos do Titular (LGPD), Retencao, Seguranca, Contato, Atualizacoes
  - Animacoes com framer-motion (fadeInUp) seguindo o padrao existente
  - Uso de `useTranslation` para textos

### Editados:
- `src/App.tsx` — Adicionar rota `/privacidade` com import da nova pagina
- `src/i18n/locales/pt.json` — Adicionar chaves `privacy.*` com todo o conteudo juridico em portugues
- `src/i18n/locales/en.json` — Adicionar chaves `privacy.*` com versao em ingles
- `src/i18n/locales/es.json` — Adicionar chaves `privacy.*` com versao em espanhol

## Detalhes Tecnicos

- Componente funcional React com `useTranslation()` para i18n
- Animacoes `framer-motion` com `motion.div`, `initial="hidden"`, `whileInView="visible"` (padrao QuemSomos)
- Classes CSS do projeto: `bg-carbon-gradient`, `text-primary-foreground`, `separator-accent`, `container mx-auto`
- Scroll to top ao montar a pagina com `useEffect`
- Conteudo LGPD: mencao explicita a Lei 13.709/2018, direitos de acesso, correcao, exclusao, portabilidade e revogacao de consentimento
- Mencao aos servicos de terceiros: Google Analytics 4, Google Tag Manager, Microsoft Clarity
- Link do footer `/privacidade` ja existe e apontara para a nova rota

