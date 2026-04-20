

## Plano: Implementar RD Station Marketing em todo o site

Vou integrar o **RD Station Marketing** globalmente para rastreamento de leads, com integração futura ao CRM BIZU via lead scoring/conversão nativa do RD.

### Como funciona o RD Station Marketing

O RD oferece dois mecanismos principais:

1. **Script de rastreamento (RD Station Tracking)** — JS global injetado em todas as páginas. Rastreia visitas, sessões, origem (UTM), comportamento e identifica leads quando preenchem formulários.
2. **Conversões** — quando um lead converte (formulário, WhatsApp click, CTA), os dados vão para o RD, que então pode enviar automaticamente para o **CRM BIZU** via integração nativa ou Zapier/webhook.

### O que preciso de você

Para ativar, preciso do **Token público do RD Station** (também chamado de "RD Station UA" ou "Public Token"). Você encontra em:

> RD Station Marketing → Configurações → Integrações → API → "Token Público"

É um código tipo: `a1b2c3d4e5f6...` (32 caracteres).

### Arquitetura da implementação

**1. Componente global `RDStationTracking.tsx`** (novo)
- Injeta o script oficial `https://d335luupugsy2.cloudfront.net/js/loader-scripts/{TOKEN}-loader.js` no `<head>`
- Carregado via `react-helmet-async` (já temos `HelmetProvider` no `main.tsx`)
- Rastreia automaticamente pageviews em SPA via `useLocation` (dispara `RdIntegration.pageView()` a cada mudança de rota)

**2. Integração no `App.tsx`**
- Adicionar `<RDStationTracking />` dentro do `<BrowserRouter>` (ao lado do `<ScrollToTop />`)

**3. Helper `src/lib/rdstation.ts`** (novo)
- Função `trackConversion(identifier, leadData)` para disparar conversões manuais
- Função `trackEvent(name, payload)` para eventos customizados
- Tipagens TypeScript para `window.RdIntegration`

**4. Pontos de conversão automática** (sem alterar copy)
- **WhatsAppButton** → dispara conversão `whatsapp-click` ao clicar
- **FloatingCTA** → dispara conversão `cta-flutuante-click`
- Demais formulários (Vendas, SAC, Parceiro) podem ser instrumentados depois

### Integração com CRM BIZU

O RD Station possui **integração nativa com diversos CRMs** via marketplace. Para o **BIZU**:

- **Opção A (recomendada):** Configurar dentro do RD Station: *Integrações → Marketplace → buscar "BIZU"*. Se disponível, conecta direto.
- **Opção B (universal):** Usar **Zapier/Make** com gatilho "Novo Lead no RD Station" → ação "Criar Lead no BIZU".
- **Opção C (custom):** Webhook do RD Station apontando para um Edge Function (Lovable Cloud) que chama a API do BIZU. Requer credenciais da API BIZU.

> Esta etapa é configurada **no painel do RD Station**, não no código do site. O site apenas alimenta o RD com leads — o RD se encarrega de empurrar para o CRM.

### Privacidade (LGPD)

- O script será carregado **somente após consentimento de cookies** (já temos `CookieBanner.tsx`)
- Verificar consentimento via `localStorage` antes de injetar o script
- Documentar uso do RD Station em `/privacidade`

### Arquivos afetados

- `src/components/RDStationTracking.tsx` (novo)
- `src/lib/rdstation.ts` (novo, helper + tipos)
- `src/App.tsx` (adicionar componente global)
- `src/components/WhatsAppButton.tsx` (instrumentação de conversão)
- `src/components/FloatingCTA.tsx` (instrumentação de conversão)
- `src/pages/Privacidade.tsx` (atualizar política — opcional)

### Próximo passo

Após sua aprovação, vou solicitar o **Token Público do RD Station** via `add_secret` (armazenado de forma segura) e finalizar a integração. Sobre o BIZU, depois te oriento na configuração dentro do painel do RD.

