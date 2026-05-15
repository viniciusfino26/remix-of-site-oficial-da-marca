# Plano — RD Station: Debug, Form Frota e Verificação SPA

## 1. Painel de Debug RD (overlay flutuante)

**Novo arquivo:** `src/components/RDDebugOverlay.tsx`
- Overlay fixo no canto inferior direito (acima do FloatingCTA), só aparece quando ativo.
- **Ativação:** `?rd_debug=1` na URL **ou** `localStorage.rd_debug = "1"`. Persiste em localStorage ao usar o query param.
- UI: cabeçalho com título "RD Debug", contador, botão minimizar, botão limpar, botão fechar (`rd_debug=0`).
- Lista rolável (últimos 100 eventos) com:
  - Tag colorida: `PAGEVIEW` (azul) / `CONVERSION` (verde) / `BLOCKED` (cinza, quando sem consentimento) / `ERROR` (vermelho).
  - Timestamp (HH:MM:SS), URL/identifier, payload em JSON colapsável.
- Estado de status no topo: consentimento LGPD ✅/❌, script RD carregado ✅/❌ (`!!window.RdIntegration`), token presente.
- Estilo dark, glassmorphism, Tailwind tokens semânticos (sem cores hard-coded).

**Bus de eventos em `src/lib/rdstation.ts`:**
- Adicionar `EventTarget` interno `rdDebugBus` exportado.
- Em `trackPageView` e `trackConversion`: emitir evento (`type`, `payload`, `blocked`, `error`) **antes/depois** da chamada — incluindo o caso `!hasConsent()` (emite `blocked`) e o `catch` (emite `error`).
- Não loga dados sensíveis no console por padrão (segurança); apenas no overlay quando ativado pelo dev.

**Mount global:** importar `<RDDebugOverlay />` em `src/App.tsx` ao lado de `<RDStationTracking />`.

## 2. Formulário B2B inline na /frota

**Editar:** `src/pages/Frota.tsx`
- Substituir a seção CTA final (atualmente só botão WhatsApp) por uma seção dual: formulário à esquerda + CTA WhatsApp secundário à direita. Copy da seção atual (`fleet.ctaTitle`, `fleet.ctaSubtitle`, `fleet.ctaButton`) **mantida intacta** (memory: copy is immutable).
- Adicionar novas chaves de copy nos 3 locales (`pt.json`, `en.json`, `es.json`) sob `fleet.form.*`: title, subtitle, nameLabel, emailLabel, phoneLabel, submit, success, error, consent.

**Novo componente:** `src/components/FrotaLeadForm.tsx`
- Campos: Nome, E-mail, Telefone (+ checkbox de consentimento LGPD obrigatório).
- Validação **Zod** (segurança):
  - `name`: trim, 2–100 chars.
  - `email`: trim, e-mail válido, max 255.
  - `phone`: trim, regex BR `^\+?[\d\s\(\)\-]{10,20}$`.
  - `consent`: `true`.
- React Hook Form + zodResolver, mensagens de erro inline.
- Sanitização: `sanitizeText()` de `src/lib/sanitize.ts` antes de enviar.
- Submit: `trackConversion('frota-lead-b2b', { name, email, phone, source: 'pagina-frota', cf_segmento: 'B2B-Frotas' })`.
- Estado loading/success/error; ao sucesso, esconde form e mostra mensagem de agradecimento + link WhatsApp.
- Anti-spam leve: honeypot + intervalo mínimo (3s) entre montagem e submit.
- Estilo: glassmorphism, `bg-carbon-gradient`, parallax leve (memory: estética visual).

## 3. Verificação de pageviews SPA

**Auditoria (sem mudanças se OK):**
- `RDStationTracking` já está montado em `App.tsx:187` dentro do `BrowserRouter` e dispara `trackPageView()` em todo `useLocation` change → cobre `/automotivo/solar` e todas as rotas SPA.
- O painel de debug servirá como prova visual: navegar entre rotas e ver `PAGEVIEW` aparecendo.
- Conferir manualmente em modo debug: `/`, `/automotivo`, `/automotivo/solar`, `/arquitetonico`, `/frota`, e uma PDP (ex: `/pt/arquitetonico/solar/naturale`).
- **Único ajuste possível:** se houver rota com `<Helmet>` que atualiza `document.title` tarde, o delay de 300ms já cobre. Caso o overlay revele alguma rota sem disparo, ajusto o efeito (ex.: aumentar delay ou ouvir `helmet`).

## Detalhes técnicos

### Bus de debug (`rdstation.ts`)
```ts
export const rdDebugBus = new EventTarget();
type RDDebugEvent = {
  kind: 'pageview' | 'conversion';
  status: 'sent' | 'blocked' | 'error';
  identifier?: string;
  payload?: Record<string, unknown>;
  url?: string;
  title?: string;
  error?: string;
  ts: number;
};
const emit = (e: RDDebugEvent) =>
  rdDebugBus.dispatchEvent(new CustomEvent('rd', { detail: e }));
```

### Ativação do overlay
```ts
const isDebug = () => {
  if (typeof window === 'undefined') return false;
  const qs = new URLSearchParams(window.location.search);
  if (qs.get('rd_debug') === '1') localStorage.setItem('rd_debug', '1');
  if (qs.get('rd_debug') === '0') localStorage.removeItem('rd_debug');
  return localStorage.getItem('rd_debug') === '1';
};
```

### Segurança
- Sem `dangerouslySetInnerHTML`.
- E-mail/telefone sanitizados e validados antes de `trackConversion`.
- Overlay nunca exposto em produção a menos que o usuário ative explicitamente — não há leak de PII para usuários comuns.
- Sem logs de PII no console.

## Arquivos afetados

| Ação | Arquivo |
|---|---|
| Novo | `src/components/RDDebugOverlay.tsx` |
| Novo | `src/components/FrotaLeadForm.tsx` |
| Editar | `src/lib/rdstation.ts` (bus + emits) |
| Editar | `src/App.tsx` (mount overlay) |
| Editar | `src/pages/Frota.tsx` (inserir form na seção CTA) |
| Editar | `src/i18n/locales/{pt,en,es}.json` (chaves `fleet.form.*`) |

## Como testar
1. Abrir `/?rd_debug=1` → overlay aparece, status mostra consentimento.
2. Aceitar cookies → status muda para "script carregado".
3. Navegar entre rotas → eventos `PAGEVIEW` em tempo real.
4. Em `/frota`, preencher form e enviar → evento `CONVERSION frota-lead-b2b` com payload visível.
5. Conferir no painel do RD Station Marketing que a conversão chegou.
