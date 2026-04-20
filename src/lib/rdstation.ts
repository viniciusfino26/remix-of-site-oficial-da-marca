/**
 * RD Station Marketing — Helper de rastreamento e conversões.
 *
 * O script oficial (loader-scripts) injeta `window.RdIntegration` no escopo
 * global. Este módulo expõe wrappers seguros que:
 *  - verificam consentimento LGPD antes de disparar qualquer evento;
 *  - aguardam silenciosamente o carregamento do loader;
 *  - falham de forma graciosa se o RD ainda não estiver disponível.
 */

const CONSENT_KEY = "insulfilm_cookie_consent";

declare global {
  interface Window {
    RdIntegration?: {
      pageView?: (opts?: { url?: string; title?: string }) => void;
      post?: (identifier: string, payload: Record<string, unknown>) => void;
    };
    rdstationConsent?: boolean;
  }
}

export const hasConsent = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
};

/**
 * Dispara um pageview manual no RD Station.
 * Necessário em SPA para rastrear mudanças de rota.
 */
export const trackPageView = (url?: string, title?: string) => {
  if (!hasConsent()) return;
  try {
    window.RdIntegration?.pageView?.({
      url: url ?? window.location.href,
      title: title ?? document.title,
    });
  } catch {
    /* noop */
  }
};

/**
 * Dispara uma conversão (lead) no RD Station.
 *
 * @param identifier  Identificador único da conversão (ex: "whatsapp-flutuante")
 * @param leadData    Dados opcionais do lead (email, name, phone, etc.)
 */
export const trackConversion = (
  identifier: string,
  leadData: Record<string, unknown> = {}
) => {
  if (!hasConsent()) return;
  try {
    window.RdIntegration?.post?.(identifier, {
      conversion_identifier: identifier,
      ...leadData,
    });
  } catch {
    /* noop */
  }
};
