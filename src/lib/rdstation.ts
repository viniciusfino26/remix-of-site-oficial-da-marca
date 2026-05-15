/**
 * RD Station Marketing — Helper de rastreamento e conversões.
 *
 * O script oficial (loader-scripts) injeta `window.RdIntegration` no escopo
 * global. Este módulo expõe wrappers seguros que:
 *  - verificam consentimento LGPD antes de disparar qualquer evento;
 *  - aguardam silenciosamente o carregamento do loader;
 *  - falham de forma graciosa se o RD ainda não estiver disponível;
 *  - emitem eventos no `rdDebugBus` para o RDDebugOverlay (modo dev).
 */

const CONSENT_KEY = "insulfilm_cookie_consent";
export const CONSENT_CHANGE_EVENT = "insulfilm:consent-change";

declare global {
  interface Window {
    RdIntegration?: {
      pageView?: (opts?: { url?: string; title?: string }) => void;
      post?: (identifier: string, payload: Record<string, unknown>) => void;
    };
    rdstationConsent?: boolean;
  }
}

export type RDDebugEvent = {
  kind: "pageview" | "conversion";
  status: "sent" | "blocked" | "error";
  identifier?: string;
  payload?: Record<string, unknown>;
  url?: string;
  title?: string;
  error?: string;
  ts: number;
};

// Bus de eventos para o painel de debug (não polui console em produção).
export const rdDebugBus: EventTarget =
  typeof window !== "undefined" ? new EventTarget() : (null as unknown as EventTarget);

const emit = (event: RDDebugEvent) => {
  if (typeof window === "undefined" || !rdDebugBus) return;
  try {
    rdDebugBus.dispatchEvent(new CustomEvent("rd", { detail: event }));
  } catch {
    /* noop */
  }
};

export const hasConsent = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
};

export const setTrackingConsent = (value: "accepted" | "rejected") => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, value);

  try {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }));
  } catch {
    /* noop */
  }
};

export const isRdLoaded = (): boolean =>
  typeof window !== "undefined" && !!window.RdIntegration;

/**
 * Dispara um pageview manual no RD Station.
 * Necessário em SPA para rastrear mudanças de rota.
 */
export const trackPageView = (url?: string, title?: string) => {
  const finalUrl = url ?? (typeof window !== "undefined" ? window.location.href : undefined);
  const finalTitle = title ?? (typeof document !== "undefined" ? document.title : undefined);

  if (!hasConsent()) {
    emit({
      kind: "pageview",
      status: "blocked",
      url: finalUrl,
      title: finalTitle,
      ts: Date.now(),
    });
    return;
  }

  try {
    window.RdIntegration?.pageView?.({ url: finalUrl, title: finalTitle });
    emit({
      kind: "pageview",
      status: "sent",
      url: finalUrl,
      title: finalTitle,
      ts: Date.now(),
    });
  } catch (err) {
    emit({
      kind: "pageview",
      status: "error",
      url: finalUrl,
      title: finalTitle,
      error: err instanceof Error ? err.message : String(err),
      ts: Date.now(),
    });
  }
};

/**
 * Dispara uma conversão (lead) no RD Station.
 *
 * @param identifier  Identificador único da conversão (ex: "frota-lead-b2b")
 * @param leadData    Dados opcionais do lead (email, name, phone, etc.)
 */
export const trackConversion = (
  identifier: string,
  leadData: Record<string, unknown> = {}
) => {
  const payload = { conversion_identifier: identifier, ...leadData };

  if (!hasConsent()) {
    emit({
      kind: "conversion",
      status: "blocked",
      identifier,
      payload,
      ts: Date.now(),
    });
    return;
  }

  try {
    window.RdIntegration?.post?.(identifier, payload);
    emit({
      kind: "conversion",
      status: "sent",
      identifier,
      payload,
      ts: Date.now(),
    });
  } catch (err) {
    emit({
      kind: "conversion",
      status: "error",
      identifier,
      payload,
      error: err instanceof Error ? err.message : String(err),
      ts: Date.now(),
    });
  }
};
